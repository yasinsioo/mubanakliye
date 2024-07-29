import React, { useState, useEffect } from "react";
import "../Assets/styles.css";
import "../Assets/styles.min.css";

const Contact = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div class="container-fluid bg-dark">
        <div class="row py-2 px-lg-5">
          <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center text-white">
              <small>
                <i class="fa fa-phone-alt mr-2"></i>
                <a href="tel:+905425116166">+90 542 511 61 66</a>
              </small>

              <small class="px-3">|</small>

              <small>
                <i class="fa fa-phone-alt mr-2"></i>
                <a href="tel:+905075845721">+90 507 584 57 21</a>
              </small>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          <a href="/" class="navbar-brand ml-lg-3">
            <h1 class="m-0 display-5 text-uppercase text-primary">
              <i class="fa fa-truck mr-2"></i>MU&BA Nakliye
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
              <a href="/" class="nav-item nav-link">
                Anasayfa
              </a>

              <a href="/contact" class="nav-item nav-link active">
                İletişim
              </a>
            </div>

            <a
              href="/index.php#Bilgial"
              class="btn btn-primary py-2 px-4 d-none d-lg-block"
            >
              Bilgi al
            </a>
          </div>
        </nav>
      </div>

      <div class="jumbotron jumbotron-fluid mb-5">
        <div class="container text-center py-5">
          <h1 class="text-white display-3">İletişim</h1>

          <div class="d-inline-flex align-items-center text-white">
            <p class="m-0">
              <a class="text-white" href="">
                Anasayfa
              </a>
            </p>

            <i class="fa fa-circle px-3"></i>

            <p class="m-0">İletişim</p>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 pb-4 pb-lg-0">
              <div class="bg-primary text-dark text-center p-4">
                <h4 class="m-0">
                  <i class="fa fa-map-marker-alt text-white mr-2"></i>
                  Konya/Merkez
                </h4>
              </div>

              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Konya,+Türkiye&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                width="100%"
                height="85%"
              ></iframe>
            </div>

            <div class="col-lg-7">
              <h6 class="text-primary text-uppercase font-weight-bold">
                Bize ulaşın
              </h6>

              <h1 class="mb-4">Sorularınız İçin Bize Ulaşın</h1>

              <button
                class="btn btn-dark btn-block border-0 py-3"
                type="submit"
                href="https://api.whatsapp.com/send?phone=905075845721"
              >
                <a href="https://api.whatsapp.com/send?phone=905075845721">
                  Whatsapp'tan bize ulaşmak için tıkla
                </a>
              </button>
              <br />

              <button
                class="btn btn-dark btn-block border-0 py-3"
                type="submit"
                href="tel:+905075845721"
              >
                <a href="tel:+905075845721">Bizi aramak için tıkla</a>
              </button>
              <br />

              <div className="contact-form bg-secondary">
                <div id="success"></div>
                <form action="#" id="contactForm" noValidate>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      name="isim"
                      id="isim"
                      placeholder="İsim"
                      required
                      data-validation-required-message="Lütfen isminizi girin."
                    />
                    <p className="help-block text-danger"></p>
                  </div>

                  <div className="control-group">
                    <input
                      type="number"
                      className="form-control border-0 p-4"
                      name="telno"
                      onInput={(e) => {
                        if (e.target.value.length > 11) {
                          e.target.value = e.target.value.slice(0, 11);
                        }
                      }}
                      id="telno"
                      placeholder="Telefon numaranız"
                      required
                      data-validation-required-message="Lütfen telefon numaranızı girin."
                    />
                    <p className="help-block text-danger"></p>
                  </div>

                  <div className="control-group">
                    <textarea
                      className="form-control border-0 py-3 px-4"
                      rows="3"
                      name="not"
                      id="not"
                      placeholder="Mesaj"
                      required
                      data-validation-required-message="Lütfen mesajınızı yazın."
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary py-3 px-4"
                      type="submit"
                      id="sendMessageButton"
                      disabled="disabled"
                    >
                      Gönder
                    </button>
                  </div>
                </form>
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
                  <i class="fa fa-map-marker-alt mr-2"></i>Konya/Merkez
                </p>

                <p>
                  <i class="fa fa-phone-alt mr-2"></i>
                  <a href="tel:+905425116166">+90 542 511 61 66</a> (Bahattin
                  Ceran)
                </p>

                <p>
                  <i class="fa fa-phone-alt mr-2"></i>
                  <a href="tel:+905075845721">+90 507 584 57 21</a> (Mustafa
                  Ceran)
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

export default Contact;
