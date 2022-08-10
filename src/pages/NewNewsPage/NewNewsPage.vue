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
          v-model="news"
          type="textarea"
          :rows="20"
          maxlength="1000"
          show-word-limit
        />
      </el-row>
      <el-row class="form-container__button">
        <el-button class="btn-icon" type="primary">
          <el-icon><CirclePlus /></el-icon>
          <span> Cadastrar </span>
        </el-button>
      </el-row>
    </div>
  </el-main>
</template>

<script>
export default {
  name: "NewNewsPage",
  data() {
    return {
      title: "",
      news: "",
    };
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
