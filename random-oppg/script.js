// Lager en array med tilfeldige tall 
var tall = [13, 2, 25, 4, 38];

// lager en tom array
var number = [];

function testFunc(){
    console.log("halla");
}

// lager en funksjon og gir den navnet myFunction
function myFunction(){
    // lager en for-loop som kjører gjennom arrayen
    for(i = 0; i < tall.length; i++){
        // lag if-statement for jeg sier at et tall inni arrayen er større en 5, så sendes den til en tom array som heter number
        if(tall[i] > 5){
            number.push(tall[i])
        }
    }
    console.log(number);
}