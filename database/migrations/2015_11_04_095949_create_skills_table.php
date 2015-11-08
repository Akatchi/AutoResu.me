<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSkillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('skill_types', function($table){
            $table->increments('id');
            $table->string('name', 20);
        });

        Schema::create('skills', function($table){
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('name', 100);
            $table->text('description');
            $table->integer('skill_type_id')->unsigned();
            $table->boolean('enabled');
            $table->timestamps();
        });

        Schema::table('skills', function($table){
            $table->foreign('skill_type_id')
                    ->references('id')
                    ->on('skill_types')
                    ->onDelete('no action');
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('skills', function($table){
            $table->dropForeign('skills_skill_type_id_foreign');
            $table->dropForeign('skills_user_id_foreign');
        });

        Schema::drop('skills');

        Schema::drop('skill_types');
    }
}
