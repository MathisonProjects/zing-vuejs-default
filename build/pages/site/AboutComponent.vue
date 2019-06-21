<template>
	<div class='my-3 row'>
		<div class='col'>
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<li class="nav-item">
					<a class="nav-link active" id="AboutZingRadio-tab" data-toggle="tab" href="#AboutZingRadio" role="tab" aria-controls="AboutZingRadio" aria-selected="true">General Text with Image</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="TeamZingRadio-tab" data-toggle="tab" href="#TeamZingRadio" role="tab" aria-controls="TeamZingRadio" aria-selected="false">About Us Team</a>
				</li>

			</ul>
			<div class="tab-content" id="myTabContent">
				<div class="tab-pane fade show active py-3" id="AboutZingRadio" role="tabpanel" aria-labelledby="AboutZingRadio-tab">
					<img src="https://radio.zing.land/img/Jacob_Mathison_Profile.jpg" alt="Pic of Jacob" class="content-image-display">
					<p>This is a template for you to be able to use in any way that you wish.</p>

					<p>Have questions or suggestions? Drop me a line at <a href='mailto:jacob@mathisonprojects.com'>jacob@mathisonprojects.com</a> or at my Twitter, <a href='https://twitter.com/mathisonproject' target='_BLANK'>@MathisonProject</a>.</p>
				</div>
				<div class="tab-pane fade py-3" id="TeamZingRadio" role="tabpanel" aria-labelledby="TeamZingRadio-tab">
					<div class='row'>
						<div class='col-4' v-for='member in TeamMates'>
							<div class="card text-center">

  								<img class="card-img-top" :src="member.Photo" alt="Card image cap" v-if='member.Photo != ""'>
								<div class="card-header">
									<h3>{{ member.Name }}</h3>
								</div>
								<div class="card-body">
									<h5 class="card-title">{{ member.Title }}</h5>
									<p>{{ member.Description }}</p>
									<div v-if='member.Email != ""'>Email: <a href=''>{{ member.Email }}</a></div>
									<div v-if='member.Twitter != ""'>Twitter: <a :href='member.Twitter'>@{{ member.Twitter }}</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- <div class="tab-pane fade py-3" id="AboutJacobMathison" role="tabpanel" aria-labelledby="AboutJacobMathison-tab">
					<p>Filler Info for here2</p>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'about-component',
		props: [],
		components: {},
		computed: {
			TeamMates() {
				return [
					{
						"Name"        : "Jacob Mathison",
						"Title"       : "Lead Developer",
						"Photo"       : "https://radio.zing.land/img/Jacob_Mathison_Profile.jpg",
						"Description" : "28 years old and a man with a passion for technology, language, and bent on making people's lives a little happier.",
						"Email"       : "jacob@mathisonprojects.com",
						"Twitter"     : "mathisonproject"
					}
				];
			}
		},
		created() {},
		methods: {},
		data() {
			return {}
		}

	};
</script>

<style scoped>
	.content-image-display {
		border-radius: 50%!important;
		float: right;
		width: 300px;
	}
</style>