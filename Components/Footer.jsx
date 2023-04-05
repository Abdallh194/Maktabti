import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="head">احصل علي الاخبار بواسطه الرسائل المجانية</div>
        <div className="desc">
          اشترك الان في احدث الخدمات لدينا وهي خدمه اخر الاخبار عن طريق ايميلك
          الالكتروني فقط ليصلك اخر الاخبار
        </div>
        <div className="form d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="ادخل ايميلك"
          />
          <div className="submit">التسجيل</div>
        </div>
        <div className="imp_note">
          أنت تشترك في تحديثات البريد الإلكتروني. بياناتك آمنة ويمكنك إلغاء
          الاشتراك في أي وقت بنقرة واحدة.
        </div>
        <div className="details d-flex justify-content-between">
          <div className="details_01">
            <div className="header">العنوان</div>
            <div className="desc">قطور، الغربيه، مصر</div>
          </div>
          <div className="details_01">
            <div className="header">
              التواصل{"  "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-telephone-inbound"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </div>
            <div className="desc">
              <a href="tel:+201091415560" target="_blnck">
                +201091415560
              </a>
            </div>
          </div>
          <div className="details_01">
            <div className="header">
              تابعنا{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </div>
            <div className="desc">
              <a
                href="https://www.facebook.com/profile.php?id=100007172563893"
                target="_blanck"
              >
                فيسبوك
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="copy">
        تم انشاء هذا الموقع بواسطة <a href="#">عبدالله صبري</a>
      </div>
    </footer>
  );
}

export default Footer;
