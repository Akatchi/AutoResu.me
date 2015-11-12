<?php

use Illuminate\Database\Seeder;
use AutoResume\Entities\SkillType;

class SkillTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create SkillType 'Work'
        $skilltype = SkillType::create([
            'name' => 'Work'
        ]);
        
        // Create SkillType 'Orgranisational'
        $skilltype = SkillType::create([
            'name' => 'Orgranisational'
        ]);

        // Create SkillType 'Other'
        $skilltype = SkillType::create([
            'name' => 'Other'
        ]);
    }
}
