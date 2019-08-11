<template>
	<div>
		<h3>Social Media</h3>

		<div v-if='type == "profile"'>
			<div class="card">
				<div class="card-header">
					Selected Profile
				</div>
				<div class="card-body">

					- Photos
					- Bio
					- Interact
				</div>
			</div>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Photo</th>
						<th scope="col">Name</th>
						<th scope="col">Interact</th>
						<th scope="col">Last Activity</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Photo</td>
						<td>Dummy Name</td>
						<td>View Chat Message Block</td>
						<td>2019-08-11 09:03</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div v-if='type == "wall"'>
			Wall Oriented
		</div>
		<div v-if='type == "friends"'>
			Wall Oriented
		</div>


	</div>
</template>

<script>
	export default {
		name: 'social-media-component',
		components: {},
		props: [],
		computed: {
			type() {
				return 'profile';
				return 'wall';
				return 'friends';
			}
		},
		methods: {}
	};
</script>

<style scoped>

</style>