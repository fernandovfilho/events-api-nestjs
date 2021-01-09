import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { Event } from "./event.model";
import { EventsService } from "./events.service";

@Controller("events")
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  getAllEvents(): Event[] {
    return this.eventsService.getAllEvents();
  }

  @Get("/:id")
  getEventById(@Param("id") id: string): Event {
    return this.eventsService.getEventById(id);
  }

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto): Event {
    return this.eventsService.createEvent(createEventDto);
  }

  @Patch("/:id")
  updateEvent(
    @Body() updateEventDto: UpdateEventDto,
    @Param("id") id: string
  ): Event {
    updateEventDto.id = id;
    return this.eventsService.updateEvent(updateEventDto);
  }

  @Delete("/:id")
  removeEvent(@Param("id") id: string): void {
    this.eventsService.removeEvent(id);
  }
}
