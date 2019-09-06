<template>
    <div class="wrap">
        <div class="list_all">
                <ul>
                    <li>
                        <div class="list_left">
                            <h2  class="mar_btm">青贮饲料可保存饲料营养！</h2>
                            <span class="active">推荐</span>
                            <span>中国新华网</span>
                            <span>刚刚</span>
                            <span>1204已读</span>
                        </div>
                        <div class="list_right">
                            <img src="../../assets/img/life/pig.png" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="list_left">
                            <h2>青贮饲料可保存青绿饲料的大部分营养！</h2>
                            <!-- <span class="active">推荐</span> -->
                            <span>人民日报</span>
                            <span>10分钟前</span>
                            <span>1204已读</span>
                        </div>
                        <div class="list_right">
                            <img src="../../assets/img/life/pig.png" alt="">
                        </div>
                    </li>
                </ul>

        </div>
    
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped >
       
        .list_all{
            width: 94%;
            margin: 0 auto;
        }
        .list_all li{
            height: 2.16rem;
            border-bottom: 1px solid #F2F2F2;
            display: flex;
            align-items: center;
        }
        .list_left{
                width: 4.7rem;
             
        }  
        .list_left h2{
            font-size: .3rem;
            font-weight: 500;
           
            line-height: .55rem;
        } 
        .list_left .mar_btm{
            margin-bottom: .65rem;
        }
        .list_left span{
            text-align: center;
            font-size: .1rem;
            margin: 0 .05rem;
            color: #8C8C8C;
        }
        .list_left .active{
            color: #F25C62;
        }
        .list_right{
            flex: 1;
            display: flex;
            justify-content: flex-end;
        }
        .list_right img{
            width: 2rem;
            height: 1.5rem;
        }
</style>
