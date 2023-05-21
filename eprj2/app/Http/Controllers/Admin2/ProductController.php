<?php

namespace App\Http\Controllers\Admin2;

use App\Models\Product;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        $response = [];

        foreach ($products as $product) {
            $cate = Category::find($product->category_id);

            $response[] = [
                'id' => $product->id,
                'name' => $product->name,
                'slug' => $product->slug,
                'category_name' => $cate->name,
                'price' => $product->price,
                'image' => basename($product->image)
            ];
        }

        return response()->json($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'slug' => 'required|unique:products',
            'category_id' => 'required',
            'image' => 'required|image',
            'price' => 'required|numeric',
        ]);

        if (!$validatedData) {
            return response()->json(['success' => false]);
        }

        $product = new Product;
        $product->name = $request->input('name');
        $product->slug = $request->input('slug');
        $product->category_id = $request->input('category_id');
        $product->price = $request->input('price');

        // Get the uploaded file from the request
        $uploadedFile = $request->file('image');

        // Store the uploaded file in a public storage disk
        $filePath = $uploadedFile->store('public/images');

        $product->image = $filePath;
        $product->save();

        return response()->json(['success' => true, 'product' => $product], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'slug' => 'required',
            'category_id' => 'required',
            'price' => 'required|numeric',
        ]);

        if (!$validatedData) {
            return response()->json(['success' => false]);
        }

        $product->update($validatedData);

        return response()->json(['success' => true, 'product' => $product], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response("", 204);
    }
}
