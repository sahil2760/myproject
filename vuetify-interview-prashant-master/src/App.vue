<template>
  <v-app>
    <v-app-bar app color="" style="margin: 0 14%;border: 1px solid black;background: white;">
      <div class="d-flex align-center">
        <h4>Cyzplamovir</h4>
      </div>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  data: () => ({
    //
  })
}
</script>
