## Curves

This mission introduces Points and Curves, as supported by the
[CURVES library](https://source-academy.github.io/source/CURVES). The
link takes you to a short tutorial.

A Curve is a unary function which takes a Number argument within the
unit interval `[0,1]` and returns a Point.
You can think of the Number argument as time,
and of the point returned by the curve as the position
of your pen on a 2-dimensional plane at the time indicated by the
argument. We represent the *type* of such Curve functions like this:

Curve := Number → Point

This means that Curves are functions that take a Number as
argument and return a Point. 

If `C` is a Curve, then the starting
point of the Curve is always `C(0)`, and the ending point is always
`C(1)`.

## Points

To work with Points, we need a *constructor*, `make_point`, which
constructs Points from their x and y coordinates, and _selectors_,
`x_of` and `y_of`, for retrieving the x and y coordinates of a
Point. Thus `x_of(make_point(n, m))` will return `n` and 
`y_of(make_point(n, m))` will return `m`.

We can describe the `make_point` function as follows:

`make_point` : (Number, Number) → Point

This means that `make_point` takes two Numbers as arguments and
returns a Point.

Similarly, we can say:

`x_of`, `y_of` : Point → Number

## Curve Examples

We define the Curve `unit_circle` as follows:

```
function unit_circle(t) {
    return make_point(math_cos(2 * math_PI * t),
                      math_sin(2 * math_PI * t));
}
```

The function

```
function unit_line_at(y) {
    return t =&gt; make_point(t, y);
}
```

takes a Number argument `y` and returns
a Curve that is a horizontal line starting at
`(0,y)` and ending at `(1,y)`. We can say:

`unit_line_at` : Number → (Number → Point)

and since a Curve is a function from Number to Point, we can
more concisely say:

`unit_line_at` : Number → Curve

The Curve

```
const unit_line = unit_line_at(0);
```

is then a horizontal line starting at `(0,0)` and ending at `(1,0)`.

`unit_line` : Number → Point

and (equivalently)

`unit_line` : Curve

## Drawers

In the previous section we introduced Curves, but to actually draw
them on the screen, you will need to create a *Drawing* using
*drawers* (functions that start with `draw_`).

Drawers are abstractions; you don't need to know the
details of their implementation, but you should know how to use them
in order to visualize and test your Curves.

In the Interpreter, evaluate the statement:

```
draw_connected(200)(unit_circle);
```

The function application `draw_connected(200)` returns a function
which when applied to a Curve returns a Drawing.
Thus, drawers have the type

`draw_*`: Number → (Curve → Drawing)

When the result of your program is a Drawing, the interpreter displays it in a
window in the REPL.
After evaluating the statement above, you will see a quarter circle in
the window. The shape drawn is a quarter circle and not the full
circle described by the Curve `unit_circle` because the window shows
the Drawing only between Points `(0,0)` and `(1,1)`,
while the Points of `unit_circle` lie between Points `(-1,-1)` and
`(1,1)`. The drawer `draw_connected_squeezed_to_window`
takes care of this by 'squeezing' (scaling and translating) the
Drawing to fit into the window. Thus, after
evaluating

```
draw_connected_squeezed_to_window(200)(unit_circle);
```

you will see a full circle.

The argument `200` of `draw_connected` determines the number of points
to draw. Since `1/200 = 0.005`, `unit_circle` will be called for 201
values `t = 0, 0.005, 0.01, 0.015, 0.02`, etc. until `t = 1`. The
Drawing will then join every two adjacent Points.
If you want a dotted Drawing without joining the Points,
use the drawer `draw_points_on`. After evaluating

```
draw_points_on(200)(unit_circle);
```

you will see a dotted Drawing of a quarter circle in the window.
Similar to `draw_connected_squeezed_to_window`, the function
`draw_points_squeezed_to_window`
scales and translates the dotted Drawing to fit into the window.

**Note**: Your program needs to evaluate to a Drawing for the interpreter
to display it. Thus, if your program is a sequence of statements, you
need to apply a drawer in the last statement of the sequence.

### In Summary

Here is the list of pre-defined functions for this Mission, as described
in the [CURVES library](https://source-academy.github.io/source/CURVES/index.html):

- Curve := Number → Point
- `make_point` : (Number, Number) → Point
- `x_of, y_of` : Point → Number
- `draw_points_on` : Number → (Curve → Drawing)
- `draw_connected`: Number → (Curve → Drawing)
- `draw_points_squeezed_to_window`: Number → (Curve → Drawing)
- `draw_connected_squeezed_to_window`: Number → (Curve → Drawing)

- `unit_circle` : Curve
- `unit_line`: Curve
- `unit_line_at` : Number → Curve

This mission has **three** tasks. Fill up your
answers on the template for submission and **save your work**.
