<template>
	<div>
		<h3>Blog</h3>
		
		<AddNewBlogComponent v-if='user && user.role.id == 2' />
		<DisplayBlogComponent :Blogs='Blogs' :Blog='Blog' />

		<ul class="pagination my-3" v-if='BlogsLoaded'>
          <li :class="prevClass"><a class="page-link" href="javascript:void(0)" @click='CurrentBlog--'>Previous</a></li>

          <li class="page-item" v-for='record, index in Blogs' v-if='index >= (Page * 10) && ((Page + 1) * 10) > index'><a class="page-link" href="javascript:void(0)" @click='SelectBlog(index)'>{{ index + 1 }}</a></li>

          <li :class="nextClass"><a class="page-link" href="javascript:void(0)" @click='CurrentBlog++'>Next</a></li>
      </ul>
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
    		prevClass() {
    			if (this.CurrentBlog == 0) {
    				return 'page-item disabled';
    			}
    			return 'page-item';
    		},
    		nextClass() {
    			if (this.CurrentBlog == (this.Blogs.length - 1)) {
    				return 'page-item disabled';
    			}
    			return 'page-item';
    		},
    		Page() {
    			return Math.floor(this.CurrentBlog / 10);
    		},
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