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
        '   <p class="ai-typing" v-if="nameSaved">{{typedText02}}</p>' +
        '</div>',

    data: function() {
        return {
            captainName: '',
            nameSaved: false,
            typingIndex: 0,
            typingSpeed: 20, // speed in milliseconds
            typedText01: '',
            aiText01: '> What should I call you, Captain?',
            aiText01Complete: false,
            descText01: '',
            typedText02: '',
            aiText02Complete: false
        };
    },

    methods: {
        
		typeAiText01: function (event) {
			console.log(this.typingSpeed);
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
            this.descText01 = '> Very well, Captain ' + this.captainName + '. I have started the '+
            'process of connecting us to the ships AIs. We will have full control shortly.'
            this.typingIndex = 0;
            this.nameSaved = true;
            this.typeAiText02();
        },

		typeAiText02: function (event) {
			console.log(this.typingSpeed);
            // fix this with a while loop so we can pass in text and make global
            if (this.typingIndex < this.descText01.length) {
                this.typedText02 += this.descText01.charAt(this.typingIndex);
				this.typingIndex++;
				setTimeout(this.typeAiText02, this.typingSpeed);
            } else {
                this.aiText02Complete = true;
            }
        },
    },

    created: function(){
        console.log('fired created event')
        this.typeAiText01();
    }
})