/**
 *  HTZ HAS PASSIVE EVENTS
 *
 * A utility for testing browser support for passive events
 *
 * @module htz-has-passive-events
 * @license MIT
 */

/**
 * Test if browser supports passive events for better scroll performance
 *
 * @return {Boolean}
 *
 * @private
 */
export default function hasPassiveEvents() {
  let supportsPassive = false;

  try {
    const opts = Object.defineProperty(
      {},
      'passive',
      {
        get() {
          supportsPassive = true;
        },
      }
    );

    window.addEventListener('test', null, opts);
  }
  catch (e) { return false; }

  return supportsPassive;
}

