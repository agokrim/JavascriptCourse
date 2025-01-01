

const person = { 
 name: ["Bob", "Smith"],
 address: {
    street: "5 Avnue",
    city: "Rabat",
  },
age: 32,
bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};



//Dot notation
person.age;
person.bio();


//Bracket notation

person["age"];
person["name"]["first"];


//In the example below, the logProperty() function can use person[propertyName] to retrieve the value of the property named in propertyName.

const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32

//Setting object members

person.age = 45;
person["name"]["last"] = "Karim";

//Setting members doesn't just stop at updating the values of existing properties and methods; you can also create completely new members.

person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

person["eyes"];
person.farewell();
// "Bye everybody!"

//One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too

const myDataName = nameInput.value;
const myDataValue = nameValue.value;

person[myDataName] = myDataValue;

//To test this, try adding the following lines into your code, just below the closing curly brace of the person object:

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;


//Now try saving and refreshing, and entering the following into your text input:

person[myDataName] = myDataValue;
console.log(person.height);


//Introducing constructors



let bandInfo;

// Put your code here
bandInfo ={
name:"a",
nationality:"a",
genre: "a",
members:10,
formed: 2,
split: 1,
albums:[{name:"a",released:"B"}]
}

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
document.querySelector('#header').appendChild(para1);



// Log to console
console.log(bandInfo)




