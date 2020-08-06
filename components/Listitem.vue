<template>
  <!-- <div class="form-group" :class="{'has-error': errors.has('entry.'+item.name) || errors.has('entry.'+item.name+'.other_option_response')}">
      <label class="form-label" :for="'entry.'+item.name">{{item.question}}</label> -->

 <div>
      <template v-if="item.questiontype === 'text'">
        <input
        class="form-input"
        type="text"
        :area-label="item.question"
        :id="'entry.'+item.name" :name="'entry.'+item.name" :data-vv-as="item.question"
        v-model="inputvalue"
        v-validate="item.validate === true ? 'required' : item.validate"
        :placeholder="item.placeholder">
      </template>

      <template v-else-if="item.questiontype === 'textarea'">
        <textarea
        class="form-input"
        :id="'entry.'+item.name" :name="'entry.'+item.name" :data-vv-as="item.question"
        v-model="inputvalue"
        v-validate="item.validate === true ? 'required' : item.validate"
        :placeholder="item.placeholder">
        </textarea>
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
