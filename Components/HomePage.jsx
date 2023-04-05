import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeImg from "../public/home-pg.jpg";
function HomePage() {
  return (
    <div className="HomePage">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} className="img-box">
            <Image src={HomeImg} alt={HomeImg} className="img-fluid" />
            <div className="name">التقتط بواسطه عبدالله صبري</div>
            <div className="sign">مكتبتي</div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="text-box">
            <div className="head">
              مكتبتي هتوفرلك اي كتاب ممكن تطلبه اذا كان من الكتب الحديثه او
              القديمه مهما كان نوعها بأرخص الاسعار ويمكنك استعاره بعض الكتب
              مجانا مجموعة من الكتب. هذه المجموعة والخدمات يستخدمها الناس الذين
              لا يريدون أو لا يستطيعون شراء مجموعة موسعة لأنفسهم
            </div>
            <div className="desc">
              <div className="content">
                <div className="header">اي هي المكتبه ؟</div>
                تعدّ المكتبة من المعالم الرئيسية الدالة على ثقافة الشعوب
                والأفراد، فهي مصدرُ حصول الباحثين والدارسين على المعلومات
                والبيانات التي يحتاجون إليها، وقد تطورت المكتبات وتنوعت على مدار
                الأيام والعصور، وقد ازدهرت في بعض الفترات واندثرت في فتراتٍ
                أخرى، ولم تقتصر الآن هذه المكتبات على الكتب الورقية بل أصبحت
                هناك الخدمات الالكترونية التي يمكن من خلالها الحصول على
                المعلومات تحت تنظيمٍ من مسؤولي المكتبة
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
