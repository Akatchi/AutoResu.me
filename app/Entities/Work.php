<?php

namespace AutoResume\Entities;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    protected $table = 'work_experiences';

    protected $fillable = ['description', 'employer', 'enabled', 'end_date', 'start_date', 'location', 'position'];

    /**
     * [users description]
     * @return [type] [description]
     */
    public function users()
    {
        return $this->hasMany('AutoResume\Entities\User');
    }
}
