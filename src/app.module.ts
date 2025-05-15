import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperatureController } from './sensor/temperature.controller';
import { TemperatureService } from './services/temperature.service';
import { HumidityService } from './services/humidity.service';
import { TippingsService } from './services/tippings.service';
import { PressureService } from './services/pressure.service';
import { VoltageService } from './services/voltage.service';
import { InfluxService } from './services/influx.service';
import { PressureController } from './sensor/pressure.controller';
import { HumidityController } from './sensor/humidity.controller';
import { TippingsController } from './sensor/tippings.controller';
import { VoltageController } from './sensor/voltage.controller';
import { ClientIDService } from './services/clientId.service';
import { ClientIDController } from './sensor/clientId.controller';


@Module({
  imports: [],
  controllers: [AppController, TemperatureController, PressureController, HumidityController, TippingsController, VoltageController, ClientIDController],
  providers: [AppService, TemperatureService, HumidityService, TippingsService, PressureService, VoltageService, ClientIDService, InfluxService],
})
export class AppModule {}
