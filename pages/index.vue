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
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-img :src="image[i]">
          <div class="display-3">{{ slide }} </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>
      <v-card>
        <v-card-title class="headline">
        </v-card-title>

        <v-card-text>
          <p>福井で生まれ福井で育ち育てられた税理士です。</p>
          <p>中小企業様、個人事業主様を全面的にサポートさせていただきます。</p>
          <p>(対応エリア：福井県内、石川県加賀地方、その他の地域については、応談)</p>
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
      <v-card>
        <v-card-title class="headline">
          サービスについて
        </v-card-title>
        <v-card-text>
          <p>当事務所は、経営者皆様がすべき価値ある仕事に専念いただきたいと考えており、</p>
          <p>税理士 松島和彦は元国税職員としての経験を活かし、全面的にサポート</p>
          <p>させていただきますのでご安心ください。</p>
        </v-card-text>
      </v-card>
      <v-row>
        <v-col>
          <v-card min-height="400px">
            <v-card-title class="headline">
              創業
            </v-card-title>
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
        <v-col>
          <v-card min-height="400px">
            <v-card-title class="headline">
              事業継承
            </v-card-title>
            <v-card-text>
              <ul>
                <li>事業承継及び事業の譲渡・買収に関する相談等</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card min-height="400px">
            <v-card-title class="headline">
              税務・会計
            </v-card-title>
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
        <v-col>
          <v-card min-height="400px">
            <v-card-title class="headline">
              相談
            </v-card-title>
            <v-card-text>
              <ul>
                <li>税務全般に関する相談</li>
                <li>税務調査の対応</li>
                <li>キャッシュフロー計算書の作成による管理・経営のアドバイス</li>
                <li>(初回相談は、無料とさせていただいております。お気軽にご相談ください。)</li>
                <li></li>
                <li></li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-card>
        <v-card-title>
          アクセスマップ
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
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
            </v-col>
            <v-col>
              <p>お急ぎのご用件の場合は下記の電話番号におかけください。</p>
              <p>お問い合わせフォームよりご用件を頂いた場合は、メールにて回答後、お電話を差し上げます。</p>
              <h1>連絡先</h1>
              <Ul>
                <li>福井県福井市xxxxxxxxx</li>
                <li>0123-56-7890</li>
                <li>aaaaaaaaaaaaaaaaaaaaaa@gmail.com</li>
                <li>FAX:(123)123-5678</li>
              </Ul>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
  export default class index extends Vue {

    private image = [
      '/_nuxt/assets/images.jpeg',
      '/_nuxt/assets/aaaa.jpeg',
      '/_nuxt/assets/images.jpeg'
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
  }
</script>
