<template>
	<div>
		<ItemModalComponent :item='items[selectedItem]' v-if='displayModal' @addToCart='addToCart' @close="displayModal = false"  />

		<div class='row'>
			<div class='col-4'>
				<h3>Zing Shop</h3>
			</div>
			<div class='col-8'>
				<PerPageComponent :perPage.sync='perPage' @pageChange='pageChange' />
			</div>
			<div class='col-4'>
				<div class="card my-2" v-for='filter in filters'>
					<div class="card-header">
						<h3>{{ filter.title }}</h3>
					</div>
					<div class="card-body">

						<div class='row' v-if='filter.type == "range"'>
							<div class='col'>
								<input type='text' :placeholder='filter.subtext.placeholderSmaller' class='form-control' />
							</div>
							<div class='col-2 text-center'>
								-
							</div>
							<div class='col'>
								<input type='text' :placeholder='filter.subtext.placeholderBigger' class='form-control' />
							</div>
						</div>

						<div class='row' v-if='filter.type == "options"'>
							<div class='col'>
								<div class="form-check" v-for='option in filter.options'>
									<input class="form-check-input" type="checkbox" :name="filter.id" v-model='filterData[filter.field]' :value="option.value">
									<label class="form-check-label">
										{{ option.text }}
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

			<div class='col'>
				<div class='row'>
					<div class='col-sm-12 col-md-4 my-2' v-for='item, index in items'>
						<div class="card">
							<img class="card-img-top" :src="item.images.smallDisplay" :alt="item.images.alt">
							<div class="card-body">
								<h5 class="card-title"><a href='#' @click='viewItem(index)'>{{ item.title }}</a></h5>
								<p class="card-text">{{ item.shortdesc }}</p>
								<p class="card-text" v-if='item.subscription == false'>${{ (item.price/100).toFixed(2) }}</p>
								<button type='button' class="btn btn-primary" @click='viewItem(index)'>View</button>
								<button type='button' class="btn btn-primary" @click='addToCart(index)' v-if='item.options == false'>Add to Cart</button>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	import PerPageComponent from '../../components/PerPageComponent';
	import ItemModalComponent from '../../components/shop/ItemModalComponent';
	export default {
		name: 'shop-component',
		props: [],
		components: {
			PerPageComponent,
			ItemModalComponent
		},
		computed: {
			filters() {
				return [
					{
						id     : '',
						title  : 'Price',
						type   : 'range',
						subtext: {
							placeholderSmaller: 'Price <',
							placeholderBigger: '< Price'
						},
						field  : '',
						options: false
					},
					{
						id     : 'categories',
						title  : 'Categories',
						type   : 'options', // Range, Options
						subtext: false,
						field  : '',
						options: [
							{
								value: 'cat1',
								text : 'cat1'
							},
							{
								value: 'cat2',
								text : 'cat2'
							},
							{
								value: 'cat3',
								text : 'cat3'
							}
						]
					}
				]
			},
			items() {
				return this.$store.state.ShopStore.items;
			},
			filteredItems() {
				var items = this.items;
			}
		},
		created() {},
		methods: {
			pageChange(page) {
				this.perPage = page;
			},
			viewItem(index) {
				this.selectedItem = index;
				this.displayModal = true;
			},
			addToCart(item, options = null) {
				console.log(item);
				this.$store.dispatch('CartStore/addToCart', { item: item, options: options });
				this.$funcs.doAlert('addedToCart');
			}
		},
		data() {
			return {
				filterData   : {},
				perPage      : 10,
				selectedItem : 0,
				displayModal : false
			}
		}

	};
</script>

<style scoped>

</style>