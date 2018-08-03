

class Movie
{
    //A function stater that sets movie name, rating, and year realeased
    constructor(movieName, rating, yearReleased)
    {
        this.movieName=movieName;
        this.rating=rating;
        this.yearReleased=yearReleased;
    }
    //A function that returns all the fields to the function
    printAll()
    {
        return this.movieName+" "+this.rating+" "+this.yearReleased
    }

}



function main()
{
    var movie1 = new Movie("Casablanca",8.5,1942);
    var movie2 = new Movie("Reefer Madness",3.7,1936);

    document.write(movie1.printAll()+"<br/>");
    document.write(movie2.printAll());

    console.log(movie1.printAll());
    console.log(movie2.printAll());
}

main();