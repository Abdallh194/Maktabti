import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatigoires } from "../Redux/StoreSlice";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function Catigoires() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatigoires());
  }, [dispatch]);
  let { Catigories } = useSelector((s) => s.ASRStore);
  return (
    <div className="Catigoires hadle-Padding-margin-Global">
      <Container>
        <div className="head">الفئات</div>
        <Row>
          {Catigories.map((el) => {
            return (
              <Link href="/shop" key={el.id} className="cat-box">
                <Image
                  src={el.img}
                  className="img-fluid"
                  alt=""
                  width={200}
                  height={200}
                />
                <div className="desc">
                  <div className="title">{el.title}</div>
                  <div className="num">عدد الكتب : {el.num}</div>
                </div>
              </Link>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Catigoires;
