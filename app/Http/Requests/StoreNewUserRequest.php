<?php

namespace AutoResume\Http\Requests;

use AutoResume\Http\Requests\Request;

class StoreNewUserRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|unique:users|email',
            'first_name'  => 'required|max:255',
            'password' => 'required'
        ];
    }
}
