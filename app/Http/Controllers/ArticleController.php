<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Tags;
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
      'tag_id' => 'required',
    ], [
      'title.required' => 'The title field is required.',
      'title.unique' => 'The title has already been taken.',
      'title.min' => 'The title must be at least 3 characters.',
      'description.required' => 'The description field is required.',
      'description.min' => 'The description must be at least 3 characters.',
      'content.required' => 'The content field is required.',
      'content.min' => 'The content must be at least 3 characters.',
      'tag_id.required' => 'The tag field is required.',
    ]);
  }

  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $articles = Article::with('tag')->get();
    return inertia('articles/index', compact('articles'));
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return inertia('articles/create', [
      'tags' => Tags::all(),
    ]);
  }

  /**s
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validationData = $this->validateSeries($request);
    strval($validationData['tag_id']);
    Article::create($validationData);

    return to_route('articles.index');
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

    return to_route('articles.index');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    $article = Article::find($id);
    $article->delete();

    return to_route('articles.index');
  }
}
