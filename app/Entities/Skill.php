<?php

namespace AutoResume\Entities;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    public function skillType()
    {
        return $this->belongsTo('AutoResume\Entities\SkillType');
    }

    public function users()
    {
        return $this->hasMany('AutoResume\Entities\User');
    }
}
