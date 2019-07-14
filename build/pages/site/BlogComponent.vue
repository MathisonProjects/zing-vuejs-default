<template>
	<div v-if='BlogsLoaded'>
		<h3>Dev Diary</h3>
		
		<AddNewBlogComponent v-if='user && user.role.id == 2' />
		<DisplayBlogComponent :Blogs='Blogs' :Blog='Blog' />

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
	import AddNewBlogComponent from '@/components/blog/AddNewBlogComponent';
	import DisplayBlogComponent from '@/components/blog/DisplayBlogComponent';

	export default {
    	name: 'blog-component',
    	components: {
    		AddNewBlogComponent,
    		DisplayBlogComponent
    	},
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
				CurrentBlog: 0
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
			}
		}
	};

</script>

<style scoped>

</style>