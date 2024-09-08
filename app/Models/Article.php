<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Article extends Model
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
    'description',
    'content',
    'tag_id'
  ];

  public function tag(): BelongsTo
  {
    return $this->belongsTo(Tags::class);
  }
}
