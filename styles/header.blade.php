<div id="Navbar">
	<div class="navbar-logo-container">
		<a href="{{ url('/') }}"><img src="
			@if(count($global)>0)
				@foreach($global as $data)
					@if($data->name=='logo')
						@if($data->value!='')
							{{ url('/') }}/img/upload/{{ $data->value }}
						@else
							{{ url('/') }}/img/global/logo.png
						@endif
					@endif
				@endforeach
			@else
				{{ url('/') }}/img/global/logo.png
			@endif
		" class="harvast-logo"></a>
	</div>
	<div class="navbar-ul">
		<ul>
			<li><a href="{{ url('/') }}">Home</a></li>
			<li><a href="{{ url('/service') }}">Our Services</a></li>
			<li><a href="{{ url('/about') }}">About</a></li>
			<li><a href="{{ url('/testimonial') }}">Testimonial</a></li>
			<li><a href="{{ url('/contact') }}">Contact</a></li>
		</ul>
	</div>
	<div class="navbar-actions">
		<ul>
			<li>Customer Login</li>
			<li class="block-blue">Request for quote</li>
		</ul>
	</div>
	<div class="mobile-handle">
		<div class="mobile-lines nav-lines-1"></div>
		<div class="mobile-lines nav-lines-2"></div>
		<div class="mobile-lines nav-lines-3"></div>
	</div>
</div>
