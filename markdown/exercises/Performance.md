## Measuring real user performance

### First we had getTime

```javascript
const start = new Date().getTime();

for (let i = 0; i < 10000000; i++) {
  // Do nothing
}

const end = new Date().getTime();

console.log(end - start);
```
<button id="log1">Run</button>

### Then we got console.time

```javascript
console.time("doNothing");

for (let i = 0; i < 10000000; i++) {
  // Do nothing
}

console.timeEnd("doNothing");
```
<button id="log2">Run</button>

### Now we have performance mark and measure!

```javascript
performance.mark("Start");

for (let i = 0; i < 10000000; i++) {
  // Do nothing
}

performance.mark("End");

performance.measure("Chrome Devtools Sharing", "Start", "End");

const measures = performance.getEntriesByType("measure");

console.log(measures);
console.log(measures[0].duration);
```
<button id="log3">Run</button>

You can measure so many things using the [performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

```javascript
const resources = performance.getEntriesByType("resource");
const paints = performance.getEntriesByType("paint");
const navigations = performance.getEntriesByType("navigation");
```
<button id="log4">Run</button>