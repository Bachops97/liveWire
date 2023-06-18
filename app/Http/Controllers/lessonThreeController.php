<?php

namespace App\Http\Controllers;

use App\Models\CommentModel;
use App\Models\UserModel;
use Illuminate\Http\Request;

class lessonThreeController extends Controller
{
    public function render()
    {
        return view('lessonThree');
    }
}
