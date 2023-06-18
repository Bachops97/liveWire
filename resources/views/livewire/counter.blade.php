<div class="container">
    <div class="mt-4">
        <div style="display: flex; justify-content:space-between; width:80px">
            <button wire:click="decrement">-</button>
            <div>{{ $number }}</div>
            <button wire:click="increment">+</button>
        </div>
        <div class="mt-2">
            {{ $message }}
        </div>
    </div>
</div>
