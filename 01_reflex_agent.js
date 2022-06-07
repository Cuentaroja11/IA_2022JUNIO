// MIT License
// Copyright (c) 2020 Luis Espino
// MIT License
// Copyright (c) 2022 201503986 Edwar Everaldo Zacarias

var vuelta = 0;

function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGT";
    else if (location=="B") return "LEFT";
}

function test(states){
    var location = states[0];		
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML+="<br>Actual: ".concat(location+" | Action: "+action_result+" | "+states[1]+" | "+states[2]);
    if (action_result == "CLEAN"){
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";
    
    if (vuelta < 2){
        if (!( (states[1] == "CLEAN") && (states[2] == "CLEAN") )){
            setTimeout(function(){ test(states); }, 1000);
        }

        if (( (states[1] == "CLEAN") && (states[2] == "CLEAN") )){
            document.getElementById("log").innerHTML+="<br>Actual: ".concat(location+" | Action: "+action_result+" | "+states[1]+" | "+states[2]);
            states[1] = "DIRTY";
            states[2] = "DIRTY";
            vuelta ++;
            setTimeout(function(){ test(states); }, 1000);
        }
        
    }     
}

var states = ["A","DIRTY","DIRTY"];
test(states);