<template>
  <v-layout>
    <v-flex class="text-center">
      <div id="app" class="container" v-cloak>
        <h2>お問い合わせ</h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfhiwi5QYOYm_nJo4SN2btj_II7-tU2EZlA8nXb2-wlHupW5Q/viewform?embedded=true" width="640" height="1200" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  
  @Component
  export default class index extends Vue {
    
  }

</script>

<style>
</style>
