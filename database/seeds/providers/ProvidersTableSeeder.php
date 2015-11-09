<?php

use Illuminate\Database\Seeder;
use AutoResume\Entities\Provider;

class ProvidersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Facebook provider
        $facebook = new Provider();
        $facebook->name = 'facebook';
        $facebook->pretty_name = 'Facebook';
        $facebook->enabled = true;
        
        // LinkedIn provider
        $linkedin = new Provider();
        $linkedin->name = 'linkedin';
        $linkedin->pretty_name = 'LinkedIn';
        $linkedin->enabled = true;

        // github provider
        $github = new Provider();
        $github->name = 'github';
        $github->pretty_name = 'Github';
        $github->enabled = true;

        // save the providers
        $facebook->save();
        $linkedin->save();
        $github->save();
    }
}
