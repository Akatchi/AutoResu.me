<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});


/** Api Endpoints */
$api = app('Dingo\Api\Routing\Router');

// Group the routes for this version
$api->version('v1', function ($api) {
    $api->post('authenticate/token', 'AutoResume\Http\Controllers\SessionController@authenticate');
});