<template>
  <div>
    <header>
      <div class="container">
        <nav class="navbar navbar-light justify-content-between">
          <i class="fas fa-utensils">
            <p>元氣早餐</p>
          </i>

          <form class="form-inline">
            <router-link class="nav-linkbtn btn btn-outline-success" to="/introduce">首頁</router-link>
            <router-link class="nav-linkbtn btn btn-outline-success" to="/customer_order">後台系統</router-link>
            <router-link class="nav-linkbtn btn btn-outline-success" to="/product_list">美味餐點</router-link>
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


<style lang="scss" scoped>

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}
.fa-utensils {
  display: inherit;
  font-size: 2rem;
  color: lightsalmon;
  p {
    margin: 0;
    font-size: 1.5rem;
    color: #28a745;
  }
}
</style>