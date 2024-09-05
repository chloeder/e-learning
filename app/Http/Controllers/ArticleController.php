<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

  /**
   * This method is used to validate the series data.
   */
  private function validateSeries($request)
  {
    return $request->validate([
      'title' => 'required|unique:series|min:3',
      'description' => 'required|min:3',
      'content' => 'required|min:3',
      'tags' => 'required|min:3',
    ], [
      'title.required' => 'The title field is required.',
      'title.unique' => 'The title has already been taken.',
      'title.min' => 'The title must be at least 3 characters.',
      'description.required' => 'The description field is required.',
      'description.min' => 'The description must be at least 3 characters.',
      'content.required' => 'The content field is required.',
      'content.min' => 'The content must be at least 3 characters.',
      'tags.required' => 'The tags field is required.',
      'tags.min' => 'The tags must be at least 3 characters.',
    ]);
  }

  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $articles = Article::orderBy('title', 'asc')->paginate(10);

    return inertia('articles/index', compact('articles'));
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return inertia('articles/create');
  }

  /**s
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validationData = $this->validateSeries($request);

    $article = Article::create($validationData);
    return inertia('articles/index', compact('article'));
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    $article = Article::find($id);

    return inertia('articles/show', compact('article'));
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    $article = Article::find($id);

    return inertia('articles/edit', compact('article'));
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    $validationData = $this->validateSeries($request);

    $article = Article::find($id);
    $article->update($validationData);

    return inertia('articles/index', compact('article'));
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    $article = Article::find($id);

    $article->delete();
    return inertia('articles/index', compact('article'));
  }
}
