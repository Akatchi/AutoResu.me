<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{

    /**
     * The tables which are included in the truncate.
     * @var array
     */
    private $tables = [
        'users',
        'password_resets',
        'providers',
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {  
        // unguard the model so we can quickly fill the models
        Model::unguard();
        // clean the database
        $this->cleanDatabase();

        $this->call(ProvidersTableSeeder::class);
        $this->call(UserTableSeeder::class);

        // and guard it again for testing or something
        Model::reguard();
    }

    /**
     * cleanDatabase, cleans up the database
     */
    private function cleanDatabase()
    {
        // screw the foreign key check
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // loop throught the tables 
        foreach($this->tables as $tableName)
        {
            // and just truncate the shit out of everything
            DB::table($tableName)->truncate();
        }

        // and set the foreign key check back on coz its quite handy.
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
    }

}
