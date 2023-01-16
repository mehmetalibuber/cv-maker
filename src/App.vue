<template>
  <div id="app">
    <!-- tabs start -->
    <section class="container">
      <div class="tabs-section">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Genel Bilgiler">
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
                        />
                      </div>
                      <div class="col">
                        <label for="meslek">Meslek</label> <br />
                        <input
                          id="meslek"
                          type="text"
                          required
                          placeholder="meslek"
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
                        />
                      </div>
                      <div class="col">
                        <label for="mail">Mail Adresi</label>
                        <input
                          id="mail"
                          type="email"
                          required
                          placeholder="mail adresi"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <label for="tel">Telefon Numarası</label>
                        <input
                          id="tel"
                          type="number"
                          required
                          placeholder="telefon numarası"
                        />
                      </div>
                      <div class="col">
                        <label for="web">İnternet Sitesi</label>
                        <input
                          id="web"
                          type="text"
                          placeholder="internet sitesi"
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
                        />
                      </div>
                      <div class="col">
                        <label for="lisebitis">Bitiş Tarihi</label> <br />
                        <input id="lisebitis" type="date" />
                      </div>
                    </div>
                    <div class="row mt-5">
                      <div class="col">
                        <label for="universite">Üniversite Adı</label> <br />
                        <input
                          id="universite"
                          type="text"
                          placeholder="üniversite adı"
                        />
                      </div>
                      <div class="col">
                        <label for="unibitis">Bitiş Tarihi</label> <br />
                        <input id="unibitis" type="date" />
                      </div>
                    </div>
                  </div>
                </form>
              </b-card-text>
            </b-tab>
            <b-tab title="Deneyim">
              <b-card-text>
                <form @submit="DENEYIM_KAYIT">
                  <div class="form-group">
                    <div class="row">
                      <div class="col">
                        <label for="isyeri">Firma Adı </label> <br />
                        <input
                          id="isyeri"
                          type="text"
                          placeholder="firma adı"
                          v-model="Deneyim.firma"
                        />
                      </div>
                      <div class="col">
                        <label for="pozisyon">Pozisyon </label> <br />
                        <input
                          id="pozisyon"
                          type="text"
                          placeholder="pozisyon"
                          v-model="Deneyim.pozisyon"
                        />
                      </div>
                      <div class="col">
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
                          <div class="col">
                            <br />
                            <button type="submit" class="btn btn-primary mt-3">
                              EKLE
                            </button>
                          </div>
                        </div>
                      </div>
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
                    <div class="col">
                      <div class="row">
                        <div class="col">
                          <label for="linkledin">LinkledIn</label>
                          <input
                            type="text"
                            id="linkedin"
                            placeholder="linkledin"
                          />
                        </div>
                        <div class="col">
                          <label for="face">Facebook</label>
                          <input type="text" id="face" placeholder="facebook" />
                        </div>
                      </div>
                      <div class="col">
                        <div class="row">
                          <div class="col">
                            <label for="insta">Instagram</label>
                            <input
                              type="text"
                              id="insta"
                              placeholder="instagram"
                            />
                          </div>
                          <div class="col">
                            <label for="git">GitHub</label>
                            <input type="text" id="git" placeholder="github" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </b-card-text>
            </b-tab>
            <b-tab title="Yetenek Ve Hobiler" active>
              <b-card-text
                ><form @submit="YETENEK_KAYIT">
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
                          <button type="submit" class="btn btn-primary mt-4">
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
              <b-card-text>Tab contents 2</b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </section>
    <!-- tabs end -->
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
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
    };
  },
  created() {},
  methods: {
    DENEYIM_KAYIT(e) {
      e.preventDefault();
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
    YETENEK_KAYIT(e) {
      e.preventDefault();
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
  },
};
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #136a8a !important;
}
.tabs-section {
  width: 100%;
  justify-content: center;
  padding: 10% 0;
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
select {
  border: 1px solid orange;
  border-radius: 6px;
  padding: 8px 5px;
  width: 100%;
  background-color: transparent;
}
input:focus-visible,
input:active,
input:focus,
input:visited {
  outline: none !important;
  border-block-color: red;
  border-block-start-color: aqua;
  border-width: 3px;
}
</style>
