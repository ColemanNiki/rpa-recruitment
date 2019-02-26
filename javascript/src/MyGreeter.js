'use strict';

class Client{
    constructor(){
    }
}

Client.prototype.getGreeting=function(){
    if(arguments[0]){
        var date = arguments[0];
    }
    else{
        var date = new Date();
    }
    var hours = date.getHours();
    if(hours >= 0 && hours <12){
        return "Good morning";
    }
    else if(hours >=12 && hours <18){
        return "Good afternoon";
    }
    else return "Good evening";
}