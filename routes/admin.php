<?php
// routes/admin.php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')
    ->name('admin.')
    ->middleware('auth:admin')
    ->group(function () {
        Route::get('/dashboard', fn () => Inertia::render('admin/dashboard'))->name('dashboard');
        Route::get('/users', fn () => Inertia::render('admin/users'))->name('users');
        Route::get('/roles', fn () => Inertia::render('admin/roles'))->name('roles');
        Route::get('/settings', fn () => Inertia::render('admin/settings'))->name('settings');
        Route::get('/notifications', fn () => Inertia::render('admin/notifications'))->name('notifications');
        Route::get('/activity', fn () => Inertia::render('admin/activity-logs'))->name('activity');
        Route::get('/api-tokens', fn () => Inertia::render('admin/api-tokens'))->name('api-tokens');
        Route::get('/billing', fn () => Inertia::render('admin/billing'))->name('billing');
        Route::get('/team', fn () => Inertia::render('admin/team'))->name('team');
    });

    