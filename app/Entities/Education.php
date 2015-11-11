<?php

namespace AutoResume\Entities;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $table = 'educations';

    protected $fillable = ['school', 'type', 'degree', 'start_date', 'end_date', 'enabled'];

    protected $hidden = ['created_at', 'updated_at'];
}
