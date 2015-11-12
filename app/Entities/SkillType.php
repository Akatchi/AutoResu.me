<?php

namespace AutoResume\Entities;

use Illuminate\Database\Eloquent\Model;

class SkillType extends Model
{
    protected $fillable = ['name'];

    public $timestamps = false;
    public function skills()
    {
        return $this->hasMany('AutoResume\Entities\Skill');
    }
}