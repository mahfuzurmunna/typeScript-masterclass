"use strict";
/**
---------------------
classes 101
---------------------
**/
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    //treating like a property rather than a method/function
    get details() {
        return `${this.title} - $${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = "classic";
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(base) {
        this.base = base;
    }
    format() {
        let formatted = this.details + '\n';
        //base
        formatted += `Pizza on a ${this.base} base`;
        //toppings
        if (this.toppings.length === 0) {
            formatted += `with no toppings`;
        }
        else {
            formatted += ` with ${this.toppings.join(', ')} toppings`;
        }
        return formatted;
    }
}
const bbqPizza = new Pizza("bbq", 20);
const nagaPizza = new Pizza("naga", 25);
bbqPizza.addTopping("garlic");
bbqPizza.addTopping("cheese");
// bbqPizza.addTopping("sauce");
// bbqPizza.selectBase("classic");
// bbqPizza.removeTopping("cheese");
// console.log(bbqPizza);
//class as types
function addMushroomToPizza(pizzas) {
    for (const p of pizzas) {
        p.addTopping("mushrooms");
    }
}
addMushroomToPizza([bbqPizza, nagaPizza]);
function printMenuItem(item) {
    console.log(item.details);
}
bbqPizza.details;
// console.log(bbqPizza,nagaPizza)
// printMenuItem(bbqPizza);
function printFormatted(val) {
    console.log(val.format());
}
printFormatted(bbqPizza);
/**
---------------------
Abstract classes 101
---------------------
**/
