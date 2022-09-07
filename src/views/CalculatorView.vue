<template>
 <v-card 
 class="ma-15"
    max-width="700"
    color="#cfcfcf"
    >
<div class="card">   
    <h1 style="padding-left:20px; padding-top: 5px;">Calculator</h1>
    <div id="app">
          <v-text-field style="padding-left:20px; padding-right:20px;" label="First Input" v-model.number="FN" @change='answer' ></v-text-field>
  <v-text-field style="padding-left:20px; padding-right:20px; " label="Second Input" v-model.number="SN" @change='answer'></v-text-field>

        <p> </p>
        <p> </p>
        <ul class="calcu" >
            <li>
              <p> </p>
        <p> </p>
                <span style="padding-left:20px;">Sum</span>
                <div class="value" style="padding-left:20px;">
                    {{ sum }}
                </div>
            </li>
            <li>
                <span style="padding-left:20px;">Difference</span>
                <div class="value" style="padding-left:20px;">
                    {{ diff }}
                </div>
            </li>
            <li>
                <span style="padding-left:20px;">Quotient</span>
                <div class="value" style="padding-left:20px;">
                    {{ quo }}
                </div>
            </li>
            <li>
                <span style="padding-left:20px;">Product</span>
                <div class="value" style="padding-left:20px;">
                    {{ prod }}
                </div>
            </li>
            <li>
                <span style="padding-left:20px;">Average</span>
                <div class="value" style="padding-left:20px;">
                    {{ avg }}
                </div>
            </li>
        </ul>

    </div>
    </div>
</v-card>
</template>

<script>

export default {
    el: '#app',
    computed: {
        answer: function () {
            this.sum = this.FN + this.SN;
            this.diff = this.FN - this.SN;
            this.prod = this.FN * this.SN;
            this.quo = this.FN / this.SN;
            this.avg = this.sum / 2;
        }
    },
    data() {
        return {
            FN: null,
            SN: null,
            sum: 0,
            diff: 0,
            prod: 0,
            quo: 0,
            avg: 0,
        }
    }
}
</script>

<style>

p {
  padding-top: 10px;
    font-size: 15px;
}

</style>