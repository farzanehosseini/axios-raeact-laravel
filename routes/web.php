<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Carbon\Carbon;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('getData');
});

// Route::post('/getData', function (Request $request) {
       
//     // Check if the request has a file
//     if ($request) {
//         $name = $request->input('name');
//         $family = $request->input('family');
//         return response()->json(['name' => $name ,'family' =>  $family]);
//     } else {
//         return response()->json(['error' => 'No data exist'], 400);
//     }
// })->name('getData');

Route::post('/getData', 'App\Http\Controllers\StudentController@create')->name('getData');
