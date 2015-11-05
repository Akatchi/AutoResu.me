<?php

namespace AutoResume\Http\Controllers;

use Illuminate\Http\Request;

use AutoResume\Http\Requests;
use AutoResume\Http\Controllers\Controller;
use AutoResume\Entities\Skill;
use AutoResume\Entities\SkillType;
use AutoResume\Transformers\SkillTransformer;
use AutoResume\Http\Requests\StoreNewSkillRequest;

use Auth;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->response->collection(Auth::user()->skills, new SkillTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNewSkillRequest $request)
    {
        $data = $request->only(['description', 'skill', 'type']);

        $skill = new Skill();
        $skill->name = $data['skill'];
        $skill->description = $data['description'];
        $skill->user_id = Auth::user()->id;

        // save the skill through the relation.
        $skillType = SkillType::where('name', '=', $data['type'])->first();
        $skillType->skills()->save($skill);

        return $this->response->collection(Auth::user()->skills, new SkillTransformer);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->response->collection(Skill::where('id', '=', $id)->where('user_id', '=', Auth::user()->id)->first(), new SkillTransformer);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreNewSkillRequest $request, $id)
    {
        $data = $request->only(['description', 'skill', 'type']);

        $skill = Skill::where('user_id', '=', Auth::user()->id)->where('id', '=', $id)->first();
        if($skill != null) {
            $skill->update($data);
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
        $skill = Skill::where('user_id', '=', Auth::user()->id)->where('id', '=', $id)->first();
        
        if($skill != null){
            return response()->api($skill->delete());
        }
    }
}
