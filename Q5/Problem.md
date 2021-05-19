Now that we have successfully created a 3/4 circle, define a function
`s_generator` that takes a Point as argument and returns a curve
creating an 'S' shape, i.e.

`s_generator`: Point → Curve

The given Point should be the centre of the 'S' shape.
Applying `draw_connected_squeezed_to_window(200)` to an
'S' shape as in

```
draw_connected_squeezed_to_window(200)(s_generator(make_point(0.0, 0.0)));
```
should lead to the following Drawing:

![s_generator](https://i.imgur.com/q2O4iwa.png)

**HINTS:** You can divide the problem into two halves and find a way
to join the them together. You'll need to draw the
'S' in a continuous manner so you don't have jagged edges when drawing
the connected version of the curve.
