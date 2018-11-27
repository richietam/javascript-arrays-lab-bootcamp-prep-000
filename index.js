var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten() {
  destructivelyAppendKitten = kittens.push("Ralph")
  return destructivelyAppendKitten
}

function destructivelyPrependKitten () {
  destructivelyPrependKitten = kittens.unshift("Bob")
  return destructivelyPrependKitten
}

function destructivelyRemoveLastKitten() {
  destructivelyRemoveLastKitten = kittens.pop()
  return destructivelyRemoveLastKitten
}

function destructivelyRemoveFirstKitten() {
  destructivelyRemoveFirstKitten = kittens.shift()
  return destructivelyRemoveFirstKitten
}
