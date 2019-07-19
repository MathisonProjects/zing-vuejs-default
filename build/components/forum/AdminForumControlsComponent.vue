<template>
	<div>
		<div class="card my-3">
			<div class="card-header">
				<div class='row'>
					<div class='col'>
						<h3>Forum Administrative Panel</h3>
					</div>
					<div class='col-2 text-right'>
						<ExpandShrinkComponent @expand='forumExpand = !forumExpand' :expanded.sync='forumExpand' />
					</div>
				</div>
			</div>
			<div class="card-body" v-if='forumExpand'>
				<div class='row'>
					<div class='col' v-if='section == "area"'>
						<button type='button' class='btn btn-primary'>Create Area</button>
					</div>
					<div class='col' v-if='section == "board"'>
						<button type='button' class='btn btn-primary'>Create Board</button>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import ExpandShrinkComponent from '@/components/ExpandShrinkComponent';

	export default {
		name: 'admin-forum-controls-component',
		props: [
			'section'
		],
		components: {
    		ExpandShrinkComponent
		},
		computed: {
			forums() {
				return this.$store.state.forumStore.forum;
			}
		},
		created() {},
		methods: {
			getUrl(id) {
				return '/forum/' + id;;
			}
		},
		data() {
			return {
				forumExpand: false
			}
		}

	};
</script>

<style scoped>

</style>