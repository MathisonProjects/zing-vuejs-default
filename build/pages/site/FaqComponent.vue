<template>
	<div>
		<h3>Frequently Asked Questions</h3>

		<div class='row my-3'>

			<div class='col'>
				
				<div id="faqAccordion">

				  <div class="card" v-for='response, index in faq'>
				    <div class="card-header" :id="formatCollapse(index)">
				      <h5 class="mb-0">
				        <button class="btn btn-link" data-toggle="collapse" :data-target="targetId(index)" aria-expanded="false" :aria-controls="formatControlCollapse(index)">
				          {{ response.Q }}
				        </button>
				      </h5>
				    </div>
				    <div :id="formatControlCollapse(index)" class="collapse" :aria-labelledby="formatCollapse(index)" data-parent="#faqAccordion">
				      <div class="card-body">
				        {{ response.A }}
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
    	name: 'faq-component',
    	components: { },
    	computed: { },
    	props: [],
		data() {
			return {
				faq: this.$store.state.jsonStore.faq
			}
		},
		methods: {
			formatCollapse(name) {
				return name + '_faq_collapse';
			},
			formatControlCollapse(name) {
				return name + '_faq_collapse_control';
			},
			targetId(name) {
				return '#' + name + '_faq_collapse_control';
			}
		}
	};
</script>

<style scoped>

</style>