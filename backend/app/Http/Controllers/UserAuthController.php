<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class UserAuthController extends Controller
{
    public function register(Request $request) {
        try {
            $registerUserData = $request->validate([
                'name' => 'required|string',
                'email' => 'required|string|email|unique:users',
                'password' => 'required|min:8'
            ]);
            $user = User::create([
                'name' => $registerUserData['name'],
                'email' => $registerUserData['email'],
                'password' => Hash::make($request['password']),
            ]);

            return response()->json([
                "message" => "User created successfully.",
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error creating task', 'message' => $e->getMessage()], 500);
        }
    }

    public function login(Request $request) {
        try {
            $loginUserData = $request->validate([
                'email'=>'required|string|email',
                'password'=>'required|min:8',
            ]);
            $user = User::where('email', $loginUserData['email'])->first();
            if(!$user || !Hash::check($loginUserData['password'], $user->password)) {
                return response()->json([
                    "message" => "Invalid credentials."
                ], 401);
            }
            $token = $user->createToken($user->name.'-AuthToken')->plainTextToken;
            return response()->json([
                "access_token" => $token,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error creating task', 'message' => $e->getMessage()], 500);
        }
    }

    public function logout() {
        try {
            auth()->user()->tokens()->delete();

            return response()->json([
                "message" => "Logged out.",
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error creating task', 'message' => $e->getMessage()], 500);
        }
    }

    public function getUser() {
        try {
            return response()->json(auth()->user());
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error creating task', 'message' => $e->getMessage()], 500);
        }

    }
}
