class Pizza {
  ingredients = [];
  constructor() {
    for (const ingredient of arguments) {
      this.ingredients.push(ingredient);
    }
  }
}

myPizza = new Pizza(
  "tomates",
  "chorizo",
  "Olives",
  "Fromage",
  "coppa",
  "parmesan"
);

console.log(myPizza,"coucou",);
