<template>
	<div class='row my-3'>
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
</template>

<script>
	export default {
    	name: 'add-new-blog-component',
    	components: { },
    	props: [ ],
    	computed: {},
		data() {
			return {
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

<style scoped></style>