<template>
  <div>
    <header>
      <div class="container">
        <nav class="navbar navbar-light justify-content-between">
          <a class="navbar-brand">energizing breakfast</a>

          <form class="form-inline">
            <router-link class="nav-linkbtn btn btn-outline-success" to="/">首頁</router-link>
            <router-link class="nav-linkbtn btn btn-outline-success" to="/customer_order">後台系統</router-link>
            <router-link class="nav-linkbtn btn btn-outline-success" to="/product_list">產品列表</router-link>
          </form>
        </nav>
      </div>
    </header>

    <router-view></router-view>
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