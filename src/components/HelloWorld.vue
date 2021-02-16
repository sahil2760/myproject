<template>
  <h1>{{ msg1 }}</h1>
  <h2>{{ msg2 }}</h2>
  <div class="hello">
    <label class="label">Float label type auto</label>
    <input v-model="message" id="styled-input" placeholder="First Name" required />
    <input v-model="message" placeholder="Last Name" required/><br />
    <input v-model="message" placeholder="Address 1" required/><br />
    <input v-model="message" placeholder="Address 2" /><br />
    <input v-model="message" placeholder="City" required/>
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
    <input v-model="message" placeholder="Zipcode" required/><br />
    <input v-model="message" placeholder="Email" required/> <br />
    <p> Question?<a v-bind:href="www.google.com"> talk with us </a></p><br>
    <button v-on:click="enroll">Enroll</button>
  </div>
</template>

<script>
export default {
  name: "text1",
  props: {
    msg: String,
  },
  name1: "text2",
  props1:{
    msg1: String,
  },
};
</script>


<style scoped>
a {
  color: #8d4747;
}
</style>


