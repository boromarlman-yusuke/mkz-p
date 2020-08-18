<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-img
          class="white--text align-end"
          height="500px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>自己紹介</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">ご挨拶</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>
            <p>代表の税理士松島和彦でございます。</p>
            <p>36年間務めさせていただいた国税の職場を辞職し、「松島和彦税理士事務所」を開業させていただきました。</p>
            <p></p>
            <p>国税の職場での勤務経験を生かし、日頃から、「何でも話せて相談しやすい税理士 」をモットーに頑張らせていただいております。</p>
            <p>個人で開業している強みを生かし、フットワークの軽さで、相談時間等も</p>
            <p>中小企業 様、個人事業主様のご都合に合わせていただき、全面的にサポートさせていただきます。</p>
            <p>今から「創業」をお考えの皆様、開業されて経営、会計、事業承継等お考えの中小企業様、個人事業主様、</p>
            <p>まずは、一度私ども「松島和彦税理士事務所」にご相談ください。</p>
            <p>皆様に満足していただけますよう、精いっぱい努力させていただきます。</p>
          </div>
        </v-card-text>

        <v-card-subtitle class="pb-0">ご挨拶</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>
            <p>1980年　どこどこ勤務</p>
            <p>1963年5月　福井県福井市生まれ</p>
            <p>　　　　　　 足羽小学校</p>
            <p>　　　　　　 光陽中学校</p>
            <p>福井商業高等学校卒業</p>
            <p></p>
            <p>1983年4月　金沢国税局採用</p>
            <p>　　　　　　 東京国税局、金沢国税局、各税務署に勤務</p>
            <p></p>
            <p>2019年7月　金沢税務署を最後に辞職(36年間勤務)</p>
            <p>　　 　9月　北陸税理士会に税理士として登録（登録番号141674号）福井支部所属</p>
            <p>福井市狐橋にて開業</p>
            <p>現在に至る</p>
          </div>
        </v-card-text>
      </v-card>
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
