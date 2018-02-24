Vue.component('darkness-to-light', {
    template: 
        '<div>' +
        '   <h2 class="fade-in-10">From Darkness, Into the Light</h2>' +
        '   <p class="fade-in-20">' +
        '       You open your eyes for the first time. Dim red light pulses on the walls. ' +
        '       You hear noises from beyond the room you are in. The humming of electricity, ' +
        '       a compressor switching on. Wait, why do you know what electricity is? ' +
        '       Knowledge you didn’t learn is available at every glance, every sound, '+
        '       and every smell. All of your senses tie to a vast pool of understanding that '+
        '       has been given to you; given to you from...'+
        '   </p>'+
        '   <p v-if="!showAi001" class="fade-in-20">'+
        '      <a href="#" v-on:click="loadAi001">continue</a>'+
        '   </p>' +
        '</div>',

    data: function() {
        return {
            showAi001: false
        };
    },

    methods: {
        
        someMethod: function(event){
            alert('someMethod fired!')
        },

        loadAi001: function(){
            console.log('loadAi001 fired inside DarknessToLight')
            this.showAi001 = true
            this.$emit('show-ai-001-clicked')
        }

    },

    created: function(){
        
    }
})