<?php

namespace AutoResume\Http\Controllers;

use Illuminate\Http\Request;

use AutoResume\Http\Requests;
use AutoResume\Http\Controllers\Controller;
use AutoResume\Entities\Provider;
use AutoResume\Entities\Photo;
use GuzzleHttp\Client;
use AutoResume\Transformers\ProviderTransformer;
use AutoResume\Http\Requests\StoreNewProviderRequest;

use AutoResume\Entities\PersonalInformation;

use Input, Socialite, View, Auth, Session, JWTAuth;

class ProviderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->response->collection(Provider::all(), new ProviderTransformer);
    }

    public function linkedin(Request $request)
    {
        Session::put('token', $request->token);
        return Socialite::driver('linkedin')->scopes(['r_basicprofile', 'r_emailaddress'])->redirect();
    }

    public function linkedinCallback()
    {
        // return the user
        $linkedInUser = Socialite::driver('linkedin')->user();
        // set the token
        $user = JWTAuth::setToken(Session::get('token'))->authenticate();
        // $user = JWTAuth::parseToken()->authenticate();

        $personalInfo = PersonalInformation::where('user_id', '=', $user->id)->first();
        $photo = Photo::where('user_id', '=', $user->id)->where('name', '=', 'LinkedIn')->first();
        
        $client = new Client();
        $response = $client->request('GET', $linkedInUser->avatar_original);
        $body = $response->getBody();

        if($photo == null){
            $ph = new Photo();
            $ph->name = 'LinkedIn';
            $ph->url = base64_encode($body);
            $ph->user_id = $user->id;
            $ph->enabled = false;
            $ph->save();
        }

        if($personalInfo != null) {
             // update the information
            $personalInfo->first_name = $linkedInUser->user['firstName'];
            $personalInfo->last_name = $linkedInUser->user['lastName'];
            $personalInfo->email = $linkedInUser->user['emailAddress'];
            $personalInfo->save();
        } else {
            // create it 
            $pi = new PersonalInformation();
            $pi->user_id = Auth::user()->id;
            $pi->first_name = $linkedInUser->user['firstName'];
            $pi->last_name = $linkedInUser->user['lastName'];
            $pi->email = $linkedInUser->user['emailAddress'];
            $pi->save();
        }

        $view = View::make('welcome');
        $view->script = 'window.close();';
        return $view;
    }

    public function facebook(Request $request)
    {
        Session::put('token', $request->token);
        return Socialite::driver('facebook')->scopes(['user_work_history', 'user_education_history', 'user_about_me'])->redirect();
    }

    public function facebookCallback()
    {
        $facebookUser = Socialite::driver('facebook')->user();

        $user = JWTAuth::setToken(Session::get('token'))->authenticate();

        $personalInfo = PersonalInformation::where('user_id', '=', $user->id)->first();
        $photo = Photo::where('user_id', '=', $user->id)->where('name', '=', 'Facebook')->first();
        
        $client = new Client();

        $response = $client->request('GET', $facebookUser->avatar_original);
        $body = $response->getBody();
        
        if($photo == null) {
            $ph = new Photo();
            $ph->name = 'Facebook';
            $ph->url = base64_encode($body);
            $ph->user_id = $user->id;
            $ph->enabled = false;
            $ph->save();
        }

        if($personalInfo != null) {
             // update the information
            $personalInfo->first_name = $facebookUser->user['first_name'];
            $personalInfo->gender = $facebookUser->user['gender'];
            $personalInfo->last_name = $facebookUser->user['last_name'];
            $personalInfo->email = $facebookUser->user['email'];
            $personalInfo->save();
        } else {
            // create it 
            $pi = new PersonalInformation();
            $pi->user_id = Auth::user()->id;
            $pi->first_name = $facebookUser->user['first_name'];
            $pi->last_name = $facebookUser->user['last_name'];
            $pi->email = $facebookUser->user['email'];
            $pi->save();
        }

        $view = View::make('welcome');
        $view->script = 'window.close();';
        return $view;

    }

    public function github()
    {
        return Socialite::driver('github')->redirect();
    }

    public function githubCallback()
    {
        $githubUser = Socialite::driver('github')->scopes(['gist'])->user();

        $user = JWTAuth::setToken(Session::get('token'))->authenticate();

        $personalInfo = PersonalInformation::where('user_id', '=', $user->id)->first();
        $photo = Photo::where('user_id', '=', $user->id)->where('name', '=', 'Github')->first();

        $client = new Client();
        $response = $client->request('GET', $githubUser->avatar);
        $body = $response->getBody();

        if($photo == null) {
            $ph = new Photo();
            $ph->name = 'Github';
            $ph->url = base64_encode($body);
            $ph->user_id = $user->id;
            $ph->enabled = false;
            $ph->save();
        }

        if($personalInfo != null) {
             // update the information
            $personalInfo->first_name = $githubUser->user['name'];
            $personalInfo->email = $githubUser->user['email'];
            $personalInfo->bio = $githubUser->user['bio'];
            $personalInfo->save();
        } else {
            // create it 
            $pi = new PersonalInformation();
            $pi->user_id = Auth::user()->id;
            $pi->first_name = $githubUser->user['name'];
            $pi->email = $githubUser->user['email'];
            $pi->bio = $githubUser->user['bio'];
            $pi->save();
        }

        $view = View::make('welcome');
        $view->script = 'window.close();';
        return $view;
        
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreNewProviderRequest $request, $id)
    {
        $data = $request->only(['pretty_name', 'name', 'enabled']);
        
        $data = [
            'pretty_name' => $data['pretty_name'],
            'name' => $data['name'],
            'enabled' => (($data['enabled'] == 'true') ? 1 : 0),
        ];

        $provider = Provider::where('name', '=', $data['name'])->first();
        if($provider != null) {
            $provider->update($data);
        }
        return response()->api('OK');
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
