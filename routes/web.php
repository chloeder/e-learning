<?php

use App\Http\Controllers;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('home/Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
  ]);
});



Route::middleware('auth')->group(function () {
  Route::get('/dashboard', [Controllers\DashboardController::class, 'index'])->name('dashboard');

  Route::resource('series', Controllers\SeriesController::class);
  Route::resource('articles', Controllers\ArticleController::class);

  Route::get('/profile', [Controllers\ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [Controllers\ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [Controllers\ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
