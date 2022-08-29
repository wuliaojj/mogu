<template>
  <hamburger-button theme="multi-color" size="24" :fill="['#cac7c7' ,'#2F88FF' ,'#FFF' ,'#43CCF8']"/>
  <star theme="filled" size="24" fill="#f8e71c"/>
</template>
<script>
import {HamburgerButton,Star} from '@icon-park/vue-next';

export default {
    components: {
        HamburgerButton,
        Star
    }
}
</script>
