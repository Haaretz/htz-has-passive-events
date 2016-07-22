# htz has passive events
A utility for testing browser support for passive events

Passive event listeners enable developers to opt-in to better scroll performance 
by eliminating the need for scrolling to block on touch and wheel event listeners. 
Developers can annotate touch and wheel listeners with `{passive: true}` to indicate 
that they will never invoke `preventDefault`:

```js
window.addEventListener('scroll', foo, {passive: true})
```

See [here](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)
for a more in depth explanation.


### Installation
```bash
jspm install htz-has-passive-events=github:haaretz/htz-has-passive-events
```

### Usage

As clearly seen in the video below, passive event listener can offer significant 
improvement of the scrolling UX:
<iframe width="100%" height="315" src="https://www.youtube.com/embed/NPM6172J22g" frameborder="0" allowfullscreen></iframe>

However, this is a relatively new feature, and some older browser don't yet support it.

Because older browsers will interpret any object in the 3rd argument as a `true` 
value for the `capture` argument, we must first test for support before using this API:

```js 
import hasPassiveEvents from 'htz-has-passive-events';

window.addEventListener(
  'scroll', 
  foo, 
  hasPassiveEvents() ? { passive: true } : false
);
```

The two event types that will benefit most from passive event listeners are
`scroll` and touch events (`touchstart`, `touchend`, `touchmove`), so make sure 
to optimize them when possible.

However, do remember that `preventDefault` simply has no effect inside of passive
event listeners, so if you _realy_ do need to prevent default on `scroll` or any 
of the touch events, use a regular listener.
