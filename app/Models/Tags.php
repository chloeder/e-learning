<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
  use HasFactory, Sluggable;

  public function sluggable(): array
  {
    return [
      'slug' => [
        'source' => 'title'
      ]
    ];
  }

  protected $fillable = [
    'title',
    'slug',
  ];

  public function articles()
  {
    return $this->hasMany(Article::class);
  }
}
