const app = Vue.createApp({

    data() {

        return {
            word: "",
            words: [],
        }

    },

    computed: {
        

    },
    methods: {
        saveWord() {
            this.words.push(this.word)

        },
        convertWord() {
            this.words.push(this.word)
            this.words.push(this.word.toLowerCase())
            this.words.push(this.word.toUpperCase())
        },
        // showWords() {
        //     if (!this.showClicked) {
        //         this.showClicked = true
        //         return
        //     }
        //     else if (this.showClicked) {
        //         this.showClicked = false
        //         return
        //     }
        //     return
        // },
        clearWords() {
            this.words = []
            return
        }
    }


})