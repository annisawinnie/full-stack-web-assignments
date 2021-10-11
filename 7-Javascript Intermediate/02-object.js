// SOAL 1

const person = {
  name: "person A",
  age: 100,
  favDrinks: [
    "coffee",
    "jamu temulawak",
    "tea"
  ],
  greeting: function(name) {
    return "Hello, "+ name
  }
}

/// EDIT HERE
person.name = "Annisa Winnie Ardianti";
person.favDrinks[1] = "tap water";

/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));

// SOAL 2

function getObjectValue( obj, path ) { 
	path = path.split(".");
	
	const result = path.reduce((prev, curr) => {
		return prev[curr];
	}, obj);
	
	if (result === null){
		return null;
	}
	return result;
 }

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark"
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)


// SOAL 3

const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

const calculateIncome = (items) => {
  /// EDIT DOWN HERE
  const btc = items.reduce((accumulator, currentValue) => accumulator + currentValue.btc.sell - currentValue.btc.buy, 0);

  const eth = items.reduce((accumulator, currentValue) => accumulator + currentValue.eth.sell - currentValue.eth.buy, 0);

  const doge = items.reduce((accumulator, currentValue) => accumulator + currentValue.doge.sell - currentValue.doge.buy, 0);

  const result = {
    btc: btc,
    doge: doge,
    eth: eth,
  };

  return result;
};

console.log(calculateIncome(items));






















