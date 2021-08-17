<template>
<div class="content-wrapper">
  <smallLotDot class="dot"></smallLotDot>
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
  <div class="blue-square"></div>
  <div class="container right" >
<div class="text-container">
  <div class="title">AI Targeting to Your Best-Suited Audience</div>
  <div class="separator"></div>
  <div class="content">Our AI-Powered Algorithms will search for the audience who have relevant interests, demand, demographics or any other custom conditions to generate organic growth to your Instagram Business Community.</div>
  <div class="btn">Get Start</div>
</div>
    <div class="photo" data-aos="zoom-in"></div>

  </div>

<!--  <div class="container left">-->
<!--    <div class="text-container ">-->
<!--      <div class="title">AI Targeting to Your Best-Suited Audience</div>-->
<!--      <div class="separator"></div>-->
<!--      <div class="content">Our AI-Powered Algorithms will search for the audience who have relevant interests, demand, demographics or any other custom conditions to generate organic growth to your Instagram Business Community.</div>-->
<!--      <div class="btn">Get Start</div>-->
<!--    </div>-->
<!--    <div class="photo"></div>-->
<!--  </div>-->


<!--  <div class="container right">-->
<!--    <div class="text-container ">-->
<!--      <div class="title">AI Targeting to Your Best-Suited Audience</div>-->
<!--      <div class="separator"></div>-->
<!--      <div class="content">Our AI-Powered Algorithms will search for the audience who have relevant interests, demand, demographics or any other custom conditions to generate organic growth to your Instagram Business Community.</div>-->
<!--      <div class="btn">Get Start</div>-->
<!--    </div>-->
<!--    <div class="photo"></div>-->

<!--  </div>-->

<!--  <div class="container left">-->
<!--    <div class="text-container">-->
<!--      <div class="title">AI Targeting to Your Best-Suited Audience</div>-->
<!--      <div class="separator"></div>-->
<!--      <div class="content">Our AI-Powered Algorithms will search for the audience who have relevant interests, demand, demographics or any other custom conditions to generate organic growth to your Instagram Business Community.</div>-->
<!--      <div class="btn">Get Start</div>-->
<!--    </div>-->
<!--    <div class="photo"></div>-->

<!--  </div>-->



</div>

</template>

<script>
// import {reactive} from 'vue';
// import AOS from
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import smallLotDot from '../../assets/smallLotDot.svg'
// ..
AOS.init({
  offset: 120,
  duration: 1200,
})

// const contain =[
//     {
//       text:'AI Targeting to Your Best-Suited Audience ',
//       content:'Our AI-Powered Algorithms will search for the audience who have relevant interests, demand, demographics or any other custom conditions to generate organic growth to your Instagram Business Community.',
//       photo:'',
//       btn:'Get Start',
//     },
//
//   {
//     text:'Familiarize and Manage Your Customers',
//     content:'Categorize your customers to kickstart your targeted sales & marketing strategies. Record every engagement and personalized info of your customers to spot their desired product and services from you.',
//     photo:'',
//     btn:'Get Start',
//   },
//
//   {
//     text:'Plan and Automate Your Actions',
//     content:'Hack your time with Automation. 15-minute setup for 720 hours skyrocketing growth. Interact with your customers regularly with personalized auto-message chains, provide 24/7 support with smart replies.',
//     photo:'',
//     btn:'Get Start',
//   },
//
//   {
//     text:'Kickstart Kits for Creative Contents & Designs}',
//     content:'Our AI-Powered Algorithms will search for the audience who have relevant interests, demand, demographics or any other custom conditions to generate organic growth to your Instagram Business Community.',
//     photo:'',
//     btn:'Get Start',
//   }


// ]
export default {
  name: "Fourth",
  components:{
    smallLotDot
  }
}
</script>

<style scoped>

.container.right{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 228px;
}
.text-container{
  font-family: Montserrat;
  box-sizing: border-box;
  width: 612px;
  display: flex;
  flex-direction: column;
  margin-left:85px;
  margin-right: 108px;
  justify-content: flex-start;
  align-items: flex-start;
}
.title{
  /*width: 100%;*/
  font-weight: bold;
  font-size: 48px;
  line-height: 54px;
  /*text-align: justify;*/
  text-transform: uppercase;
}
.separator{
  height: 1px;
  width: 133px;
  border-bottom: 8px solid #000000;
  border-radius: 20px;
  margin-top: 42px;
  margin-bottom: 105px;
}

.content{
  font-size: 24px;
  line-height: 27px;
  box-sizing: border-box;
}

/*.photo-container{*/
/*  width: 100px;*/
/*  height: 100px;*/
/*}*/
.photo{
  width:480px ;
  height: 362px;
  box-sizing: border-box;
  padding:0 240px;
  background-color: white;
  border-radius: 30px;
  margin-right: 155px;
}

.btn{
  padding:10px 28px 10px 28px;
  border: 2px solid #000000;
  border-radius: 35px;
  margin:25px 62px 0 0;
  text-align: center;
  box-sizing: border-box;
  background-color: #000000;
  color: #FFFFFF;
}
.circle{
  position: absolute;
  border: solid #0C9FB3;
  border-radius: 50%;
  z-index: -1;
  box-sizing: border-box;
}
.circle-1{
  position: absolute;
  width: 670px;
  height: 670px;
  left: -335px;
  top: 120px;
  border-width: 225px;
  right:-0px;
}
.circle-2{
  position: absolute;
  width: 80px;
  height: 80px;
  border-width: 26px;
  left: 1068px;
  top:70px;
}

.blue-square{
  position: absolute;
  right:0;
  top: 150px;
  width: 396px;
  height: 740px;
  background-image: url(../../assets/blueSquare.png);
}

.dot{
  width:102px;
  height: 102px;
  position:absolute;
  /*z-index: 0;*/
  left: 0;
  top: 80px;
}

</style>