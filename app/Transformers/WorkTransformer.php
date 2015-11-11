<?php 

namespace AutoResume\Transformers;

use League\Fractal\TransformerAbstract;
use AutoResume\Entities\Work;

class WorkTransformer extends TransformerAbstract
{
    public function transform(Work $work)
    {
        return [
            'id' => $work->id,
            'employer' => $work->employer,
            'position' => $work->position,
            'location' => $work->location,
            'description' => $work->description,
            'start_date' => $work->start_date,
            'end_date' => $work->end_date,
            'enabled' => (($work->enabled == 1) ? true : false),
        ];
    }
}