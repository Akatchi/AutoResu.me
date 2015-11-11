<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonalInformationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personal_informations', function($table){
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('first_name', 100);
            $table->string('last_name', 100);
            $table->string('phone_number', 50);
            $table->date('birthday');
            $table->string('birthplace', 100);
            $table->string('address', 200);
            $table->string('postalcode', 10);
            $table->string('city', 100);
            $table->string('email', 100);
            $table->string('website', 100)->nullable();
            $table->text('bio')->nullable();
            $table->boolean('enabled');
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
        Schema::table('personal_informations', function($table){
            $table->dropForeign('personal_informations_user_id_foreign');
        });
        
        Schema::drop('personal_informations');
    }
}
