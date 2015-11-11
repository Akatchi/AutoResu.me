<?php 

namespace AutoResume\Transformers;

use League\Fractal\TransformerAbstract;
use AutoResume\Entities\PersonalInformation;


class PersonalInformationTransformer extends TransformerAbstract
{
    public function transform(PersonalInformation $pi)
    {
        return [
            'id' => $pi->id,
            'first_name' => $pi->first_name,
            'last_name' => $pi->last_name,
            'phone_number' => $pi->phone_number,
            'birthday' => $pi->birthday,
            'birthplace' => $pi->birthplace, 
            'address' => $pi->address, 
            'postalcode' => $pi->postalcode,
            'city' => $pi->city,
            'email' => $pi->email,
            'website' => $pi->website,
            'bio' => $pi->bio,
            'enabled' => $pi->enabled,
        ];
    }
}