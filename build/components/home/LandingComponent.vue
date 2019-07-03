<template>
	<div>
		<div id="carouselExampleControls" class="carousel slide mt-3" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block w-100" src="https://placekitten.com/g/1100/350" alt="First slide">
					<div class="carousel-caption d-none d-md-block">
						<h5>Lorem Ipsum</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue ornare, volutpat enim vel, tempor magna. Aenean id laoreet erat, sed tincidunt augue. Praesent tincidunt venenatis risus ut ultricies. Integer egestas nibh ut nisi congue, bibendum posuere mi facilisis. Curabitur venenatis tincidunt rhoncus. Proin tempus gravida odio, a facilisis nisi consequat id. Aenean eget ultricies eros. Integer vehicula dignissim malesuada. Integer lobortis eros eget sagittis facilisis. Nam volutpat tortor ac venenatis congue. Sed sed faucibus sapien. Etiam orci lacus, rutrum id urna ac, pulvinar lobortis orci. Aenean consectetur posuere tincidunt.</p>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="https://placekitten.com/g/1100/350" alt="Second slide">
					<div class="carousel-caption d-none d-md-block">
						<h5>Lorem Ipsum</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue ornare, volutpat enim vel, tempor magna. Aenean id laoreet erat, sed tincidunt augue. Praesent tincidunt venenatis risus ut ultricies. Integer egestas nibh ut nisi congue, bibendum posuere mi facilisis. Curabitur venenatis tincidunt rhoncus. Proin tempus gravida odio, a facilisis nisi consequat id. Aenean eget ultricies eros. Integer vehicula dignissim malesuada. Integer lobortis eros eget sagittis facilisis. Nam volutpat tortor ac venenatis congue. Sed sed faucibus sapien. Etiam orci lacus, rutrum id urna ac, pulvinar lobortis orci. Aenean consectetur posuere tincidunt.</p>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="https://placekitten.com/g/1100/350" alt="Third slide">
					<div class="carousel-caption d-none d-md-block">
						<h5>Lorem Ipsum</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue ornare, volutpat enim vel, tempor magna. Aenean id laoreet erat, sed tincidunt augue. Praesent tincidunt venenatis risus ut ultricies. Integer egestas nibh ut nisi congue, bibendum posuere mi facilisis. Curabitur venenatis tincidunt rhoncus. Proin tempus gravida odio, a facilisis nisi consequat id. Aenean eget ultricies eros. Integer vehicula dignissim malesuada. Integer lobortis eros eget sagittis facilisis. Nam volutpat tortor ac venenatis congue. Sed sed faucibus sapien. Etiam orci lacus, rutrum id urna ac, pulvinar lobortis orci. Aenean consectetur posuere tincidunt.</p>
					</div>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>

		<div class='row'>
			<div class='col-md-4 col-sm-12 mt-3' v-for='boxCard in landingCards'>
				<div class="card">
					<div class="card-header">
						{{ boxCard.header }}
					</div>
					<div class="card-body">
						<h5 class="card-title">{{ boxCard.title }}</h5>
						<p class="card-text">{{ boxCard.text }}</p>
						<router-link :to='boxCard.href' class="btn btn-primary" v-if='boxCard.button != false'>{{ boxCard.button }}</router-link>
					</div>
				</div>
			</div>
		</div>

		<div class='row my-3'>
			<div class='col'>
				<div id="accordionLandingBottom">
				  <div class="card" v-for='response, index in accordionBottom'>
				    <div class="card-header" :id="formatCollapse(index)">
				      <h5 class="mb-0">
				        <button class="btn btn-link" data-toggle="collapse" :data-target="targetId(index)" aria-expanded="false" :aria-controls="formatControlCollapse(index)">
				          {{ response.header }}
				        </button>
				      </h5>
				    </div>
				    <div :id="formatControlCollapse(index)" class="collapse" :aria-labelledby="formatCollapse(index)" data-parent="#accordionLandingBottom">
				      <div class="card-body">
				        {{ response.text }}
				      </div>
				    </div>
				  </div>

				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'landing-component',
		props: [],
		components: {},
		computed: {
			accordionBottom() {
				return [
					{
						header : 'Lorem Ipsum',
						text   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue ornare, volutpat enim vel, tempor magna. Aenean id laoreet erat, sed tincidunt augue. Praesent tincidunt venenatis risus ut ultricies. Integer egestas nibh ut nisi congue, bibendum posuere mi facilisis. Curabitur venenatis tincidunt rhoncus. Proin tempus gravida odio, a facilisis nisi consequat id. Aenean eget ultricies eros. Integer vehicula dignissim malesuada. Integer lobortis eros eget sagittis facilisis. Nam volutpat tortor ac venenatis congue. Sed sed faucibus sapien. Etiam orci lacus, rutrum id urna ac, pulvinar lobortis orci. Aenean consectetur posuere tincidunt.'
					},
					{
						header : 'Lorem Ipsum',
						text   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue ornare, volutpat enim vel, tempor magna. Aenean id laoreet erat, sed tincidunt augue. Praesent tincidunt venenatis risus ut ultricies. Integer egestas nibh ut nisi congue, bibendum posuere mi facilisis. Curabitur venenatis tincidunt rhoncus. Proin tempus gravida odio, a facilisis nisi consequat id. Aenean eget ultricies eros. Integer vehicula dignissim malesuada. Integer lobortis eros eget sagittis facilisis. Nam volutpat tortor ac venenatis congue. Sed sed faucibus sapien. Etiam orci lacus, rutrum id urna ac, pulvinar lobortis orci. Aenean consectetur posuere tincidunt.'
					},
					{
						header : 'Lorem Ipsum',
						text   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue ornare, volutpat enim vel, tempor magna. Aenean id laoreet erat, sed tincidunt augue. Praesent tincidunt venenatis risus ut ultricies. Integer egestas nibh ut nisi congue, bibendum posuere mi facilisis. Curabitur venenatis tincidunt rhoncus. Proin tempus gravida odio, a facilisis nisi consequat id. Aenean eget ultricies eros. Integer vehicula dignissim malesuada. Integer lobortis eros eget sagittis facilisis. Nam volutpat tortor ac venenatis congue. Sed sed faucibus sapien. Etiam orci lacus, rutrum id urna ac, pulvinar lobortis orci. Aenean consectetur posuere tincidunt.'
					},
					{
						header : 'Lorem Ipsum',
						text   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue ornare, volutpat enim vel, tempor magna. Aenean id laoreet erat, sed tincidunt augue. Praesent tincidunt venenatis risus ut ultricies. Integer egestas nibh ut nisi congue, bibendum posuere mi facilisis. Curabitur venenatis tincidunt rhoncus. Proin tempus gravida odio, a facilisis nisi consequat id. Aenean eget ultricies eros. Integer vehicula dignissim malesuada. Integer lobortis eros eget sagittis facilisis. Nam volutpat tortor ac venenatis congue. Sed sed faucibus sapien. Etiam orci lacus, rutrum id urna ac, pulvinar lobortis orci. Aenean consectetur posuere tincidunt.'
					},
					{
						header : 'Lorem Ipsum',
						text   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue ornare, volutpat enim vel, tempor magna. Aenean id laoreet erat, sed tincidunt augue. Praesent tincidunt venenatis risus ut ultricies. Integer egestas nibh ut nisi congue, bibendum posuere mi facilisis. Curabitur venenatis tincidunt rhoncus. Proin tempus gravida odio, a facilisis nisi consequat id. Aenean eget ultricies eros. Integer vehicula dignissim malesuada. Integer lobortis eros eget sagittis facilisis. Nam volutpat tortor ac venenatis congue. Sed sed faucibus sapien. Etiam orci lacus, rutrum id urna ac, pulvinar lobortis orci. Aenean consectetur posuere tincidunt.'
					}
				];
			},
			landingCards() {
				return [
					{
						header : 'Lorem Ipsum',
						title  : 'Lorem Ipsum dolor',
						text   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
						button : false, // If False, no button
						href   : ''
					},
					{
						header : 'Lorem Ipsum',
						title  : 'Lorem Ipsum dolor',
						text   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
						button : false, // If False, no button
						href   : ''
					},
					{
						header : 'Lorem Ipsum',
						title  : 'Lorem Ipsum dolor',
						text   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
						button : 'Lorem Ipsum!', // If False, no button
						href   : '/faq'
					}
				];
			}
		},
		data() {
			return {}
		},
		created() {},
		methods: {
			formatCollapse(name) {
				return name + '_landing_bottom_collapse';
			},
			formatControlCollapse(name) {
				return name + '_landing_bottom_collapse_control';
			},
			targetId(name) {
				return '#' + name + '_landing_bottom_collapse_control';
			}
		},
		watch: {},
		mounted() {}
	};
</script>

<style scoped>

</style>