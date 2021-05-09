<template>
  <div class="ILM">

    <h1>ILM</h1>
    <input v-model="city" placeholder="Sisesta linna nimi">
    <button v-on:click="getWeatherByCity()">Kuva ilm</button>
    {{answerInfo}}
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      'city':'',
      'answerInfo':'',
    }
  },
  methods: {
    'getWeatherByCity': function () {
      this.$http.get('/api/marionilm/' + this.city)
      .then(response => {
        console.log(response);
        this.answerInfo = response.data
      })
      .catch(response => {
        this.answerInfo = response.response.data.message
      })
    }

  }
}
</script>
