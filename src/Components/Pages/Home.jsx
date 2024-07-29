import React, { useState, useEffect } from "react";
import "../Assets/styles.css";
import "../Assets/styles.min.css";
import { about, feature } from "../Images";
import sanityClient from "../../Client.js";
const Home = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [truckPriceData, setTruckPriceData] = useState(null);
  const [truckData, setTruckData] = useState(null);
  const [webData, setWebData] = useState(null);
  const renderTextWithLineBreaks = (text) => {
    if (typeof text !== "string") {
      return null;
    }
    return text.split("\n").map((str, index) => <p key={index}>{str}</p>);
  };

  useEffect(() => {
    const queryTruckPrice = `*[ _type == "truckPrice"] {
      smallTruckOne,
      smallTruckOnePrice,
      smallTruck,
      smallTruckPrice,
      twoSmallTruck,
      twoSmallTruckPrice
    }`;
    const queryTruck = `*[ _type == "truckData"] {
      truckTransport,
      smallTruck,
      twoSmallTruck,
      forkliftService,
    }`;
    const queryWebData = `*[ _type == "webData"] {
      title,
      about,
      videourl,
      whyUs,
      numberOne,
      numberTwo,
      address,
      email
    }`;
    sanityClient
      .fetch(queryTruckPrice)
      .then((data) => {
        setTruckPriceData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    sanityClient
      .fetch(queryWebData)
      .then((data) => {
        setWebData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    sanityClient
      .fetch(queryTruck)
      .then((data) => {
        setTruckData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div class="container-fluid bg-dark">
        <div class="row py-2 px-lg-5">
          <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center text-white">
              <small>
                <i class="fa fa-phone-alt mr-2"></i>
                <a href="tel:+905425116166">
                  {webData && webData[0].numberOne}
                </a>
              </small>

              <small class="px-3">|</small>

              <small>
                <i class="fa fa-phone-alt mr-2"></i>
                <a href="tel:+905075845721">
                  {webData && webData[0].numberTwo}
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          <a href="/" class="navbar-brand ml-lg-3">
            <h1 class="m-0 display-5 text-uppercase text-primary">
              <i class="fa fa-truck mr-2"></i>MU&BA Nakliye&nbsp;&nbsp;&nbsp;
            </h1>
          </a>
          {navbarOpen ? (
            <button
              type="button"
              class="navbar-toggler"
              onClick={() => setNavbarOpen(false)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          ) : (
            <button
              type="button"
              class="navbar-toggler"
              onClick={() => setNavbarOpen(true)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          )}

          <div
            class="collapse navbar-collapse justify-content-between px-lg-3"
            style={{ display: navbarOpen ? "block" : "none" }}
            id="navbarCollapse"
          >
            <div class="navbar-nav m-auto py-0">
              <a href="/" class="nav-item nav-link active">
                Anasayfa
              </a>

              <a href="/contact" class="nav-item nav-link">
                İletişim
              </a>
            </div>

            <a
              href="#Bilgial"
              class="btn btn-primary py-2 px-4 d-none d-lg-block"
            >
              Bilgi al
            </a>
          </div>
        </nav>
      </div>

      <div class="jumbotron jumbotron-fluid mb-5">
        <div class="container text-center py-5">
          <h1 class="text-primary mb-4">Güvenli & Hızlı</h1>

          <h1 class="text-white display-3 mb-5">Nakliye</h1>
        </div>
      </div>

      <div class="container-fluid py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 pb-4 pb-lg-0">
              <img class="img-fluid w-100" src={about} alt="" />

              <div class="bg-primary text-dark text-center p-4">
                <h3 class="m-0">Hızlı ve Güvenilir</h3>
              </div>
            </div>

            <div class="col-lg-7">
              <h6 class="text-primary text-uppercase font-weight-bold">
                Hakkımızda
              </h6>

              <h1 class="mb-4">Konya Merkez ve İlçelere Nakliye Hizmeti</h1>

              <p class="mb-4">{webData && webData[0].about}</p>

              <div class="d-flex align-items-center pt-2">
                <button
                  type="button"
                  class="btn-play"
                  data-toggle="modal"
                  data-src={webData && webData[0].videourl}
                  data-target="#videoModal"
                >
                  <span></span>
                </button>

                <h5 class="font-weight-bold m-0 ml-4">Tanıtım Videosu</h5>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="videoModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>

                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src=""
                    id="video"
                    allowscriptaccess="always"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Bilgial" class="container-fluid bg-secondary my-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 py-5 py-lg-0">
              <h6 class="text-primary text-uppercase font-weight-bold">
                Bilgi Al
              </h6>
              <h1 class="mb-4">Seni arayalım!</h1>
              <p class="mb-4">
                İletişim bilgilerini yaz. Bilgi almak istediğin servisi belirt
                ve seni en kısa sürede arayayıp bilgilendirelim. Ayrıca istersen
                bize telefon numaramız üzerinden 7/24 ulaşabilirsin.
              </p>
              <i class="fa fa-phone-alt mr-2"></i>
              <a
                class="border-bottom text-decoration-none"
                href="https://api.whatsapp.com/send?phone=905075845721"
              >
                {webData && webData[0].numberOne} - Mustafa Ceran (Whatsapp)
              </a>
              <br />
              <i class="fa fa-phone-alt mr-2"></i>
              <a
                class="border-bottom text-decoration-none"
                href="https://api.whatsapp.com/send?phone=905425116166"
              >
                {webData && webData[0].numberTwo} - Bahattin Ceran (Whatsapp)
              </a>
              <br /> <br />
              <div class="row">
                <div class="col-sm-4">
                  <h1 class="text-primary mb-2" data-toggle="counter-up">
                    5
                  </h1>

                  <h6 class="font-weight-bold mb-4">Uzman Çalışan</h6>
                </div>

                <div class="col-sm-4">
                  <h1 class="text-primary mb-2" data-toggle="counter-up">
                    100
                  </h1>

                  <h6 class="font-weight-bold mb-4">Mutlu Müşteri</h6>
                </div>

                <div class="col-sm-4">
                  <h1 class="text-primary mb-2" data-toggle="counter-up">
                    200
                  </h1>

                  <h6 class="font-weight-bold mb-4">Tamamlanan Proje</h6>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="bg-primary py-5 px-4 px-sm-5">
                <form action="#" class="py-5">
                  <div class="form-group">
                    <input
                      type="text"
                      name="isim"
                      class="form-control border-0 p-4"
                      placeholder="İsmin"
                      required="required"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="number"
                      name="telno"
                      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                      maxlength="11"
                      class="form-control border-0 p-4"
                      placeholder="Telefon numaran"
                      required="required"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      name="not"
                      class="form-control border-0 p-4"
                      placeholder="Not"
                    />
                  </div>

                  <div>
                    <button
                      class="btn btn-dark btn-block border-0 py-3"
                      type="submit"
                      disabled="disabled"
                    >
                      Bilgi Al
                    </button>

                    <br />

                    <button
                      class="btn btn-dark btn-block border-0 py-3"
                      type="button"
                      href="tel:+905075845721"
                    >
                      <a href="tel:+905075845721">Bizi aramak için tıkla</a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-5">
        <div class="container">
          <div class="text-center pb-2">
            <h6 class="text-primary text-uppercase font-weight-bold">
              Hizmetlerimiz
            </h6>

            <h1 class="mb-4">Nakliye Hizmetlerimiz</h1>
          </div>

          <div class="row pb-3">
            <div class="col-lg-3 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i class="fa fa-2x fa-truck text-dark pr-3"></i>

                <h5 class="text-white font-weight-medium m-0">
                  Kamyonet Nakliye
                </h5>
              </div>

              <p>{truckData && truckData[0].truckTransport}</p>
            </div>

            <div class="col-lg-3 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i class="fa fa-2x fa-truck text-dark pr-3"></i>

                <h5 class="text-white font-weight-medium m-0">Küçük Kamyon</h5>
              </div>

              <p>{truckData && truckData[0].smallTruck}</p>
            </div>

            <div class="col-lg-3 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i class="fa fa-2x fa-truck text-dark pr-3"></i>
                <i class="fa fa-2x fa-truck text-dark pr-3"></i>

                <h5 class="text-white font-weight-medium m-0">
                  10 Teker Kamyon
                </h5>
              </div>

              <p>{truckData && truckData[0].twoSmallTruck}</p>
            </div>

            <div class="col-lg-3 col-md-6 text-center mb-5">
              <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i class="fa fa-2x fa-store text-dark pr-3"></i>

                <h5 class="text-white font-weight-medium m-0">
                  Ekstra Forklift Hizmeti
                </h5>
              </div>

              <p>{truckData && truckData[0].forkliftService}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-secondary my-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <img class="img-fluid w-100" src={feature} alt="" />
            </div>

            <div class="col-lg-7 py-5 py-lg-0">
              <h6 class="text-primary text-uppercase font-weight-bold">
                Neden Biz?
              </h6>

              <h1 class="mb-4">Konya Şehir İçi Nakliye</h1>

              <p class="mb-4">{webData && webData[0].whyUs}</p>

              <ul class="list-inline">
                <li>
                  <h6>
                    <i class="far fa-dot-circle text-primary mr-3"></i>Alanında
                    başarılı
                  </h6>
                </li>

                <li>
                  <h6>
                    <i class="far fa-dot-circle text-primary mr-3"></i>Hızlı
                    hizmet
                  </h6>
                </li>

                <li>
                  <h6>
                    <i class="far fa-dot-circle text-primary mr-3"></i>7/24
                    Destek
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-5">
        <div class="container">
          <div class="text-center pb-2">
            <h6 class="text-primary text-uppercase font-weight-bold">
              Fiyat Listemiz
            </h6>

            <h1 class="mb-4">Uygun Fiyat Listesi</h1>
          </div>

          <div class="row">
            <div class="col-md-4 mb-5">
              <div class="bg-secondary">
                <div class="text-center p-4">
                  <h1 class="display-4 mb-0">
                    <small class="align-top text-muted font-weight-medium">
                      TL
                    </small>
                    {truckPriceData && truckPriceData[0].smallTruckOnePrice}
                    <small class="align-bottom text-muted font-weight-medium"></small>
                  </h1>
                </div>

                <div class="bg-primary text-center p-4">
                  <h3 class="m-0">Küçük Kamyonet</h3>
                </div>

                <div class="d-flex flex-column align-items-center py-4">
                  {truckPriceData &&
                    renderTextWithLineBreaks(truckPriceData[0].smallTruckOne)}
                  <a href="#Bilgial" class="btn btn-primary py-2 px-4 my-2">
                    Bize Ulaş!
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-5">
              <div class="bg-secondary">
                <div class="text-center p-4">
                  <h1 class="display-4 mb-0">
                    <small class="align-top text-muted font-weight-medium">
                      TL
                    </small>
                    {truckPriceData && truckPriceData[0].smallTruckPrice}
                    <small class="align-bottom text-muted font-weight-medium"></small>
                  </h1>
                </div>

                <div class="bg-primary text-center p-4">
                  <h3 class="m-0">Küçük Kamyon</h3>
                </div>

                <div class="d-flex flex-column align-items-center py-4">
                  {truckPriceData &&
                    renderTextWithLineBreaks(truckPriceData[0].smallTruck)}

                  <a href="#Bilgial" class="btn btn-primary py-2 px-4 my-2">
                    Bize Ulaş!
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-5">
              <div class="bg-secondary">
                <div class="text-center p-4">
                  <h1 class="display-4 mb-0">
                    <small class="align-top text-muted font-weight-medium">
                      TL
                    </small>
                    {truckPriceData && truckPriceData[0].twoSmallTruckPrice}
                    <small class="align-bottom text-muted font-weight-medium"></small>
                  </h1>
                </div>

                <div class="bg-primary text-center p-4">
                  <h3 class="m-0">10 Teker Kamyon</h3>
                </div>

                <div class="d-flex flex-column align-items-center py-4">
                  {truckPriceData &&
                    renderTextWithLineBreaks(truckPriceData[0].twoSmallTruck)}

                  <a href="#Bilgial" class="btn btn-primary py-2 px-4 my-2">
                    Bize Ulaş!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="row pt-5">
          <div class="col-lg-7 col-md-6">
            <div class="row">
              <div class="col-md-6 mb-5">
                <h3 class="text-primary mb-4">İletişim</h3>

                <p>
                  <i class="fa fa-map-marker-alt mr-2"></i>
                  {webData && webData[0].address}
                </p>

                <p>
                  <i class="fa fa-phone-alt mr-2"></i>
                  <a href="tel:+905425116166">
                    {webData && webData[0].numberTwo}
                    (Bahattin Ceran)
                  </a>
                </p>

                <p>
                  <i class="fa fa-phone-alt mr-2"></i>
                  <a href="tel:+905075845721">
                    {webData && webData[0].numberOne} (Mustafa Ceran)
                  </a>
                </p>

                <p>
                  <i class="fa fa-envelope mr-2"></i>mustafabahattin42@gmail.com
                </p>

                <div class="d-flex justify-content-start mt-4">
                  <a
                    class="btn btn-outline-light btn-social mr-2"
                    href="https://www.facebook.com/profile.php?id=100091389363251&mibextid=ZbWKwL"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>

                  <a
                    class="btn btn-outline-light btn-social"
                    href="https://www.instagram.com/mubanakliye/"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div class="col-md-6 mb-5">
                <h3 class="text-primary mb-4">MU&BA Nakliye</h3>

                <div class="d-flex flex-column justify-content-start">
                  <a class="text-white mb-2" href="#">
                    <i class="fa fa-angle-right mr-2"></i>Anasayfa
                  </a>

                  <a class="text-white" href="#">
                    <i class="fa fa-angle-right mr-2"></i>Bizle iletişime geç
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-md-6 mb-5">
            <h3 class="text-primary mb-4">Abone Ol</h3>

            <p>
              Hakkımızda güncel mesajları ve duyuruları almak istiyorsan abone
              olabilirsin.
            </p>

            <div class="w-100">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control border-light"
                  placeholder="Email adresin"
                />

                <div class="input-group-append">
                  <button class="btn btn-primary px-4">Abone ol</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5">
        <div class="row">
          <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p class="m-0 text-white">
              &copy; website by <a href="https://solylock.dev/">solylock.dev</a>{" "}
              | MU&BA Şehir İçi Nakliye
            </p>
          </div>

          <div class="col-lg-6 text-center text-md-right">
            <ul class="nav d-inline-flex">
              <li class="nav-item">
                <a class="nav-link text-white py-0" href="#">
                  Gizlilik
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-white py-0" href="#">
                  Koşullar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <a href="#" class="btn btn-lg btn-primary back-to-top">
        <i class="fa fa-angle-double-up"></i>
      </a>
    </>
  );
};

export default Home;
