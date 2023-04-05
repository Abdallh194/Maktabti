import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddItemToCart, GetBooks } from "../Redux/StoreSlice";
function Shop() {
  let dispatch = useDispatch();
  let { AllBooks, cartitems } = useSelector((s) => s.ASRStore);
  let [buyed, setbuyed] = useState(null);
  console.log(cartitems);
  useEffect(() => {
    dispatch(GetBooks());
  }, [dispatch]);
  return (
    <div className="Shop">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8} className="red_book  head-box">
            <div className="overlay">
              <div className="content">
                <div className="head">الكتاب الأحمر</div>
                <div className="desc">
                  يعد كتاب «مقتطفات من أقوال ماو تسي تونغ» أو الكتاب الأحمر كما
                  يطلق عليه في العالم هو أكثر الكتب التي يقرأها العالم حاليا،
                  الكتاب صدر بين عامي 1964 و1976 ويضم خطب الرئيس الصيني الراحل
                  ماوتسي تونغ وأقواله، ويعتبر أحد رموز الثورة الثقافية التي قامت
                  بها في الصين.
                </div>
                <Link className="shopnow" href="/shop">
                  اقرا اكتر
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="offers_20">
            <div className="top box_01  head-box">
              <div className="overlay">
                <div className="content">
                  <div className="head">العروض المميزه</div>
                  <div className="desc"></div>
                  <div className="desc">وفر اكتر من 20%</div>
                  <Link className="shopnow" href="/shop">
                    اقرا اكتر
                  </Link>
                </div>
              </div>
            </div>
            <div className="btm box_02 head-box">
              <div className="overlay">
                <div className="content">
                  <div className="head">العروض المميزه</div>
                  <div className="desc"></div>
                  <div className="desc">وفر اكتر من 20%</div>
                  <Link className="shopnow" href="/shop">
                    اقرا اكتر
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="booxes">
          <div className="head">تسوق الكتب الان</div>
          {AllBooks.map((el) => {
            return (
              <Col xs={6} sm={6} md={2} lg={3} key={el.id} className="book-box">
                <div className="imgbox">
                  <Image
                    src={el.img}
                    className="img-fluid"
                    alt={el.title}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="details">
                  <div className="header">{el.title}</div>
                  <div className="price">$ {el.price} </div>
                </div>
                <div
                  className="buy"
                  onClick={(e) => {
                    dispatch(AddItemToCart(el));
                    e.target.innerHTML = "تم الشراء";
                    setbuyed(true);
                    e.target.parentElement.classList.add("SelectedCart");
                  }}
                >
                  شراء الان
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      {cartitems.length > 0 ? (
        <Link href="/cart" className="maincart" data-name={cartitems.length}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-basket"
            viewBox="0 0 16 16"
          >
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
          </svg>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default Shop;
