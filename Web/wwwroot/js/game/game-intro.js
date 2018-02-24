

var gameIntro = new Vue({
    
    el: '#game-intro',
    
    data: {
        message: 'Hello Vue!',
        introStarted: false,
        showAi001: false,
        showAi002: false,
    },

    methods: {

        startIntro: function(){
            this.introStarted = true;
        },

        loadAi001: function(event) {
            this.showAi001 = true;
        },

        loadAi002: function(event) {
            this.showAi002 = true;
        },
    }

})