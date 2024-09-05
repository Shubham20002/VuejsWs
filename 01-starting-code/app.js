//defining vue app instance
const app = Vue.createApp({
    // data property also can be written as data(){return {}}
    // data:function(){
    //     return{
    //     Coursegoal:"finish course in 1 month"
    //     }
    // }
    data() {
        return {
            //
            courseGoalA: "finish course in 1 month",
            courseGoalB:"master Vue and create project",
            courseLink: "https://vuejs.org/"
        };
    },
    methods:{
        outputGoal(){
            const randomNumber=Math.random();
            if(randomNumber<0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }

});

//here we are defining which part of html code controlled by vuejs
app.mount('#user-goal')