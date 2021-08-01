let colors = ['red', 'blue', 'yellow', 'green', 'purple'];

// Regular for loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// While Loop
i = 0;
while (i < colors.length) {
  // console.log(colors[i]);
  i++;
}

//Do While Loop
// statement is always executed once before the condition is checked.
// it will run atleast once even if the condition is FALSE
i = 0;
do {
  // console.log(colors[i]);
  i++;
} while (i < colors.length);

console.log('//////////////////////////////////////////////////////');

// For Of creates a loop iterating over iterable objects
for (const element of colors) {
  console.log(element);
}

console.log('//////////////////////////////////////////////////////');
// The forEach() method calls a function once for each element in an array, in order.
colors.forEach(element => console.log(element));

console.log('//////////////////////////////////////////////////////');

// For in iterates through enumerable properties
const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
  console.log('The key of the object is: ' + key);
  console.log('and the value of the key is: ' + object[key]);
}

console.log('//////////////////////////////////////////////////////');

// Array methods

// Array.map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

console.log('//////////////////////////////////////////////////////');

// Nested for loops with the Matrix problem

let array = [
  [1, 2, '#'],
  ['#', 16, 32],
  [64, '#', 256],
  [512, 1024, '#'],
  [4096, '#', 16384]
];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
