<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;


class RedirectIfNotAdmin {


public function handle($request, Closure $next, $guard = 'admin')
{
    if (!auth($guard)->check()) {
        return redirect()->route('admin.login');
    }
    return $next($request);
}

// app/Http/Middleware/RedirectIfAdmin.php (prevents admins using user area)
// public function handle($request, Closure $next)
// {
//     if (auth('admin')->check()) {
//         return redirect()->route('admin.dashboard');
//     }
//     return $next($request);

// }
}