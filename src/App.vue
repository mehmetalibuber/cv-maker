<template>
  <div id="app">
    <!-- tabs start -->
    <img src="./assets/callback.png" alt="" class="call-img" />
    <section class="pt-5">
      <div class="col text-center pt-5">
        <h1><strong> ULTOF Online CV Maker </strong></h1>
        <h5>
          &#128187;&nbsp;Dakikalar içinde özgeçmişini hazırla!&nbsp;&#128209;
        </h5>
      </div>
    </section>
    <section class="container">
      <div class="tabs-section">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Genel Bilgiler" active>
              <b-card-text>
                <form>
                  <div class="form-group validate-form">
                    <div class="row">
                      <div class="col">
                        <label for="isim">Ad - Soyad</label> <br />
                        <input
                          id="isim"
                          type="text"
                          required
                          placeholder="ad - soyad"
                          v-model="isim"
                        />
                      </div>
                      <div class="col">
                        <label for="meslek">Meslek</label> <br />
                        <input
                          id="meslek"
                          type="text"
                          required
                          placeholder="meslek"
                          v-model="meslek"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <label for="sehir">Şehir</label>
                        <input
                          id="sehir"
                          type="text"
                          required
                          placeholder="şehir"
                          v-model="sehir"
                        />
                      </div>
                      <div class="col">
                        <label for="mail">Mail Adresi</label>
                        <input
                          id="mail"
                          type="email"
                          required
                          placeholder="mail adresi"
                          v-model="mail"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <label for="tel">Telefon Numarası</label>
                        <input
                          id="tel"
                          type="text"
                          required
                          placeholder="telefon numarası"
                          v-model="telefon"
                        />
                      </div>
                      <div class="col">
                        <label for="web">İnternet Sitesi</label>
                        <input
                          id="web"
                          type="text"
                          placeholder="internet sitesi"
                          v-model="site"
                        />
                      </div>
                      <div class="col">
                        <label for="profil">Profil Fotoğrafı</label>
                        <input
                          type="file"
                          name=""
                          id="profil"
                          ref="profil"
                          @change="PROFILE"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </b-card-text>
            </b-tab>
            <b-tab title="Eğitim">
              <b-card-text>
                <form action="">
                  <div class="form-group">
                    <div class="row">
                      <div class="col">
                        <label for="lise">Lise Adı</label> <br />
                        <input
                          id="lise"
                          type="text"
                          required
                          placeholder="lise adı"
                          v-model="lise"
                        />
                      </div>
                      <div class="col">
                        <label for="lisebitis">Bitiş Tarihi</label> <br />
                        <input id="lisebitis" type="date" v-model="liseBitis" />
                      </div>
                    </div>
                    <div class="row mt-5">
                      <div class="col">
                        <label for="universite">Üniversite Adı</label> <br />
                        <input
                          id="universite"
                          type="text"
                          placeholder="üniversite adı"
                          v-model="universite"
                        />
                      </div>
                      <div class="col">
                        <label for="unibitis">Bitiş Tarihi</label> <br />
                        <input
                          id="unibitis"
                          type="date"
                          v-model="universiteBitis"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </b-card-text>
            </b-tab>
            <b-tab title="Deneyim">
              <b-card-text>
                <form @submit.prevent="DENEYIM_KAYIT">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-4">
                        <label for="isyeri">Firma Adı </label> <br />
                        <input
                          id="isyeri"
                          type="text"
                          placeholder="firma adı"
                          v-model="Deneyim.firma"
                        />
                      </div>
                      <div class="col-lg-4">
                        <label for="pozisyon">Pozisyon </label> <br />
                        <input
                          id="pozisyon"
                          type="text"
                          placeholder="pozisyon"
                          v-model="Deneyim.pozisyon"
                        />
                      </div>
                      <div class="col-lg-4">
                        <div class="row">
                          <div class="col">
                            <label for="isegiris">Giriş Tarihi</label> <br />
                            <input
                              id="isegiris"
                              type="date"
                              v-model="Deneyim.giris"
                            />
                          </div>
                          <div class="col">
                            <label for="iscikis">Çıkış Tarihi</label> <br />
                            <input
                              id="iscikis"
                              type="date"
                              v-model="Deneyim.cikis"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <br />
                      <button
                        type="submit"
                        class="btn btn-primary mt-3 text-center w-100"
                      >
                        EKLE
                      </button>
                    </div>
                  </div>
                </form>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Firma</th>
                      <th>Pozisyon</th>
                      <th>Giriş Tarihi</th>
                      <th>Çıkış Tarihi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="deneyim in Deneyimler" :key="deneyim">
                      <td>
                        {{ deneyim.firma }}
                      </td>
                      <td>
                        {{ deneyim.pozisyon }}
                      </td>
                      <td>
                        {{ deneyim.giris }}
                      </td>
                      <td>
                        {{ deneyim.cikis }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </b-card-text>
            </b-tab>
            <b-tab title="Sosyal Medya">
              <b-card-text>
                <form>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-6">
                        <label for="linkedin">LinkledIn</label>
                        <input
                          type="text"
                          id="linkedin"
                          placeholder="linkedin"
                          v-model="linkedin"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label for="face">Facebook</label>
                        <input
                          type="text"
                          id="face"
                          placeholder="facebook"
                          v-model="facebook"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label for="insta">Instagram</label>
                        <input
                          type="text"
                          id="insta"
                          placeholder="instagram"
                          v-model="instagram"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label for="git">GitHub</label>
                        <input
                          type="text"
                          id="git"
                          placeholder="github"
                          v-model="github"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </b-card-text>
            </b-tab>
            <b-tab title="Yetenek Ve Hobiler">
              <b-card-text
                ><form @submit.prevent="YETENEK_KAYIT">
                  <div class="form-group">
                    <div class="col">
                      <div class="row">
                        <div class="col">
                          <label for="yetenek">Yetenek Veya Hobi</label>
                          <input
                            type="text"
                            id="yetenek"
                            placeholder="yetenek veya hobi"
                            v-model="Yetenek.yetenek"
                          />
                        </div>
                        <div class="col">
                          <label for="seviye_select">Seviye</label> <br />
                          <select name="" id="seviye_select" ref="seviye_deger">
                            <option value="temel">Temel</option>
                            <option value="orta">Orta</option>
                            <option value="iyi">İyi</option>
                          </select>
                        </div>
                        <div class="col pt-3">
                          <button
                            type="submit"
                            class="btn btn-primary mt-4 w-100 text-center"
                          >
                            EKLE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Yetenek Veya Hobi</th>
                        <th>Seviye</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="yetenek in Yetenekler" :key="yetenek">
                        <td>
                          {{ yetenek.yetenek }}
                        </td>
                        <td>
                          {{ yetenek.seviye }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form></b-card-text
              >
            </b-tab>
            <b-tab title="Yabancı Dil">
              <b-card-text
                ><form @submit.prevent="DIL_KAYIT">
                  <div class="form-group">
                    <div class="col">
                      <div class="row">
                        <div class="col">
                          <label for="dil">Yabancı Dil</label>
                          <input
                            type="text"
                            id="dil"
                            placeholder="yabancı dil"
                            v-model="Dil.dil"
                          />
                        </div>
                        <div class="col">
                          <label for="dil_seviye">Seviye </label>
                          <select name="" id="dil_seviye" ref="dil_seviye">
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>
                          </select>
                        </div>
                        <div class="col pt-3">
                          <button
                            type="submit"
                            class="btn btn-primary mt-4 text-center w-100"
                          >
                            EKLE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Yabancı Dil</th>
                      <th>Seviye</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="dil in Diller" :key="dil">
                      <td>
                        {{ dil.dil }}
                      </td>
                      <td>
                        {{ dil.dil_seviye }}
                      </td>
                    </tr>
                  </tbody>
                </table></b-card-text
              >
            </b-tab>
            <b-tab title="Özet Bilgi">
              <b-card-text
                ><form>
                  <div class="form-group">
                    <div class="col">
                      <div class="row">
                        <div class="col">
                          <label for="ozet">Özet Bilgi</label> <br />
                          <textarea
                            type="text"
                            id="ozet"
                            rows="4"
                            cols="80"
                            placeholder="Eklemek istediğiniz, sizi anlatan etkileyici bir metin girebilirsiniz!"
                            v-model="ozet"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </section>
    <!-- tabs end -->
    <section>
      <div class="col text-center pt-5 pb-3">
        <h1><strong> CV Önizleme </strong></h1>
      </div>
    </section>
    <!-- CONTENT SECTION START -->
    <section class="preview container" ref="content">
      <div class="col">
        <div class="div text-left">
          <img :src="profil" alt="" />
        </div>
        <div class="row">
          <div class="col">
            <div class="col">İsim: {{ isim }}</div>
            <div class="col">Meslek:{{ meslek }}</div>
            <div class="col">İnternet Sitesi: {{ site }}</div>
          </div>
          <div class="col second-cols">
            <div class="col">Mail Adresi: {{ mail }}</div>
            <div class="col">Telefon: {{ telefon }}</div>
            <div class="col">Şehir: {{ sehir }}</div>
          </div>
        </div>
        <hr class="top_hr" />
        <div class="col">
          <div class="row">
            <div class="col">
              <div class="col">DENEYİM</div>
              <div class="col">
                <ul>
                  <li v-for="deneyim in Deneyimler" :key="deneyim">
                    <p>Firma Adı: {{ deneyim.firma }}</p>
                    <p>Pozisyon: {{ deneyim.pozisyon }}</p>
                    <p>Giriş Tarihi: {{ deneyim.giris }}</p>
                    <p>Çıkış Tarihi: {{ deneyim.cikis }}</p>
                  </li>
                </ul>
              </div>
              <div class="col">YABANCI DİL</div>
              <div class="col">
                <ul>
                  <li v-for="dil in Diller" :key="dil">
                    Dil: {{ dil.dil }} <br />
                    Seviye: {{ dil.dil_seviye }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col second-cols">
              <div class="col">EĞİTİM BİLGİLERİ</div>
              <div class="col mt-3">
                <p>Üniversite Adı: {{ universite }}</p>
                <p>Mezuniyet Tarihi: {{ universiteBitis }}</p>
              </div>
              <div class="col mt-3">
                <p>Lise Adı: {{ lise }}</p>
                <p>Mezuniyet Tarihi: {{ liseBitis }}</p>
              </div>
              <div class="col mt-5">SOSYAL MEDYA</div>
              <div class="col mt-1">
                <i class="fab fa-linkedin"></i> {{ linkedin }} <br />
                <i class="fab fa-facebook"></i> {{ facebook }} <br />
                <i class="fab fa-instagram"></i> {{ instagram }} <br />
                <i class="fab fa-github"></i> {{ github }} <br />
              </div>
              <div class="col mt-5">YETENEK VE HOBİ</div>
              <div class="col">
                <ul>
                  <li v-for="yet in Yetenekler" :key="yet">
                    {{ yet.yetenek }} - {{ yet.seviye }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="top_hr" />
        <div class="col">
          * ÖZET BİLGİ
          <div class="row mt-1">
            <p>{{ ozet }}</p>
          </div>
        </div>
        <div class="col mt-5 pt-5 text-center">
          ULTOF ~ Useful Life Tech Of Future
        </div>
      </div>
    </section>
    <!-- CONTENT SECTION END -->
    <div class="text-center mt-4 mb-5 pb-3">
      <button @click="generatePDF" class="btn btn-warning pl-5 pr-5">
        CV İNDİR
      </button>
    </div>
  </div>
</template>

<script>
//import jspdf from "jspdf";
//import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";

export default {
  name: "App",
  data() {
    return {
      isim: "",
      meslek: "",
      sehir: "",
      mail: "",
      telefon: "",
      site: "",
      profil: "",

      lise: "",
      liseBitis: "",
      universite: "",
      universiteBitis: "",

      linkedin: "",
      facebook: "",
      instagram: "",
      github: "",

      Deneyimler: [],
      Deneyim: {
        firma: "",
        pozisyon: "",
        giris: "",
        cikis: "",
      },
      Yetenekler: [],
      Yetenek: {
        yetenek: "",
        seviye: "",
      },
      Diller: [],
      Dil: {
        dil: "",
        dil_seviye: "",
      },
      ozet: "",
    };
  },
  created() {},
  methods: {
    DENEYIM_KAYIT() {
      let firma = this.Deneyim.firma;
      let pozisyon = this.Deneyim.pozisyon;
      let giris = this.Deneyim.giris;
      let cikis = this.Deneyim.cikis;

      if (firma == "" || pozisyon == "" || giris == "" || cikis == "") {
        alert("Lütfen tüm alanları doldurun");
      } else {
        this.Deneyimler.push(this.Deneyim);
      }
      this.Deneyim = {};
    },
    YETENEK_KAYIT() {
      let s = this.$refs.seviye_deger.value;
      this.Yetenek.seviye = s;
      let yetenek = this.Yetenek.yetenek;
      let seviye = this.Yetenek.seviye;

      if (yetenek == "" || seviye == "") {
        alert("Lütfen Yetenek Bilgileri Girin!");
      } else {
        this.Yetenekler.push(this.Yetenek);
      }
      this.Yetenek = {};
    },
    DIL_KAYIT() {
      let s2 = this.$refs.dil_seviye.value;
      this.Dil.dil_seviye = s2;
      let dil = this.Dil.dil;
      let dil_seviye = this.Dil.dil_seviye;
      if (dil == "" || dil_seviye == "") {
        alert("Lütfen Dil Ve Seviye Ekleyin!");
      } else {
        this.Diller.push(this.Dil);
      }
      this.Dil = {};
    },
    PROFILE(e) {
      let photo = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onload = () => {
        this.profil = reader.result;
      };
    },

    //

    generatePDF() {
      // var doc = new jspdf();
      var elementHTML = this.$refs.content;

      html2pdf().from(elementHTML).save();
    },
  },
};
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: auto;
  background-image: url("./assets/img-2.jpg");
  background-size: auto;
  background-position: right;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #fff !important;
}
#app h1 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
#app .call-img {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
}
.tabs-section {
  width: 100%;
  justify-content: center;
  padding: 2% 0;
}
.nav-tabs .nav-link {
  font-size: 18px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #000;
}
.nav-tabs .nav-link:active > .nav-tabs .nav-link.active {
  color: red !important;
}
.nav-tabs .nav-link:hover {
  color: red !important;
}
.nav-tabs .nav-link.active {
  color: red !important;
}
.form-group {
  display: flex;
  flex-direction: column;
}
label {
  color: #000;
  font-size: 16px;
  margin: 10px 0 5px 0;
}
input,
select,
textarea {
  border: 1px solid orange;
  border-radius: 6px;
  padding: 8px 5px;
  width: 100%;
  background-color: transparent;
}
input:focus-visible,
input:active,
input:focus,
input:visited,
textarea:active,
textarea:focus-visible {
  outline: none !important;
  border-block-color: red;
  border-block-start-color: aqua;
  border-width: 3px;
}
/* PREVIEW */
.preview {
  position: relative;
  width: 100%;
  height: 1120px;
  border: 5px solid red;
  background-color: rgba(243, 206, 103, 0.673);
  padding: 8% 4% !important;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.preview p {
  margin: 0 !important;
}
.preview li {
  margin: 0 !important;
}
.preview .col {
  margin-left: 0px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
}
.preview .col .col {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.preview .top_hr {
  background-color: red;
  width: 100%;
  height: 12px;
  border-radius: 6px;
}
.preview img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  float: right;
  position: relative;
  margin-left: 20px;
  margin-top: 20px;
}
.preview .second-cols {
  margin-left: 100px !important;
}
.preview .signature {
  bottom: 50px;
  right: 260px;
  position: absolute;
  display: block;
}
@media (max-width: 990px) {
  body {
    display: none !important;
  }
}
</style>
