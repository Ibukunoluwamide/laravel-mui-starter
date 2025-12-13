<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckAdminOrRedirect
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $guard = 'admin')
    {
        // If user is NOT authenticated as admin
        if (!auth($guard)->check()) {
            return redirect()->route('admin.login');
        }

        // Optional: If user is trying to access a "user area" while logged in as admin
        if ($request->is('user/*') && auth($guard)->check()) {
            return redirect()->route('admin.dashboard');
        }

        return $next($request);
    }
}
