<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photos', function($table){
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('name', 50);
            $table->string('url');
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
        Schema::table('photos', function($table){
            $table->dropForeign('photos_user_id_foreign');
        });

        Schema::drop('photos');
    }
}
