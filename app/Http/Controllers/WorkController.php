<?php

namespace AutoResume\Http\Controllers;

use Illuminate\Http\Request;

use AutoResume\Http\Requests\StoreNewWorkRequest;
use AutoResume\Http\Controllers\Controller;
use AutoResume\Transformers\WorkTransformer;
use AutoResume\Entities\Work;

use Auth;

class WorkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->response->collection(Auth::user()->workExperiences, new WorkTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNewWorkRequest $request)
    {
        $data = $request->only(['employer', 'position', 'start_date', 'end_date', 'location', 'enabled', 'description']);

        $work = new Work();
        $work->user_id = Auth::user()->id;
        $work->employer = $data['employer'];
        $work->location = $data['location'];
        $work->position = $data['position'];
        $work->description = $data['description'];
        $work->start_date = $data['start_date'];
        $work->end_date = $data['end_date'];
        $work->enabled = (($data['enabled']) ? 1 : 0);
        $work->save();

        return $this->response->collection(Auth::user()->workExperiences, new WorkTransformer());
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
    public function update(StoreNewWorkRequest $request, $id)
    {
        $data = $request->only(['description', 'employer', 'enabled', 'end_date', 'location', 'position', 'start_date']);

        $work = Work::where('user_id', '=', Auth::user()->id)->where('id', '=', $id)->first();
        if($work != null) {
            $work->update($data);
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
        $toDeleteWork = Work::where('user_id', '=', Auth::user()->id)->where('id', '=', $id)->first();

        if($toDeleteWork != null) {
            return response()->api($toDeleteWork->delete());
        }

        return response()->api(['NOT_FOUND']);
    }
}
