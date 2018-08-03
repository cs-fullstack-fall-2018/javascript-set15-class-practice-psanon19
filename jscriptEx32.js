

class Catalog
{
    //A function stater that sets the price, quantity, and name
    constructor(price, quantity, name)
    {
        this.price=price;
        this.quantity=quantity;
        this.name=name;
    }
    //A function that returns all the fields to the function
    printAllAttributes()
    {
        return this.price+" "+this.quantity+" "+this.name
    }

}


//The main function in my code that runs my other functions
function main()
{
    var item1 = new Catalog(19.99,8,"Video Game");
    var item2 = new Catalog(9.99,10,"'***Censored***'");

    document.write(item1.printAllAttributes()+"<br/>");
    document.write(item2.printAllAttributes());

    console.log(item1.printAllAttributes());
    console.log(item2.printAllAttributes());
}

main();