<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(20)->create();

        Admin::firstOrCreate(
            ['email' => 'admin@admin.com'],
            [
                'name' => 'Administrator',
                'password' => Hash::make('password123'),
                'email_verified_at' => now(),
            ]
        );
        User::firstOrCreate(
            ['email' => 'user@user.com'],
            [
                'name' => 'User',
                'password' => Hash::make('password123'),
                'email_verified_at' => now(),
            ]
        );
    }
}
