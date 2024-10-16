/*
    Meal Maker
    A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning 
    for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function 
    can generate a meal and a price for Today’s Special without any embarrassing errors!
*/

const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return "Today's Special is " + this._meal + " for $" + this._price;
        } else {
            return 'Meal or price was not set correctly!'
        }
    }
};

//Version sencilla
/*
console.log(menu);

console.log("Añadir lechuga al menu");

menu.meal = 'lechuga';

console.log(menu);

console.log("Añadir precio al menu");

menu.price = 10;

console.log(menu);

console.log("Devolver especial del dia");

console.log(menu.todaysSpecial);
*/


const meals = ['lechuga', 'tomate', 'patata', 'uva', 'filete'];
const prices = [10, 50, 30, 33, 69, 100, 54, 60];

console.log("Posibles comidas:" ,meals);

console.log("Posibles precios:" , prices);

console.log("Añadir comida al menu");

menu.meal = meals[Math.floor((Math.random() * (meals.length - 1)))];

console.log(menu);

console.log("Añadir precio al menu");

menu.price = prices[Math.floor((Math.random() * (prices.length - 1)))];

console.log(menu);

console.log("Devolver especial del dia");

console.log(menu.todaysSpecial);