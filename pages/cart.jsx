import Image from "next/image";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteItemFromCart } from "../Redux/StoreSlice";
import Link from "next/link";
import Head from "next/head";

function Cart() {
  let { cartitems } = useSelector((s) => s.ASRStore);
  let dispatch = useDispatch();
  let total = 0;
  for (let i = 0; i < cartitems.length; i++) {
    total += cartitems[i].price * cartitems[i].qty;
  }
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="مكتبتي" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="cart">
        <Container>
          {cartitems.length > 0 ? (
            <Row>
              <div className="head">سلة التسوق</div>
              <Col xs={12} sm={12} md={12} lg={8} className="details">
                <Row className="headers">
                  <Col xs={2} sm={2} md={2} lg={2}>
                    صورة الكتاب
                  </Col>
                  <Col xs={2} sm={2} md={2} lg={2}>
                    الاسم
                  </Col>
                  <Col xs={2} sm={2} md={2} lg={2}>
                    الكمية
                  </Col>
                  <Col xs={2} sm={2} md={2} lg={2}>
                    التصنيف
                  </Col>
                  <Col xs={2} sm={2} md={2} lg={2}>
                    السعر
                  </Col>
                  <Col xs={2} sm={2} md={2} lg={2}>
                    حذف
                  </Col>
                </Row>
                {cartitems.map((el) => {
                  return (
                    <Row key={el.id} className="books-details">
                      <Col xs={2} sm={2} md={2} lg={2}>
                        <Image
                          src={el.img}
                          className="img-fluid"
                          alt={el.title}
                          width={200}
                          height={200}
                        />
                      </Col>
                      <Col xs={2} sm={2} md={2} lg={2}>
                        <div className="header">{el.title}</div>
                      </Col>
                      <Col xs={2} sm={2} md={2} lg={2}>
                        <div className="header">{el.qty}</div>
                      </Col>
                      <Col xs={2} sm={2} md={2} lg={2}>
                        <div className="header">{el.cat}</div>
                      </Col>
                      <Col xs={2} sm={2} md={2} lg={2}>
                        <div className="header">{el.price}</div>
                      </Col>
                      <Col xs={2} sm={2} md={2} lg={2}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash3 dlt"
                          viewBox="0 0 16 16"
                          onClick={() => {
                            dispatch(DeleteItemFromCart(el.id));
                          }}
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                      </Col>
                    </Row>
                  );
                })}
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} className="details">
                <div className="form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="رمز القسيمة "
                  />
                  <Button className="btn btn-warning">تاكيد</Button>
                </div>
                <div className="billheader d-flex justify-content-between">
                  <div>اسم الكتاب</div>
                  <div> السعر</div>
                </div>
                <hr />
                {cartitems.map((el) => {
                  return (
                    <div
                      className="billheader d-flex justify-content-between"
                      key={el.id}
                    >
                      <div>{el.title}</div>
                      <div>{el.price} حنيه</div>
                    </div>
                  );
                })}
                <hr />
                <div className="billheader d-flex justify-content-between">
                  <div> الخصم</div>
                  <div> 0%</div>
                </div>
                <hr />
                <div className="billheader d-flex justify-content-between">
                  <div>السعر الكلي </div>
                  <div>{total} جنيه</div>
                </div>
                <Link href="/checkout" className="check">
                  تاكيد والدفع
                </Link>
              </Col>
            </Row>
          ) : (
            <div>السله فارغه</div>
          )}
        </Container>
      </div>
    </>
  );
}

export default Cart;
