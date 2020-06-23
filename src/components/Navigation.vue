<template>
  <nav>
    <svg viewBox="0 0 50 40" width="20" height="20" class="mobile-nav-toggle" @click="toggleNav">
      <rect width="50" height="10"></rect>
      <rect y="15" width="50" height="10"></rect>
      <rect y="30" width="50" height="10"></rect>
    </svg>
    <ul :class="mobnav">
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
      tel: '07815 103939',
      mobnav: 'inactive'
    }
  },
  watch: {
    '$route'(to, from) {
        this.mobnav = 'inactive'
    } 
  },
  methods: {
    toggleNav() {
      this.mobnav = this.mobnav === 'active' ? 'inactive' : 'active'
    }
  }
}
</script>
