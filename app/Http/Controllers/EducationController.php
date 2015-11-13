<?php

namespace AutoResume\Http\Controllers;

use Illuminate\Http\Request;

use AutoResume\Http\Requests;
use AutoResume\Http\Controllers\Controller;
use AutoResume\Entities\Education;
use AutoResume\Transformers\EducationTransformer;
use AutoResume\Http\Requests\StoreNewEducationRequest;

use Auth;

class EducationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->response->collection(Auth::user()->educations, new EducationTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNewEducationRequest $request)
    {
        $data = $request->only(['degree', 'school', 'start_date', 'end_date', 'enabled', 'type']);

        $education = new Education();
        $education->degree = $data['degree'];
        $education->school = $data['school'];
        $education->type = $data['type'];
        $education->start_date = $data['start_date'];
        $education->end_date = $data['end_date'];
        $education->user_id = Auth::user()->id;
        $education->save();

        return $this->response->collection(Auth::user()->educations, new EducationTransformer);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->response->collection(Education::where('id', '=', $id)->where('user_id', '=', Auth::user()->id)->get(), new EducationTransformer);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreNewEducationRequest $request, $id)
    {
        $data = $request->only(['degree', 'school', 'type', 'enabled', 'start_date', 'end_date']);

        // set the parameters correctly
        $data = [
            'degree' => $data['degree'],
            'school' => $data['school'],
            'type' => $data['type'],
            'enabled' => (($data['enabled'] == 'true') ? 1 : 0),
            'start_date' => $data['start_date'],
            'end_date' => $data['end_date']
        ];

        $education = Education::where('user_id', '=', Auth::user()->id)->where('id', '=', $id)->first();
        if($education != null) {
            $education->update($data);
        } else {
            return response()->api('OK');
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
        // Find the user skill
        $skill = Education::where('user_id', '=', Auth::user()->id)->where('id', '=', $id)->first();
        
        if($skill != null){
            return response()->api($skill->delete());
        }
    }
}
