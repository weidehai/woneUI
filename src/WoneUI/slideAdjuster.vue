<template>
  <div>
    <div slideAdjuster>
      <div
        class="roundSpot"
        :style="roundSpotPositionStyle"
        @mousedown.stop.prevent="prepareRoundSpotMove"
        ref="roundSpot"
      ></div>
      <div class="bar"></div>
    </div>
  </div>
</template>

<script>
import {isValidArray} from '../util'
const STARTPOSITION = 16
const ENDPOSITION = 160
const BARLENGHT = 160
export default {
  name: "slideAdjuster",
  data: () => ({
    roundSpotPositionStyle: "",
    roundSpotLeft: STARTPOSITION
  }),
  props: {
    values: Array
  },
  methods: {
    changePosition(e) {
      function offsetHandler(offset) {
        return offset < 0 ? 0 : offset > 144 ? 144 : offset;
      }
      let gap = 160 / this.step;
      let offsetX = offsetHandler(e.offsetX);
      this.roundSpotPositionStyle = `transform:translateX(${offsetX}px)`;
      this.$emit("change", this.values[Math.round(e.offsetX / gap)]);
    },
    prepareRoundSpotMove(e) {
      let self = this,
        left = this.roundSpotLeft,
        startPositionX = e.pageX;
      function mouseMoveHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        let moveX = e.pageX - startPositionX;
        self.roundSpotLeft = calculate(moveX);
        self.$refs.roundSpot.style.left = self.roundSpotLeft + "px";
      }
      function mouseUpHandler(e) {
        clearEventListener();
        self.emitChangeEvent()
      }
      function clearEventListener() {
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      }
      function calculate(deltaX) {
        let position = left + deltaX;
        return position < STARTPOSITION ? STARTPOSITION : position > ENDPOSITION ? ENDPOSITION : position;
      }
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    },
    emitChangeEvent(){
      if(!isValidArray(this.values)) return
      let gap = BARLENGHT/this.values.length
      this.$emit("change", this.values[Math.floor((this.roundSpotLeft-STARTPOSITION) / gap)]);
    },
  }
};
</script>

<style lang="scss" scoped>
$roundSpotDiameter: 16px;
$barWidth: 160px;
.lable {
  margin-bottom: 0.5rem;
}
div[slideAdjuster] {
  width: $barWidth;
  padding: 16px;
  position: relative;
  background-color: #87dec8;
  box-shadow: palegreen 0 0 5px;
  border-radius: 1.2rem;
  .roundSpot {
    height: $roundSpotDiameter;
    width: $roundSpotDiameter;
    border-radius: 50%;
    background-color: #ff9800;
    position: absolute;
    bottom: 10px;
    box-shadow: #ff2f05 0px 0px 8px;
    transition: transform 0.3s;
  }
  .bar {
    width: $barWidth;
    height: 4px;
    border-radius: 5px;
    background-color: #fffb00;
  }
}
</style>
