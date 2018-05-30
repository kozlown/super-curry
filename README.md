# super-curry [![Build Status](https://travis-ci.com/kozlown/super-curry.svg?branch=master)](https://travis-ci.com/kozlown/super-curry)
Optimized utility to currify any function.

## Examples

See it in action [here](https://repl.it/@kozlown/super-curry)

```js
import curry from 'super-curry'

const linear = curry(
  (a, x, b) => a * x + b
)

// it can be called normally
console.info(linear(2, 6, 3))
// 2 * 6 + 3 = 15

// with simple partial application
const linearBy4 = linear(4)
console.info(linearBy4(5, 2))
// 4 * 5 + 2 = 22

// or with placeholder(s)
const linearBy4Plus2 = linear(4, curry, 2)
// linearBy4(curry, 2) works too
console.info(linearBy4Plus2(6))
// 4 * 6 + 2 = 26
```
