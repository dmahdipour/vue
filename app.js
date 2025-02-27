const app = Vue.createApp({
    // template: '<h2>This is a test!</h2>',
    data(){
        return{
            flg: true,
            title: "Daruosh",
            author: "Mahdipour",
            age: 38
        }
    },
    methods: {
        changeTitle(title){
            this.title=title;
        },
        changeFlg(){
            this.flg=!this.flg            
        }
    }
});

app.mount("#app")