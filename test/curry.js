const test = require('tape')
const curry = require('../index')

const addAndDivide = (x, y, z) => (x + y) / z
const curried = curry(addAndDivide)

test('without placeholder', t => {
  t.test('f(4, 6, 2) = 5', q => {
    q.equal(curried(4, 6, 2), 5)
    q.end()
  })
  t.test('f(4, 6)(2) = 5', q => {
    q.equal(curried(4, 6)(2), 5)
    q.end()
  })
  t.test('f(4)(6, 2) = 5', q => {
    q.equal(curried(4)(6, 2), 5)
    q.end()
  })
  t.test('f(4)(6)(2) = 5', q => {
    q.equal(curried(4)(6)(2), 5)
    q.end()
  })
})
test('one placeholder', t => {
  t.test('f(4, curry, 2)(6) = 5', q => {
    q.equal(curried(4, curry, 2)(6), 5)
    q.end()
  })
  t.test('f(curry, 6, 2)(4) = 5', q => {
    q.equal(curried(curry, 6, 2)(4), 5)
    q.end()
  })
})
test('two placeholders', t => {
  t.test('f(curry, curry, 2)(4, 6) = 5', q => {
    q.equal(curried(curry, curry, 2)(4, 6), 5)
    q.end()
  })
  t.test('f(curry, curry, 2)(4, 6) = 5', q => {
    q.equal(curried(curry, curry, 2)(4)(6), 5)
    q.end()
  })
})
