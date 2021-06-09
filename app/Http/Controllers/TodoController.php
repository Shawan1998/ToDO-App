<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    //

    public function showAllList(){
        return response()->json(Todo::all());
   }

   public function showOneList($data_key){
     return response()->json(Todo::find($data_key));
   
}

     public function create(Request $req){
        
        $d = $req->json()->all();
        $data = $d['data'];
        $id = $d['data_key'];
         
         $td = new Todo;
         $td->data = $data? $data: null; 
         $td->id = $id? $id: null; 
         $td->save(); 

        //  $todo=Todo::create($req->all());
        //  return response()->json($article,201);

    
     }

     public function update ($id, Request $request){
             $todo= Todo::findorFail($id);
             $todo->update($request->all());
             return response()->json($article,200);
     }

     public function delete($id){
            
      Todo::findorFail($id)->delete();
      return response('Deleted Successfully',200);
     }

     public function deleteAll(){
        return response()->json(Todo::truncate());
   }


}
