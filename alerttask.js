function displayMultiplicationTable(number) {
    var table = '';
    for (var i = 1; i <= 10; i++) {
      var result = number * i;
      table += number + ' x ' + i + ' = ' + result + '\n';
    }
    alert(table);
  }
  
  
  var fullName = prompt('Enter Your full name:');
  alert('Hi ' + fullName + '!');

  var inputNumber = prompt('Please enter a number from 1 to 10:');
  
  var number = parseInt(inputNumber);
  
  if (number >= 1 && number <= 10) {
    displayMultiplicationTable(number);
  } else {
    alert('Invalid input. Please enter a number from 1 to 10.');
  }

  var city = prompt("Which City are you from?");
  alert("Welcome to city of lights");

  var gender = prompt("What is your gender");
  if (gender === "male"){
    alert("Welcome Sir");
  } else if (gender === "female"){
    alert("Welcome Ma'am");
  }
  else {
    alert("invalid value");
  }

  var color = prompt("Choose a color from red, yellow and green");

  if (color === "red") {
    alert("Red means stop.");
  }
  else if (color === "yellow") {
    alert("Yellow means ready to go.");
  }
else if (color === "green") {
  alert("Green means go.")
}
else {
  alert("Invalid value");
}

// var name = prompt("Enter Your full name");
// alert("Hi " + name);

// var multiplication = prompt("Pleast enter number for its multiplication table from 1-10");
// var tableOf2 = '';
// var num = parseInt(multiplication);
// for (var i = 1; i <=10; i++){
//     var result = 2*i;
//     tableOf2 += "2 x " + i + '=' + result + '\n';
// }
// if (multiplication === 2) {
//     alert(tableOf2);
// }

// var tableOf3 = '';
// for (var i = 1; i <=10; i++){
//     var result = 3*i;
//     tableOf3 += "3 x " + i + '=' + result + '\n';}

// if (multiplication === 3){
//     alert(tableOf3);
// }