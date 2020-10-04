<template>
  <div id="details" class="block">
    <div class="obj">
      <h1 class="prim"><span>const </span><span class="sec it">{{ pagetitle }}</span> = {</h1>
      <dl>
        <dt class="prim">name:</dt><dd class="ter">{{ name }}</dd>
        <dt class="prim">email:</dt><dd class="ter"><a :href="'mailto:' + email">{{ email }}</a></dd>
        <dt class="prim">telephone:</dt><dd class="ter">{{ tel }}</dd>
        <dt class="prim">statement:</dt><dd class="ter">{{ statement }}</dd>
      </dl>
      <span class="prim">}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pagetitle: 'Personal details',
      name: 'David Wright',
      email: 'dave.vj@gmail.com',
      tel: '07815 103 939',
      statement: 'I am a flexible, driven developer with a front end focus. My professional experience, gained as an agency owner for 7 years, and as a dedicated eCommerce developer for the last 3 has given me a great perspective and the ability to adapt, solve problems and prioritise good communication. I am motivated by web performance and the experience of the end-user and I’m always keen to learn more to drive my skillset in this fast-moving field. Outside of work, I love to play with my 5-year-old daughter and I attempt to stay healthy running and cycling.'
    }
  }
}
</script>
