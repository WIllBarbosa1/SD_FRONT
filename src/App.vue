<template>
  <el-main class="view-container">
    <Header />
    <!-- <transition name="slide-fade" mode="out-in"> -->
    <router-view class="util-view" />
    <!-- </transition> -->
    <Footer />
  </el-main>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" src="./global.scss"></style>
