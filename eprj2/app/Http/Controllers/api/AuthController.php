<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response()->json(['success' => true, 'message' => 'Signup successful']);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('AuthToken')->plainTextToken;

            return response()->json(['success' => true, 'token' => $token, 'user' => $user]);
        }

        return response()->json(['success' => false, 'message' => 'Invalid credentials'], 401);
    }

    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response()->json('', 204);
    }

    // public function users()
    // {
    //     $users = [
    //         ['id' => 1, 'name' => 'John Doe', 'email' => 'john@example.com', 'created_at' => '2022-01-01'],
    //         ['id' => 2, 'name' => 'Jane Smith', 'email' => 'jane@example.com', 'created_at' => '2022-01-02'],
    //         ['id' => 3, 'name' => 'Bob Johnson', 'email' => 'bob@example.com', 'created_at' => '2022-01-03'],
    //     ];
    //     return response()->json(['data' => $users]);
    // }

    // public function user(Request $request)
    // {
    //     $id = $request->id;

    //     $user =  ['id' => 1, 'name' => 'John Doe', 'email' => 'john@example.com', 'created_at' => '2022-01-01'];

    //     return response()->json(['user' => $user]);
    // }
}
