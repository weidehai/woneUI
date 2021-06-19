<template>
  <div
    mask
    :class="[{ lowIndex: !visiable }, 'fixed']"
    v-show="visiable"
    @click.self="close"
  >
    <div dialog :class="['centerText', leave ? 'aScaleLeave' : 'aScaleEnter']">
      <div title>
        <p>{{ title }}</p>
      </div>
      <div message>
        <p>{{ message }}</p>
      </div>
      <div button>
        <woneButton text="取消" @click="close"></woneButton>
        <woneButton text="确定" @click="close" class="confirm"></woneButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "woneDialog",
  data: () => ({
    leave: false
  }),
  props: {
    message: {
      type: String,
      default: "我是一个对话框"
    },
    title: {
      type: String,
      default: "对话框"
    },
    visiable: Boolean
  },
  methods: {
    close() {
      this.leave = true;
      setTimeout(() => {
        this.$emit("update:visiable", false);
        this.leave = false;
      }, 20);
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin flexDoubleCenter($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}
div[mask] {
  height: 100vh;
  width: 100vw;
  @include flexDoubleCenter;
}
.lowIndex {
  z-index: -999;
}
div[dialog] {
  width: 350px;
  height: 200px;
  background-color: #f7f1f0;
  box-shadow: #898a80 0 0 5px;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  animation-duration: 0.15s;
  animation-fill-mode: forwards;
  div[title] {
    height: 20%;
    @include flexDoubleCenter;
  }
  div[message] {
    height: 60%;
    @include flexDoubleCenter;
  }
  div[button] {
    height: 20%;
    display: flex;
    justify-content: flex-end;
    .confirm {
      margin-left: 9px;
    }
  }
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
}
.centerText {
  text-align: center;
}
.aScaleEnter {
  animation-name: aScaleEnter;
}
.aScaleLeave {
  animation-name: aScaleLeave;
}
@keyframes aScaleEnter {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@keyframes aScaleLeave {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}
</style>
