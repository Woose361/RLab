const csvString = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

// Part 1: Split the CSV string into rows
let rows = csvString.split('\n'); // Split into rows

// Part 2: Split each row into columns
let twoDimensionalArray = rows.map(row => row.split(',')); 

// Create a 2D array


// Part 3: Transforming Data
// For each object, we extract its properties and append them to csvContent in CSV format.

let headers = rows[0].split(',').map(header => header.toLowerCase());


let dataObjects = rows.slice(1).map(row => {
    let values = row.split(',');
    let obj = {};
    headers.forEach((header, index) => {
        obj[header] = values[index];
    });
    return obj;
});

// Part 4: Log the array of objects

dataObjects.pop();

dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
dataObjects.push(  { id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(dataObjects);



let totalAge = 0; for (let i = 0; i < dataObjects.length; i++) {
     totalAge += parseInt(dataObjects[i].age);
};
let averageAge = totalAge / dataObjects.length; 
console.log("Average Age:", averageAge);

// Part 5
// As a final task, transform the final set of data back into CSV format.
// There are a number of ways to do this; be creative!
// Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.


// This code uses the reduce function to iterate over the dataObjects array and build the CSV string in a csv file. 

// csv: This is the accumulator, which keeps accumulating the CSV string.

// obj: This is the current object in the iteration.

// csv +${obj.id},${obj.name},${obj.occupation},${obj.age}\n``: This concatenates the current object’s properties formatted as a CSV row to the accumulator string.

// 'ID,Name,Occupation,Age\n': This is the initial value for the accumulator, representing the header row of the CSV.

const csvContent = dataObjects.reduce((csv, obj) => 
    { return csv + `${obj.id},${obj.name},${obj.occupation},${obj.age}\n`; }, 'ID,Name,Occupation,Age\n');

console.log(csvContent);