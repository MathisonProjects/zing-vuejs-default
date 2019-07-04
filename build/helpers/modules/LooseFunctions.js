
export default {
	cleanJson(original) {
		try {
			return JSON.parse(original);
		} catch (e) {
			return original;
		}
	},
	notNullOrFalse(value) {
	 	if (value != null && value != false) {
			return true;
		}
		return false;
	}
}
