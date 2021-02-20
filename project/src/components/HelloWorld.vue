<template>
  <div class="hello">
    <h1>Cyzplamovir</h1>
    <img alt="Vue logo" src="../assets/logo.jpeg" height="300">
    <h2>Get Back to living</h2>
    <h3>{{ msg }}</h3>
    
    
   <input
      v-model="message"
      id="styled-input"
      style="width: 20%; height: 20%"
      placeholder="First Name"
      required
    />
    <input
      v-model="message"
      id="styled-input"
      style="width: 20%; height: 20%"
      placeholder="Last Name"
      required
    />
   
    <br />
    <input
      v-model="message"
      style="width: 40%; height :20%"
      placeholder="Address 1"
      required
    /><br />
    <input
      v-model="message"
      style="width: 40%; "
      placeholder="Address 2"
    /><br />
  
    <select v-model="selected" style="width:10%">
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
    <input v-model="message" placeholder="Zipcode" style="width:10%" required />
    <input v-model="message" placeholder="Email" style="width:20%" required /> <br />
    <button id="btn" style="height : 30px">Enroll</button>
    <p>Questions?<a href="https://prottapp.com/p/6c1b1b#/s/5f038f5686e465379996195b">Talk to us?</a></p>  
  
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
  color: #dc5f29;
}
</style>
