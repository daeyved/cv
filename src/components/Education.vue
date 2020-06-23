<template>
  <div id="education" class="block">
    <div class="obj" v-for="(ed, i) in eds":key="'wrap' + i">
    <h1 class="prim" :key="'title' + i"><span>const </span><span class="sec it">{{ ed.title }}</span> = {</h1>
    <dl :key="'details' + i">
      <dt class="prim">qualifications:</dt><dd class="ter">{{ ed.details }}</dd>
    </dl>
    <span class="prim" :key="'end' + i">}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pagetitle: 'education',
      eds: [
        {
          title: 'BlueLeaf',
          details: 'SalesForce Commerce Cloud Developer Certification',
          description: 'A broad-based web development role working on large scale eCommerce sites on the Salesforce Commerce Cloud (SFCC) platform. I have worked both on support and on new build projects. This includes anything from identifying and resolving JS or layout bugs to rolling out new features like lazy-load or enhanced ajax based search features and creating page layouts. Working in teams has meant collaboration, liaising with team members in QA and project management and directly with clients'
        },
        {
          title: 'Plymouth College of Art & Design',
          details: 'BA (hons) Photomedia & Design Communication 2.1'
        },
        {
          title: 'Newcastle Under Lyme College',
          details: 'A level Media studies (B), Photography (C), Film studies (C)'
        }
      ]
    }
  }
}
</script>
