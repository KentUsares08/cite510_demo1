<template>
<v-card 
 class="ma-15"
    max-width="700"
    color="#cfcfcf"
    >
<v-container fluid>
  <v-text-field label="First Input" v-model.number="fNumber"></v-text-field>
  <v-text-field label="Second Input" v-model.number="sNumber"></v-text-field>

  <v-btn @click="doSum">Result</v-btn>
  
  {{sum}}

</v-container>
</v-card>

<v-card 
 class="ma-15"
    max-width="700"
    color="#cfcfcf"
    >
  <v-card-title> String Counter </v-card-title>

   <v-text-field label="Enter a String"  v-model="stringInput"></v-text-field>

   <v-card-actions  >
   <v-btn @click="doCountVowel" >
        Count Vowel
   </v-btn>
   </v-card-actions >
<div style="padding-left:20px;">
   {{vowelCount}}
   </div>
 </v-card>  
 <v-card  class="ma-15"
    max-width="544"
    color="#cfcfcf">
<v-card-title> String Manipulator </v-card-title>
   <v-card-actions  >
   <v-btn @click="chg" >
       Convert Vowels to #
   </v-btn>
   </v-card-actions>
<div style="padding-left:20px;">
   {{resultStr}}
   </div>
 </v-card>
 
 </template>

<script setup>
  import {ref} from 'vue'

  const fNumber=ref(0)
  const sNumber=ref(0)
  const sum=ref(0)

  function doSum(){
    sum.value = fNumber.value + sNumber.value
    return sum.value
  }

const stringInput = ref('')
const vowelCount = ref(0)
const resultStr = ref("")

function doCountVowel () {
     vowelCount.value = stringInput.value.match(/[aeiou]/gi).length;
     return vowelCount.value; 
}
function chg (){
     resultStr.value = stringInput.value.replace(/[aeiou]/gi, '#');
     return resultStr.value;
}
</script>


