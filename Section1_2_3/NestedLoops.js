// Inefficient Code due to use of unnecessary nested loops
const data = ["Udemy","JavaScript","Performance"];
  let output = [];
  
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i] === data[j]) {
        output.push(data[i]);
      }
    }
  }

// Efficient Code with use of Set.
const data_with_set = ["Udemy", "JavaScript", "Performance"];
let output_with_set = [];

// Using a Set to store unique values
const dataSet = new Set(data);
// Converting the Set back to an array
output = Array.from(dataSet);
console.log(output);
