<template>
  <div class="content-wrapper ">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
    <div class="circle circle-4"></div>
    <div class="dot-container">
    <dot class="dot"/>
    <smalldot class="smalldot"/>
    </div>
   <div class="flex-con">
     <div class="container">
       <div class="title">
         Ultimate Instagram Sales & Marketing Solution
       </div>
       <div class="content">
         Go from zero to hero, build your community and convert sales opportunities with Venbot’s comprehensive Instagram Automation.
       </div>
       <div class="btn-container">
         <div class="btn-one">Get started</div>
         <div class="btn-two">Request Demo</div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import dot from '../../assets/dot.svg'
import smalldot from '../../assets/smalldot.svg'
export default {
  name: "Home",
  components:{dot,
  smalldot}
}
</script>

<style scoped>
*{
  font-family: Montserrat;
}

.flex-con{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /*margin-top: 396px;*/
}
.container{
  display: flex;
  flex-direction: column;
  /*float: right;*/
  margin:311px 93px;
  /*height: 100vh;*/
}

.title{
  width: 565px;
  height: 97px;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: -0.03em;
  color: #000000;
}

.content{
  font-size: 21px;
  align-items: center;
  width: 546px;
  height: 121px;
  margin-top: 28px;
  padding:24px 17px 0 17px;
  background-color: rgba(255, 255, 255, 0.62);
  border-radius: 20px;
}
.btn-container {
  display: flex;
  flex-direction: row;
  margin-top: 14px;
  font-weight: bold;
  font-size: 14.0377px;
  line-height: 111.8%;
  color: #0A889A;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.btn-one{
  margin-right: 50px;
  padding:15px 28px 15px 28px;
  border-radius: 35px;
  background: #0A889A;
  color:#FFFFFF;
}
.btn-two{
  margin-right: 50px;
  padding:15px 28px 15px 28px;
  border-radius: 35px;
  background: #FFFFFF;
}

.circle{
  position: absolute;
  border-radius: 50%;
  border: solid #0C9FB3;
  box-sizing: border-box;
  z-index: -1;
}

.circle-1{
  width: 670px;
  height: 670px;
  /*left: 424px;*/
  top: 200px;
  border-width: 225px;
  right:-285px;
}
.circle-2{
  width: 80px;
  height: 80px;
  border-width: 26px;
  left: 110px;
}
.circle-3{
  width: 80px;
  height: 80px;
  border-width: 26px;
  left: 746px;
  top: 162px;
}

.circle-4{
  width: 60px;
  height: 60px;
  border-width: 20px;
  left: 555px;
  top: 600px;
}

.dot-container{
  width: 100%;
  height: 100%;
}
.dot{
  position: absolute;
  left:-19px;
  bottom: 10px;
}

.smalldot{
  position: absolute;
  left:167px;
  top:135px;
}
</style>