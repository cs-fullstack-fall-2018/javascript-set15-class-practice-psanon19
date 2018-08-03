class Dinner
{
    //A function stater that sets the price, quantity, and name
    constructor(dishName, protein, veggie, price)
    {
        this.dishName=dishName;
        this.protein=protein;
        this.veggie=veggie;
        this.price=price;
    }
    //A function that returns all the fields to the function
    printAll()
    {
        return this.dishName+"<br/>"+this.protein+"<br/>"+this.veggie+"<br/>"+this.price
    }
}
//The main function in my code that runs my other functions
function main()
{

    var myMeal = new Dinner("Meatloaf","190grams","no",19.99);
    document.write(myMeal.printAll())
}

main();