<template>
    <div id="app">
       
    
      <h2>Science: Computers</h2>
      <v-card 
 class="ma-5 pt-2 justify-content-center"
    max-width="1000"
    color="#cfcfcf"
      >
      <quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
      <custom-modal
        v-show="showModal"
        header="Congratulations!"
        subheader="You've completed your Quiz!"
        :score="score"
        @reload="updateQuiz"
        @close="showModal = false"
      />
        </v-card>
    </div>
   </template>
   
<script>
    import CustomModal from "../components/CustomModal.vue";
    import Quiz from "../components/Quiz.vue";
    import firebase from "firebase/compat";
     
    export default {
     components: { Quiz, CustomModal },
     name: "App",
     data() {
       return {
         quizKey: 0,
         showModal: false,
         score: {
           allQuestions: 0,
           answeredQuestions: 0,
           correctlyAnsweredQuestions: 0,
         },
       };
     },
     methods: {
       handleQuizCompleted(score) {
        var db = firebase.database().ref("/user")
         this.score = score;
         this.showModal = true;
         db.push({
          User_Score: score
         });
       },
       updateQuiz() {
         this.showModal = false;
         this.quizKey++;
       },
      },
    };
    </script>   