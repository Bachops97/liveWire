<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Counter extends Component
{

    public $number = 1;
    public $message = '';



    public function decrement()
    {
        if ($this->number > 0) {
            $this->message = '';
            $this->number--;
        } else {
            $this->message = 'You can\'t go below zero';
        }
    }

    public function increment()
    {
        $this->message = '';
        $this->number++;
    }

    public function render()
    {
        return view('livewire.counter');
    }
}
