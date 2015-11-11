<?php

namespace AutoResume\Http\Requests;

use AutoResume\Http\Requests\Request;

class StoreNewEducationRequest extends Request
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
            'degree' => 'required',
            'school'  => 'required',
            'type' => 'required',
            'start_date' => 'date',
            'end_date' => 'sometimes|date',
            'enabled' => 'boolean',
        ];
    }
}