class TwitterUser
{
constructor(userName, followingNumber, followersNumber, pictureURL)
{
    this.userName=userName;
    this.followingNumber=followingNumber;
    this.followersNumber=followersNumber;
    this.pictureURL=pictureURL
}
printAll()
{
    return this.userName+"<br/>"+this.followersNumber+"<br/>"+this.followingNumber+"<br/>"+this.pictureURL
}
}

function main()
{
var myTwitter = new TwitterUser("NightxGamer",190,1090,"<img src='https://78.media.tumblr.com/tumblr_m9lqw9VnOg1rseusw.gif'>");
document.write(myTwitter.printAll())
}

main();