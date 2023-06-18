<div class="container">
    <form class="my-4 d-flex" wire:submit.prevent="addComment">
        <input type="text" class=" rounded border shadow p-2 mr-2 my-2 d-block w-75" placeholder="What's on you mind?"
            wire:model.lazy="new_comment">
        <div class="py-2 w-10">
            <button type="submit" class="py-2 rounded text-white w-100 mx-5" {{-- wire:click="addComment" --}}>
                Add
            </button>
        </div>
    </form>
    @foreach ($comments as $comment)
        <div class="rounded border shadow p-3 my-2">
            <div class="d-flex justify-content-start my-2">
                <div class="font-bold text-lg"> {{ $comment['user'] }}</div>
                <div class="mx-3"> {{ $comment['created_at'] }}</div>
            </div>
            <div class="text-gray-800">
                {{ $comment['body'] }}
            </div>
        </div>
    @endforeach
</div>
