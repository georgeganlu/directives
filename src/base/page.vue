<template>
    <div class="dialog" v-if="show">
        <div class="wapper" :style='contains'>
            <div>这里面是具体的内容。</div>
            <slot name='footer'></slot>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: this.value,
    };
  },
  filters: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
  watch: {
    value(val) {
      this.show = val;
    },

  },
  computed: {
    contains() {
      switch (this.size) {
        case 'full':
          return { width: '80%', height: '75%' };
        case 'large':
          return { width: '70%', height: '65%' };
        case 'middle':
          return { width: '60%', height: '55%' };
        case 'mini':
          return { width: '50%', height: '45%' };
      }
    },
  },
  props: {
    value: {},
    size: {
      type: String,
      default: 'mini',
    },
  },
  components: {

  },
};
</script>


<style scoped lang='stylus'>
.dialog{
    position absolute;
    top 0px;
    left 0px;
    bottom 0px;
    right 0px
    background #000;
    opacity 0.3;
    display flex
    justify-content center;
    .wapper{
        margin-top 5%;
        background #fff;
        color #000
    }
}

</style>
