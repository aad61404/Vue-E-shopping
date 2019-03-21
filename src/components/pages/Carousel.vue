<template>
  <div>
    <!-- <img src="../../assets/unsplash.jpg" alt=""> -->
    <div class="container">
      <Slider animation="fade" v-model="sliderValue" :duration="5000" :speed="1000">
        <SliderItem v-for="(i, index) in list" :key="index" @click="changeIndex(1);" :style="i">
          <p style="line-height: 280px; font-size: 5rem; text-align: center;">
            <!-- Page{{ index + 1 }} -->
          </p>
        </SliderItem>
      </Slider>
    </div>

  </div>
</template>

<script>
import pic1 from "@/assets/carousel/breakfast1.jpg";
import pic2 from "@/assets/carousel/breakfast2.jpg";
import pic3 from "@/assets/carousel/breakfast3.jpg";
// import pic4 from "@/assets/carousel/breakfast4.jpg";

import { Slider, SliderItem } from "vue-easy-slider";
export default {
  components: {
    Slider,
    SliderItem
  },
  data() {
    return {
      list: [],
      sliderValue: 0
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  },
  mounted() {
    setTimeout(
      () =>
        (this.list = [
          {
            backgroundImage: `url(${pic1})`,
            // backgroundImage:
            //   "url(https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%",
          },
          {
            backgroundImage: `url(${pic2})`,
            // backgroundImage:
            //   "url(https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%",
          },
          {
            backgroundImage: `url(${pic3})`,
            // backgroundImage:
            //   "url(https://images.unsplash.com/photo-1526127230111-0197afe94d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80)",
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%"
          }
        ]),
      1000
    );
  }
};
</script>