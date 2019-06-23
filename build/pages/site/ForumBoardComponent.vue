<template>
	<div>
		<h6>
			<span v-for='link in breadcrumbs'>
				<router-link :to='link'>{{ link }}</router-link> <span v-if='breadcrumbs[breadcrumbs.length - 1] != link'> > </span>
			</span>
		</h6>

		<div class='row'>
			<div class='col-3'>
				Total Topics: {{ totalTopics }}
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

		<div class="card my-3" v-if='forum.topics'>
			<div class="card-header">
				<h3>{{ forum.title }}</h3>
				<p>{{ forum.description }}</p>
			</div>
			<div class="card-body">
				<div class='row'>
					<div class='col-6'>
						<b>Topic</b>
					</div>
					<div class='col'>
						<b>Posts</b>
					</div>
					<div class='col'>
						<b>Last Poster</b>
					</div>
					<div class='col-3'>
						<b>Times</b>
					</div>
				</div>
				<div class='row small' v-for='topic in forum.topics'>
					<div class='col-6'>
						<router-link :to='forumTopic(topic.id)'>{{ topic.title }}</router-link>
					</div>
					<div class='col'>
						{{ topic.postList.length }}
					</div>
					<div class='col'>
						{{ topic.lastPoster }}
					</div>
					<div class='col-3'>
						<div>Created: {{ topic.dates.created }}</div>
						<div>Last Post: {{ topic.dates.created }}</div>
					</div>
					<div class='col-12'>
						<hr />
					</div>
				</div>
			</div>
		</div>

		<div class='row'>
			<div class='col-3'>
				Total Topics: {{ totalTopics }}
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
	name: 'forum-board-component',
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
		totalTopics() {
			return null;
		}
	},
	data() {
		return {
			page: 0,
			perPage: 10
		}
	},
	created() {},
	methods: {
		forumTopic(id) {
			return this.breadcrumbs[1] + '/' + id;
		}
	},
	watch: {},
	mounted() {}
};
</script>

<style scoped>

</style>