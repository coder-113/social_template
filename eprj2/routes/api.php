<?php

use App\Http\Controllers\Admin2\CategoryController;
use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\Admin2\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::apiResource('user', UserController::class);

    Route::apiResource('product', ProductController::class);

    Route::apiResource('category', CategoryController::class);
});


Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/images/{filename}', function ($filename) {

    $path = storage_path('app/public/images/' . $filename);

    if (!file_exists($path)) {
        abort(404);
    }

    $file = file_get_contents($path);
    $type = mime_content_type($path);

    return response($file)->header('Content-Type', $type);
});

// Route::get('/product/{id}', function ($id) {
//     $product = Product::find($id);
//     $product->image = basename($product->image);

//     return response()->json($product);
// });

// Route::get('/categories', [CategoryController::class, 'index']);