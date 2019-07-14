<template>
	<div v-if='BlogsLoaded'>
		<h3>Dev Diary</h3>
		
		<div class='row my-3' v-if='user && user.role.id == 2'>
			<div class='col'>

				<div class="card">
					<div class="card-header">
						New Blog <span @click='expandedPosting = false' v-if='expandedPosting'><a href='javascript:void(0)'>-</a></span><span @click='expandedPosting = true' v-if='!expandedPosting'><a href='javascript:void(0)'>+</a></span>
					</div>
					<div class="card-body" v-if='expandedPosting'>
						<h5>New Blog</h5>
						<div class='form-group'>
							<label>Title</label>
							<input type='text' class='form-control' v-model='newBlog.title' />
						</div>
						<div class='form-group'>
							<label>Tags</label>
							<input type='text' class='form-control' v-model='newBlog.tag' />
						</div>
						<div class='form-group'>
							<label>Short Version</label>
							<input type='text' class='form-control' v-model='newBlog.short' />
						</div>
						<div class='form-group'>
							<label>Full Blog</label>
							<textarea class="form-control" rows="3" placeholder="Thoughts on your work today?" v-model='newBlog.long'></textarea>
						</div>
						<button type='button' class='btn btn-primary' @click='CreateBlog'>Submit</button>
					</div>
				</div>
			</div>
		</div>

		<div class='row' v-if='Blogs.length > 0'>
			<div class='col'>
				<div class="card">
					<div class="card-header">
						{{ Blog.title }}
					</div>
					<div class="card-body blogForm" v-html='Blog.long'></div>
				</div>
			</div>
		</div>

		<div class='row' v-if='Blogs.length == 0'>
			<div class='col'>
				<div class="card">
					<div class="card-header">
						No Blogs?!
					</div>
					<div class="card-body">
						<p>You should go over to Jacob's <a href='https://twitter.com/mathisonproject' target='_BLANK'>twitter</a> or hit him up in his <a href='mailto:jacob@mathisonprojects.com'>email</a> to share his feelings!</p>
					</div>
				</div>
			</div>
		</div>

		<div class='row my-3'v-if='Blogs.length > 0'>
			<div class='col text-center'>
				<button type='button' class='btn btn-primary' v-if='CurrentBlog != 0' @click='CurrentBlog--'>Newer</button>
			</div>
			<div class='col text-center'>
				<button type='button' class='btn btn-primary' v-if='CurrentBlog != (Blogs.length - 1)' @click='CurrentBlog++'>Older</button>
			</div>
		</div>

		<div class="card my-2" v-for='record, index in Blogs' v-if='index >= (Page * 5) && ((Page + 1) * 5) > index'>
			<div class="card-header">
				<a href='javascript:void(0)' @click='SelectBlog(index)'>{{ record.created_at }}, {{ record.title }}</a>
			</div>
			<div class="card-body">{{ record.short }}</div>
		</div>

	</div>
</template>

<script>

export default {
    	name: 'blog-component',
    	components: {},
    	props: [ ],
    	computed: {
    		BlogsLoaded() {
    			return this.$store.state.blogStore.blogs.length > 0;
    		},
    		Blogs() {
    			return this.$store.state.blogStore.blogs.reverse();
    		},
    		Blog() {
    			return this.Blogs[this.CurrentBlog];
    		},
    		user() {
    			return this.$store.state.userStore.user;
    		}
    	},
		data() {
			return {
				Page: 0,
				CurrentBlog: 0,
				newBlog : {
					title: '',
					tag  : '',
					short: '',
					long : ''
				},
				expandedPosting: false
			}
		},
		methods: {
			SelectBlog(id) {
				this.CurrentBlog = id;
			},
			PageChange(amount) {
				if (this.Page != 0 && (this.Blogs.length/10) < (this.Page+1)) {
					this.Page += amount;
				}
			},
			CreateBlog() {
				this.addFooter();
				this.$store.dispatch('blogStore/addBlog', this.newBlog);
				this.ResetForm();
			},
			ResetForm() {
				this.newBlog = {
					title: '',
					tag  : '',
					short: '',
					long : ''
				};
			},
			addFooter() {
				this.newBlog.long += "<p>Thank you for following the development of Zing.</p><p><div>Jacob Mathison, Lead Developer of Zing</div><div>Twitter: <a href='https://twitter.com/mathisonproject'>@mathisonproject</a></div><div>Twitch: <a href='https://twitch.tv/mathisonprojects'>https://twitch.tv/mathisonprojects</a></div><div>Email: <a href='mailto:jacob@mathisonprojects.com'>jacob@mathisonprojects.com</a></div></p>";
				
			}
		}
	};

</script>

<style scoped>
	.blogForm {
		height: 400px;
		max-height: 400px;
		overflow-y: scroll;
	}
</style>