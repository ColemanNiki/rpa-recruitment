'use strict';

class Client{
    constructor(){
    }
}

Client.prototype.getGreeting=function(){
    var data = new Date();
    var hours = data.getHours();
    if(hours >= 0 && hours <12){
        return "Good morning";
    }
    else if(hours >=12 && hours <6){
        return "Good afternoon";
    }
    else return "Good evening";
}