Vue.component('ai-001', {
    template: 
        '<div>' +
        '   <p class="ai-typing">{{typedText01}}</p>' +
        '   <p class="fade-in-10" v-if="aiText01Complete">{{descText01}}</p>' +
        '   <p  class="fade-in-20" v-if="aiText01Complete && !showAi002">'+
        '      <a href="#" v-on:click="loadAi002">continue</a>'+
        '   </p>' +
        '</div>',

    data: function() {
        return {
            message: 'message inside ai-001',
            typingIndex: 0,
            typingSpeed: 20, // speed in milliseconds
            typedText01: '',
            aiText01: '> Welcome to the world Captain.',
            aiText01Complete: false,
            descText01: 'The voice is not audible like the other noises. ' +
                'You hear this voice but it’s different than hearing the noises ' +
                'with your ears. It doesn’t compete with them. It doesn’t hinder ' +
                'them or distract. It is a perfect form of communication. ' +
                'Your mind’s eye flashes to pictures of synapses firing in a ' +
                'vast bundle of brain cells; you know this vision to be your ' +
                'neocortex. Your normal synapses appear as white bolts of ' +
                'lightning by the millions. The entity you are speaking with ' +
                'sparks bolts of blue, intertwining with your own.',
            showAi002: false
        };
    },

    methods: {
        
        someMethod: function(event){
            alert('someMethod fired!')
        },

        typeAiText01: function(event){
            // fix this with a while loop so we can pass in text and make global
            if (this.typingIndex < this.aiText01.length) {
                this.typedText01 += this.aiText01.charAt(this.typingIndex);
                this.typingIndex++;
                setTimeout(this.typeAiText01, this.typingSpeed);
            } else {
                this.aiText01Complete = true;
            }
        },

        loadAi002: function(){
            this.showAi002 = true;
            this.$emit('show-ai-002-clicked')
        }
    },

    created: function(){
        console.log('fired created event')
        this.typeAiText01();
    }
})