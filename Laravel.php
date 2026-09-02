<!-- resources/views/shop.blade.php -->
@extends('layouts.app')

@section('content')
<div class="shop-page">
    <div class="packaging-banner">
        هزینه ثابت بسته‌بندی تمامی سفارشات: ۱۰,۰۰۰ تومان
    </div>

    <div class="row">
        <aside class="col-md-3">
            @include('partials.filters', ['brands' => $brands])
        </aside>

        <main class="col-md-9">
            <div class="grid">
                @foreach($products as $product)
                    <div class="product-card">
                        <img src="{{ $product->image_url }}" alt="{{ $product->name }}">
                        <h3>{{ $product->name }}</h3>
                        <span class="price">{{ number_format($product->price) }} تومان</span>
                        <form action="{{ route('cart.add') }}" method="POST">
                            @csrf
                            <input type="hidden" name="id" value="{{ $product->id }}">
                            <button type="submit">افزودن به سبد لوکس</button>
                        </form>
                    </div>
                @endforeach
            </div>
            {{ $products->links() }} <!-- Pagination for speed -->
        </main>
    </div>
</div>
@endsection
