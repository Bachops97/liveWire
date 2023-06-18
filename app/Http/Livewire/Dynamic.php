<?php

namespace App\Http\Livewire;

use App\Models\CommentModel;
use App\Models\UserModel;
use Illuminate\Support\Carbon;
use Livewire\Component;
use Illuminate\Http\Request;
use Livewire\WithPagination;

class Dynamic extends Component
{

    use WithPagination;
    protected $paginationTheme = 'bootstrap';

    // public $comments;
    public $greetings;
    public $new_comment;
    public $user;

    public $image = [];
    public $add_image;

    public $create_remove_attempt_html;


    protected $rules = [
        'new_comment' => 'required|min:6',
        'image' => 'nullable'
    ];


    protected $listeners = ['ChosenImagefile' => 'handleImageFileUpload'];


    public function handleImageFileUpload($imageData)
    {
        $this->image[] = $imageData;
        $this->add_image = '';

        foreach ($this->image as $image) {
            $this->add_image .=
                '<div class="col-md-1 mt-4">
                <div class="image-container">
                    <img class="added-image" src="' . $image . '">
                </div>
            </div>';
        }
    }

    public function storeImage()
    {
        if (count($this->image) > 0) {
            dd($this->image);
        } else {
            return null;
        }
    }

    public function mount(Request $request)
    {
        $user = UserModel::where('cancelled', 0)->where('id', 57)->first();
        $this->user = $user;

        $user_fullname = $user['fullname'];
        $this->greetings = 'What\'s on you mind ' . $user_fullname;
    }

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }

    public function addComment()
    {
        $this->validate();

        $image = $this->storeImage();

        $new_comment = CommentModel::create([
            'comment' => $this->new_comment,
            'user_id' => $this->user['id'],
            'image' => $image
        ]);

        // $this->comments->prepend($new_comment);

        $this->new_comment = null;

        session()->flash('message', 'Comment successfully added 🤙');
    }

    public function createRemoveAttempt($comment_id)
    {
        $html =
            '
        <div class="overlay" wire:click="cancelRemove"></div>
        <div class="box-confirmation shadow">
        <div class="x-remove" wire:click="cancelRemove">
            <i class="fa-solid fa-x"></i>
        </div>
        <div class="mb-2">
            Are you sure you want to delete this comment?
        </div>
         <div class="d-flex">
            <div class="mr-3 cursor-pointer" wire:click="remove(' . $comment_id . ')">
                remove
            </div>
             <div class="cursor-pointer" wire:click="cancelRemove">
                cancel
            </div>
         </div>
         </div>';

        $this->create_remove_attempt_html = $html;
    }

    public function remove($comment_id)
    {
        $this->create_remove_attempt_html = '';
        $comment = CommentModel::find($comment_id);
        $comment->delete();

        // $this->comments = $this->comments->except($comment_id);

        session()->flash('message', 'Comment successfully removed 🗑');
    }

    public function cancelRemove()
    {
        $this->create_remove_attempt_html = '';
    }

    public function render()
    {
        $comments = CommentModel::where('cancelled', 0)->has('creator')->with('creator')->orderBy('updated_at', 'desc')->paginate(2);

        return view('livewire.dynamic', compact('comments'));
    }
}
