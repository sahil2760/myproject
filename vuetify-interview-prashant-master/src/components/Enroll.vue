<template>
  <div>
    <v-img
        class="shrink mr-2"
        contain
        src="../assets/familyPic.jpg"
        transition="scale-transition"
        height="500"
      />
    <div style="margin: 0 17%">
        <h2>Get Back To Living</h2>
        <h4>Cyzplamovir should be available to everyone who needs it. Can afford it? Enroll to see if we can help.</h4>
        <form @submit.prevent="handleSubmit" class="row">
          <div class="col-sm-6">
            <div class="form-group" style="padding-bottom: 8%">
                <input type="text" style="width: 47%;margin-right: 6%;" placeholder="First name" v-model="user.firstName" v-validate="'required'" name="firstName" class="form-control col-sm-6" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                <input type="text" style="width: 47%" placeholder="Last name" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control col-sm-6" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
            </div>

            <div class="form-group">
                <input type="text" placeholder="Address" v-model="user.address" v-validate="'required'" name="username" class="form-control" :class="{ 'is-invalid': submitted && errors.has('username') }" />
            </div>

            <div class="form-group" style="padding-bottom: 8%">
                <input type="text" placeholder="City" v-model="user.city" v-validate="'required'" name="username" style="margin-right: 4%" class="form-control col-sm-5" :class="{ 'is-invalid': submitted && errors.has('username') }" />
                <select v-model='user.state' @change='getStateCities()' class="form-control col-sm-2" style="margin-right: 4%;padding: 0 9px;">
                    <option value='0' disabled>State</option>
                    <option v-for='data in states' :value='data.id' v-bind:key="data">{{ data.name }}</option>
                </select>
                <input type="text" placeholder="zipcode" v-model="user.zipcode" v-validate="'required'" name="zipcode" class="form-control col-sm-4" :class="{ 'is-invalid': submitted && errors.has('zipcode') }" />
            </div>

            <div class="form-group">
                <input type="text" placeholder="Email" v-model="user.email"  v-validate.immediate="'required|email'" name="email" class="form-control" :class="{ 'is-invalid': submitted && errors.has('email') }" />
            </div>
          </div>

          <div class="form-group  col-sm-6" style="padding: 10% 22%;">
              <button class="btn btn-primary" style="width: 140px;font-size: larger;">Enroll</button>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
import { router } from '../helper/router'

export default {
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        city: '',
        state: 0,
        zipcode: '',
        username: '',
        password: ''
      },
      states: [{ id: 1, name: 'Andhra Pradesh' }, { id: 2, name: 'Bihar' }, { id: 3, name: 'Delhi' }, { id: 4, name: 'Goa' }, { id: 5, name: 'Maharashtra' }, { id: 6, name: 'Punjab' }],
      submitted: false
    }
  },
  methods: {
    handleSubmit (e) {
      this.submitted = true
      router.push('/welcome')
    }
  }
}
</script>
