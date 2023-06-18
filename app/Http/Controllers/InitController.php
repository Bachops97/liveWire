<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InitController extends Controller
{
    public function redirect($first_page = 'first_lesson')
    {
        return redirect(route($first_page));
    }
}
