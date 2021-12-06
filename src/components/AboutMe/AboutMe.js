import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/cv.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>
        Me especializo en diseño y desarrollo de experiencias e interfaces
        digitales.
      </p>
      <p>
        Tengo conocimientos FullStack en diferentes tecnologías, aunque mi
        principal fortaleza es el desarrollo Front y JamStack.
      </p>
      <p>
        También soy experto en el área de ventas, estrategias de mercado,
        fotogafía, vídeo, comunicación corporativa y relaciones públicas.
      </p>
      <hr />

      <a href={CV} target="_blank">
        <Button primary>Descargar CV</Button>
      </a>
    </Container>
  )
}
