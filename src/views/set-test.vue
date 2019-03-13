<template>
    <page-dialog v-model="show">

        <div slot="footer">
            <span @click='sure'>确定</span>
            <span @click='cancle'>取消</span>
        </div>
    </page-dialog>
</template>

<script>
export default {
  data() {
    return {
      show: this.value,
    };
  },
  created() { },
  mounted() { },
  methods: {
    sure() {
      this.show = false;
    },
    cancle() {
      this.show = false;
    },
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit('input', val);
    },
  },

  props: {
    value: {},
  },
  components: {
    pageDialog: require('../base/page.vue').default,
  },
};
</script>
