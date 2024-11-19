// app.js (Monolithic Script)
const user = {
    name: 'John',
    age: 30
  };
  
  function greet() {
    console.log(`Hello, ${user.name}!`);
  }
  
  function updateAge(newAge) {
    user.age = newAge;
  }
  
  greet();
  updateAge(31);
  console.log(user.age);
