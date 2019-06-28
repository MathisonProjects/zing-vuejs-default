<template>
	<div>
		<PaginationComponent :perPage='perPage' :count='clientsCount' @changePage='changePage' />
		<div class="card my-2" v-for='client, index in viewableClients'>
			<div class="card-body">
				<h5 class="card-title">{{ client.name }}</h5>
				<p class="card-text">
					<div class='row'>
						<div class='col-md-3'>
							<img :src='client.image' class='w-100' />
						</div>
						<div class='col-md-9'>
							<p v-html='client.description'></p>
							<p class='small'>Site: <a :href='client.site' target='_BLANK'>{{ client.site }}</a></p>
							<p class='small'>Email: {{ client.social.email }}</p>
							<p class='small'>Twitter: {{ client.social.twitter }}</p>
						</div>
					</div>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import PaginationComponent from '../../components/PaginationComponent';
	export default {
		name: 'clients-component',
		props: [],
		components: {
			PaginationComponent
		},
		computed: {
			viewableClients() {
				var clients = [];
				for (var i in this.clients) {
					if (i >= ((this.currentPage - 1) * this.perPage ) && i < (this.currentPage * this.perPage)) {
						clients.push(this.clients[i]);
					}
				}

				return clients;
			},
			clients() {
				return [
					{
						name       : 'Client 1',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							site   : 'https://mathisonprojects.com',
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					},
					{
						name       : 'Client 2',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							site   : 'https://mathisonprojects.com',
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					},
					{
						name       : 'Client 3',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					},
					{
						name       : 'Client 4',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							site   : 'https://mathisonprojects.com',
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					},
					{
						name       : 'Client 5',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							site   : 'https://mathisonprojects.com',
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					},
					{
						name       : 'Client 6',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					},
					{
						name       : 'Client 7',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							site   : 'https://mathisonprojects.com',
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					},
					{
						name       : 'Client 8',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							site   : 'https://mathisonprojects.com',
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					},
					{
						name       : 'Client 9',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					},
					{
						name       : 'Client 10',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							site   : 'https://mathisonprojects.com',
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					},
					{
						name       : 'Client 11',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							site   : 'https://mathisonprojects.com',
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					},
					{
						name       : 'Client 12',
						description: 'This is a description <a href="#">here</a>.',
						site       : 'https://github.com/Divinityfound/zing-vuejs-default',
						social     : {
							email  : 'jacob@mathisonprojects.com',
							twitter: 'MathisonProject'
						},
						image      : 'https://radio.zing.land/img/Jacob_Mathison_Profile.jpg',
					}
				]
			},
			clientsCount() {
				return this.clients.length;
			}
		},
		created() {},
		methods: {
			changePage(page) {
				this.currentPage = page;
			}
		},
		data() {
			return {
				currentPage: 1,
				perPage    : 10
			}
		}

	};
</script>

<style scoped>

</style>