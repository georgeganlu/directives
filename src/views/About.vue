<template>
  <div class="about">
     <div>
       <span class="span" @click="add">添加</span>
     </div>
     <set-test v-model="dialog"></set-test>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  created() {

  },
  mounted() {

  },
  methods: {
    add() {
      this.dialog = true;
    },
  },
  props: {

  },
  components: {
    setTest: require('./set-test.vue').default,
  },
};
</script>


<style scoped lang='stylus'>
.span{
  float left;
}

</style>
