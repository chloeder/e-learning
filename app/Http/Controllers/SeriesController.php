<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Series;
use Illuminate\Http\Request;

class SeriesController extends Controller
{

  /**
   * This method is used to validate the series data.
   */
  private function validateSeries($request)
  {
    return $request->validate([
      'title' => 'required|unique:series|min:3',
      'description' => 'required|min:3',
      'video_url' => 'required',
    ], [
      'title.required' => 'The title field is required.',
      'title.unique' => 'The title has already been taken.',
      'title.min' => 'The title must be at least 3 characters.',
      'description.required' => 'The description field is required.',
      'description.min' => 'The description must be at least 3 characters.',
      'video_url.required' => 'The video url field is required.',
    ]);
  }


  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $series = Series::all();

    return inertia('series/index', compact('series'));
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return inertia('series/create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validationData = $this->validateSeries($request);

    Series::create($validationData);

    return to_route('series.index');
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    $series = Series::find($id);

    return inertia('series/show', compact('series'));
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    $series = Series::find($id);

    return inertia('series/edit', compact('series'));
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    $validationData = $this->validateSeries($request);

    $series = Series::find($id);
    $series->update($validationData);

    return to_route('series.index');
  }



  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    $series = Series::find($id);
    $series->delete();

    return redirect()->route('series.index');
  }
}
