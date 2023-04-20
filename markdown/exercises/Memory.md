# Memory Leaks


### Memory Leak #1 - Too many DOM nodes
```javascript
var x = [];
function grow() {
  x.push(new Array(1000000).join("x"));
}
```
<button id="grow">Grow</button>

### Memory Leak #2 - Detached DOM nodes
```javascript
function create() {
  var ul = document.createElement("ul");
  for (var i = 0; i < 1000; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);
  }
  detachedTree = ul;
}
```
<button id="create">Create 1k detached divs!</button>
