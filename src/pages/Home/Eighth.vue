<template>

  <div class="content-wrapper">
    <bigLotDot class="dot"></bigLotDot>
    <div class="circle"></div>
    <div class="container">
      <div class="title">Customer Story</div>
      <div class="separator"></div>
      <div class="scroll-container">
        <div class="control-btn left-btn">
          <arrow @click="goPrevious"></arrow>
        </div>

        <div class="scroll">
          <div v-for="(comment,ind) in commentObj.comments" :key="ind" class="info-container" :data-index="ind">
            <div class="info">
              <img class="photo" :src="comment.url" alt="">
              <div class="name">{{ comment.name }} {{ ind }}</div>
            </div>
            <div class="content">{{ comment.comment }}</div>
            <div class="btn">CASE</div>
            <div class="date">{{ comment.date }}</div>
          </div>
        </div>
        <div class="control-btn right-btn">
          <arrow @click="goNext"></arrow>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {onMounted, reactive} from 'vue'
import arrow from '../../assets/arrow.svg'
import bigLotDot from '../../assets/bigLotDot.svg'

let dummy = new Array(31).fill(0).map(x => Object.assign({},
    {
      name: 'Sarah Kortney',
      comment: 'vsdhvdbdv kjbvbvadkjbkbda vkbvkdabjkb,bkdbvkab kbdavkvbadkadvvdvdvdk vhakdvkbavdk bvajdhjvdadv',
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3312&q=80',
      date: '10/10/1990'
    }))

export default {
  name: "Eighth",
  components: {
    arrow,
    bigLotDot
  },

  setup(props) {
    const commentObj = reactive({comments: dummy})
    let target
    let inViewport = reactive({items: []})
    let observer
    onMounted(() => {
      let scroll = document.querySelector('.scroll')

      let options = {root: scroll, rootMargin: '0px'}

// 條件達成做什麼：符合設定條件下，目標進入或離開 viewport 時觸發此 callback 函式
      let callback = (entries, o) => {
        let temp = []
        entries.forEach(entry => {
          // 取得每個 entry 資訊做一些處理或工作
          if (entry.isIntersecting) {
            entry.target.classList.add('nowUCme')
            temp.push(entry)
          } else {
            entry.target.classList.remove('nowUCme')
          }
        })
        inViewport.items = temp
      }
      observer = new IntersectionObserver(callback, options)
      target = document.querySelectorAll('.info-container')
      target.forEach(image => observer.observe(image))

    })
    const goPrevious = () => {
      let scroll = document.querySelector('.scroll')
      let nUCms = document.querySelectorAll('.nowUCme')
      nUCms = Array.from(nUCms)
      if (nUCms.length === 3) {
        let temp = document.querySelector(`.info-container[data-index="${nUCms[0].getAttribute('data-index')*1-1}"]`)
        // temp.scrollIntoView({behavior:'smooth'})
        console.log(scroll.scrollWidth )
        scroll.scrollTo({left: temp.offsetLeft - 46 - scroll.offsetWidth*(2.0/3.0) - ((scroll.offsetWidth-(temp.offsetWidth*3))/6.0)
          ,behavior:'smooth'})
      } else if (nUCms.length === 4) {
        scroll.scrollTo({left: nUCms[0].offsetLeft - 46 - scroll.offsetWidth*(2.0/3.0) - ((scroll.offsetWidth-(nUCms[0].offsetWidth*3))/6.0)
          ,behavior:'smooth'})

      }
    }
    const goNext = () => {
      let scroll = document.querySelector('.scroll')
      let nUCms = document.querySelectorAll('.nowUCme')
      nUCms = Array.from(nUCms)
      if (nUCms.length === 3) {
        let temp = document.querySelector(`.info-container[data-index="${nUCms[2].getAttribute('data-index')*1+1}"]`)
        scroll.scrollTo({left: temp.offsetLeft-46 - ((scroll.offsetWidth-(temp.offsetWidth*3))/6.0),behavior:'smooth'})
      } else if (nUCms.length === 4) {
        scroll.scrollTo({left: nUCms[3].offsetLeft-46 - ((scroll.offsetWidth-(nUCms[3].offsetWidth*3))/6.0),behavior:'smooth'})
      }
    }
    return {
      commentObj,
      goNext,
      goPrevious
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.separator {
  height: 1px;
  width: 133px;
  border-bottom: 8px solid #000000;
  border-radius: 20px;
  margin-top: 42px;
  margin-bottom: 50px;
}

.title {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  margin-top: 180px;
}

.scroll {
  text-align: center;
  white-space: nowrap;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  flex-grow: 1;
  max-width: calc(100vw - 43px - 43px);
}

.info-container {
  width: 380px;
  height: 424.11px;
  box-sizing: border-box;
  background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  padding: 54px 30px 11px 46px;
  margin-left: calc((100% - (380px * 3)) * (1 / 6));
  margin-right: calc((100% - (380px * 3)) * (1 / 6));
  flex-shrink: 0;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 43px;
}

.photo {
  width: 98px;
  height: 98px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 13px;
}

.name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 19px;
  color: #000000;
}

.content {
  width: 286px;
  height: 136px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 19px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  text-align: left;
  /* or 96% */
  color: #000000;
}

.btn {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  padding: 12.655px 46px;
  color: #fff;
  background: #005492;
  border-radius: 41px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14.0377px;
  line-height: 16px;
  /* or 16px */
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.date {
  text-align: right;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  /* or 137% */


  color: #ACACAC;
}

.scroll-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100vw;
  max-width: 100vw;
}

.control-btn {
  width: 43px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.right-btn > svg {
  transform: rotate(180deg);
}

.dot{
  position:absolute;
  width: 372px;
  height: 372px;
  right: 10px;
  top: 100px;
  z-index: -1;
}
.circle{
  position:absolute;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  border:solid #0C9FB3;
  box-sizing: border-box;
  z-index: -1;
  top: 108px;
  border-width: 150px;
  left: -130px;
}
</style>