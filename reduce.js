// The reduce function in JavaScript is a powerful array method that allows you to process all the elements of an array 
//and combine them into a single value. 

// callback: A function that is called on each element of the array. It takes four arguments:
    // 1- accumulator: The value that carries over from one iteration to the next.
    // 2- currentValue: The current element being processed.
    // 3- currentIndex (optional): The index of the current element.
    // 4- array (optional): The array being processed.
//initialValue: An optional value to initialize the accumulator. If not provided, the first element of the array is used as the initial value,
// and the iteration starts from the second element.

//How It Works
//The reduce function works by applying the callback function to each element in the array, passing along an updated accumulator. 
//At the end of the array, the reduce method returns the final value of the accumulator.


const numbers = [1, 2, 3, 4, 5];
const ob = {key1:1, key2:2, key3:3, key4:4, key5:5};

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


const obj = numbers.reduce((accumulator, currentValue) => {
  console.log(currentValue)
    accumulator['key' +currentValue] = currentValue
 
  return accumulator 

}, {});

console.log(obj); // Output: 15


const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const counts = items.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(counts); 
// Output: { apple: 3, banana: 2, orange: 1 }

