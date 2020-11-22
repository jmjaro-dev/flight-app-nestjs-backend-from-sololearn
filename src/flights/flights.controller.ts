import { Controller, Get, Post, Param,  Body, Put, Delete, Patch } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightService: FlightsService) {}

  // GET ALL FLIGHTS
  @Get()
  findAll(): Promise<Flights[]> {
    return this.flightService.findAll();
  }

  // GET ALL ORIGIN CITIES
  @Get("/cities/origins")
  getOrigins(): Promise<String[]> {
    return this.flightService.getFlightOrigins();
  }

  // GET ALL DESTINATION CITIES
  @Get("/cities/destinations")
  getDestinations(): Promise<String[]> {
    return this.flightService.getFlightDestinations();
  }

  // GET SPECIFIC FLIGHT
  @Get("/:id")
  findOne(@Param() param): Promise<Flights[]> {
    return this.flightService.findOne(param.id);
  }

  // QUERY
  @Get("query/:orig/:dest")
  async query(@Param('orig') orig, @Param('dest') dest): Promise<any> {
    return this.flightService.query(orig,dest);
  }

  // CREATE A FLIGHT
  @Post()
  async create(@Body() flight: Flight): Promise<any>{
    return this.flightService.create(flight);
  }

  // UPDATE A FLIGHT
  @Post(":id/update")
  async update(@Param('id') id, @Body() flight: Flight): Promise<any> {
    flight.id = Number(id);
    return this.flightService.update(flight);
  }

  // DELETE A FLIGHT
  @Post(":id/delete")
  async delete(@Param('id') id): Promise<any> {
    return this.flightService.delete(id);
  }
}