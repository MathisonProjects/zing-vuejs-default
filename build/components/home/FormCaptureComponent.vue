<template>
	<div>
		<h3>Form Capture</h3>

		<div class="card">
			<div class="card-header">
				{{ formHeader }}
			</div>
			<div class="card-body">
				<div class='form-group' v-for='fieldItem in fieldSet'>
					<label :for='fieldItem.id'>{{fieldItem.label}} <span class='text-danger' v-if='fieldItem.required'>*</span></label>

					<input type='input' class='form-control' v-model='fields[fieldItem.variable]' v-if='fieldItem.type == "text"' />
					<input type='number' class='form-control' v-model='fields[fieldItem.variable]' v-if='fieldItem.type == "number"' />

					<select class='form-control' v-model='fields[fieldItem.variable]' v-if='fieldItem.type == "select"'>
						<option v-for='option in fieldItem.options' :value='option.value'>{{ option.text }}</option>
					</select>

					<div class="form-check" v-if='fieldItem.type == "radio"' v-for='option in fieldItem.options'>
						<input class="form-check-input" type="radio" :name="fieldItem.id" v-model='fields[fieldItem.variable]' :value="option.value">
						<label class="form-check-label">
							{{ option.text }}
						</label>
					</div>

					<div class="form-check" v-if='fieldItem.type == "check"' v-for='option in fieldItem.options'>
						<input class="form-check-input" type="checkbox" :name="fieldItem.id" v-model='fields[fieldItem.variable]' :value="option.value">
						<label class="form-check-label">
							{{ option.text }}
						</label>
					</div>

				</div>
				<a href='#' class="btn btn-primary" @click='submit' :disabled='invalidForm'>{{ submitText }}</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'form-capture-component',
		props: [],
		components: {},
		computed: {
			fieldSet() {
				return [
					{
						id      : 'ex1',
						required: true,
						default : '',
						label   : 'Example Field 1',
						variable: 'ex1',
						type    : 'text', // text, number, radio, check, select
						options : false
					},
					{
						id      : 'ex2',
						required: true,
						default : 0,
						label   : 'Example Field 2',
						variable: 'ex2',
						type    : 'number', // text, number, radio, check, select
						options : false
					},
					{
						id      : 'ex3',
						required: true,
						default : '',
						label   : 'Example Field 3',
						variable: 'ex3',
						type    : 'select', // text, number, radio, check, select
						options : [
							{
								value: null,
								text : '--Pick Option--'
							},
							{
								value: 'A',
								text: 'Option A'
							},
							{
								value: 'B',
								text: 'Option B'
							},
							{
								value: 'C',
								text: 'Option C'
							}
						]
					},
					{
						id      : 'ex4',
						required: true,
						default : null,
						label   : 'Example Field 4',
						variable: 'ex4',
						type    : 'radio', // text, number, radio, check, select
						options : [
							{
								value: null,
								text : '--Pick Option--'
							},
							{
								value: 'A',
								text: 'Option A'
							},
							{
								value: 'B',
								text: 'Option B'
							},
							{
								value: 'C',
								text: 'Option C'
							}
						]
					},
					{
						id      : 'ex5',
						required: false,
						default : [],
						label   : 'Example Field 5',
						variable: 'ex5',
						type    : 'check', // text, number, radio, check, select
						options : [
							{
								value: 'A',
								text: 'Option A'
							},
							{
								value: 'B',
								text: 'Option B'
							},
							{
								value: 'C',
								text: 'Option C'
							}
						]
					},


				];
			},
			invalidForm() {
				return true;
			}
		},
		data() {
			return {
				formHeader : 'Capture Form',
				submitText : 'Submit',
				fields: {
					ex1 : null,
					ex2 : 0,
					ex3 : null,
					ex4 : null,
					ex5 : []
				}
			}
		},
		created() {},
		methods: {
			submit() {
				var data = this.fields;
				console.log(data);
			}
		},
		watch: {},
		mounted() {}
	};
</script>

<style scoped>

</style>