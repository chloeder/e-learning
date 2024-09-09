<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Series;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


class HomeController extends Controller
{
  public function index()
  {
    return inertia('home/welcome', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'articles' => Article::with('tag')->latest()->get(),
      'series' =>
      Series::with('tag')->latest()->get(),
    ]);
  }
}
