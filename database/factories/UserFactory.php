<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->optional()->phoneNumber(),
            'avatar' => $this->faker->optional()->imageUrl(200, 200, 'people'),
            'bio' => $this->faker->optional()->sentence(12),

            'email_verified_at' => now(),
            'password' => Hash::make('password123'),
            'remember_token' => Str::random(10),

            'status' => $this->faker->randomElement(['active', 'inactive']),

            'last_login_at' => $this->faker->optional()->dateTimeBetween('-30 days'),

            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
