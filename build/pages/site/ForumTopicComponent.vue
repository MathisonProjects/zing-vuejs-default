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
				<PaginationComponent />
			</div>
			<div class='col-3'>
				<PerPageComponent :perPage.sync='perPage' @pageChange='pageChangeComp' />
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

		<div class="card my-1" v-for='post in topic.postList'>
			<div class="card-body">
				<div class='row'>
					<div class='col-6'>
						Post ID: {{ post.id }}
					</div>
					<div class='col-6'>
						{{ post.time }}
					</div>
					<div class='col-2'>
						{{ post.user }}
					</div>
					<div class='col'>
						<div class='my-1'>
							{{ post.message }}
						</div>
						<div class='my-1'>
							{{ post.user }}
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
				<PaginationComponent />
			</div>
			<div class='col-3'>
				<PerPageComponent :perPage.sync='perPage' @pageChange='pageChangeComp' />
			</div>
		</div>
		


	</div>
</template>

<script>
	import PerPageComponent from '../../components/PerPageComponent'
	import PaginationComponent from '../../components/PaginationComponent'

export default {
	name: 'forum-topic-component',
	components: {
		PerPageComponent,
		PaginationComponent
	},
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
		topic() {
			if (this.$store.state.ForumStore.isLoaded == true) {
				return this.forum.topics[this.$route.params.topic];
			} else {
				return [];
			}
		}
	},
	data() {
		return {
			newestToOldest: true,
			page: 0,
			perPage: 10
		}
	},
	created() {},
	methods: {
		pageChangeComp(page) {
			this.perPage = page;
		}
	},
	watch: {},
	mounted() {}
};
</script>

<style scoped>

</style>