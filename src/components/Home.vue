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
               
                <div v-on:click="get_id_new(item.id)"  class="flex-row panel-body" v-bind:key="item.news_id" v-for="(item) in stories_day.stories">
                    <img class="thumbnail" v-bind:src="item.images" alt="">
                    <span>{{item.title}}</span>
                </div>
                
            </div>
            </div>
            <!-- <div class="col-xs-12">
                <router-view name="theme"></router-view>
            </div> -->
        </div>
    </div>
</template>


<script>
    import theme from './Themelist'
    export default({
        data(){
            return ({
                title:"test",
                stories_day:[],
            })
        },
        components:{
            theme:theme
        },
        created(){
            var _self = this;
            fetch("/apis/api/4/news/latest",{
                method:"GET",
            })
            .then(result => {return result.json();})
            .then(result => {
                _self.stories_day = result;
                console.log(result);
            })
        },
        methods:{
            get_id_new(id){
                console.log(id)
                this.$router.push({name: 'Content',params:{ theme_id:id}});
            }
        }
    })
</script>

<style scoped>
    #home{
        /* max-width: 1000px; */
        margin: 20px auto 0px;
    }
    .flex-row{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .flex-row img{
        width: 50px;
        height: 50px;
        margin-bottom: 0;
        margin-right: 20px;
    }
</style>
