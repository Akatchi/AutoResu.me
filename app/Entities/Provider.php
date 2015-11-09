<?php

namespace AutoResume\Entities;

use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    protected $hidden = ['id', 'created_at', 'updated_at'];
}
