<?php

use App\Http\Controllers\InitController;
use App\Http\Controllers\LessonOneController;
use App\Http\Controllers\lessonThreeController;
use App\Http\Controllers\lessonTwoController;
use App\Http\Livewire\Counter;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [InitController::class, 'redirect']);

Route::get('/lessonOne', [LessonOneController::class, 'render'])->name('first_lesson');

Route::get('/lessonTwo', [lessonTwoController::class, 'render'])->name('second_lesson');

Route::get('/lessonThree', [lessonThreeController::class, 'render'])->name('third_lesson');
