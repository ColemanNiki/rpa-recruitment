<?php

class MyGreeter_Client_Test extends \PHPUnit_Framework_TestCase
{
    public function setUp()
    {
        $this->greeter = new \MyGreeter\Client();
    }

    public function test_Instance()
    {
        $this->assertEquals(
            get_class($this->greeter),
            'MyGreeter\Client'
        );
    }

    public function test_getGreeting()
    {
        $this->assertFalse(
            strlen($this->greeter->getGreeting()) == 0
        );
        $this->assertFalse(
            $this->greeter->getGreeting("12:00") != 'Good afternoon'
        );
        $this->assertFalse(
            $this->greeter->getGreeting("0:00") != 'Good morning'
        );
        $this->assertFalse(
            $this->greeter->getGreeting("18:00") != 'Good evening'
        );
    }

}
