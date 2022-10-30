import { EventFactory } from "./event.js";

/**
 * This class represents a consumer of events, created by {@link EventFactory}.
 * 
 * {@link test}
 * 
 * @class
 * @classdesc This class represents a consumer of events, created by {@link EventFactory}.
 */
export class EventConsumer {
  /**
   * Creates a new instance of {@link EventConsumer}.
   * 
   * @param {EventFactory} eventFactory A event factory, where to attach the listener.
   */
  constructor(eventFactory) {
    if (!(eventFactory instanceof EventFactory)) {
      throw new Error('Expected EventFactory.');
    }

    this.eventFactory = eventFactory;

    this.hello = this.hello.bind(this);

    this.eventFactory.addEventListener('hello', this.hello);
  }

  /**
   * Prints `'Hello, World!'` message to the {@link console}.
   */
  printHelloWorld() {
    console.log('Hello, World!');
  }

  /**
   * The listener of `'hello'` event in {@link EventConsumer}.
   */
  hello() {
    this.printHelloWorld();

    this.eventFactory.removeEventListener('hello', this.hello);
  }
}