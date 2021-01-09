import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { Event } from "./event.model";

@Injectable()
export class EventsService {
  private events: Event[] = [];

  getAllEvents(): Event[] {
    return this.events;
  }

  getEventById(id: string): Event {
    return this.events.find((event) => event.id === id);
  }

  removeEvent(id: string): void {
    this.events = this.events.filter((event) => event.id !== id);
  }

  updateEvent(updateEventDto: UpdateEventDto): Event {
    const { name, date, id } = updateEventDto;
    const eventIndex = this.events.findIndex((event) => event.id === id);
    this.events[eventIndex].name = name;
    this.events[eventIndex].date = date;
    return this.events[eventIndex];
  }

  createEvent(createEventDto: CreateEventDto): Event {
    const { name, date, userId } = createEventDto;

    const event: Event = {
      id: uuidv4(),
      name,
      date,
      userId,
    };
    this.events.push(event);
    return event;
  }
}
