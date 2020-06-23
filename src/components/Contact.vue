<template>
  <div id="employment" class="block">
    <h1 class="comment">I initially wanted to make this a mockup of a function where the name and email were all variables and there was 
      some elaborate way of sending but it was a car crash. So I went for a form</h1>
    <form name="qq" method="POST" action="/thanks" data-netlify="true" enctype="application/x-www-form-urlencoded">
        <p>
            <label class="prim"><span class="sec">Name&nbsp;</span><input type="text" name="nom" /></label>
        </p>
        <p>
            <label class="prim"><span class="sec">Email&nbsp;</span><input type="text" name="emal" /></label>
        </p>
        <p>
            <label class="prim"><span class="sec">Message&nbsp;</span><textarea name="msg" /></label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
    <p class="comment">If you'd rather call I am on 07815 103939</p>
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
