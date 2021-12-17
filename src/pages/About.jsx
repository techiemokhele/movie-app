import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Content>
        <>
          <Intro>Developer Information</Intro>
          <Description>
            Name: Neo <br />
            Surname: Mokhele <br />
            Email:{" "}
            <a
              style={{ color: "orange", textDecoration: "none" }}
              href="mailto:neomokhele23@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              neomokhele23@gmail.com
            </a>{" "}
            <br />
            Phone:{" "}
            <a
              style={{ color: "orange", textDecoration: "none" }}
              href="tel:+27609911484"
              target="_blank"
              rel="noreferrer"
            >
              (+27)60-991-1484
            </a>
          </Description>
          <Resume href="/document/neoMokheleResume.pdf" download>
            Download Resume{" "}
            <i class="fas fa-file" style={{ color: "#037ade" }}></i>
          </Resume>
          <BgImage />
        </>
      </Content>
    </Container>
  );
}

/* Page styling */
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const Intro = styled.h1`
  color: #fff;
  text-align: center;
  font-weight: 800;
  margin-bottom: 50px;
  font-size: 38px;
  text-decoration: underline;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Description = styled.p`
  color: hsla(0, 01, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  color: #fff;
  font-size: 16px;
`;

const Resume = styled.a`
  border: 4px solid transparent;
  color: #fff;
  border-radius: 30px;
  padding: 0.5rem 1.8rem;
  font-size: 1.5rem;
  font-weight: 600;
  box-shadow: 0px 0px 7px 8px #ff00004d;
  transition: box-shadow 0.4s ease;
  position: relative;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 0px 7px 12px orange;
  }
`;

export default About;
