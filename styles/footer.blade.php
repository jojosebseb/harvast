<div id="quoteHandleParent">
	<div class="quote-wrapper">
		<div class="quote-handle-title">Request for Quote</div>
		<div class="quote-minimize"></div>
		<div class="quote-container">
			{{ Form::open(array('route' => 'sendquote', 'class' => 'form-horizontal', 'id' => 'formquoteM', 'method'=>'POST', 'files'=>true)) }}
				<select name="movingFrom" id="movingFromM" class="half-input">
					<option value="">Moving From</option>
					@if(count($countries)>0)
						@foreach($countries as $country)
							<option value="{{ $country->country_name }}">{{ $country->country_name }}</option>
						@endforeach
					@endif
				</select>
				<select name="movingTo" id="movingToM" class="half-input">
					<option value="">Moving To</option>
					@if(count($countries)>0)
						@foreach($countries as $country)
							<option value="{{ $country->country_name }}">{{ $country->country_name }}</option>
						@endforeach
					@endif
				</select>
				<input name="movingDate" id="movingDateM" type="text" class="custom-calendar" placeholder="Moving Date" readonly="">
				<input name="actualDate" id="actualDateM" type="hidden" class="custom-calendar actualDate" readonly="">
				<select name="yourTitle" id="yourTitleM" class="w20-input" style="cursor: pointer;">
					<option value="">Title</option>
					<option value="Mr">Mr</option>
					<option value="Mrs">Mrs</option>
					<option value="Ms">Ms</option>
					<option value="Dr">Dr</option>
				</select>
				<input name="yourFName" id="yourFNameM" type="text" class="w40-input" placeholder="First Name">
				<input name="yourLName" id="yourLNameM" type="text" class="w40-input" placeholder="Last Name">
				<input name="yourPhone" id="yourPhoneM" type="text" class="full-input" placeholder="Phone Number">
				<input name="yourEmail" id="yourEmailM" type="email" class="full-input" placeholder="Email Address">
				<div class="form-group">
					<div class="form-title">Services interested in</div>
					<ul class="checkbox-ul">
						<li><label><input type="checkbox" name="services[]" value="Moving Services" id="movingM" class="checkbox">Moving Services</label></li>
						<li><label><input type="checkbox" name="services[]" value="Relocation Services" id="immigrationM" class="checkbox">Relocation Services</label></li>
					</ul>
				</div>
				<textarea name="additional" id="additionalM" class="full-input" placeholder="Please input any additional information here" style="resize: none;"></textarea>
				<span class="error-formM" style="padding-left:10px;height:30px;line-height:30px;width:100%;"></span>
				<input type="submit" value="Submit" class="blue-btn">
			{{ Form::close() }}
		</div>
	</div>
</div>
<div id="footer">
	<div class="container">
		<div class="footer-title">Contact Us</div>
		<div class="footer-form">
			<form action="">
				<input type="text" class="full-input" placeholder="Full Name" />
				<input type="text" class="full-input" placeholder="Email Address" />
				<input type="text" class="full-input" placeholder="Subject" />
				<textarea name="name" class="full-input height" placeholder="Message"></textarea>
				<input type="submit" value="SUBMIT YOUR MESSAGE" class="full-input btn" />
			</form>
		</div>
		<div class="footer-contacts">
			<div class="contact-module">
				<div class="contact-group">
					@if(count($global)>0)
						@foreach($global as $data)
							@if($data->name=='telp')
								@if($data->value!='')
									<a href="tel:{{ $data->value }}">{{ $data->value }}</a>
								@endif
							@endif
						@endforeach
					@endif
				</div>
				<div class="contact-group">
					@if(count($global)>0)
						@foreach($global as $data)
							@if($data->name=='email')
								@if($data->value!='')
									<a href="mailto:{{ $data->value }}">{{ $data->value }}</a>
								@endif
							@endif
						@endforeach
					@endif
				</div>
				<div class="contact-group">
					@if(count($global)>0)
						@foreach($global as $data)
							@if($data->name=='address')
								@if($data->value!='')
									{{ $data->value }}
								@endif
							@endif
						@endforeach
					@endif
				</div>
			</div>
			<div class="contact-module">
				<ul>
					<li><a href="{{ url('/') }}">Home</a></li>
					<li><a href="{{ url('/service') }}">Our Services</a></li>
					<li><a href="{{ url('/about') }}">About</a></li>
					<li><a href="{{ url('/testimonial') }}">Testimonial</a></li>
					<li><a href="{{ url('/contact') }}">Contact</a></li>
				</ul>
			</div>
			<div class="contact-copyright">
				@if(count($global)>0)
					@foreach($global as $data)
						@if($data->name=='copyright')
							@if($data->value!='')
								{{ $data->value }}
							@endif
						@endif
					@endforeach
				@endif
			</div>
		</div>
	</div>
</div>
