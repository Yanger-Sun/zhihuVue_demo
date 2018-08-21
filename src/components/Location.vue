<template>
    <p class="location">
        <span>当前所在位置：</span><span>热门主题</span>——><span>{{theme_list}}</span> <span v-if="theme_title">——></span><span>{{theme_title}}</span>
    </p>
</template>

<style scoped>
    *{
        padding: 0;
        margin: 0 ;
    }
    .location{
        max-width: 1000px;;
        margin: 0 auto;
        padding: 10px;
    }
</style>


<script>
export default {
    data(){
        return({
            // theme_list:"日常心理学",
            // theme_title:"职业介绍所"
        })
    },
    props:[
        'theme_list','theme_title'
    ]
}
</script>
