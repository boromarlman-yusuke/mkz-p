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
