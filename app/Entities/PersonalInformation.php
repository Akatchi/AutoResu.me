<?php

namespace AutoResume\Entities;

use Illuminate\Database\Eloquent\Model;

class PersonalInformation extends Model
{
    protected $table = 'personal_informations';

    protected $fillable = ['gender', 'first_name', 'last_name', 'birthday', 'birthplace', 'address', 'postalcode', 'city', 'email', 'website', 'bio'];

    protected $hidden = ['user_id','created_at', 'updated_at'];
}
