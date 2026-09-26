function greetStudent(name) {
  return "Hello " + name + "! Welcome to Day 5.";
}


function getEvenNumbers() {

  let result = "";

  for (let number = 1; number <= 10; number++) {

    if (number % 2 === 0) {
      result += number + " ";
    }

  }

  return result;
}


function countDown() {

  let number = 5;
  let result = "";

  while (number >= 1) {

    result += number + " ";

    number--;

  }

  return result;
}

/* */

function runProgram() {

  const studentName = "Daniel";

  const greeting = greetStudent(studentName);
  const evenNumbers = getEvenNumbers();
  const countdown = countDown();

  document.getElementById("result").textContent =
    greeting +
    " Even numbers: " +
    evenNumbers +
    " Countdown: " +
    countdown;
}