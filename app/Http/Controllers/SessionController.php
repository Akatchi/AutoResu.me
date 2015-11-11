<?php

namespace AutoResume\Http\Controllers;

use Illuminate\Http\Request;
use AutoResume\Http\Requests;
use AutoResume\Http\Controllers\Controller;
use JWTAuth;
use AutoResume\Entities\User;

class SessionController extends Controller
{
    /**
     * authenticate, handles the authentication for the initial request to login.
     * 
     * @param  Request  $request    The login request to handle the authentication
     * 
     * @return Response json        The data that came back
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $user = User::whereEmail($credentials['email'])->first();

        $adminClaim = ['admin' => false];
        // see if we have an admin user on our hands
        if($user != null){
            $adminClaim = ['admin' => $user->hasRole('admin')];
        }
                
        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials, $adminClaim)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token'));
    }
    
    public function testme()
    {
        return response()->api(compact(['foo' => 'you made it']));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
