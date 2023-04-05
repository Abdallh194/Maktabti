import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import about_bg from "../public/about-bg.jpg";
function About() {
  return (
    <div className="About hadle-Padding-margin-Global" id="About">
      <Container>
        <div className="img-bg">
          <Image src={about_bg} alt={about_bg} className="img-fluid" />
        </div>
        <div className="content">
          <div className="head">عن مكتبتي</div>
          <div className="desc">
            مكتبتي هتوفرلك اي كتاب ممكن تطلبه اذا كان من الكتب الحديثه او
            القديمه مهما كان نوعها بأرخص الاسعار ويمكنك استعاره بعض الكتب مجانا
            مجموعة من الكتب.
          </div>
          <div className="more">اقرأ المزيد</div>
        </div>
      </Container>
    </div>
  );
}

export default About;
