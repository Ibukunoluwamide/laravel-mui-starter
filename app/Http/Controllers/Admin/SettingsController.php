<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function edit(Request $request)
    {
        return Inertia::render('admin/settings/index', [
            'admin' => $request->user('admin'),
        ]);
    }

    public function updateProfile(Request $request)
    {
        /** @var Admin $admin */
        $admin = $request->user('admin');

        $data = $request->validate([
            'name'  => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:admins,email,' . $admin->id],
        ]);

        $admin->update($data);

        return back()->with('success', 'Profile updated.');
    }

    public function updatePassword(Request $request)
    {
        /** @var Admin $admin */
        $admin = $request->user('admin');

        $data = $request->validate([
            'current_password'      => ['required', 'current_password:admin'],
            'password'              => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $admin->update([
            'password' => Hash::make($data['password']),
        ]);

        return back()->with('success', 'Password updated.');
    }
}