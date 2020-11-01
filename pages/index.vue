<template>
  <div>
    <form method="post" @submit="submitLogin">
      <input v-model="username" type="text">
      <input v-model="password" type="password">
      <input type="submit">
    </form>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class indexPage extends Vue {
  private username: String='';
  private password: String='';

  protected async submitLogin () {
    if (this.username.length < 4 || this.password.length < 4) {
      // add additional checks here
      alert('please enter a valid username/password')
    } else {
      // loginWith the strategy you setup under auth.strategies[key]
      // show your loading screen
      try {
        // show the loading icon
        const response = await this.$auth.loginWith('refresh', {
          data: {
            username: this.username,
            password: this.password
          }
        }).then(data => data).catch(error => error)

        if (response.status == 200) {
          // show the avatar

        } else {
          // hide the loading icon
        }

        console.log(response)
      } catch (e) {
        console.log('We have the following error')
        console.log(e)
      }
    }
  }
}
</script>
