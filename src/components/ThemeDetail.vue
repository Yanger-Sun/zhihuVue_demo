<template>
    <div >
        <div  class=" theme_top">
            <div  class="theme_logo"><img v-bind:src="themeNewsList.background"  alt="" srcset=""></div>
            <div  class="theme_content" style="display:flex;flex-direction:column; justify-content: space-around;">
                <h1>{{themeNewsList.name}}</h1>   
                <p class="theme_description">{{themeNewsList.description}}</p>
            </div>
            <location v-bind:theme_list="themeNewsList.name" ></location>
            <hr color='#cccccc'>
        </div>
        <div class="theme_bottom">

            <div class="panel-body col-xs-12" v-bind:key="item.id" v-for="(item) in themeNewsList.stories">
                <div v-on:click="get_id_new(item.id)"  class="flex-row panel-body theme_detail" v-bind="{now_id:item.id}">
                    <p class="flex-column">
                        {{item.title}}
                    </p>
                </div>
            </div>
        
        </div>
    </div> 
</template>


<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .theme_description{
        padding-bottom:10px;
    }
    .theme_top{
        /* max-width: 1000px; */
        margin: 0 auto; 
        padding: 10px;
    }
    .theme_logo img{
       width: 200px; 
    }
    .theme_content{
        text-align: center;
    }
    .theme_content h1{
        line-height: 60px;
    }
    .flex-row{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .flex-column{
        /* display: flex;
        flex-direction: column;
        justify-content: space-around; */
        text-align: center;
        font-size: 18px;
        line-height: 25px;
    }
    .theme_logo{
        text-align: center;
    }
    .flex-row img{
        width: 50px;
        height: 50px;
        margin-bottom: 0;
        margin-right: 20px;
    }
    .theme_bottom{
        max-width: 1000px;
        margin: 0 auto;
    }
    .theme_detail{
        text-align: center;
        padding: 10px 0;
    }
</style>

<script>
import Location from './Location'
export default {
    data(){
        return({
            id:this.$route.params.theme_id?this.$route.params.theme_id:13,
            // id:13,
            themeNewsList:[]
        })
    },
    components:{
        "location":Location,
    },
    created() {
        var _self = this;
        console.log(this.$route.params)
        if(this.$route.params){
          var theme_id = this.id;
        }else{
          var theme_id = 13;
        }
        //https://news-at.zhihu.com/api/4/theme/11
            fetch(`/apis/api/4/theme/${theme_id}`,{
                method:"GET",
            })
            .then(result => {console.log(result);return result.json();})
            .then(result => {
                _self.themeNewsList = result;
                console.log(result);
            })
    },
    methods:{
        get_id_new(id){
            console.log("当前所点列表id",id);
            const content_id = id;
            const theme_id = this.id;
            const theme_list = this.theme_list;
            this.$router.push({name: 'Content',params:{ theme_id:theme_id,content_id:content_id,theme_list:theme_list}});
        }
    }
}
</script>
