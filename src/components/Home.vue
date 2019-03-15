<template>
  <div>
    <header></header>
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand">energizing breakfast</a>

      <form class="form-inline">
        <router-link class="nav-linkbtn btn btn-outline-success" to="/">首頁</router-link>
        <router-link class="nav-linkbtn btn btn-outline-success" to="/customer_order">後台系統</router-link>
        <router-link class="nav-linkbtn btn btn-outline-success" to="/product_list">產品列表</router-link>
      </form>
    </nav>


    <router-view></router-view>
    <!-- <section>
      <div class="container">
        <div class="row">
          <img class="pict_01" src="../assets/brooke-lark-93581-unsplash (1).jpg" alt="">
        </div>
      </div>
    </section> -->
    <aside></aside>
    <main>

      <article>
        <header>
          <h1></h1>
        </header>
        <p></p>
      </article>
    </main>

  </div>
</template>

<style scoped>
.pict_01 {
  width: 100%;
  height: 100vh;
}
</style>