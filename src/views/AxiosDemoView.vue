<template>
    <v-card class="pl-5 pt-4 " >
    <h1>
        Axios Demo
    </h1>
    <v-btn @click="getQuestions"> Get Post </v-btn>
    <v-list-item
        v-for="question in questions "
        :key="question.id"
        >
        <v-card 
 class="ma-5 pt-2 justify-content-center"
    max-width="1000"
    color="#cfcfcf"
    >   
    <v-card class="pl-2 py-2" color="#cfcfcf">
            <v-list-item-title>
                {{ChngSybl(question.question)}}
            </v-list-item-title>
        </v-card>
            <v-card color="#e6e6e6" class="ma-2 pl-2">
            <v-list-item>
                {{ChngSybl(question.correct_answer)}}
            </v-list-item>
        </v-card>
        </v-card>
    </v-list-item>
</v-card>
</template>

<script setup>  
    import { ref } from 'vue';
    import axios from 'axios'
    
    const questions=ref([])

    async function getQuestions (){
        axios.get('https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple').then( response => {
        questions.value=(response.data.results)
        })
    }
    function ChngSybl(chngStr){
        chngStr = chngStr.replace(/&lt;/g,"<")
        chngStr = chngStr.replace(/&gt;/g,">")
        chngStr = chngStr.replace(/&quot;/g,"\"")
        chngStr = chngStr.replace(/&#039;/g,"\'")
        chngStr = chngStr.replace(/&amp;/g,"&")
        return chngStr;
    }
</script>