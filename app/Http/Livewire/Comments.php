<?php

namespace App\Http\Livewire;

use Illuminate\Support\Carbon;
use Livewire\Component;

class Comments extends Component
{
    public $new_comment;

    public $comments = [
        [
            'body' => '        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit dicta, corporis quasi
        sequi eveniet mollitia
        quia aperiam iusto voluptatem ipsum, natus hic ut, explicabo placeat eos! Expedita repellat eveniet illo.',
            'created_at' => '3 mins ago',
            'user' => 'Bachops'
        ]
    ];


    public function addComment()
    {
        if ($this->new_comment == null) {
            return false;
        }
        $new_comment =  [
            'body' => $this->new_comment,
            'created_at' => Carbon::now()->diffForHumans(),
            'user' => 'Jovan'
        ];

        array_unshift($this->comments, $new_comment);

        $this->new_comment = null;
    }

    public function render()
    {
        return view('livewire.comments');
    }
}
