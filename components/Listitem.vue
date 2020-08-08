<template>
  <div>
    <template v-if="item.questiontype === 'text'">
      <v-text-field
        :label="item.question"
        :placeholder="item.placeholder"
        v-model="inputvalue"
      ></v-text-field>
    </template>
    <template v-else-if="item.questiontype === 'textarea'">
        <v-textarea
        :label="item.question"
        :placeholder="item.placeholder"
        v-model="inputvalue"
      ></v-textarea>
    </template>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {Survey} from "@/src/vue-gf-data.ts";

  @Component
  export default class Listitem extends Vue {

    @Prop()
    item!: Survey;

  }
</script>

<style>
</style>
