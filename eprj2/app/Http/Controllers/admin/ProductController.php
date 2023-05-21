<?php

namespace App\Http\Controllers\admin;

use App\Models\Product;
use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'slug' => ['required'],
            'category_id' => 'required',
            'price' => 'required|numeric',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image
            Storage::delete($product->image);

            $imgPath = $request->file('image')->store('public/images');

            $product->image = $imgPath;
        }

        $product->update($request->only(['name', 'slug', 'category_id', 'price']));

        return response()->json(['success' => true, 'product' => $product], 200);
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
