<template>
    <div class="content_box">
        <!-- <location v-bind:theme_title="theme_title" ></location> -->
        <!-- <hr color="#cccccc"> -->
        <link rel="stylesheet" v-bind:href="themeContent.css[0]">
        <!-- <h3>{{theme_id?theme_id:0}}</h3> -->
        <!-- <h6>{{content_id?content_id:0}}</h6> -->
        <div v-html="themeContent.body" class="themeContent_box"></div>
    </div>
</template>


<style scoped>
    .content_box{
        text-align: left;
        /* max-width: 1000px; */
        margin: 0 auto;
     }
     .themeContent_box{
         /* max-width: 1000px; */
         margin: 0 auto;
     }
</style>

<script>
import Location from './Location'
export default {
    data(){
        return({
            theme_id:this.$route.params.theme_id?this.$route.params.theme_id:13,
            content_id:this.$route.params.content_id?this.$route.params.content_id:7097426,
            themeContent:[],
        })
    },
    components:{
        "location":Location,
    },
    created(){
        var _self = this;
        fetch(`/apis/api/4/news/${this.content_id}`,{
            method:"GET",
        })
        .then(result => {return result.json();})
        .then(result => {
            _self.themeContent = result;
            // document.head.appendChild(document.createElement('link').href=result.css[0])
            console.log(result);
        })
    },
}
</script>
