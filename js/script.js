const { createApp } = Vue;

createApp ({

    data(){

        return {
            num : "",
            result : "",
            color : ""
        }
    },

    methods : {

        pariDispari : function() {

            if (this.num % 2 === 0) {

                this.result = "pari";
                this.color = "red";

            } else {

                this.result = "dispari";
                this.color = "blue";

            }

        }

    }

}).mount("#app")
