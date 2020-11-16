# leaflet-scalemarker
Enables scaling of the marker icons in Leaflet

Compatible with versions 0.7.* and 1.* of Leaflet. Doesn't work on IE < 9.

```bash
npm install leaflet-scalemarker
```

Usage
---

```js
L.marker([52.229833, 21.011723], {
    scalingVector: 1.5
}).addTo(map);
```

API
---

It simply extends the `L.Marker` class with two new options:

Option | Type | Default | Description  
-------|------|---------|------------
**`scalingVector`** | `Number` or `String` | 1 | Scaling vector as a ['scale'](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale) CSS rule.
**`scalingOrigin`** | `String` | `'center bottom'` | The scaling center, as a [`transform-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin) CSS rule.

and two new methods:

Method | Returns | Description
-------|---------|------------
**`setScalingVector(vector)`** | `this` | Sets the scaling vector value.
**`setScalingOrigin(origin)`** | `this` | Sets the scaling origin value.

The default `scalingOrigin` value will rotate around the bottom center point, corresponding to the "tip" of the marker for most commonly used icons. If your marker icon has no tip, or you want to rotate around its center, use `center center`.

Demo
---
http://tomi77.github.io/leaflet.scalemarker/example.html