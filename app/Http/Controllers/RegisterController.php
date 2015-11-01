<?php

namespace AutoResume\Http\Controllers;

use Illuminate\Http\Request;

use AutoResume\Http\Requests;
use AutoResume\Http\Controllers\Controller;
use AutoResume\Http\Requests\StoreNewUserRequest;

use AutoResume\Entities\User;

use Hash;

class RegisterController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\StoreNewRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNewUserRequest $request)
    {
        // Grab the data that we want
        $data = $request->only('email', 'first_name', 'password');
       
        // create a new user
        $user = User::create([
            'name' => $data['first_name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        return response()->api($user);
    }
}
