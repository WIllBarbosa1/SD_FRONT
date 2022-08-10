<template>
  <el-main class="header-container">
    <el-header class="header-container__wrapper">
      <img class="header__logo" :src="logo" alt="Logo UPE" />
      <el-menu
        :default-active="getDefaultSelection"
        :ellipsis="false"
        mode="horizontal"
        class="header__nav-bar"
      >
        <el-menu-item index="1">
          <router-link class="route__link" to="/">
            <el-icon><Folder /></el-icon>
            Notícias
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link class="route__link" to="/new">
            <el-icon><DocumentAdd /></el-icon>
            Nova Notícia
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
  </el-main>
</template>

<script>
import logo from "@/assets/upeLogo.png";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      logo: logo,
    };
  },
  methods: {
    ...mapGetters(["getCurrentNavIndex"]),
  },
  computed: {
    getDefaultSelection() {
      return this.getCurrentNavIndex();
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
