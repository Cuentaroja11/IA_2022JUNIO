// MIT License
// Copyright (c) 2020 Luis Espino
// MIT License
// Copyright (c) 2022 201503986 Edwar Everaldo Zacarias

function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}

function test(states){
       var location = states[0];		
       var state = states[0] == "A" ? states[1] : states[2];
       var action_result = reflex_agent(location, state);
       document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result + " ").concat(states[1]).concat(" ").concat(states[2]);
       if (action_result == "CLEAN"){
         if (location == "A") states[1] = "CLEAN";
          else if (location == "B") states[2] = "CLEAN";
       }
       else if (action_result == "RIGHT") states[0] = "B";
       else if (action_result == "LEFT") states[0] = "A";
       
       if (location == "A" && states[1] == "CLEAN" && states[2] == "CLEAN"){

       }
 setTimeout(function(){ test(states); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
test(states);