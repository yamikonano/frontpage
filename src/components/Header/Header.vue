<template>
<!--  hover too short-->
<!--  whole background color-->
<!--  background photo-->

<div class="header boundary">
  <div class="icon"></div>
  <div class="nav-links">
    <div class="nav-link">Service
      <div class="separator"></div>
    </div>

    <div class="nav-link">Price
      <div class="separator">
      </div>
    </div>

    <div class="nav-link">Tool
      <div class="separator"></div>
    </div>

    <div class="nav-link">Resources
      <div class="separator"></div>
      <div class="sub-list">
        <div class="sub-item">Case Study</div>
        <div class="sub-item">Blog</div>
        <div class="sub-item">Support</div>
      </div>
    </div>

    <div class="nav-link">Contact US<div class="separator"></div>
    </div>

<!--    <div v-if="$route.path.includes('/login')">-->
      <div class="nav-link btn">Get started</div>
<!--    </div>-->
  </div>

</div>

</template>

<script>
// import { useRouter } from 'vue-router'


export default {
  name: "Header",

  // setup(props){
  //   const router = useRouter()
  //   const route = useRoute()
  //   const goLogin =async ()=>{
  //     await router.push({path:'/login'})
  //   }
  //   return {
  //     goLogin
  //   }



}
</script>

<style scoped>
*{
  font-family: Montserrat;
  /*background-color: #E5E5E5;;*/
}

/*fix position of the header&color */
.header{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}
.boundary{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.icon{
  height: 70px;
  width: 70px;
  background-image: url(../../assets/Venbot.png);
  background-size: cover;
  margin-left: 29px;
}

.nav-links{
  display: flex;
  flex-direction: row;
  /*justify-content: space-between;*/
  /*align-items: center;*/
}

.nav-link:not(:last-child){
  width: 162px;
  height: 18px;
  font-size: 16px;
  margin-top: 43px;
  margin-left: 30px;
  text-align: center;
  text-transform: capitalize;
  position:relative;
}
.nav-link:last-child{
  padding:10px 28px 10px 28px;
  border: 2px solid #000000;
  border-radius: 35px;
  margin:25px 62px 0 53px;
  text-align: center;
}

.separator{
  visibility:hidden;
  margin-top: 12px;
  border-bottom: 5px solid #0B609D;
  width: 162px;
  overflow: hidden;
}

.nav-link:hover .separator{
  visibility: visible;
  background-color:#0B609D ;
  color: #FFFFFF;
}

.nav-link:hover::before{
  content: '';
  position: absolute;
  width:100%;
  height: 30px;
  top:15px;
  /*background-color: red;*/
  left:0px;
}
.sub-list{
  /*margin-top: 15px;*/
  padding-top: 7px;
  border-radius: 20px;
  background: #FFFFFF;
  visibility: hidden;
}


.nav-link .sub-list .sub-item{
  font-size: 17px;
  line-height: 23px;
  text-align: left;
  padding: 8.5px 22px;
  text-transform:capitalize;
}

.nav-link:hover .sub-list{
  visibility: visible;
  padding-bottom: 7px;
}



</style>