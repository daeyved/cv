<template>
  <div id="skills" class="block">
    <p class="comment">A non exhaustive list!!
    <h1 class="prim"><span>const </span><span class="sec it">{{ pagetitle }}</span> = [</h1>
    <span class="ter" v-for="(skill, i) in skills" :key="'wrap' + i">
    '{{ skill }}'<template v-if="i !== skills.length - 1">,</template>
    </span>
    <span class="prim">]</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pagetitle: 'skills',
      skills: [
        'Vanilla JS',
        'jQuery',
        'Vue.JS',
        'nodeJS',
        'CSS',
        'SCSS',
        'Bootstrap',
        'WordPress',
        'Salesforce Commerce Cloud',
        'HTML email',
        'Web performance optimisation',
        'HTML',
        'WAI-ARIA'
      ]
    }
  }
}
</script>
