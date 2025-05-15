import { Injectable } from '@nestjs/common';
import { InfluxService } from './influx.service';

@Injectable()
export class ClientIDService {
  constructor(private readonly influxService: InfluxService) {}

    async getclientID(): Promise<any[]> {
        const fluxQuery = `from(bucket:"B-SAFFER_data") 
                            |> range(start: -2h) 
                            |> filter(fn: (r) => r._field == "clientID")`;
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