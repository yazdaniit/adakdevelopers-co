import React from "react";

const Maintenance = () => {
  return (
    <>
      <section className="wraper">
        <header className="header">
          <h1>Adak Developers</h1>
          {/* <h2>دفترچه تلفن قشم ، همیشه همراه شما</h2> */}
          <h2>توسعه دهندگان نرم افزار ، قشم</h2>
        </header>
        {/* .header */}
        <section className="countdown-wrapper">
          <ul id="back-countdiown">
            <li>
              <span className="seconds">00</span>
              <p className="fnt">ثانیه</p>
            </li>
            <li>
              <span className="minutes">00</span>
              <p className="fnt">دقیقه</p>
            </li>
            <li>
              <span className="hours">00</span>
              <p className="fnt">ساعت</p>
            </li>
            <li>
              <span className="days">29</span>
              <p className="fnt">روز</p>
            </li>
          </ul>
          {/* #back-countdiown  */}
        </section>
        {/* countdown-wrapper */}
        <section className="subscribe">
          <form className="subscribe-form">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="ایمیل خود را وارد کنید"
            />
            <input
              type="submit"
              value="من را خبر کن"
              className="form-control"
            />
          </form>
        </section>
        {/* subscribe */}

        <footer className="footer">
          <section className="social-links">
            <ul>
              <li>
                <a href="https://tahayazdani.ir">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://tahayazdani.ir">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://tahayazdani.ir">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="https://tahayazdani.ir">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="https://tahayazdani.ir">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </section>
          {/* /.social-links */}
          <ul className="copyright">
            <li dir="ltr">&copy; AdakDevelopers. All rights reserved.</li>
            <li>
              Design By: <a href="https://tahayazdani.ir">YazdaniiT</a>
            </li>
          </ul>
        </footer>
      </section>
      <div className="fullscreen-bg">
        <video
          loop
          muted
          autoplay
          poster="img/videoframe.jpg"
          className="fullscreen-bg__video"
        >
          <source src="img/video-bg.mp4" type="video/mp4" />
        </video>
      </div>
      {/* fullscreen-bg */}
      {/* Script  */}
      <script src="js/jquery-2.1.4.min.js"></script>
      <script src="js/coundown-timer.js"></script>
      <script src="js/scripts.js"></script>
    </>
  );
};

export default Maintenance;
