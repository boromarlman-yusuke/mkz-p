<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <v-carousel
        cycle
        hide-delimiter-background
        show-arrows-on-hover
        id="target"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-card
            class="mx-auto"
            light
            outlined
            elevation="0"
          >
            <v-img class="white--text" height="300px" :src="image[i]">
              <v-card-title class="fill-height eye-catch-text">{{ slide }}</v-card-title>
            </v-img>
            <v-card-text class="eye-catch-explain">
              <p>福井で生まれ福井で育ち育てられた税理士です。</p>
              <p>中小企業様、個人事業主様を全面的にサポートさせていただきます。</p>
              <p>(対応エリア：福井県内、石川県加賀地方、その他の地域については、応談)</p>
            </v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>

      <h1>
        サービスについて
      </h1>
      <p>当事務所は、経営者皆様がすべき価値ある仕事に専念いただきたいと考えており、</p>
      <p>税理士 松島和彦は元国税職員としての経験を活かし、全面的にサポート</p>
      <p>させていただきますのでご安心ください。</p>

      <v-row>
        <v-col :cols=1></v-col>
        <v-col :cols=2>
          <p class="tategaki">創業</p>
        </v-col>
        <v-col :cols=8>
          <v-card 
            min-height="200px"
            shaped
            outlined
            elevation="0"
          >
            <v-card-text>
              <ul>
                <li>創業、会社設立に関する相談、税務上のアドバイス及び届け出関係</li>
                <li>相続・贈与・譲渡(資産税関係)</li>
                <li>相続税の申告納税が必要かのシミュレーション</li>
                <li>申告から納税までのスケジュールの相談</li>
                <li>相続税申告書の作成及び申告</li>
                <li>贈与について</li>
                <li>贈与を行うまでの税務関係の相談(最良の贈与の仕方等、贈与を行う前に、まずはご相談ください。)</li>
                <li>贈与税申告書の作成及び申告</li>
                <li>資産関係の譲渡所得についての相談、申告書の作成及び申告</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col :cols=1></v-col>
        <v-col :cols=8>
          <v-card 
            min-height="200px"
            shaped
            outlined
            elevation="0"
          >
            <v-card-text>
              <ul>
                <li>税務に関する各種申告書</li>
                <li>届出書等の作成及び申告</li>
                <li>経理事務の指導、記帳代行</li>
                <li>会計、給与、システムの導入指導年末調整</li>
                <li>償却資産の申告書作成及び申告</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col :cols=2>
          <p class="tategaki">事業継承</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col :cols=1></v-col>
        <v-col :cols=2>
          <p class="tategaki">税務・会計</p>
        </v-col>
        <v-col :cols=8>
          <v-card 
            min-height="200px"
            shaped
            outlined
            elevation="0"
          >
            <v-card-text>
              <ul>
                <li>税務に関する各種申告書</li>
                <li>届出書等の作成及び申告</li>
                <li>経理事務の指導、記帳代行</li>
                <li>会計、給与、システムの導入指導年末調整</li>
                <li>償却資産の申告書作成及び申告</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col :cols=1></v-col>
        <v-col :cols=8>
          <v-card 
            min-height="200px"
            shaped
            outlined
            elevation="0"
          >
            <v-card-text>
              <ul>
                <li>税務全般に関する相談</li>
                <li>税務調査の対応</li>
                <li>キャッシュフロー計算書の作成による管理・経営のアドバイス</li>
                <li>(初回相談は、無料とさせていただいております。お気軽にご相談ください。)</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col :cols=2>
          <p class="tategaki">相談</p>
        </v-col>
      </v-row>

      <v-card>
        <v-card-title>
          アクセスマップ
        </v-card-title>
        <v-card-text>
          <div class="gmap">
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
          </div>
          <br>

          <h1>連絡先</h1>
          <p>お急ぎのご用件の場合は下記の電話番号におかけください。</p>
          <p>お問い合わせフォームよりご用件を頂いた場合は、メールにて回答後、お電話を差し上げます。</p>
          <Ul>
            <li>福井県福井市xxxxxxxxx</li>
            <li>0123-56-7890</li>
            <li>aaaaaaaaaaaaaaaaaaaaaa@gmail.com</li>
            <li>FAX:(123)123-5678</li>
          </Ul>
        </v-card-text>
      </v-card>
      <nuxt-link v-scroll-to="'#target'" to="#target">TOPへ</nuxt-link>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
  export default class index extends Vue {

    private image = [
      require("../assets/images.jpeg"),
      require("../assets/aaaa.jpeg"),
      require("../assets/images.jpeg")
    ]

    private colors = [
      'indigo',
      'warning',
      'pink darken-2'
    ]

    private slides = [
      '〇〇税理士事務所',
      'あいさつ',
      'ひとこと'
    ]

    mounted() {
      if (this.$nuxt.$route.hash) {
      this.scrollToHash()
      }
    }

    private scrollToHash () {
      const hash=this.$nuxt.$route.hash
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: -120 })
      })
    }
    
  }
</script>
<style>
.eye-catch-text {
  font-size: 60px;
}

.eye-catch-explain {
  color: gray !important;
}

.gmap {
height: 0;
overflow: hidden;
padding-bottom: 56.25%;
position: relative;
}

.gmap iframe {
position: absolute;
left: 0;
top: 0;
height: 100%;
width: 100%;
}

.tategaki {
  writing-mode:vertical-rl;
  font-size: 3rem;
  color: #9E9245;
  font-family: "serif";
}

</style>
