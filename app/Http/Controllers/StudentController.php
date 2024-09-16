<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student;

class StudentController extends Controller
{
    public function create(Request $request)
    {
       
        if ($request) {
            $name = $request->input('name');
            $family = $request->input('family');
        
        student::create(
            [
               
               'name'=>$name,
               'family'=>$family
            ]
            );
           
   return response()->json(['message'=>'data saved successfully']);

  
}
}
}