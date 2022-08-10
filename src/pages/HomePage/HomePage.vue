<template>
  <el-main class="home-container">
    <h3 class="text-center">Notícias</h3>
    <div class="home-section__banner">
      <span>As notícia da UPE Caruaru em primeira mão.</span>
    </div>
    <div class="home-news">
      <h4 class="text-center">Ultimas Notícias</h4>
    </div>
    <div class="news-section">
      <div class="news-card" v-for="(item, index) in news">
        <h2>{{ item.title }}</h2>
        <p>{{ item.body }}</p>
        <span>{{ item.author }}</span>
        <span>{{ hadleFormatDate(item.created_at) }}</span>
      </div>
    </div>
  </el-main>
</template>

<script>
import { getNews } from "@/service/api";

export default {
  name: "HomePage",
  data() {
    return {
      news: [],
    };
  },
  methods: {
    async fetchGetNews() {
      try {
        const { data } = await getNews();
        this.news = data;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    hadleFormatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
  async created() {
    await this.fetchGetNews();
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
