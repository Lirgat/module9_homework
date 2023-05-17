const jsonString = `{
	"list": [
	 {
	  "name": "Petr",
	  "age": "20",
	  "prof": "mechanic"
	 },
	 {
	  "name": "Vova",
	  "age": "60",
	  "prof": "pilot"
	 }
	]
   }
`;

const person1 = {
    name: "Petr",
    age: 20,
    prof: "mechanic"
};
const person2 = {
    name: "Vova",
    age: 60,
    prof: "pilot"
};

const jsonPerson1 = JSON.stringify(person1);
const jsonPerson2 = JSON.stringify(person2);


console.log(jsonPerson1, jsonPerson2);