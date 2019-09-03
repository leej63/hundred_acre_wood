var tigger = { 
    character: "Tigger",
    greet: function(){
        console.log("The wonderful things about Tiggers is Tiggers are wonderful things!");
        }
};
var pooh = { 
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Oh bother!");
    }
};
var piglet = {
    character: "Piglet",
    greet: function(){
        console.log("Oh d-d-d-d-dear! I wasn't expecting company!")
    }
};
var bees = {
    character: "Bees",
    greet: function(){
        console.log("I will steal all your honey!")
    }
};
var owl = {
    character: "Owl",
    greet: function(){
        console.log("Feed me... or else.");
    }
};
var christopher = {
    character: "Christopher Robin",
    greet: function(){
        console.log("Why did I write this series?");
    }
};
var rabbit = {
    character: "Rabbit",
    greet: function(){
        console.log("I love to eat carrots!");
    }
};
var gopher = {
    character: "Gopher",
    greet: function(){
        console.log("I wish I was a groundhog.");
    }
};
var kanga = {
    character: "Kanga",
    greet: function(){
        console.log("Who gave me this horrible name?");
    }
};
var eeyore = {
    character: "Eeyore",
    greet: function(){
        console.log("I don't want to go anywhere, leave me alone!");
    }
};
var heffalumps = {
    character: "Heffalumps",
    greet: function(){
        console.log("Why am I a purple elephant?");
    }
};

tigger.north = pooh;

pooh.north = christopher;
pooh.east = bees;
pooh.south = tigger;
pooh.west = piglet;

piglet.north = owl;
piglet.east = tigger.north;

bees.north = rabbit;
bees.west = pooh;

owl.east = christopher;
owl.south = piglet;

christopher.north = kanga;
christopher.east = rabbit;
christopher.south = pooh;
christopher.west = owl;

rabbit.east = gopher;
rabbit.south = bees;
rabbit.west = christopher;

gopher.west = rabbit;

kanga.north = eeyore;
kanga.south = christopher;

eeyore.east = heffalumps;
eeyore.south = kanga;

heffalumps.west = eeyore;

var player = {
    location: tigger,
    honey: false,
}

function move(direction){
    if(direction === "north" || direction === "North"){
        if(player.location.north == null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greet();
        }
    }
    if(direction === "east" || direction === "East"){
        if(player.location.east == null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.east;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greet();
        }
    }
    if(direction === "south" || direction == "South"){
        if(player.location.south == null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.south;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greet();
        }
    }
    if(direction === "west" || direction === "West"){
        if(player.location.west == null){
            console.log("You may not go that way!")
        }
        else{
            player.location = player.location.west;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greet();
        }
    }
}

function pickUp(){
    if(player.location == bees){
        player.honey = true;
        console.log("You've gathered some honey!");
    }
    else{
        console.log("There is no honey at this location!");
    }
}

function mission(){
    charList = [tigger, pooh, piglet, christopher, owl, rabbit, gopher, kanga, eeyore, heffalumps]
    var rand = Math.floor(Math.random()*Math.floor(charList.length));
    recipient = charList[rand];
    recipient.objective = true;
    console.log(recipient.character + " is looking for honey! Can you help?");
}

function drop(){
    if(player.location.objective == true){
        if(player.honey == true){
            console.log("Congratulations! You delivered the honey to " + player.location.character + "!");
            player.honey = false;
        }
    }
    else if(player.honey == false){
        console.log("You do not have any honey, go pick some up from the Bees.")
    }
    else if(player.location.objective == true){
        if(player.honey == false){
            console.log("You are at the right location, but you don't have any honey!");
        }
    }
    else{
        console.log("Whoops! This isn't the place that needs honey");
    }
}

mission()
move('north')
move('east')
pickUp()
move('north')
drop()
