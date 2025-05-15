import { Injectable } from '@nestjs/common';
import { InfluxDB, QueryApi } from '@influxdata/influxdb-client';

@Injectable()
export class InfluxService {
  private readonly queryApi: QueryApi;

  constructor() {
    const url = "http://91.99.20.33:8086";
    const token = "kUEuXpTIIju3LmfLqSedvxodlSMRHfxB5VLQ415IUxfbhiznakFy6YuyuFM7b-Ny4LctQ8fYm9r3DIJk9xsBUQ==";
    const org = "B-SAFFER";
    const influxDB = new InfluxDB({ url, token });
    this.queryApi = influxDB.getQueryApi(org);
  }

  getQueryApi(): QueryApi {
    return this.queryApi;
  }
}