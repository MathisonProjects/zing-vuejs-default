<template>
    <div v-if='properTable != null'>
        <h3 v-if='properTable.header != null'>{{ table.header }}</h3>
        <b-table v-if='properTable != null' :items="properTable.items" :fields="properTable.fields"
            :striped="$Helper.looseFunctions.notNullOrFalse(properTable.striped)"
            :bordered="$Helper.looseFunctions.notNullOrFalse(properTable.bordered)"
            :outlined="$Helper.looseFunctions.notNullOrFalse(properTable.outlined)"
            :small="$Helper.looseFunctions.notNullOrFalse(properTable.small)"
            :hover="$Helper.looseFunctions.notNullOrFalse(properTable.hover)"
            :dark="$Helper.looseFunctions.notNullOrFalse(properTable.dark)"
            :fixed="$Helper.looseFunctions.notNullOrFalse(properTable.fixed)"
            :foot-clone="$Helper.looseFunctions.notNullOrFalse(properTable.footClone)"
            :pagination='properTable.pagination' :per-page='properTable.pagination ? properTable.paginationQuantity : 0' :current-page="properTable.pagination ? currentPage : 1">

            <template v-for='escapee in properTable.htmlEscape' v-bind:slot="escapee" slot-scope="data">
                <span><a v-bind:href='data.value.url' v-bind:target='data.value.target' @click='callback(data.value.function)'>{{ data.value.text }}</a></span>
            </template>

            <template slot="table-caption" v-if='properTable.caption != null || properTable.caption != ""'>
                <span v-if='properTable.items.length > 0'>{{ properTable.caption }}</span>
                <span v-if='properTable.items.length == 0 && properTable.ifEmpty.addToCaption == true'>{{ properTable.caption }} {{properTable.ifEmpty.seperator}} {{ properTable.ifEmpty.text }}</span>
                <span v-if='properTable.items.length == 0 && properTable.ifEmpty.addToCaption == false'>{{ properTable.ifEmpty.text }}</span>
            </template>
        </b-table>
        <b-pagination v-if='properTable.pagination == true' :total-rows="properTable.items.length" :per-page="properTable.paginationQuantity" v-model="currentPage" />
    </div>
</template>

<script>
    export default {
        name: 'table-component',
    	props: [
            'table'
    	],
		data() {
			return {
                properTable: null,
                currentPage: 1
            }
		},
        created() {
            this.properTable = this.$Helper.looseFunctions.cleanJson(this.table);
            this.getJson();
        },
		methods: {
            callback(call) {
                // this.$parent.callbackHandler(call);
            },
            getJson() {
                if (this.properTable && this.properTable.url) {
                    this.properTable.items = [];
                    axios.defaults.baseURL = '';
                    axios.get(this.properTable.urlLink).then(response => {
                        this.properTable.items = response.data;
                    });
                }
            }
		},
        watch: {
            table: function(newVal, oldVal) {
                this.properTable = this.$Helper.looseFunctions.cleanJson(this.table);
                this.getJson();
            }
        },
        mounted() {
            console.log('Template Table Component mounted.')
        }
    };
</script>
