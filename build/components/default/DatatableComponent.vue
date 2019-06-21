<template>
    <div v-if='properTable != null'>
        <h3 v-if='properTable.header != null'>{{ table.header }}</h3>


        <div class='row'>
            <div class='col-3'>
                <div class='form-group'>
                    <label for='filterData'>Filter</label>
                    <div class="input-group mb-3">
                        <input type='input' name='filterData' id='filterData' class='form-control' placeholder='Enter your search...' v-model='properTable.filter' />
                        <div class="input-group-append">
                            <button type='btn' class='btn btn-secondary' @disabled='!properTable.filter' @click="properTable.filter = ''">Clear</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-3'>
                <div class='form-group'>
                    <label>Per Page</label>
                    <select v-model='properTable.paginationQuantity' @change='currentPage = 1' class='form-control'>
                        <option :value='5'>5</option>
                        <option :value='10'>10</option>
                        <option :value='25'>25</option>
                        <option :value='50'>50</option>
                        <option :value='100'>100</option>
                        <option :value='250'>250</option>
                        <option :value='500'>500</option>
                        <option :value='1000'>1000</option>
                    </select>
                </div>
            </div>
        </div>
        <div class='row'>
            <div class='col'>
                <b-pagination v-if='properTable.pagination == true' :total-rows="properTable.items.length" :per-page="properTable.paginationQuantity" v-model="currentPage" />
            </div>
            <div class='col-3'>
                Record Count: {{ properTable.items.length }}
            </div>
        </div>

        <b-table v-if='properTable != null' :items="properTable.items" :fields="properTable.fields"
            :striped="$loose.notNullOrFalse(properTable.striped)"
            :bordered="$loose.notNullOrFalse(properTable.bordered)"
            :outlined="$loose.notNullOrFalse(properTable.outlined)"
            :small="$loose.notNullOrFalse(properTable.small)"
            :hover="$loose.notNullOrFalse(properTable.hover)"
            :dark="$loose.notNullOrFalse(properTable.dark)"
            :fixed="$loose.notNullOrFalse(properTable.fixed)"
            :foot-clone="$loose.notNullOrFalse(properTable.footClone)"
            :pagination='properTable.pagination'
            :per-page='properTable.pagination ? properTable.paginationQuantity : 0'
            :current-page="properTable.pagination ? currentPage : 1"
            :filter="properTable.filter">

            <template v-for='escapee in properTable.htmlEscape' v-bind:slot="escapee" slot-scope="data">
                <span><a v-bind:href='data.value.url' v-bind:target='data.value.target' @click='callback(data.value.function)' v-html='data.value.text'></a></span>
            </template>

            <template slot="table-caption" v-if='properTable.caption != null || properTable.caption != ""'>
                <span v-if='properTable.items.length > 0'>{{ properTable.caption }}</span>
                <span v-if='properTable.items.length == 0 && properTable.ifEmpty.addToCaption == true'>{{ properTable.caption }} {{properTable.ifEmpty.seperator}} {{ properTable.ifEmpty.text }}</span>
                <span v-if='properTable.items.length == 0 && properTable.ifEmpty.addToCaption == false'>{{ properTable.ifEmpty.text }}</span>
            </template>
        </b-table>
        <div class='row'>
            <div class='col'>
                <b-pagination v-if='properTable.pagination == true' :total-rows="properTable.items.length" :per-page="properTable.paginationQuantity" v-model="currentPage" />
            </div>
            <div class='col-3'>
                Record Count: {{ properTable.items.length }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'datatable-component',
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
            this.properTable = this.$loose.cleanJson(this.table);
            this.getJson();
        },
		methods: {
            callback(call) {
                call = JSON.parse(call);
                this.$parent.callbackHandler(call);
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
                this.properTable = this.$loose.cleanJson(this.table);
                this.getJson();
            }
        },
        mounted() {
            console.log('Template Table Component mounted.')
        }
    }
</script>
