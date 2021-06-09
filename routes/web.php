<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix'=>'api'],
function($router){
    
    $router->post('add/data/todolist', 'TodoController@create');
    $router->delete('delete/data/todolist/{id}', 'TodoController@delete');
    $router->delete('delete/data/todolist', 'TodoController@deleteAll');
    $router->put('update/data/todolist/{id}', 'TodoController@update');
    $router->get('todolist', 'TodoController@showAllList');
    $router->get('todolist/{id}', 'TodoController@showOneList');

});