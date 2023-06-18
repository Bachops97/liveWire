<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommentModel extends Model
{
    use HasFactory;
    protected $table = 'lesson_comments';
    protected $fillable = ['comment', 'user_id'];

    public function creator()
    {
        return $this->belongsTo(UserModel::class, 'user_id');
    }
}
