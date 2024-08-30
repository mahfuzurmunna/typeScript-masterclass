/**
---------------------
classes 101
---------------------
**/

//custom type creation of pizza base
type Base = "crispy" | "soft" | "classic";

interface HasFormatter {
  format(): string;
}

abstract class MenuItem implements HasFormatter {
  constructor(private title: string, private price: number) {}

  //treating like a property rather than a method/function
  get details(): string {
    return `${this.title} - $${this.price}`;
  }

  abstract format(): string 
}

class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }

  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  selectBase(base: Base): void {
    this.base = base;
  }

  format (): string {
    let formatted = this.details + '\n';

    //base
    formatted += `Pizza on a ${this.base} base`;

    //toppings
    if(this.toppings.length === 0) {
        formatted += `with no toppings`;
    } else {
        formatted += ` with ${this.toppings.join(', ') } toppings`;
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
function addMushroomToPizza(pizzas: Pizza[]): void {
  for (const p of pizzas) {
    p.addTopping("mushrooms");
  }
}

addMushroomToPizza([bbqPizza, nagaPizza]);

function printMenuItem(item: MenuItem): void {
  console.log(item.details);
}

bbqPizza.details;
// console.log(bbqPizza,nagaPizza)

// printMenuItem(bbqPizza);

function printFormatted(val: HasFormatter): void {
    console.log(val.format());
}

printFormatted(bbqPizza);


/**
---------------------
Abstract classes 101
---------------------
**/

