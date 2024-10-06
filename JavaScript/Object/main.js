//array 
var person = ['Haroon', 'Rasheed', '19'];
var Object1 = {
    FirstName: 'Haroon',
    LastName: 'Rasheed',
    Age: 18,
    array: ['Listening Music', 'Car Driving', 'Talking to People'],
    Living: {
        City: 'Sambhal',
        Country: 'Karachi'
    },
    FullName: function () {
        return this.FirstName + ' ' + this.LastName;
    } // Using a regular function to access 'this'
};
// Accessing the FullName function
console.log("Full Name: ".concat(Object1.FullName()));
// console.log(Object1.Living?.City); // Use optional chaining to avoid errors if Living is undefined
// console.log(Object1.array);
// Now you can safely delete Age
// delete Object1.Age;
// Adding the email property
// Object1.email = "itxharoonkhan@gmail.com"; // Email domain is correct
// console.log(Object1);
// console.log('LastName' in Object1);//ye true Folse me jawab de ta hai ?
// nameboject.FistName = 'Hamza',
// console.log(nameboject.FistName);
// for (let key in Object1) {
//     // Type assertion to tell TypeScript that key is a key of Person
//     console.log(key + ' : ' + (Object1[key as keyof Person]));
// }
