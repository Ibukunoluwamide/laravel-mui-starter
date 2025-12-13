<?php
// routes/admin.php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')
    ->name('admin.')
    ->middleware('checkAdmin')
    ->group(function () {
        Route::get('/dashboard', fn () => Inertia::render('admin/dashboard'))->name('dashboard');
        Route::get('/users', fn () => Inertia::render('admin/users'))->name('users');
        Route::get('/settings', fn () => Inertia::render('admin/settings'))->name('settings');
        Route::get('/api-tokens', fn () => Inertia::render('admin/api-tokens'))->name('api-tokens');
        Route::get('/billing', fn () => Inertia::render('admin/billing'))->name('billing');
    });

    