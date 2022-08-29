<template>
  <div>
      <!-- <c-layout>
          <c-header :fixed='true' style="background:red">header</c-header>
          <c-main style="background:green">
              <div style="height:3000px">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
              </div>
          </c-main>
          <c-footer style="background:yellow">footer</c-footer>
      </c-layout> -->
      <c-layout horizontal>
        <c-aside style="background:red">aside</c-aside>
        <c-main style="background:green">
            <div style="height:3000px">
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
        </c-main>
      </c-layout>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>