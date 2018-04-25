const curry = fn => (...oldArgs) => {
  if (!oldArgs.includes(curry) && oldArgs.length === fn.length) {
    return fn(...oldArgs)
  }
  return (...newArgs) => {
    const joinArgs = []
    for(let i=0; i<fn.length; i++) {
      if (oldArgs[i] !== undefined && oldArgs[i] !== curry) {
        joinArgs.push(oldArgs[i])
      } else if (newArgs[0]) {
        joinArgs.push(newArgs[0])
        newArgs.shift()
      } else {
        joinArgs.push(curry)
      }
    }
    return curry(fn)(...joinArgs)
  }
}

module.exports = curry
