<template>
    <div>
        <table class="table-class">
            <thead>
                <th v-for="(item) in thlist" :key="item">
                    {{item}}
                </th>
            </thead>

            <tbody>
                <tr v-for="(item, index) in trlist" :key='index' :data-set='index' v-drag='drag2'>
                    <td v-for="(value, key) in item" :key="key">
                        {{value}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            thlist:['语文', '数学', '英语', '生物', '地理', '化学'],
            trlist:[],
        }
    },
    created() {
        this.init();
    },
    mounted() {},
    methods:{
        init() {
            for(let i =0; i < 9; i++) {
                let obj = {};                                
                for(let k = 0; k < 6; k ++) {
                    let key = 'key' + k;
                    obj[key] = obj[key] || (73 + i);                    
                }
                this.trlist.push(obj);
            }
        },
        drag2(start, end) {       
            let tr = this.trlist[start];
            this.trlist.splice(start, 1);
            this.trlist.splice(end, 0, tr);
        }
    }
}
</script>

<style scoped lang='stylus'>
.table-class{
    width:100%;
    border-collapse collapse;
    th,td{
        border 1px solid #cccccc
    }
}

</style>
