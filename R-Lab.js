const csvString = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

// Step 1: Split the CSV string into rows
let rows = csvString.split('\n'); // Split into rows

// Step 2: Split each row into columns
let twoDimensionalArray = rows.map(row => row.split(',')); // Create a 2D array

// let objectKey =  csvString(row => row.split(" "))

// Part 3: Transforming Data
let headers = rows[0].split(',').map(header => header.toLowerCase());


let dataObjects = rows.slice(1).map(row => {
    let values = row.split(',');
    let obj = {};
    headers.forEach((header, index) => {
        obj[header] = values[index];
    });
    return obj;
});

// Step 4: Log the array of objects
dataObjects.pop();

dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
dataObjects.push(  { id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(dataObjects);