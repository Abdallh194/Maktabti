import Head from "next/head";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSories } from "../Redux/StoreSlice";
import Image from "next/image";
function Stories() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSories());
  }, [dispatch]);
  let { stories } = useSelector((s) => s.ASRStore);

  return (
    <>
      <Head>
        <title>Stories</title>
        <meta name="description" content="مكتبتي" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="Stories">
        <Container>
          <div className="head">قصص وحواديت</div>

          {stories.map((el) => {
            return (
              <Row className="story" key={el.id}>
                <Col xs={12} sm={12} md={12} lg={6} className="text-box">
                  <div className="header">{el.title}</div>
                  <div>{el.desc}</div>
                  <div className="more">اقرأ المزيد</div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} className="img-box">
                  <Image
                    src={el.img}
                    className="img-fluid"
                    alt=""
                    width={200}
                    height={200}
                  />
                </Col>
              </Row>
            );
          })}
        </Container>
      </main>
    </>
  );
}

export default Stories;
