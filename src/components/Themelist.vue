<template>
    <div id="home">
        <div class="row">
            
            <div class="col-xs-12">
                <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                       时下新闻
                    </h3>
                </div>
               
                <div  class="flex-row panel-body " v-bind:key="item.news_id" v-for="(item) in themeList.others">
                   <div v-on:click="get_id_new(item.id)"  class="flex-row panel-body" v-bind="{now_id:item.id}">
                        <img class="thumbnail" v-bind:src="item.thumbnail" alt="">
                        <p class="flex-column">
                            <span>{{item.name}}</span>
                            <span>{{item.description}}</span>
                        </p>
                    </div>
                </div>
                
            </div>
            </div>
            <div class="col-xs-6">
                <!-- <router-view></router-view> -->
            </div>
        </div>
    </div>
</template>


<script>
    export default({
        data(){
            return ({
                themeList:[],
            })
        },
        created(){
            var _self = this;
            fetch("/apis/api/4/themes",{
                method:"GET",
            })
            .then(result => {return result.json();})
            .then(result => {
                _self.themeList = result;
                console.log(result);
            })
        },
        methods:{
            get_id_new(id){
                console.log(id)
                const theme_id = id;
                this.$router.push({name: 'ThemeDetail',params:{ theme_id:theme_id}});
            }
        }
    })
</script>

<style scoped>
    p.flex-column{
        margin-bottom: 0;
    }
    #home{
        box-sizing: border-box;
        max-width: 1000px;
        margin: 20px auto 0px;
    }
    .flex-row{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .flex-column{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
    }
    .flex-row img{
        width: 50px;
        height: 50px;
        margin-bottom: 0;
        margin-right: 20px;
    }
</style>
