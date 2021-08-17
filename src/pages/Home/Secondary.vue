<template>
  <dot class="dot"></dot>
  <div class=" content-wrapper">
  <div class="text-container">
    <div class="title">Key Value</div>
    <div class="separator"></div>
    <div class="content">a nkvdldvskhvd
      a nbflkjalvj;ajvo;jdvo;jda
    </div>
  </div>
  <div class="card-container">
    <div class="card">
      <div class="icon" style="background-image: url(/src/assets/Community.png)"></div>
      <div class="card-title">Community</div>
      <div class="card-content">Reach your customers by organic growth with the aid of our AI-Powered targeting
        strategies
      </div>
    </div>

    <div class="card">
      <div class="icon" style="background-image: url(/src/assets/CRM.png)"></div>
      <div class="card-title">Social CRM</div>
      <div class="card-content">Manage your customers and record every moment of your collision
      </div>
    </div>

    <div class="card">
      <div class="icon" style="background-image: url(/src/assets/contents.png)"></div>
      <div class="card-title">Content</div>
      <div class="card-content">Build the fundamentals of your content creations with experts
      </div>
    </div>

    <div class="card">
      <div class="icon" style="background-image: url(/src/assets/actions.png)"></div>
      <div class="card-title">Community</div>
      <div class="card-content">Reach your customers by organic growth with the aid of our AI-Powered targeting
        strategies
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import dot from "../../assets/dot.svg";

export default {

  name: "Secondary",
  components :{
    dot
  }
}
</script>

<style scoped>
.sec-container{
  height: 100vh;
}

.text-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 18px;
  line-height: 111.8%;
  /* or 20px */

  letter-spacing: 0.03em;
}
.title {
  font-size: 64px;
  line-height: 72px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
}
.content{
  width: 250px;
  text-align: center;
}


.card {
  width: 281px;
  height: 321px;
  margin: 100px 0 17px 20px;
  padding:44px 17px 39px 32px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 5px 10px 3px rgba(0, 153, 153 , 0.3);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Noto Sans TC', sans-serif;
  box-sizing: border-box;
}

.icon{
  background-size: contain;
  background-repeat: no-repeat;
  width: 65px;
  height: 65px;
  margin-bottom: 20px;
}

.card .card-title{
  margin-bottom: 45px;
  font-size: 30px;
  letter-spacing: 0.03em;
  color: #000000;
}

.card .card-content{
  margin-bottom: 18px;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
  /*width: 250px;*/
}

.separator{
  width: 133px;
  height:1px;
  border-bottom: 7px solid #000000;
  border-radius: 15px;
  margin-top: 24px;
  margin-bottom: 58px;
}

.dot{
  position: absolute;
  left:-19px;
  top:0;
  z-index: 10;
  top: 50px;
}
</style>