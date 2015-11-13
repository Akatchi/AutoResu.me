<?php

namespace AutoResume\Http\Requests;

use AutoResume\Http\Requests\Request;

class StorePersonalInformationRequest extends Request
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
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'gender' => 'required',
            'phone_number' => 'required|max:100',
            'birthday' => 'required|date',
            'birthplace' => 'sometimes',
            'address' => 'requred|max:255',
            'postalcode' => 'required|max:50',
            'city' => 'required|max:100',
            'email' => 'required|email',
            'website' => 'sometimes|url',
            'bio' => 'sometimes',
            'enabled' => 'sometimes|boolean',
        ];
    }
}
