<?php
namespace MyGreeter;

class Client{
    public function getGreeting(){
        $hours = date('H');
        if($hours >= 0 && $hours <12){
            return "Good morning";
        }
        else if($hours >=12 && $hours <6){
            return "Good afternoon";
        }
        else return "Good evening";
    }
}