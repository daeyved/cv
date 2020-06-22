<template>
  <nav class="block">
    <ul>
      <li><router-link to="/">about_me.js</router-link></li>
      <li><router-link to="/employment">employment.js</router-link></li>
      <li><router-link to="/education">education.js</router-link></li>
      <li><router-link to="/contact">contact.js</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pagetitle: 'Personal details',
      name: 'David Wright',
      email: 'dave.vj@gmail.com',
      tel: '07815 103939'
    }
  }
}
</script>
