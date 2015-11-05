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
$api->version('v1', function ($api) {
    $api->group(['namespace' => 'AutoResume\Http\Controllers'], function($api){
        $api->group(['middleware' => 'cors'], function($api){
            // Group the routes for this version
            $api->post('authenticate/token', 'SessionController@authenticate');
            $api->post('register', 'RegisterController@store');

            $api->group(['middleware' => 'jwt.auth'], function($api){
                $api->resource('user', 'UserController');
                $api->resource('provider', 'ProviderController');
                $api->get('auth/linkedin', 'ProviderController@linkedin');
                $api->resource('skill', 'SkillController');
                $api->resource('skilltype', 'SkillTypeController');
            });
            
            $api->get('auth/linkedin/callback', 'ProviderController@linkedinCallback');
        });
    });
});
