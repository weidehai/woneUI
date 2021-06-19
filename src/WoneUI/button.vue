<template>
  <button @click="emitClick">{{ text }}</button>
</template>

<script>
export default {
  name: "woneButton",
  data: () => ({}),
  props: {
    text: {
      type: String,
      default: "按钮"
    }
  },
  methods: {
    emitClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  min-height: 2rem;
  min-width: 4rem;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #ff5722;
  color: gold;
  &:hover {
    background-color: #e91e63;
    color: white;
  }
}
</style>
