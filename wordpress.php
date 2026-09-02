<!-- products.blade.php -->
<div class="row">
    <div class="col-md-3">
        <div class="card filter-card">
            <form action="/filter" method="GET">
                <h5>فیلتر بر اساس برند</h5>
                @foreach($brands as $brand)
                    <div class="form-check">
                        <input type="checkbox" name="brand[]" value="{{ $brand->id }}">
                        <label>{{ $brand->name }}</label>
                    </div>
                @endforeach
                <hr>
                <h5>محدوده قیمت</h5>
                <input type="range" name="price" class="custom-range" min="0" max="5000000">
                <button type="submit" class="btn btn-gold w-100 mt-3">اعمال فیلتر</button>
            </form>
        </div>
    </div>
    
    <div class="col-md-9">
        <div class="product-grid">
            @forelse($products as $product)
                @include('partials.product-card', ['product' => $product])
            @empty
                <div class="not-found">کالایی یافت نشد.</div>
            @endforelse
        </div>
    </div>
</div></div>
