<template>
    <div class="header">
        <ul class="nav nav-tabs">
            <li class="active">
               <router-link to="/">首页</router-link></li>
            <li><router-link to="/">热榜</router-link></li>
            <li><router-link to="/">热门问答</router-link></li>
            <li>
               <router-link to="theme">热门主题</router-link></li>
            <li><router-link to="/">随便看看</router-link></li>
            <li><router-link to="/">最新动态</router-link></li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return{

        }
    },
    
}
</script>

<style scoped>
    .header .nav{
        max-width: 1000px;
        margin: 0 auto;
    }
</style>

