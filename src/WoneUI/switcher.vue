<template>
  <div>
    <div switcher :class="[open ? 'pink' : 'orange']" @click="doSwitch">
      <div :class="[open ? 'left' : 'right', 'roundSpot']"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'switcher',
  data: () => ({
    open: false
  }),
  methods: {
    doSwitch() {
      this.open = !this.open;
      this.$emit('change',this.open)
    }
  }
};
</script>

<style lang="scss" scoped>
$height:1.2rem;
$containerWidth:3rem;
$roundSpotWidth:1.2rem;
.lable {
  margin-bottom: 0.5rem;
}
div[switcher] {
  width: $containerWidth;
  height: $height;
  padding: 2px;
  border-radius: 1.5rem;

  .roundSpot {
    height: $height;
    width:$roundSpotWidth;
    background-color: white;
    border-radius: 50%;
    transition: all 0.35s;
  }
  .left {
    transform: translateX(0);
  }
  .right {
    transform: translateX($containerWidth - $roundSpotWidth);
  }
  &.pink {
    background-color: pink;
    box-shadow: #f4adb9 0 0 5px;
  }
  &.orange {
    background-color: orange;
    box-shadow: #ed9c06 0 0 5px;
  }
}
</style>
