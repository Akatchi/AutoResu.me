<?php

namespace AutoResume\Entities;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    /**
     * [$fillable description]
     * @var [type]
     */
    protected $fillable = ['name', 'description', 'skill_type_id', 'enabled'];

    /**
     * [skillType description]
     * @return [type] [description]
     */
    public function skillType()
    {
        return $this->belongsTo('AutoResume\Entities\SkillType');
    }

    /**
     * [users description]
     * @return [type] [description]
     */
    public function users()
    {
        return $this->hasMany('AutoResume\Entities\User');
    }
}
