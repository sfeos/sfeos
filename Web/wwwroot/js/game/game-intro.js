var gameIntro = new Vue({
    
    el: '#game-intro',
    
    data: {
        message: 'Hello Vue!'
    },

    methods: {
        loadAi001: function(event) {
            alert('loadAi001 fired...');
        }
    }

})