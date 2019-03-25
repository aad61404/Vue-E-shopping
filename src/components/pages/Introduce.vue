<template>
  <div>

    <div class="container">
      <div class="row">
        <div class="col-12 wrap">
          <img class="head_1pic" src="../../assets/home/head_1.jpg" alt="">
        </div>
        <h4 class="good">Good morning</h4>

      </div>
  <hr>
      <div class="row ">
        <div class="col-6">
          <h3 style="text-align: left;">你知道嗎....</h3>
          <p>在北歐，工作再忙父母也至少要有一個人陪孩子吃早餐，這和中國家長給孩子塞上幾塊錢到外面買早點完全不一樣。對於一個家庭來說，一頓豐盛的早餐背後所蘊含的意味遠遠多於其本身的價值。</p>
        </div>

        <div class="col-3">
          <img class="pict_02 pictan" src="../../assets/home/cooker.png" alt="">
        </div>
        <div class="col-3">
          <img class="pict_02 pictan1" src="../../assets/home/breakfast-9.png" alt="">
        </div>
      </div>
      <hr>
      <div class="row ">
        <div class="col-4">
          <img class="pict_02" src="../../assets/home/egg.png" alt="">
          <h3>無蛋不歡</h3>
          <p>蛋白質是維持人體精力充沛、反應靈敏必不可少的物質，因此早餐宜吃富含蛋白質的食物，例如牛奶、豆漿、雞蛋、雞肉、豆制品等。 蔬菜和水果能為我們補充維生素和膳食纖維。</p>
        </div>
        <div class="col-4">
          <img class="pict_02" src="../../assets/home/egg.png" alt="">
          <h3>能量加油站</h3>
          <p>一頓營養的早餐喚醒了身體，把能量最先供給到大腦，以便讓我們有清晰的思路和判斷力進行一天的工作、學習。若不吃早餐不僅營養失衡，還會出現身體不適、精神無法集中等各種問題哦!</p>
        </div>
        <div class="col-4">
          <img class="pict_02" src="../../assets/home/egg.png" alt="">
          <h3>精神愉悅</h3>
          <p>早餐不僅能作為身體能量的補給，更是心靈精神的慰藉。研究表明，不吃早餐或不認真吃早餐的人幸福感和愉悅感都要降低很多。慢餐是一種態度，我們需要的是有改變的勇氣。</p>
        </div>

      </div>
    </div>
    <hr>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-6"> <img class="pict_02" src="../../assets/home/pig1.png" alt=""></div>
          <div class="col-6"> <img class="pict_02" src="../../assets/home/milk.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <hr>
    <footer>
      <div class="container">
        <div class="footer_head">

        </div>
        <div class="row">
          <div class="col-8">
                   <h2> 美味、新鮮、健康 </h2>
            Fresh! Good Breakfast! お元気ですか

            吃早餐是一件簡單又幸福的事，一天的開始是在溫馨又好吃的早餐店裡渡
            過，想必一整天都會是好心情，享受早餐時光的我們，想要把這種幸福的味道帶
            給大家，現在我們想把這個夢想實踐，想讓大家跟我們一起感受吃早餐的好滋味。
          </div>
          <div class="col-4">
            <img class="pict_02" src="../../assets/home/want_to_eat.jpg" alt="">
            <ul>
              <!-- <li>地址: XX市XX區XX路XX號</li>
              <li>門市電話: 02-XXXX-XXXX</li> -->
     
            </ul>

          </div>
        </div>
      </div>

    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Shrikhand");

.good {
  position: absolute;
  top: 0%;
  font-family: "Shrikhand", cursive;
}
.wrap {
    display: flex;
    justify-content: center;
}
.head_1pic {
  width: 100%;
  // height: 100%;
}

h3 {
  text-align: center;
}
.pictan {
  animation-name: fadeInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}
.pictan1 {
  animation: fadeInRight 0.5s ease-out 0.75s;
  transition: all 0.2s;
  // animation-name: fadeInRight;
  animation-duration: 1s;
  // animation-timing-function: ease-out;
  animation-delay: 1s;
  animation-fill-mode: backwards;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.pict_01 {
  width: 60%;
  // height: 50vh;
}
.pict_02 {
  width: 100%;
  // height: 50vh;
}
.container {
  position: relative;
  // text-align: center;
  // color: white;
  .col-3 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
    }
  }
}
</style>
