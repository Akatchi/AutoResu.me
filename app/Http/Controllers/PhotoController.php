<?php

namespace AutoResume\Http\Controllers;

use Illuminate\Http\Request;

use AutoResume\Http\Requests;
use AutoResume\Http\Controllers\Controller;
use AutoResume\Entities\Photo;
use AutoResume\Transformers\PhotoTransformer;
use AutoResume\Http\Requests\StoreNewPhotoRequest;

use Auth;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->response->collection(Auth::user()->photos, new PhotoTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNewPhotoRequest $request)
    {
        $data = $request->only(['name', 'url']);

        $photo = new Photo();
        $photo->user_id = Auth::user()->id;
        $photo->name = $data['name'];
        $photo->url = $data['url'];
        $photo->save();

        return $this->response->collection(Auth::user()->photos, new PhotoTransformer);
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
