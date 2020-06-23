<template>
  <div id="employment" class="block">
    <div class="obj" v-for="(job, i) in jobs":key="'wrap' + i">
    <h1 class="prim" :key="'title' + i"><span>const </span><span class="sec it">{{ job.title }}</span> = {</h1>
    <dl :key="'details' + i">
      <dt class="prim">details:</dt><dd class="ter">{{ job.details }}</dd>
      <dt class="prim">description:</dt><dd class="ter">{{ job.description }}</dd>
    </dl>
    <span class="prim" :key="'end' + i">}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pagetitle: 'employment',
      jobs: [
        {
          title: 'BlueLeaf__OSF_Digital',
          details: 'Jun 2017-Present | Full stack developer',
          description: 'A broad-based web development role working on large scale eCommerce sites on the Salesforce Commerce Cloud (SFCC) platform. I have worked both on support and on new build projects. This includes anything from identifying and resolving JS or layout bugs to rolling out new features like lazy-load or enhanced ajax based search features and creating page layouts. Working in teams has meant collaboration, liaising with team members in QA and project management and directly with clients'
        },
        {
          title: 'Twizzlebird',
          details: 'Jul 2010-Jun 2017 | Agency owner, developer, designer',
          description: 'Twizzlebird was the agency I and my partner started, specialising in websites for small local businesses using WordPress. Projects came in all shapes and sizes from single landing pages to eCommerce, membership subscription sites and email campaigns. Working with smaller businesses meant resourceful solutions and so getting the maximum out of tight timescales and budgets was key. Beyond the development side of things, I was heavily involved in the design, using Photoshop & Illustrator to create layouts and also producing video content. I also shared responsibility for the day to day running of the business'
        },
        {
          title: 'Redweather_Productions',
          details: 'Jan 2007 – Jun 2010 | Post-production assistant',
          description: 'I began this role as a video post-production specialist, but it was here that my passion for the web & code started. As my post-production work increasingly involved interactive media, using flash, DVD authoring and the like I was inspired by the possibilities that interactivity gave to my work. The complexity of this side of my role grew, including creating an interactive video e-Learning tool for legal CPD and my first front-end web development project for Redweather.'
        }
      ]
    }
  }
}
</script>
