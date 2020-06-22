<template>
  <div id="employment" class="block">
    <form name="contact" netlify>
        <p>
            <label class="prim">const<span class="sec">&nbsp;Name&nbsp;</span> = "<input type="text" name="name" />"</label>
        </p>
        <p>
            <label class="prim">const<span class="sec">&nbsp;Email&nbsp;</span> = "<input type="text" name="email" />"</label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pagetitle: 'contact'
    }
  }
}
</script>
