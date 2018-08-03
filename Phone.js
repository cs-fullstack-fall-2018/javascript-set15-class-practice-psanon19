class Phone{

    constructor(phoneName, storageLimit, isAndroid, screenSize, hasHeadPhoneJack)
    {
    this.phoneName=phoneName;
    this.storageLimit=storageLimit;
    this.isAndroid=isAndroid;
    this.screenSize=screenSize;
    this.hasHeadPhoneJack=hasHeadPhoneJack;
    }

    printAll()
    {
        return this.phoneName+"<br/>"+this.storageLimit+"<br/>"+this.isAndroid+"<br/>"+this.screenSize+"<br/>"+this.hasHeadPhoneJack
    }

}

function main()
{
    var myPhone = new Phone("lilith","1000gb","yes","16in","yes")
    document.write(myPhone.printAll())
}

main();