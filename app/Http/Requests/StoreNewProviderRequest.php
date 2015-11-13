<?php

namespace AutoResume\Http\Requests;

use AutoResume\Http\Requests\Request;
use Auth;

class StoreNewSkillRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if(Auth::user()->hasRole('admin')) {
            return true;
        } else {
            false;
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'pretty_name' => 'required',
            'name'  => 'required',
            'enabled' => 'boolean',
        ];
    }
}
