<template>
  <div id="details" class="block">
    <div class="obj">
      <h1 class="prim"><span>const </span><span class="sec it">{{ pagetitle }}</span> = {</h1>
      <dl>
        <dt class="prim">for:</dt><dd class="ter">{{ forr }}</dd>
        <dt class="prim">intent:</dt><dd class="ter">{{ intent }}</dd>
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
      pagetitle: 'thanks',
      forr: 'the message',
      intent: "I'll get back to you soon"
    }
  }
}
</script>
