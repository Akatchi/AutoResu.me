<?php

namespace AutoResume\Entities;

use Illuminate\Database\Eloquent\Model;

class SkillType extends Model
{
    public function skills()
    {
        return $this->hasMany('AutoResume\Entities\Skill');
    }
}
