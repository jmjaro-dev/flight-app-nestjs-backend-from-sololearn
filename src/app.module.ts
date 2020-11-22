import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { FlightsController } from './flights/flights.controller';
import { FlightsModule } from './flights/flights.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flights } from './flights/flights.entity';
import { FlightsService } from './flights/flights.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'NULL',
      database: 'transportation',
      entities: [Flights],
      synchronize: true,
    }),
    FlightsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
