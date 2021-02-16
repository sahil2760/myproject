<template>
  <div class="hello" style="margin: 20%">
    <h1>Get Back to Living</h1>
    <h2>
      Cyzplamovir should be available to everyone who needs it. Can afford it?
      Enroll to see if we can help.
    </h2>
    <label class="label">Float label type auto</label>
    <input
      v-model="message"
      id="styled-input"
      style="width: 47%; margin-right: 6%"
      placeholder="First Name"
      required
    />
    <input
      v-model="message"
      style="width: 47%"
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
    <div class="form-group col-sm-6" style="padding: 10% 22%">
      <button class="btn-primary" style="width: 100px; font-size: large">
        Enroll
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "text1",
  text1: {
    msg1: "Cyzplamovir",
  },
  name1: "text2",
  text2: {
    msg2:
      "Cyzplamovir should be available to everyonewho needs it. Can't afford it? enroll here to see if we can help",
  },
};
</script>


<style scoped>
a {
  color: #8d4747;
}
</style>


