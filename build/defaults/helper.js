export default {
	install(Vue) {
    	Object.defineProperty(Vue.prototype, '$dbtable', { value: this });
    	this.reset();
	}
}