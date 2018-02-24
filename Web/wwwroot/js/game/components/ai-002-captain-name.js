Vue.component('ai-002-captain-name', {
    template: 
        '<div>' +
        '   <p class="ai-typing">{{typedText01}}</p>' +
        '   <div v-if="aiText01Complete">'+
        '       <div>' +
        '           <label>Captain: </label>' +
        '           <input type="text" v-model="captainName" placeholder="Name"></input>' +
        '       </div>' +
        '       <button v-on:click="saveName">Save Name</button>' +
        '   </div>'+
        '   <p class="fade-in-10" v-if="aiText01Complete">{{descText01}}</p>' +
        '</div>',

    data: function() {
        return {
            captainName: '',
            typingIndex: 0,
            typingSpeed: 50, // speed in milliseconds
            typedText01: '',
            aiText01: '> What should I call you, Captain?',
            aiText01Complete: false,
            descText01: ''
        };
    },

    methods: {
        
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

        saveName: function(){

        }
    },

    created: function(){
        console.log('fired created event')
        this.typeAiText01();
    }
})