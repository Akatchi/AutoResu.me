<?php 

namespace AutoResume\Transformers;

use League\Fractal\TransformerAbstract;
use AutoResume\Entities\Education;


class EducationTransformer extends TransformerAbstract
{
    public function transform(Education $education)
    {
        return [
            'id' => $education->id,
            'degree' => $education->degree,
            'school' => $education->school,
            'type' => $education->type,
            'start_date' => $education->start_date, 
            'end_date' => $education->end_date, 
            'enabled' => $education->enabled, 
        ];
    }
}