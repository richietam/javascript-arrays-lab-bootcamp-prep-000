var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten() {
  destructivelyAppendKitten = kittens.push("Ralph")
  return destructivelyAppendKitten
}

function destructivelyPrependKitten () {
  var kittens = ["Milo", "Otis", "Garfield"]
  destructivelyPrependKitten = kittens.unshift("Bob")
  return destructivelyPrependKitten
}
