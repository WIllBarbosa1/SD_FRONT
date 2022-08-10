<template>
  <el-main class="news-container">
    <h3>Inserir Nova Notícia</h3>
    <div class="form-container">
      <el-row class="form-container__input">
        Título
        <el-input v-model="title" maxlength="50" show-word-limit />
      </el-row>
      <el-row class="form-container__input">
        Notícia
        <el-input
          v-model="body"
          type="textarea"
          :rows="20"
          maxlength="1000"
          show-word-limit
        />
      </el-row>
      <el-row class="form-container__input">
        Autor
        <el-input v-model="author" maxlength="50" show-word-limit />
      </el-row>
      <el-row class="form-container__button">
        <el-button
          class="btn-icon"
          type="primary"
          @click="handleSendNews"
          :disabled="getBtnState"
        >
          <el-icon><CirclePlus /></el-icon>
          <span> Cadastrar </span>
        </el-button>
      </el-row>
    </div>
  </el-main>
</template>

<script>
import { newNews } from "@/service/api";

export default {
  name: "NewNewsPage",
  data() {
    return {
      title: "",
      body: "",
      author: "",
    };
  },
  methods: {
    async fetchNewNews(data) {
      await newNews(data);
    },
    async handleSendNews() {
      try {
        const newNews = {
          title: this.title,
          body: this.body,
          author: this.author,
        };
        const { data } = await this.fetchNewNews(newNews);
        if (data) {
          this.news = data;
        }
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        this.body = "";
        this.title = "";
        this.author = "";
        alert("Sucesso.");
      }
    },
  },
  computed: {
    getBtnState() {
      if (
        this.title?.length === 0 ||
        this.body?.length === 0 ||
        this.author?.length === 0
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
