//contributors: Chad Dabney, Erick Walker, Sara Richardson, Chase Patrick
const sampleArray = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472,
];
//Assigning the main block that the katas will be put in
const parentElement = document.querySelector(".katas-list");

function createHeadingElements(string) {
  const kataHeading = document.createElement("h3");
  kataHeading.append(string);
  parentElement.append(kataHeading);
}

//kata 1
const kata1Heading = document.createElement("h3");
kata1Heading.append("KATA 1");
parentElement.append(kata1Heading);

const kata1List = document.createElement("ul");

for (let counter = 0; counter <= 20; counter += 1) {
  let liElement = document.createElement("li");
  parentElement.append(kata1List);
  kata1List.append(liElement);
  liElement.append(counter);
}

// 2.Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)

// 3.Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)

// 4.Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)

//5.Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)

// 6.Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)

//7. Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)

//8. Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)

// 9.Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)

// 10.Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)

// 11.Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)

// 12.Display all the even numbers contained in sampleArray. (244, 758, 450,…, 940, 472)

//13. Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)

//14. Display the square of each element in sampleArray. (219961, 570025, …, 222784)

// 15.Display the sum of all the numbers from 1 to 20.
createHeadingElements("KATA 15");
const kata15List = document.createElement("ul");

let total15 = 0;
for (let counter = 1; counter <= 20; counter += 1) {
  if (counter < 20) {
    total15 = total15 + counter;
  } else {
    total15 = total15 + counter;
    let liElement = document.createElement("li");
    parentElement.append(kata15List);
    kata15List.append(liElement);
    liElement.append(total15);
  }
}

// 16.Display the sum of all the elements in sampleArray.
createHeadingElements("KATA 16");
const kata16List = document.createElement("ul");

let total16 = 0;
for (let counter = 0; counter < sampleArray.length; counter += 1) {
  if (counter < sampleArray.length - 1) {
    total16 = total16 + sampleArray[counter];
  } else {
    total16 = total16 + sampleArray[counter];
    let liElement = document.createElement("li");
    parentElement.append(kata16List);
    kata16List.append(liElement);
    liElement.append(total16);
  }
}
// Display the smallest element in sampleArray.
createHeadingElements("KATA 17");
const min = Math.min(...sampleArray);

const kata17List = document.createElement("ul");
let liElement = document.createElement("li");
parentElement.append(kata17List);
kata17List.append(liElement);
liElement.append(min);

// Display the largest element in sampleArray.
