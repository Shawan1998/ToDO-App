<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{

    
    protected $table = 'todoapp';
    protected $fillable = [
        'data','data_key'
    ];
    

    
}
