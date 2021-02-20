<template>
  <div class="hello">
    <h2>{{ msg }}</h2>

    <input
      v-model="message"
      id="styled-input"
      style="width: 47%; margin-right: 6%"
      placeholder="First Name"
      required
    />
    <input
      v-model="message"
      placeholder="Last Name"
      required
    /><br />
    <input
      v-model="message"
      style="width: 47%; margin-right: 6%"
      placeholder="Address 1"
      required
    /><br />
    <input
      v-model="message"
      style="width: 47%; margin-right: 6%"
      placeholder="Address 2"
    /><br />
    <input
      v-model="message"
      style="width: 47%; margin-right: 4%"
      placeholder="City"
      required
    />
    <select v-model="selected">
      <option disabled value="0">State</option>
      <option>Maharastra</option>
      <option>Gujrat</option>
      <option>Goa</option>
      <option>rajasthan</option>
      <option>delhi</option>
      <option>odisha</option>
      <option>assam</option>
      <option>Meghalaya</option>
      <option>West Bengal</option>
    </select>
    <input v-model="message" placeholder="Zipcode" required /><br />
    <input v-model="message" placeholder="Email" required /> <br />
    <p>Question?<a v-bind:href="www.google.com"> talk with us </a></p>
    <br />
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
