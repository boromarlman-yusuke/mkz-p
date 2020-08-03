<template>
  <v-layout>
    <v-flex class="text-center">
      <div id="app" class="container" v-cloak>
      <h2>お問い合わせ</h2>
      <transition-group name="fade" tag="div" mode="out-in">
        <!-- <form
          key="1" v-show="!submitted"
          name="gf_form" method="POST" target="hidden_iframe"
          :action="formdata.doc" @submit.prevent="gf_submit()">
          <listitem v-for="(item, index) in formdata.survey" :item="item" :index="index"></listitem>
          <button class="btn btn-primary input-group-btn btn-lg">送信する</button>        
        </form> -->
        <form
          key="1" 
          name="gf_form" method="POST" target="hidden_iframe"
          :action="formdata.doc">

          <listitem v-for="(item, key, index) in formdata.survey" :item="item" :index="index" :key="index"></listitem>
          <v-btn class="btn btn-primary input-group-btn btn-lg">送信する</v-btn>        
        
        </form>
        <div key="2">
          <p>
            回答を記録しました。<br>
            ご協力ありがとうございました。
          </p>
        </div>
      </transition-group>
    </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {_Formdata, Survey} from "@/src/vue-gf-data.ts";
  import listitem from "@/components/listitem.vue";
  
  @Component(listitem)
  export default class index extends Vue {

    private formdata = (): _Formdata => {
    return {
        doc: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfhiwi5QYOYm_nJo4SN2btj_II7-tU2EZlA8nXb2-wlHupW5Q/formResponse',
        surveys: [
            {
                name: 971087384,
                question: '名前',
                questiontype: 'text',
                label: 'username',
                placeholder: '山田太郎'
                // validate: true
            },
            {
                name: 258860309,
                question: 'メールアドレス',
                questiontype: 'text',
                label: 'email',
                placeholder: 'abcde@example.com'
                // validate: 'required|email'
            },
            {
                name: 989251126,
                question: '電話番号',
                questiontype: 'text',
                label: 'phoneNumber',
                placeholder: '0123456789'
                // validate: 'required|numeric'
            }
        ]
    };
  }
}
</script>

<style>
</style>
