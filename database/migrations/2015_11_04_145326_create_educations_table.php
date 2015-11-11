<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEducationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('educations', function($table){
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('degree', 200);
            $table->string('school', 200);
            $table->string('type', 200)->nullable();
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->boolean('enabled');
            $table->text('activities')->nullable();
            $table->timestamps();
        });

        Schema::table('educations', function($table){
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
        Schema::table('educations', function($table){
            $table->dropForeign('educations_user_id_foreign');
        });

        Schema::drop('educations');
    }
}
