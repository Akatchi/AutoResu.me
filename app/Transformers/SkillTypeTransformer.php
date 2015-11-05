<?php 

namespace AutoResume\Transformers;

use League\Fractal\TransformerAbstract;
use AutoResume\Entities\SkillType;


class SkillTypeTransformer extends TransformerAbstract
{
    public function transform(SkillType $skilltype)
    {
        return [
            'skill' => $skilltype->name,
        ];
    }
}