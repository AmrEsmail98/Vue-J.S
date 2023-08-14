const {createApp} = Vue;

createApp({

data() {
    return {
        name:'Amr Esamil',
        age:'25',
        link:"https://www.google.com/"
    }
},
methods: {
    sayhi($time,$name){
        return "Good" + " " + $time + ","+"  "+ $name ;

    }
},

}).mount("#app-root")