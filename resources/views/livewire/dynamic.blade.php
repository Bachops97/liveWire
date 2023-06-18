<div class="container">

    <div class="row">
        {!! $add_image !!}
    </div>

    <input type="file" id="image_upload" wire:change="$emit('Chosenfile')" multiple accept="image/*">

    <form class="my-4 d-flex align-items-center" wire:submit.prevent="addComment">
        <input type="text" class=" rounded border shadow p-2 mr-2 my-2 d-block w-75" placeholder="{{ $greetings }}"
            wire:model.lazy="new_comment">

        <div style="width: 10%; margin-left:20px;">
            <div class="file-upload-block">
                <label for="image_upload" class="input-form">
                    <div class="file-info-block">
                        <div class="ext-ico-trade">
                            <i class="fa-solid fa-file-arrow-up"></i>
                        </div>
                        <div class="upload-info">
                            <div class="upload-name-trade">
                                Attach
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </div>


        <div class="py-2" style="width: 10%; margin-left:20px;">
            <button type="submit" class="py-2 rounded text-white w-100 ">
                Add
            </button>
        </div>
    </form>
    <div>
        @if (session()->has('message'))
            <div class="alert alert-success">
                {{ session('message') }}
            </div>
        @endif
    </div>
    @error('new_comment')
        <span class="error">{{ $message }}</span>
    @enderror
    @foreach ($comments as $comment)
        <div class="rounded border shadow p-3 my-4">
            <div class="d-flex justify-content-between my-2 w-100">
                <div class="d-flex">
                    <div class="font-bold text-lg"> {{ $comment->creator->fullname }}</div>
                    <div class="mx-3"> {{ $comment['created_at']->diffForHumans() }}</div>
                </div>
                <div class="cursor-pointer" wire:click="createRemoveAttempt({{ $comment->id }})">
                    <i class="fa-solid fa-x"></i>
                </div>
            </div>
            <div class="text-gray-800">
                {{ $comment['comment'] }}
            </div>
        </div>
    @endforeach
    {!! $create_remove_attempt_html !!}
    {!! $comments->links() !!}

    <script>
        window.livewire.on('Chosenfile', () => {
            let files_dom = document.getElementById('image_upload');
            let uploaded_files = files_dom.files;

            Object.keys(uploaded_files).forEach(function(key) {
                let reader = new FileReader();
                reader.onloadend = () => {
                    Livewire.emit('ChosenImagefile', reader.result)
                }
                reader.readAsDataURL(uploaded_files[key]);
            });

        })
    </script>
</div>
