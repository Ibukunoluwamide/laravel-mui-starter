<?php
// routes/admin.php

use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')
    ->name('admin.')
    ->middleware('checkAdmin')
    ->group(function () {
        Route::get('/dashboard', fn() => Inertia::render('admin/dashboard'))->name('dashboard');
        Route::get('/api-tokens', fn() => Inertia::render('admin/api-tokens'))->name('api-tokens');
        Route::get('/billing', fn() => Inertia::render('admin/billing'))->name('billing');
        Route::resource('/users', UserController::class);

        Route::get('/settings', fn() => Inertia::render('admin/settings'))->name('settings');
        Route::get('/settings', [SettingsController::class, 'edit'])
            ->name('settings.edit');
        Route::put('/settings/profile', [SettingsController::class, 'updateProfile'])
            ->name('settings.profile.update');
        Route::put('/settings/password', [SettingsController::class, 'updatePassword'])
            ->name('settings.password.update');
    });
