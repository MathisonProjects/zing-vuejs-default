import { store } from '@store';

export default {
	reset() {
		this.tableStructure = store.state.jsonStore.datatableView;
		this.tableStructure.fields = [];
		this.tableStructure.items  = [];
		this.tableStructure.htmlEscape = [];
		this.endFields = { view: false, edit: false, truncate: false, delete: false };
	},
	getDefaultField(val) {
		// Look into uppercasing all first characters?
		var label = val.replace(/_/g, ' ');
		return {
			key     : val,
			label   : label.charAt(0).toUpperCase() + label.slice(1),
			sortable: false,
			class   : 'text-center'
		}
	},
	getDefaultFunc() {
		return {
			function: 'callback',
			args    : {
				id: null
			}
		};
	},
	getDefaulFields(vals) {
		var fields = [];
		for (var i in vals) {
			var field = this.getDefaultField(vals[i]);
			field.sortable = true;
			fields.push(field);
		}
		return fields;
	},
	setEndFieldsEasy(fView, fEdit, fTruncate, fDelete) {
		if (fView == true) {
			this.setEndFields({
				key: 'view',
				val: true
			});
		}
		if (fEdit == true) {
			this.setEndFields({
				key: 'edit',
				val: true
			});
		}
		if (fTruncate == true) {
			this.setEndFields({
				key: 'truncate',
				val: true
			});
		}
		if (fDelete == true) {
			this.setEndFields({
				key: 'delete',
				val: true
			});
		}

	},
	setEndFields(args) {
		this.endFields[args.key] = args.val;
	},
	setFields(fields) {
		this.tableStructure.fields = fields;

		if (this.truthyCheck(this.endFields.view)) {
			this.tableStructure.fields[this.tableStructure.fields.length] = this.getDefaultField('view');
			this.setHtml('view');
		}

		if (this.truthyCheck(this.endFields.edit)) {
			this.tableStructure.fields[this.tableStructure.fields.length] = this.getDefaultField('edit');
			this.setHtml('edit');
		}

		if (this.truthyCheck(this.endFields.truncate)) {
			this.tableStructure.fields[this.tableStructure.fields.length] = this.getDefaultField('truncate');
			this.setHtml('truncate');
		}

		if (this.truthyCheck(this.endFields.delete)) {
			this.tableStructure.fields[this.tableStructure.fields.length] = this.getDefaultField('delete');
			this.setHtml('delete');
		}
	},
	truthyCheck(val) {
		if (val && val == true) {
			return true;
		}
		return false;
	},
	setHtml(val) {
		this.tableStructure.htmlEscape.push(val);
	},
	addNewItem(val, func = {}, otherHtml = []) {
		var item = val;

		for (var i in otherHtml) {
			this.setHtml(otherHtml[i]);
		}

		if (this.endFields.view && this.endFields.view == true) {
			item.view = {
				url     : 'javascript:void(0)',
				target  : false,
				text    : '<i class="fa fa-eye"></i>',
				function: func.view || this.getDefaultFunc()
			};
		}

		if (this.endFields.edit && this.endFields.edit == true) {
			item.edit = {
				url     : 'javascript:void(0)',
				target  : false,
				text    : '<i class="fa fa-edit"></i>',
				function: func.edit || this.getDefaultFunc()
			};
		}

		if (this.endFields.truncate && this.endFields.truncate == true) {
			item.truncate = {
				url     : 'javascript:void(0)',
				target  : false,
				text    : '<i class="fa fa-tint"></i>',
				function: func.truncate || this.getDefaultFunc()
			};
		}

		if (this.endFields.delete && this.endFields.delete == true) {
			item.delete = {
				url     : 'javascript:void(0)',
				target  : false,
				text    : '<i class="fa fa-trash"></i>',
				function: func.delete || this.getDefaultFunc()
			}
		}
		this.tableStructure.items.push(item);
	},
	// Can be used for direct changes to fields/items as well
	setDTSetting(args) {
		this.tableStructure[args.key] = args.val;
	}
}