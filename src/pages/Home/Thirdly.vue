<template>
  <div class="content-wrapper ">
    <dot class="dot"></dot>
<div class="container">
  <div class="title">Trusted by Renowned Brands
    around the world</div>
  <div class="separator"></div>
  <div class="square-container">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>

  </div>
</div>
    </div>
</template>

<script>
import dot from '../../assets/dot.svg'
export default {
  name: "Thirdly",
  components: {
    dot
  }
}
</script>

<style scoped>

html{
  /*background-color: #0B609D;*/
}

.container{
  display: flex;
  flex-direction: column;
  /*justify-content: space-between;*/
  align-items: center;
  height: 100%;
  margin-top: 30px;
}

.title{
  font-family: Montserrat;
  font-size: 48px;
  line-height: 54px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  margin:74px auto 0;
  max-width: 887px;
  font-weight: bold;
}
.separator{
  height: 1px;
  width: 133px;
  border-bottom: 2px solid #000000;
  border-radius: 20px;
  margin-top: 42px;
  margin-bottom: 133px;
}

.square-container{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;}
.square{
  box-sizing: border-box;
  padding:80px;
  border-radius: 30px;
  background-color:white;
  margin-bottom: 150px;
}
.dot{
  position: absolute;
  z-index: -1;
  top: 128px;
  /*right:-11px;*/
  right:-11px
}
</style>