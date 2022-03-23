var formEl = document.getElementById("form");
var textareaEl = document.getElementById("textarea");

var priser = {
    '50mbit' : 399,
    '100mbit' : 599,
    '300mbit' : 799,
    '500mbit' : 999,
    'dekoder' : 399,
    'extender' : 499,
};



var data;
var user;
var costumer;
var network;
var dekoder;
var extender;

function getIntroText(){
    ret = '';
    ret += 'Hei ' + costumer;
    ret += 'og takk for en hyggelig telefonsamtale\n\n'
    ret += 'Sender deg som avtalt tilbud på'
    ret += network 

    return ret;
}

formEl.addEventListener("submit", function(e){
    e.preventDefault();
    data = formEl.elements;
    user = data.bruker.value;
    costumer = data.kunde.value;
    network = data.internett.value;
    dekoder = data.dekoder.value;
    extender = data.extender.value
    
    console.log(network)

    var extra = []
    
    for(var i = 0; i < data.tilbehør.length; i++){
        var tilbehør = data.tilbehør[i]
        if(tilbehør.checked)
        extra.push(tilbehør);
    }

    textareaEl.innerHTML = getIntroText();

    console.log(extra.value)
})
