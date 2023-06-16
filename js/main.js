const {createApp} = Vue;

createApp({
    data(){
        return{
            randomEmails: [] 
            
        }
    },
    mounted () {
        for(let i=1; i<=10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((eMail) =>
                this.randomEmails.push(eMail.data.response))
        }
    },
}).mount('#app')