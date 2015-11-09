<?php

use Illuminate\Database\Seeder;
use AutoResume\Entities\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = 'Wahid';
        $user->email = 'wahid_kl@hotmail.com';
        $user->password = bcrypt('password');

        $user->save();
    }
}
