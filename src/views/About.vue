<template>
  <div>
    <div class="box">1</div>
    <div class="text">2</div>
    <div class="box2">3</div>
    <div></div>
  </div>
</template>

<script>
import {getCategorys} from '@/api/mall';
import { onMounted } from '@vue/runtime-core';
export default {
  setup(){
    onMounted(()=>{
      getCategorys().then((res)=>{
        console.log(res);
      })
    })
  }
}
</script>

<style lang='scss' scoped>
.box{
  width: 100px;
  height: 100px;
}

[data-theme='default'] .box{
  background: pink;
}
[data-theme='cool'] .box{
  background: blue;
}
[data-theme='warn'] .box{
  background: yellow;
}

[data-theme='default'] .text{
  color: pink;
}
[data-theme='cool'] .text{
  color: blue;
}
[data-theme='warn'] .text{
  color: yellow;
}
</style>