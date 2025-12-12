<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        if ($request->expectsJson()) {
            return null;
        }

        // Send admins to the admin login while keeping users on the default login
        return $request->routeIs('admin.*') || str_starts_with($request->path(), 'admin')
            ? route('admin.login')
            : route('login');
    }
}


