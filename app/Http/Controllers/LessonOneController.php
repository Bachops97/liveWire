<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LessonOneController extends Controller
{
    public function render()
    {
        return view('lessonOne');
    }
}
