<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>LiveWire</title>
    @php
        $cache_version = env('CACHE_VERSION');
    @endphp

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/app.css?v={{ $cache_version }}">
    {{-- LiveWire styles --}}
    @livewireStyles
    {{-- used to hide the dom when loading or if the app is offline https://github.com/livewire/livewire/blob/43bfe091c909b7baf1e9fae7decbbe19ec7dd6ad/src/LivewireManager.php#L145 --}}

    {{-- LiveWire scripts --}}
    @livewireScripts
</head>

<body>
    @livewire('navigation-bar')
    @yield('content')
</body>
<script language="javascript" src="/js/require.js?v={{ env('CACHE_VERSION') }}"></script>
<script language="javascript" src="/js/init.js?v={{ env('CACHE_VERSION') }}"
    attr-cache-version="{{ env('CACHE_VERSION', NOW()) }}" attr-lang="{{ app()->getLocale() }}"></script>

</html>
