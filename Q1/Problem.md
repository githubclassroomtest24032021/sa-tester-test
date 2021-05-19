Recall the definition of `unit_line_at`:

```
function unit_line_at(y){
    return t =&gt; make_point(t, y);
}
```

1. What is the type of `unit_line_at`?
**Hint:** As an example, the type of the `make_point` function is
`make_point` : (Number, Number) -&gt; Point

2. Define a function `vertical_line` which takes two arguments, a point and a length,
and returns a vertical line of the given length beginning at the given point.
Note that the line should be drawn upwards (i.e., towards the positive-y direction) from the point.

3. What is the type of `vertical_line`?

4. Using `draw_connected` and your function `vertical_line` with suitable arguments,
draw a vertical line in the drawing window which is centered horizontally and vertically and
has half the length of the sides of the drawing window.

**Remember**: For the Interpreter to display your Drawing, the last statement in your program
should evaluate to the Drawing.
