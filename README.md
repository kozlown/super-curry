# super-curry [![Build Status](https://travis-ci.com/kozlown/super-curry.svg?branch=master)](https://travis-ci.com/kozlown/super-curry)
Optimized utility to currify any function.

## Examples

```js
import curry from 'super-curry'

const add = curry(
  (a, b, c) => a + b + c
)

// it can be called normally
console.info(add(2, 6, 3))
// 11

// with simple partial application
const add4 = add(4)
console.info(add4(5, 2))
// 11

// or with placeholder(s)
const add6 = add(4, curry, 2)
console.info(add6(5))
// 11
```
