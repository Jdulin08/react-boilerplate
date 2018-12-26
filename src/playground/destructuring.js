
Object Desctructuring

const person = {
  name: 'Jason',
  age: 27,
  location: {
    city: 'Arvada',
    temp: 92
  }
};

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;
if (city && temperature) {
  console.log(`Its ${temperature} in ${city}`);
}

const book = {
  title: 'title of book',
  author: 'Hason',
  publisher: {
    name: 'Penguin'
  }
};

const {title, author} = book;
const {name: publisherName = 'Self-published'} = book.publisher;

console.log(publisherName);

//
//Array Desctructuring
//
const address = ['1299 S Juniper St', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, small, medium, large] = item;
console.log(`A medium ${itemName} is ${medium}.`);
