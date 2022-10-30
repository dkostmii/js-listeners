/**
 * This class represents a factory of events.
 * 
 * @class
 * @classdesc This class represents a factory of events.
 */
export class EventFactory {
  /**
   * Creates a new instance of {@link EventFactory}.
   */
  constructor() {
    /**
     * An array of listeners of type `'hello'`
     */
    this.helloListeners = [];
  }

  /**
   * Adds event listener to factory instance.
   * 
   * @param {'hello'} eventType The type of event to call {@link listener} after.
   * @param {() => void} listener The listener to call after event of type {@link eventType}.
   */
  addEventListener(eventType, listener) {
    switch (eventType) {
      case 'hello':
        console.log('Adding listener...');
        this.listeners.push(listener);
        console.log(this.listeners);
        break;

      default:
        throw new Error(`Unknown event type: ${eventType}`);
    }
  }

  /**
   * Removes event listener from factory instance.
   * 
   * Throws an error if there's no {@link listener} added with event type {@link eventType}.
   * 
   * @param {'hello'} eventType The type of event of previously added listener.
   * @param {() => void} listener The previously added listener.
   */
  removeEventListener(eventType, listener) {
    let targetArr = null;

    switch (eventType) {
      case 'hello':
        targetArr = this.listeners;
        break;

      default:
        throw new Error(`Unknown event type: ${eventType}`);
    }

    if (targetArr === null) {
      throw new Error('Unexpected error. Target listener array is not created.');
    }

    const idx = targetArr.indexOf(listener);

    console.log('Removing listener...');
    targetArr.splice(idx, 1);
    console.log(this.listeners);
  }

  /**
   * Creates an event with type {@link eventType}.
   * 
   * @param {'hello'} eventType The event type to create.
   */
  createEvent(eventType) {
    switch (eventType) {
      case 'hello':
        console.log('Firing event...');
        this.listeners.forEach(l => l());
        break;

      default:
        throw new Error(`Unknown event type: ${eventType}`);
    }
  }
}