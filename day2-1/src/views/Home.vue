<template>
    <div>
        <div>
            <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow/>
        </div>
        <div>
            <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
            <div slot="action" @click="onSearch(value)">搜索</div>
            </van-search>
        </div>
        <div>
            <ul class="ulis">
                <li @click="onClick(item,index)" :class="{active:item.state}" v-for="(item,index) in list" :key="index">{{item.name}}</li>
            </ul>
        </div>
        <div>
            <ol>
                <li v-for="(item,index) in innerList" :key="index">
                    <div class="main">
                        <div class="src"><img :src="item.img" alt=""></div>
                        <div class="inner">
                            <p>{{item.name}}</p>
                            <p>{{item.price}}</p>
                        </div>
                        <div class="num">
                            <p>{{item.num}}</p>
                            <p class="icon">〉</p>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            active: 0,
            value:'',
            listinner:[],
            innerList:[],
            list:[
                {
                    name:'全部',
                    state:true
                },{
                    name:'云进货商',
                    state:false
                },{
                    name:'关注用户',
                    state:false
                },{
                    name:'成交',
                    state:false
                }
            ]
        };
    },
    created() {
        axios.get('/api/data/list').then(res=>{
            this.listinner = res.data
        })
    },
    methods: {
        onClick(item,index){
            this.list[this.active].state = false;
            item.state = true;
            this.active = index
            this.innerList = this.listinner.filter((i)=>{
                if(item.name === '全部'){
                    return i
                }else if(i.count==index){
                    return i
                }
            })
        },
        onSearch(){
            axios.get('/api/data/search',{
                params:{
                    value:this.value
                }
            }).then(res=>{
                console.log(res)
                this.innerList = res.data
            })
        }
    }
}
</script>
<style lang="scss">
    .ulis{
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: space-around;
    }
    .active{
        color: red;
    }
    .main{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        margin: 10px;
        .src{
            width: 100px;
            height: 100px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .inner{
            line-height: 50px;
        }
        .num{
            width: 25%;
            display: flex;
            justify-content: space-around;
            line-height: 100px;
            .icon{
                font-size: 20px
            }
        }
    }
</style>