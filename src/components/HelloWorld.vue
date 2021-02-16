<template>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <div class="hello">
    <input v-model="message" id="styled-input" placeholder="First Name" />
    <input v-model="message" placeholder="Last Name" /><br />
    <input v-model="message" placeholder="Address 1" /><br />
    <input v-model="message" placeholder="Address 2" /><br />
    <input v-model="message" placeholder="City" />
    <select v-model="selected">
      <option disabled value="">State</option>
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
    <input v-model="message" placeholder="Zipcode" /><br />
    <input v-model="message" placeholder="Email" /> <br />
    <button v-on:click="enroll">Enroll</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>


<style scoped>
a {
  color: #0175e2;
}
</style>
