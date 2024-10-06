//array 
let person = ['Haroon','Rasheed','19'];
interface Living {
    City: string;
    Country: string;
}

interface Person {
    FirstName: string;
    LastName: string;
    Age?: number; // Make Age optional
    email?: string; // Optional email property
    array?: [string, string, string];
    Living?: Living; // Define Living as Living interface
    FullName: () => string; 
}

let Object1: Person = {
    FirstName: 'Haroon',
    LastName: 'Rasheed',
    Age: 18,
    array: ['Listening Music', 'Car Driving', 'Talking to People'],
    Living: {
        City: 'Sambhal',
        Country: 'Karachi'
    },
    FullName: function() { 
        return this.FirstName + ' ' + this.LastName; 
    } // Using a regular function to access 'this'
};

// Accessing the FullName function
console.log(`Full Name: ${Object1.FullName()}`);

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




