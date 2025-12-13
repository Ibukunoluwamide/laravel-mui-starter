<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home/welcome');
})->name('home');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('user/dashboard'))->name('dashboard');
    Route::get('/user/billing', fn() => Inertia::render('user/billing'))->name('user.billing');
    Route::get('/user/invoices', fn() => Inertia::render('user/invoices'))->name('user.invoices');
    Route::get('/user/notifications', fn() => Inertia::render('user/notifications'))->name('user.notifications');
    Route::get('/user/api-tokens', fn() => Inertia::render('user/api-tokens'))->name('user.api-tokens');
    Route::get('/user/support', fn() => Inertia::render('user/support'))->name('user.support');
    Route::get('/settings/password', fn() => Inertia::render('settings/password'))->name('user-password.edit');
    Route::get('/pricing', fn() => Inertia::render('pricing'))->name('pricing');
    // ...other user settings
});

require __DIR__ . '/auth.php';
require __DIR__ . '/settings.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/admin-auth.php';
