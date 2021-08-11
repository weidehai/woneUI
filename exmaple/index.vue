<template>
  <div>
    <woneDialog :visiable.sync="visiable"></woneDialog>
    <div class="exmaple-item">
      <woneButton @click="showDialog"></woneButton>
    </div>
    <div class="exmaple-item"><slide-adjuster></slide-adjuster></div>
    <div class="exmaple-item"><switcher></switcher></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    visiable: false
  }),
  methods: {
    showDialog() {
      this.visiable = true;
    }
  }
};
</script>

<style lang="scss">
.exmaple-item {
  margin-bottom: 1rem;
  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
