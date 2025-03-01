const app = Vue.createApp({
    // template: '<h2>This is a test!</h2>',
    template:"",
    data(){
        return{
            flg: true,
            title: "Daruosh",
            author: "Mahdipour",
            age: 38,
            x:0,
            y:0,
            friends:[
                {name:"Manouchehr", family:"Abdi", img:"img/Abdi.JPG", isFav:true},
                {name:"Mahdi", family:"Abbaspour", img:"img/Abdi.JPG", isFav:true},
            ],
            url:"https://topon.ir"
        }
    },
    methods: {
        changeTitle(title){
            this.title=title;
        },
        changeFlg(){
            this.flg=!this.flg            
        },
        handleEvent(e){
            // console.log(e.type+": "+e.screenX+"-"+e.screenY);
            // console.log(e)
            this.x=e.offsetX
            this.y=e.offsetY
        }
    },
    computed:{
        filteredFriends(){
            return this.friends.filter(friends=> friends.isFav)
        }
    }
});

app.mount("#app")