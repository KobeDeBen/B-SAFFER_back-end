import { Injectable } from '@nestjs/common';
import { InfluxService } from './influx.service';

@Injectable()
export class HumidityService {
  constructor(private readonly influxService: InfluxService) {}

    async getHumidity(range: string): Promise<any[]> {
        const fluxQuery = `from(bucket:"B-SAFFER_data") 
                            |> range(start: ${range})
                            |> filter(fn: (r) => r._field == "humidity")`;
        const queryApi = this.influxService.getQueryApi();
        const results: any[] = [];
        return new Promise((resolve, reject) => {
          queryApi.queryRows(fluxQuery, {
            next(row, tableMeta) {
              const o = tableMeta.toObject(row);
              results.push(o);
              console.log(o)
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