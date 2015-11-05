<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkExperiencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_experiences', function($table){
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('employer', 150);
            $table->string('position', 150);
            $table->string('description')->nullable();
            $table->date('start_date');
            $table->date('end_date');
            $table->timestamps();

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
        Schema::table('work_experiences', function($table){
            $table->dropForeign('work_experiences_user_id_foreign');
        });
        
        Schema::drop('work_experiences');
    }
}
