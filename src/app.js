import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const numberOne = 25; 

  const numberTwo = 3; 

  function sum(a, b) {
    return a + b;
  }

  function multiply(a,b) {
    return a*b
  }

  const sumResult = sum(numberOne, numberTwo);

  console.log(sumResult)

  console.log(multiply(numberOne,numberTwo));

  function pow(base, exp) {
    return Math.pow(base, exp)
  }

  const resultPow = pow(numberOne, 2);

  const resultPowTwo = pow(numberTwo, 2);
  console.log(resultPow, resultPowTwo);

  const name = 'David';
  const lastName = 'Mora';
  const age = 33;

  function getFullName (name, lastName) {
    return name + ' ' + lastName
  }

  console.log(getFullName(name, lastName));
  function getFullData(name, lastName, age) {
    return 'El usuario es: ' + name + ' ' + lastName + ' y tiene ' + age + ' años';
  }

  console.log(getFullData(name, lastName, age))

  console.log(getFullName('Alejandro', 'Rodriguez').toUpperCase());

  function checkDriver(age, license) {
      if(age >= 18 && license === true) {
        return 'Puede conducir'
      }

      if(age >= 18) {
        return "Tienes que sacar el carnet de conducir"
      }

      return 'Comprate una bici'
  }

  console.log(checkDriver(19, true));
  console.log(checkDriver(21, false));
  console.log(checkDriver(12, false));


  const myArray = [1,2,3,4,5,6,7,8,9,10,11,12];

  console.log(myArray, 'myArray')
  console.log(myArray.length, 'myArray.length')
  console.log(myArray[0], 'myArray[0]');
  console.log(myArray[1], 'myArray[1]');
  console.log(myArray[2], 'myArray[2]');
  console.log(myArray[3], 'myArray[3]');
  console.log(myArray[4], 'myArray[4]');

  for(let i = 0; i < myArray.length; i++) {
    console.log('imprimiendo dentro del for')
    if(i === 4) {
      console.log(myArray[i], 'myArray en la posición ' + i);
    }

    if(myArray[i] % 2 !== 0) {
      console.log(myArray[i], 'myArray en la posición ' + i);
    }
  };

  const car = {
    brand: 'Mercedes',
    numberOfWhells: '4',
    numberOfDoors: 4,
    model: 'Clase C',
    year: 2019
  };

  const carTwo = {
    brand: 'Mercedes',
    numberOfWhells: '4',
    numberOfDoors: 3,
    model: 'AMG',
    year: 2021
  };

  const carThree = {
    brand: 'McLaren',
    numberOfWhells: '4',
    numberOfDoors: 0,
    model: 'El de lando',
    year: 2025
  };

  const carFour = {
    brand: 'Ferrari',
    numberOfWhells: '4',
    numberOfDoors: 0,
    model: 'El de Hamilton',
    year: 2025
  };

  const cars = [car, carTwo, carThree, carFour]

  console.log(car.model);
  console.log(car.year);

  console.log(cars, 'cars');

  for(let i = 0; i < cars.length; i++) {
    console.log('imprimiendo cars F1')
    if(cars[i].numberOfDoors === 0){
      console.log('Es un ' + cars[i].model + ' del año ' + cars[i].year);
    }
  };

};
