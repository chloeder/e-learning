<?php

namespace App\Http\Controllers;

use App\Models\Tags;
use Illuminate\Http\Request;

class TagController extends Controller
{
  /**
   * This method is used to validate the series data.
   */
  private function validateSeries($request)
  {
    return $request->validate([
      'title' => 'required|unique:tags|min:3',
    ], [
      'title.required' => 'The title field is required.',
      'title.unique' => 'The title has already been taken.',
      'title.min' => 'The title must be at least 3 characters.',
    ]);
  }
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $tags = Tags::all();
    return inertia('tags/index', compact('tags'));
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return inertia('tags/create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validatedData = $this->validateSeries($request);
    Tags::create($validatedData);

    return to_route('tags.index');
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    $tag = Tags::find($id);

    return inertia('tags/show', compact('tag'));
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    $tag = Tags::find($id);

    return inertia('tags/edit', compact('tag'));
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    $validatedData = $this->validateSeries($request);
    Tags::find($id)->update($validatedData);

    return to_route('tags.index');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    Tags::destroy($id);

    return to_route('tags.index');
  }
}
