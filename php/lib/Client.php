<?php
namespace MyGreeter;

class Client{
    public function getGreeting($dateStr == null){
        if($dateStr == null){
            $hours = date_format($dateStr,'H');
        }
        else{
            $hours = date('H');
        }
        if($hours >= 0 && $hours <12){
            return "Good morning";
        }
        else if($hours >=12 && $hours <18){
            return "Good afternoon";
        }
        else return "Good evening";
    }
}