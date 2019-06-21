<template>
	<div>
		<h3>Pricing</h3>

		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item">
				<a class="nav-link active" id="features-tab" data-toggle="tab" href="#features" role="tab" aria-controls="features" aria-selected="true">Features</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="comparisons-tab" data-toggle="tab" href="#comparisons" role="tab" aria-controls="comparisons" aria-selected="false">Comparison</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="services-tab" data-toggle="tab" href="#services" role="tab" aria-controls="services" aria-selected="false">Service</a>
			</li>
		</ul>
		<div class="tab-content" id="myTabContent">
			<div class="tab-pane fade show active" id="features" role="tabpanel" aria-labelledby="features-tab">
				
				<div class='row my-3'>
					<div class='col'>
						<div class="card text-center">
							<div class="card-header">
								<h3>Features</h3>
							</div>
							<div class="card-body">
								<h5 class="card-title">What do we have to offer?</h5>
								<p class="card-text">
									<div v-for='feature in featuresPromotion'>
										<h5>{{ feature.Header }}</h5>
										<p>{{ feature.Content }}</p>
									</div>
								</p>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div class="tab-pane fade" id="comparisons" role="tabpanel" aria-labelledby="comparisons-tab">
				<h4 class='my-3'>Comparison</h4>

				<table class='table'>
					<tr>
						<th>Features</th>
						<th class='text-center'>Zing Radio</th>
						<th class='text-center'>Pandora Plus</th>
						<th class='text-center'>Spotify</th>
					</tr>
					<tr v-for='competitor, index in competitors'>
						<th class='text-center'>{{ index }}</th>
						<td v-for='feature in competitor' class='text-center'>{{ feature }}</td>
					</tr>
				</table>
			</div>
			<div class="tab-pane fade" id="services" role="tabpanel" aria-labelledby="services-tab">
				<div class='row my-3'>
					<div class='col'>
						<div class="card text-center">
							<div class="card-header">
								<h3>Pricing</h3>
							</div>
							<div class="card-body">
								<h5 class="card-title">How would you like to be billed?</h5>
								<div class='row'>
									<div class='col'>
										<input type="radio" id="monthly" value="monthly" v-model="pricing">
										<label for="monthly">Monthly</label>
									</div>
									<div class='col'>
										<input type="radio" id="yearly" value="yearly" v-model="pricing">
										<label for="yearly">Yearly</label>
									</div>
									<div class='col'>
										<input type="radio" id="biyearly" value="biyearly" v-model="pricing">
										<label for="biyearly">Bi-Yearly</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h4 class='my-2'>Tiers</h4>
				<table class='table'>
					<tr>
						<th>Features</th>
						<th class='text-center'>Ad Supported <a href='#' title='Coming soon...'>[?]</a></th>
						<th class='text-center'>Standard</th>
						<th class='text-center'>Premium</th>
					</tr>
					<tr v-for='feature, index in features'>
						<th class='text-center'>{{ index }}</th>
						<td v-for='detail in feature'  class='text-center'>{{ detail }}</td>
					</tr>
					<tr v-if='pricing == "monthly"'>
						<th class='text-center'>Price</th>
						<td class='text-center'>$0.00</td>
						<td class='text-center'>$0.99</td>
						<td class='text-center'>$4.99</td>
					</tr>
					<tr v-if='pricing == "yearly"'>
						<th class='text-center'>Price</th>
						<td class='text-center'>$0.00</td>
						<td class='text-center'>$9.99</td>
						<td class='text-center'>$49.99</td>
					</tr>
					<tr v-if='pricing == "biyearly"'>
						<th class='text-center'>Price</th>
						<td class='text-center'>$0.00</td>
						<td class='text-center'>$17.99</td>
						<td class='text-center'>$89.99</td>
					</tr>

					<tr>
						<th></th>
						<td><button type='button' class='btn btn-success btn-block' disabled>Sign Up</button></td>
						<td><button type='button' class='btn btn-success btn-block' @click='SignUp("Standard")'>Sign Up</button></td>
						<td><button type='button' class='btn btn-success btn-block' @click='SignUp("Premium")'>Sign Up</button></td>
					</tr>
				</table>
			</div>
		</div>
		
	</div>
</template>

<script>

export default {
    	name: 'pricing-component',
    	components: {},
    	props: [ ],
    	computed: {},
		data() {
			return {
				pricing: 'monthly',
				features: {
					"Ads"                        : ['Yes', 'No', 'No'],
					"Pick Song"                  : ['Yes','Yes','Yes'],
					"Playlists"                  : ['Yes','Yes','Yes'],
					"Test New Features (Opt In)" : ['No','No','Yes'],
					"Offline Play"               : ['No','Yes','Yes'],
					"Phone App"                  : ['Planned','Planned','Planned'],
					"Desktop App"                : ['Planned','Planned','Planned']
				},
				competitors: {
					"Play any track"  : ['Yes'  , 'Yes'  , 'Yes'],
					"Ads"             : ['None' , 'None' , 'None'],
					"Unlimited skips" : ['Yes'  , 'Yes'  , 'Yes'],
					"Listen offline"  : ['Yes'  , 'Yes'  , 'Yes'],
					"Make playlists"  : ['Yes'  , 'Yes'  , 'Yes'],
					"Share playlists" : ['Yes'  , 'Yes'  , 'Yes'],
					"Search"          : ['Yes'  , 'Yes'  , 'Yes'],
					"Mobile-friendly" : ['Yes'  , 'Yes'  , 'Yes'],
					"Pick Song"       : ['Yes'  , 'No'  , 'yes'],
					"Library Size"    : ['22.5+ Million'  , '1+ Million'  , '30+ Million'],
					"Price per month" : ['$0.99', '$4.99', '$9.99']
				},
				featuresPromotion: [
					{
						Header  : "Example 1",
						Content : "This is an example feature"
					}
				]
			}
		},
		methods: {
			SignUp(tier) {
				this.$router.push({
				    path  : '/purchase'
				});
			}
		}
	};

</script>

<style scoped>

</style>