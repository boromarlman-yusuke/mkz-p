<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
    >
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">{{ slide }} </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
      <v-card>
        <v-card-title class="headline">
          ここはタイトル
        </v-card-title>
        <v-card-text>
          <p>なんかテキスト</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1612.6932379118032!2d136.17780975827426!3d36.059676463337304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8bf2a9efda78b%3A0x9d76b6518811ffe1!2z54uQ5qmL5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1595750092590!5m2!1sja!2sjp"
        width="600"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0">
      </iframe>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
  export default class index extends Vue {

    private colors = [
      'indigo',
      'warning',
      'pink darken-2'
    ]

    private slides = [
      '税理士事務所',
      'あいさつ',
      'ひとこと'
    ]
  }
</script>
