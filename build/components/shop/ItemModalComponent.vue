<template>
	<div>
		<div class="modal fade show" id="itemModal" tabindex="-1" role="dialog" aria-labelledby="itemModalLabel" aria-hidden="true"  style="display: block;">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="itemModalLabel">{{ item.title }}</h4>
						<button type="button" class="close" aria-label="Close" @click="$emit('close')" data-dismiss='modal'>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class='row'>
							<div class='col-9'>
								<img :src='imageDisplay' class='w-100' />
							</div>
							<div class='col-3' v-if='item.images.preview.length > 0'>
								<a href='javascript:void(0)' @click='previewImage(item.images.largeDisplay)'><img :src='item.images.largeDisplay' class='w-100' /></a>
								<a href='javascript:void(0)' @click='previewImage(preview.link)' v-for='preview in item.images.preview'><img :src='preview.link' class='w-100 my-2' /></a>
							</div>
						</div>

						<div class='row'>
							<div class='col'>
								{{ finalPrice }}
							</div>
							<div class='col'>
								Review Count
							</div>
						</div>

						<div class='row'>
							<div class='col' v-if='item.subscription != false'>
								Subscriptions
							</div>
							<div class='col' v-if='item.options != false'>
								Options
							</div>
						</div>

						<p>
							{{ item.longdescription }}
						</p>

						Accordion of Review Comments
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="$emit('close')" data-dismiss='modal'>Close</button>
						<button type="button" class="btn btn-primary" @click="addToCart" data-dismiss='modal'>Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-backdrop fade show"></div>
		<div class="modal-backdrop fade show"></div>
	</div>
</template>

<script>
	export default {
		name: 'item-modal-component',
		props: [
			'item'
		],
		components: {},
		computed: {
			finalPrice() {
				return '$' + (this.item.price/100).toFixed(2);
			}
		},
		created() { },
		methods: {
			previewImage(image) {
				this.imageDisplay = image;
			},
			addToCart() {
				this.$emit('addToCart', this.item);
			}
		},
		data() {
			return {
				preview      : 0,
				imageDisplay : this.item.images.largeDisplay,
				options      : {}
			}
		}

	};
</script>

<style scoped>
	.modalBackground {
		background-color: black;
		opacity: 0.5;
		background-size: cover;
	}
</style>