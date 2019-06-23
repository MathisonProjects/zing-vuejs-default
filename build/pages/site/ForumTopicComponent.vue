<template>
	<div>
		<h6>
			<span v-for='link in breadcrumbs'>
				<router-link :to='link'>{{ link }}</router-link> <span v-if='breadcrumbs[breadcrumbs.length - 1] != link'> > </span>
			</span>
		</h6>

		<div class='row'>
			<div class='col-3'>
				Total Posts: 
			</div>
			<div class='col-6'>
				<nav aria-label="Page navigation example">
					<ul class="pagination">
						<li class="page-item"><a class="page-link" href="#">Previous</a></li>
						<li class="page-item"><a class="page-link" href="#">1</a></li>
						<li class="page-item"><a class="page-link" href="#">Next</a></li>
					</ul>
				</nav>
			</div>
			<div class='col-3'>
				<div class='form-group'>
					<label>Per Page</label>
					<select class='form-control' v-model='perPage'>
						<option></option>
						<option value.num='10'>10</option>
						<option value.num='25'>25</option>
						<option value.num='50'>50</option>
						<option value.num='100'>100</option>
					</select>
				</div>
			</div>
		</div>
		<div class='row'>
			<div class='col'>

			</div>
			<div class='col-3'>
				<label>Order</label>
				<select class='form-control' v-model='newestToOldest'>
					<option></option>
					<option value='true'>Newest to Oldest</option>
					<option value='false'>Oldest to Newest</option>
				</select>
			</div>
		</div>

		<div class="card my-1">
			<div class="card-body">
				<div class='row'>
					<div class='col-6'>
						Post ID: #
					</div>
					<div class='col-6'>
						Post Date
					</div>
					<div class='col'>
						Profile
					</div>
					<div class='col'>
						<div class='my-1'>
							Comment
						</div>
						<div class='my-1'>
							User Footer
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class='row'>
			<div class='col'>

			</div>
			<div class='col-3'>
				<label>Order</label>
				<select class='form-control' v-model='newestToOldest'>
					<option></option>
					<option value='true'>Newest to Oldest</option>
					<option value='false'>Oldest to Newest</option>
				</select>
			</div>
		</div>
		<div class='row'>
			<div class='col-3'>
				Total Posts: 
			</div>
			<div class='col-6'>
				<nav aria-label="Page navigation example">
					<ul class="pagination">
						<li class="page-item"><a class="page-link" href="#">Previous</a></li>
						<li class="page-item"><a class="page-link" href="#">1</a></li>
						<li class="page-item"><a class="page-link" href="#">Next</a></li>
					</ul>
				</nav>
			</div>
			<div class='col-3'>
				<div class='form-group'>
					<label>Per Page</label>
					<select class='form-control' v-model='perPage'>
						<option></option>
						<option value.num='10'>10</option>
						<option value.num='25'>25</option>
						<option value.num='50'>50</option>
						<option value.num='100'>100</option>
					</select>
				</div>
			</div>
		</div>
		


	</div>
</template>

<script>

export default {
	name: 'forum-topic-component',
	components: {},
	computed: {
		params() {
			return this.$route.params;
		},
		breadcrumbs() {
			var breadcrumbs = [
				'/forum'
			];

			var count = 0;
			for (var i in this.params) {
				breadcrumbs.push(breadcrumbs[count] + '/' + this.params[i]);
				count++;
			}

			return breadcrumbs;
		},
		forums() {
			return this.$store.state.ForumStore.forum;
		},
		forum() {
			if (this.$store.state.ForumStore.isLoaded == true) {
				var thisForum = [];
				for (var i in this.forums) {
					var forum = this.forums[i].boards;
					if (forum[this.params.board]) {
						thisForum = forum[this.params.board];
						break;
					}
				}
				return thisForum;
			} else {
				return [];
			}
		},
	},
	data() {
		return {
			newestToOldest: true,
			page: 0,
			perPage: 10
		}
	},
	created() {},
	methods: {},
	watch: {},
	mounted() {}
};
</script>

<style scoped>

</style>