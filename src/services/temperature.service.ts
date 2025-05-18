import { Injectable } from '@nestjs/common';
import { InfluxDB, QueryApi } from '@influxdata/influxdb-client';

@Injectable()
export class TemperatureService {
  private readonly queryApi: QueryApi;

  constructor() {
    const url = "http://91.99.20.33:8086";
    const token = "kUEuXpTIIju3LmfLqSedvxodlSMRHfxB5VLQ415IUxfbhiznakFy6YuyuFM7b-Ny4LctQ8fYm9r3DIJk9xsBUQ==";
    const org = "B-SAFFER";
    const influxDB = new InfluxDB({ url, token });
    this.queryApi = influxDB.getQueryApi(org);
  }

  async getFieldData(field: string, start: string, stop?: string): Promise<any[]> {
    let rangeQuery = `|> range(start: ${start}`;
    if (stop) {
      rangeQuery += `, stop: ${stop}`;
    }
    rangeQuery += `)`;

    const fluxQuery = `from(bucket:"B-SAFFER_data") 
                        ${rangeQuery}
                        |> filter(fn: (r) => r._field == "${field}")`;

    const results: any[] = [];

    return new Promise((resolve, reject) => {
      this.queryApi.queryRows(fluxQuery, {
        next(row, tableMeta) {
          const o = tableMeta.toObject(row);

          // Tijd aanpassen met 2 uur (7200000 milliseconden)
          const adjustedTime = new Date(new Date(o._time).getTime() + 7200000).toISOString();
          o._time = adjustedTime;

          results.push(o);
          console.log(o);
        },
        error(error) {
          console.error('Query error:', error); 
          reject(error);
        },
        complete() {
          resolve(results);
        },
      });
    });
  }
}