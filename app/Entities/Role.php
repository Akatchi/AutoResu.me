<?php

namespace AutoResume\Entities;

use Illuminate\Database\Eloquent\Model;

use AutoResume\Entities\Permission;

class Role extends Model
{
    public function permissions()
    {
        return $this->belongsToMany('AutoResume\ENtities\Permission');
    }

    public function givePermissionTo(Permission $permission)
    {
        return $this->permissions()->save($permission);
    }
}