<?php

namespace AutoResume\Http\Controllers;

use Illuminate\Http\Request;

use AutoResume\Http\Requests;
use AutoResume\Http\Controllers\Controller;
use AutoResume\Transformers\PersonalInformationTransformer;
use AutoResume\Entities\PersonalInformation;

use Auth;

class PersonalInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->response->item(Auth::user()->personalInfo, new PersonalInformationTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only(['gender', 'address', 'bio', 'birthday', 'birthplace', 'city', 'email', 'enabled', 'first_name', 'last_name', 'phone_number', 'postalcode', 'website']);

        $personalInfo = PersonalInformation::where('user_id', '=', Auth::user()->id)->first();
        
        if($personalInfo != null) {
            $data['enabled'] = (($data['enabled']) ? 1 : 0);
            $personalInfo->update($data);
            // updating
        } else {
            // creating
            $personalInfo = new PersonalInformation();
            $personalInfo->enabled = (($data['enabled']) ? 1 : 0);
            $personalInfo->user_id = Auth::user()->id;
            $personalInfo->first_name = $data['first_name'];
            $personalInfo->last_name = $data['last_name'];
            $personalInfo->phone_number = $data['phone_number'];
            $personalInfo->birthday = $data['birthday'];
            $personalInfo->birthplace = $data['birthplace'];
            $personalInfo->address = $data['address'];
            $personalInfo->postalcode = $data['postalcode'];
            $personalInfo->city = $data['city'];
            $personalInfo->email = $data['email'];
            $personalInfo->website = $data['website'];
            $personalInfo->bio = $data['bio'];

            $personalInfo->save();
        }

        return response()->api('OK');
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return response()->api('IN UPDATE');
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
