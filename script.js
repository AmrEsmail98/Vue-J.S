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

        },
        printmyname() {
            console.log("amr");
        }
    },



}).mount("#app-root")


createApp({

    data() {
        return {
            number: 0
        }
    },
    methods: {
        functionIncress() {
            this.number++;
        },
        functionDecress() {
            this.number--;
        }

    },

}).mount("#event")


createApp({

    data() {
        return {
            name: "Amr"
        };
    },

}).mount("#binded")


createApp({

    data() {
        return {
            newUser: {
                IsActive: true,
                age: "",
                name: "",
                email: "",
                password: "",
            },
            myArr:[
                {name:"ahmed",age:20},
                {name:"mohamed",age:22},
            ]
        };
    },
    methods: {
        sentDate() {
            console.log(this.newUser);
            console.log(this.myArr);
        },
    },
}).mount("#new-form");
