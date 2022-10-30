/**
 * This module implements example of {@link EventFactory.addEventListener()}
 * and {@link EventFactory.removeEventListener()} pattern.
 * 
 * @module JsListeners
 */

import { EventFactory } from './event.js';
import { EventConsumer } from './consumer.js';

const evtFactory = new EventFactory();
new EventConsumer(evtFactory);

evtFactory.createEvent('hello');
