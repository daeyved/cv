<template>
  <div id="employment" class="block">
    <form name="contact" netlify>
        <p>
            <label class="prim"><span class="sec">Name&nbsp;</span><input type="text" name="name" /></label>
        </p>
        <p>
            <label class="prim"><span class="sec">Email&nbsp;</span><input type="text" name="email" /></label>
        </p>
        <p>
            <label class="prim"><span class="sec">Message&nbsp;</span><textarea name="email" /></label>
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
