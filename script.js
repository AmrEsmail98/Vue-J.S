const { createApp } = Vue;

createApp({

    data() {
        return {
            name: 'Amr Esamil',
            age: '25',
            link: "https://www.google.com/"
        }
    },
    methods: {
        sayhi($time, $name) {
            return "Good" + " " + $time + "," + "  " + $name;

        }
    },

}).mount("#app-root")


createApp({

    data() {
        return {
            number:0
        }
    },
    methods: {
        functionIncress(){
        this.number ++;  
          },
          functionDecress(){
            this.number --;  
              }
    
    },

}).mount("#event")
