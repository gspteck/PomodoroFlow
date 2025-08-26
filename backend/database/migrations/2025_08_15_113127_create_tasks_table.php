<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('user_id');
            $table->string('task_title');
            $table->string('task_description')->nullable();
            $table->boolean('task_status');
            $table->date('task_due_date')->nullable();
            $table->integer('task_priority');  //  0 - 2 => LOW - HIGH

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
