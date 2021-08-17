import {
  EventWithNamespace,
  EventHandler,
  EventHandlers,
  EventListeners,
  IEventEmitter,
} from './typing';
import { bindEvent, unbindEvent, triggerEvent } from './helper';

class EventEmitter<EventNames extends string = string> implements IEventEmitter<EventNames> {
  private listeners: EventListeners<EventNames> = {} as any;

  public on(event: EventWithNamespace | EventHandlers<EventNames>, handler?: EventHandler): void {
    bindEvent(this.listeners, event, handler);
  }

  public off(event?: EventWithNamespace, handler?: EventHandler): void {
    unbindEvent(this.listeners, event, handler);
  }

  public emit<PayloadType extends any = any>(
    event: EventWithNamespace,
    payload?: PayloadType,
  ): void {
    triggerEvent(this.listeners, event, payload);
  }
}

export default EventEmitter;
