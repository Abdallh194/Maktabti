import Link from "next/link";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Checkout() {
  let { cartitems } = useSelector((s) => s.ASRStore);
  let total = 0;
  for (let i = 0; i < cartitems.length; i++) {
    total += cartitems[i].price * cartitems[i].qty;
  }
  let [ConfirmOrder, setConfirmOrder] = useState("");
  let OpenModal = (Order) => {
    setConfirmOrder(Order);
  };
  let CloseModal = () => {
    setConfirmOrder(false);
  };
  let dispatch = useDispatch();

  let day = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let ordDate = `${day}  -  ${month} - ${year}`;
  let [fullDate, setOrdDate] = useState(ordDate);
  let [FirstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [Email, setEmail] = useState("");
  let [Mobile, setMobile] = useState("");
  let [Address_01, setAddress_01] = useState("");
  let [Address_02, setAddress_02] = useState("");
  let [Country, setCountry] = useState("");
  let [City, setCity] = useState("");
  let [ZipCode, setZipCode] = useState("");
  let [State, setState] = useState("");
  // form valid
  let [FNameValid, setFNameValid] = useState(false);
  let [LNameValid, setLNameValid] = useState(false);
  let [EmailValid, setEmailValid] = useState(false);
  let [MobileValid, setMobileValid] = useState(false);
  let [AddressoneValid, setAddressoneValid] = useState(false);
  let [AddresstwoValid, setAddresstwoValid] = useState(false);
  let [CountryValid, setCountryValid] = useState(false);
  let [CityValid, setCityValid] = useState(false);
  let [ZipValid, setZipValid] = useState(false);
  let [StateValid, setStateValid] = useState(false);
  let [infoValid, setinfoValid] = useState(false);
  let [infoNotValid, setinfoNotValid] = useState(false);
  let ConfirmModal = () => {
    CloseModal();
    dispatch(DeleteAllItemINCart());
  };
  return (
    <div className="checkout">
      <Container>
        <Row>
          <div className="head">معلومات الدفع</div>
          <Col xs={12} sm={12} md={12} lg={8} className="details">
            <Form
              className="row"
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  FNameValid === false ||
                  LNameValid === false ||
                  EmailValid === false ||
                  MobileValid === false ||
                  AddressoneValid === false ||
                  AddresstwoValid === false ||
                  CountryValid === false ||
                  CityValid === false ||
                  ZipValid === false ||
                  StateValid === false
                ) {
                  setinfoValid(false);
                } else {
                  setinfoValid(true);
                }
              }}
            >
              <Col xs={12} sm={12} md={6} className="inputInfo">
                <input
                  className="form-control"
                  type="text"
                  required
                  placeholder="الاسم الاول "
                  onChange={(e) => {
                    if (e.target.value.length < 3) {
                      e.target.classList.add("wrong");
                      e.target.classList.remove("true");
                    } else {
                      setFirstName(e.target.value);
                      setFNameValid(true);
                      e.target.classList.add("true");
                      e.target.classList.remove("wrong");
                    }
                  }}
                />
              </Col>
              <Col xs={12} sm={12} md={6} className="inputInfo">
                <input
                  type="text"
                  className="form-control input_custom"
                  placeholder="الاسم الاخير "
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 3) {
                      e.target.classList.add("wrong");
                      e.target.classList.remove("true");
                    } else {
                      setLastName(e.target.value);
                      e.target.classList.add("true");
                      e.target.classList.remove("wrong");
                      setLNameValid(true);
                    }
                  }}
                />
              </Col>
              <Col xs={12} sm={12} md={6} className="inputInfo">
                <input
                  type="email"
                  className="form-control input_custom"
                  placeholder="البريد الالكتروني"
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 8) {
                      e.target.classList.add("wrong");
                      e.target.classList.remove("true");
                    } else {
                      setEmail(e.target.value);
                      e.target.classList.add("true");
                      e.target.classList.remove("wrong");
                      setEmailValid(true);
                    }
                  }}
                />
              </Col>
              <Col xs={12} sm={12} md={6} className="inputInfo">
                <input
                  type="number"
                  className="form-control input_custom"
                  placeholder="رقم الهاتف"
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 10) {
                      e.target.classList.add("wrong");
                      e.target.classList.remove("true");
                    } else {
                      setMobile(e.target.value);
                      e.target.classList.add("true");
                      e.target.classList.remove("wrong");
                      setMobileValid(true);
                    }
                  }}
                />
              </Col>
              <Col xs={12} sm={12} md={6} className="inputInfo">
                <input
                  type="text"
                  className="form-control input_custom"
                  placeholder="العنوان  "
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 3) {
                      e.target.classList.add("wrong");
                      e.target.classList.remove("true");
                    } else {
                      setAddress_01(e.target.value);
                      e.target.classList.add("true");
                      e.target.classList.remove("wrong");
                      setAddressoneValid(true);
                    }
                  }}
                />
              </Col>
              <Col xs={12} sm={12} md={6} className="inputInfo">
                <input
                  type="text"
                  className="form-control input_custom"
                  placeholder="عنوان اخر"
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 3) {
                      e.target.classList.add("wrong");
                      e.target.classList.remove("true");
                    } else {
                      setAddress_02(e.target.value);
                      e.target.classList.add("true");
                      e.target.classList.remove("wrong");
                      setAddresstwoValid(true);
                    }
                  }}
                />
              </Col>
              <Col xs={12} sm={12} md={6} className="inputInfo">
                <input
                  type="text"
                  className="form-control input_custom"
                  placeholder="الدولة"
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 2) {
                      e.target.classList.add("wrong");
                      e.target.classList.remove("true");
                    } else {
                      setCountry(e.target.value);
                      e.target.classList.add("true");
                      e.target.classList.remove("wrong");
                      setCountryValid(true);
                    }
                  }}
                />
              </Col>
              <Col xs={12} sm={12} md={6} className="inputInfo">
                <input
                  type="text"
                  className="form-control input_custom"
                  placeholder="المدينة"
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 3) {
                      e.target.classList.add("wrong");
                      e.target.classList.remove("true");
                    } else {
                      setCity(e.target.value);
                      e.target.classList.add("true");
                      e.target.classList.remove("wrong");
                      setCityValid(true);
                    }
                  }}
                />
              </Col>
              <Col xs={12} sm={12} md={6} className="inputInfo">
                <input
                  type="text"
                  className="form-control input_custom"
                  placeholder="الشارع"
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 4) {
                      e.target.classList.add("wrong");
                      e.target.classList.remove("true");
                    } else {
                      setState(e.target.value);
                      e.target.classList.add("true");
                      e.target.classList.remove("wrong");
                      setStateValid(true);
                    }
                  }}
                />
              </Col>
              <Col xs={12} sm={12} md={6} className="inputInfo">
                <input
                  type="number"
                  className="form-control input_custom"
                  placeholder="الرقم البريدي "
                  required
                  onChange={(e) => {
                    if (e.target.value.length < 4) {
                      e.target.classList.add("wrong");
                      e.target.classList.remove("true");
                    } else {
                      setZipCode(e.target.value);
                      e.target.classList.add("true");
                      e.target.classList.remove("wrong");
                      setZipValid(true);
                    }
                  }}
                />
              </Col>
              {infoNotValid ? (
                <div className="error">
                  There is an error in the data, please check Your data
                </div>
              ) : (
                ""
              )}
              <input
                type="submit"
                value={infoValid === true ? "تم التاكيد ✓" : "تاكيد"}
                className="form-control"
                id="submit"
                onClick={(e) => {
                  if (infoValid) {
                    e.target.classList.add("infoValid");
                    setinfoNotValid(false);
                  } else {
                    e.target.classList.remove("infoValid");
                    setinfoNotValid(true);
                  }
                }}
              />
              <hr />
              {infoValid ? (
                <div
                  className="pay"
                  onClick={() => {
                    OpenModal(cartItems);
                  }}
                >
                  Confirm Order
                </div>
              ) : (
                ""
              )}
            </Form>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="details">
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
      </Container>
    </div>
  );
}

export default Checkout;
