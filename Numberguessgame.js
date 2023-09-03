let secretno = Math.floor(Math.random() * 10 + 1)
var score = 0
do {
  n = prompt("Enter number")
  if (n > secretno) {
    console.log("No is greater")
  }
  else if (n < secretno) {
    console.log("No is lesser")
  }
  else {
    console.log("You win")
  }
  score = score + 10
}

while (n != secretno)
console.log("Your score is ", 100 - score)

