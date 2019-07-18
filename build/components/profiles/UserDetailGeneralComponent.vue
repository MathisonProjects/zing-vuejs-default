<template>
	<div>
		<div class='row'>
			<div class='col'>
				<h3>User Panel - <b>{{ user.username }}</b></h3>
			</div>
			<div class='col text-right'>
				<button type='button' class='btn btn-primary' @click='openModal("Message", "message", {})'>Send Message</button>
			</div>
			<div class='col-2 text-right'>
				<button type='button' class='btn btn-primary' @click='openModal("Connect", "connect", {})'>Connect</button>
			</div>
			<div class='col-2 text-right'>
				<button type='button' class='btn btn-success' @click='openModal("Use Account", "useAccount", {})'>Use Account</button>
			</div>
		</div>

		<div class='row'>
			<div class='col-4'>
				
				<img :src='user.image' class='w-100' />
				<ul class='list-group'>
					<li class='list-group-item'>
						<i class="fa fa-circle text-danger" v-if='user.status == "Inactive"' aria-hidden="true"></i>
						<i class="fa fa-circle text-success" v-if='user.status == "Active"' aria-hidden="true"></i>
						Currently {{ user.status }}
					</li>
					<li class='list-group-item'><b>Email:</b> {{ user.email }}</li>
					<li class='list-group-item'><b>ID:</b> {{ user.id }}</li>
					<li class='list-group-item'><b>Role:</b> {{ user.role }}</li>
					<li class='list-group-item'><b>Created:</b> {{ user.created_at }}</li>
					<li class='list-group-item'><b>Last Login:</b> {{ user.lastlogin }}</li>
				</ul>
			</div>
			<div class='col-8'>

				<ul class="nav nav-tabs mb-2" id="myTab" role="tablist">
					<li class="nav-item">
						<a class="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">General</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" id="forumActivity-tab" data-toggle="tab" href="#forumActivity" role="tab" aria-controls="forumActivity" aria-selected="false">Forum Activity</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" id="connections-tab" data-toggle="tab" href="#connections" role="tab" aria-controls="connections" aria-selected="false">Connections</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" id="feedback-tab" data-toggle="tab" href="#feedback" role="tab" aria-controls="feedback" aria-selected="false">Feedback</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" id="notes-tab" data-toggle="tab" href="#notes" role="tab" aria-controls="notes" aria-selected="false">My Notes</a>
					</li>
				</ul>
				<div class="tab-content" id="myTabContent">
					<div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
						<h3>General</h3>
						<table class='table table-sm table-bordered'>
							<tr>
								<td>Total Threads: 0</td>
								<td>Total Connections: 0</td>
							</tr>
							<tr>
								<td>Total Posts: 0</td>
								<td>Total Feedback: 0</td>
							</tr>
						</table>
					</div>
					<div class="tab-pane fade" id="forumActivity" role="tabpanel" aria-labelledby="forumActivity-tab">
						<h3>Forum Activity</h3>
						<h5>Threads</h5>
						<tableComponent :table='forumThreadsTable' @callback='callback' />
						<h5>Posts</h5>
						<tableComponent :table='forumPostsTable' @callback='callback' />
					</div>
					<div class="tab-pane fade" id="connections" role="tabpanel" aria-labelledby="connections-tab">
						<h3>Connections</h3>
						<tableComponent :table='connectionsTable' @callback='callback' />
					</div>
					<div class="tab-pane fade" id="feedback" role="tabpanel" aria-labelledby="feedback-tab">
						<h3>Feedback</h3>
						Given/Received
					</div>
					<div class="tab-pane fade" id="notes" role="tabpanel" aria-labelledby="notes-tab">
						<h3>Notes</h3>
						My notes on the account
					</div>
				</div>
			</div>
		</div>
		<ProfilesModalComponent v-if='displayModal' @close='closeModal' :params='modalParams' />
	</div>
</template>

<script>
	import ProfilesModalComponent from './ProfilesModalComponent'
	import TableComponent from '@/components/TableComponent'

	export default {
    	name: 'user-detail-general-component',
    	components: {
    		ProfilesModalComponent,
    		TableComponent
    	},
    	props: [
    		'expanded'
    	],
    	computed: {
    		user() {
    			return {
    				'visibility' : 'public', // public, site, friends, only me
    				'status'     : 'Inactive',
    				'username'   : 'Example User',
    				'image'      : 'https://placekitten.com/200/200',
    				'email'      : 'test@example.com',
    				'id'         : '1',
    				'role'       : 'User',
    				'created_at' : '2019-07-18 16:40:00',
    				'lastlogin'  : '2019-07-18 16:40:00'
    			}
    		},
    		forumThreadsTable() {
    			var fields = [
	    			{
	    				"key":"thread",
	    				"label":"Thread",
	    				"sortable":true,
	    				"class":"text-center"
	    			},
	    			{
	    				"key":"created",
	    				"label":"Created At",
	    				"sortable":true,
	    				"class":"text-center"
	    			},
	    			{
	    				"key":"view",
	    				"label":"View",
	    				"sortable":false,
	    				"class":"text-center"
	    			}
    			];

				return this.buildTable(fields, []);
    		},
    		forumPostsTable() {
    			var fields = [
	    			{
	    				"key":"thread",
	    				"label":"Thread",
	    				"sortable":true,
	    				"class":"text-center"
	    			},
	    			{
	    				"key":"post",
	    				"label":"Post",
	    				"sortable":true,
	    				"class":"text-center"
	    			},
	    			{
	    				"key":"postedAt",
	    				"label":"Posted At",
	    				"sortable":true,
	    				"class":"text-center"
	    			},
	    			{
	    				"key":"view",
	    				"label":"View",
	    				"sortable":false,
	    				"class":"text-center"
	    			}
    			];

				
				return this.buildTable(fields, []);
			},
    		connectionsTable() {
    			var fields = [
	    			{
	    				"key":"user",
	    				"label":"User",
	    				"sortable":true,
	    				"class":"text-center"
	    			},
	    			{
	    				"key":"mutual",
	    				"label":"Mutual",
	    				"sortable":true,
	    				"class":"text-center"
	    			},
	    			{
	    				"key":"since",
	    				"label":"Connection Since",
	    				"sortable":false,
	    				"class":"text-center"
	    			},
	    			{
	    				"key":"view",
	    				"label":"View",
	    				"sortable":false,
	    				"class":"text-center"
	    			}
    			];

				return this.buildTable(fields, []);
    		}
    	},
		data() {
			return {
				displayModal: false,
				modalParams : {
					title : '',
					modal : '',
					args  : {}
				}
			}
		},
		methods: {
			callback(params) {},
			buildTable(fields, items) {
				return {
					"striped":true,
					"bordered":true,
					"outlined":false,
					"small":true,
					"hover":false,
					"dark":false,
					"fixed":false,
					"footClone":false,
					"fields": fields,
					"items" : [],
					"caption":"",
					"htmlEscape":["view"],
					"pagination":true,
					"paginationQuantity":10,
					"filter":null,
					"ifEmpty":{
						"comment":true,
						"addToCaption":true,
						"seperator":"|",
						"text":"You do not have any records."},
					"url":false
				};
			},
			openModal(title, modal, args = {}) {
				this.modalParams = {
					title : title,
					modal : modal,
					args  : args
				};
				this.displayModal = true;
			},
			closeModal() {
				this.displayModal = false;
			}
		}
	};
</script>

<style scoped>

</style>