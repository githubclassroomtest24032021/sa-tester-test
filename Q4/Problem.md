Define a function `three_quarters` that takes a Point as argument
and returns a Curve that is a 3/4 circle around the Point, i.e.

`three_quarters`: Point → Curve

Only the bottom-right quadrant of the circle will have no
points. The radius of the circle is 1 and its centre is the the given Point.

Applying `draw_connected_squeezed_to_window(200)` to
`three_quarters` at some point, for example `make_point(0.5, 0.25)`, as in

```
draw_connected_squeezed_to_window(200)(three_quarters(make_point(0.5, 0.25)));
```
should lead to the following Drawing:

![Three_quarters_circle](https://i.imgur.com/r1A8msO.png)

**NOTE**: You can use the point that is passed as argument to `three_quarters` to be the starting point of the circle or its center. It is up to you.

Just make sure when you draw it using
`draw_connected_squeezed_to_window` we get the correct shape. Make use
of the trigonometric functions and mathematical constants from the
available math library. See [Source
§1](https://source-academy.github.io/source/source_1) for
details.
