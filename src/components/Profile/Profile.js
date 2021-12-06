import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Social from "./Social"
import profileImage from "../../images/perfil.png"
import "./Profile.scss"

const data = [
  {
    title: "Edad:",
    info: "28 años",
  },
  {
    title: "Dirección:",
    info: "Ricardo Flores Magón 105, Izcalli Chamapa, Naucalpan, EdoMéx. Méx.",
  },
  {
    title: "E-Mail:",
    info: "gustavovazco@gmail.com",
  },
  {
    title: "Telefono:",
    info: "+51 55 8185-3675",
  },
]

export default function Profile() {
  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} fluid />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <span>¡HOLA!</span>
            <p>Gustavo Vázquez Correa</p>
            <p>Front & JamStack Developer</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title}</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}
