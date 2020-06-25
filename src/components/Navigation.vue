<template>
  <nav>
    <svg viewBox="0 0 50 40" width="20" height="20" class="mobile-nav-toggle" :class="mobnav" @click="toggleNav">
      <rect width="50" height="10" class="x-top"></rect>
      <rect y="15" width="50" height="10" class="x-fwd"></rect>
      <rect y="15" width="50" height="10" class="x-bck"></rect>
      <rect y="30" width="50" height="10" class="x-btm"></rect>
    </svg>
    <ul :class="mobnav">
      <li><router-link to="/" exact>about_me.js</router-link></li>
      <li><router-link to="/employment">employment.js</router-link></li>
      <li><router-link to="/education">education.js</router-link></li>
      <li><router-link to="/skills">skills.js</router-link></li>
      <li @click="toggleTheme"><a href="#">switch_theme.js</a></li>
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
      mobnav: 'inactive',
      theme: 'dark'
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
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      this.$emit('themeSwitched', this.theme);
    }
  }
}
</script>
