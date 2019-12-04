<template>
  <div class="about">
     <ul>
       <li v-for="(item,index) in listArr" :key="index">
         <div class="left"><img :src="item.img" alt=""/></div>
         <div class="right">
           <p>
             {{item.name}}
           </p>
           <p>
             总交易额:{{item.price}}
           </p>
         </div>
       </li>
     </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
   data(){
     return {
       listArr:[] 
     }
   },
   created() {
      axios.get('/api/data/list').then(res=>{
        this.listArr=res.data  
      })
   },
}
</script>
<style lang="scss" scoped>
 .about{
   width:100%;
   height: 100%;
 }
 ul li{
   width:100%;
   height: 100px;
   border-bottom:7px solid #ccc;
   display: flex;
 }
 .left{
   flex:1.1;
 
 }
 .right{
   flex:3;
  
 }
 img{
   width:100%;
   height:100%;
   border-radius: 50px;
 }
</style>