import { useState } from "react";
import styled from "styled-components";
import "../css/modal.css";

/* Show and hide modal onClick */
const Home = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <Container>
      <Content>
        <>
          <Intro>Welcome To Awesome Movies</Intro>
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" alt="cta-logo-one" />
            <ShowModal onClick={toggleModal}>
              I Have A Surprise For You!
            </ShowModal>
            <Description>
              Get All Premium Access To Our Latest Movies For An Additional Fee
              With Awesome Movies As Of
              <b style={{ marginLeft: 3 }}>
                {new Date().toLocaleString("en-US", { day: "2-digit" })}
              </b>
              <b style={{ marginLeft: 3 }}>
                {new Date().toLocaleString("en-US", { month: "long" })}
              </b>
              <b style={{ marginLeft: 3, marginRight: -1 }}>
                {new Date().getFullYear()}
              </b>
              . The Prices Are Subject To Change. Get This Subscription offer
              while its still <b style={{ color: "red" }}>R249.99</b>
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="cta-logo-two" />
          </CTA>
          <BgImage />
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div
                className="modal-content"
                style={{ backgroundColor: "#000", marginBottom: "auto" }}
              >
                <button className="close-modal" onClick={toggleModal}>
                  Close
                </button>
                <div>
                  <img
                    src="/images/logo.png"
                    alt="awesome-movies-logo"
                    style={{
                      backgroundColor: "black",
                      width: "12%",
                      height: "12%",
                      marginTop: "5%",
                    }}
                  />
                </div>
                <div>
                  <h1>Hey You! Welcome</h1>
                  <p
                    style={{
                      fontSize: "12px",
                      marginTop: "10px",
                      marginBottom: "15px",
                    }}
                  >
                    Thank you for showing interest in our promotion. <br />{" "}
                    Since you have clicked on the button, you are the first to
                    know about our new movie releases. Check them out now!
                    <br />
                    😊
                  </p>
                  <div style={{ marginTop: "40px" }}>
                    <a
                      href="/movies"
                      style={{
                        fontWeight: "bold",
                        color: "#f9f9f9",
                        backgroundColor: "#0063e5",
                        marginBottom: "6px",
                        marginTop: "6px",
                        width: "100%",
                        letterSpacing: "1.5px",
                        fontSize: "13px",
                        padding: "16.5px 0",
                        border: "1px solid transparent",
                        borderRadius: "4px",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      <span>
                        Browse Movies{" "}
                        <i class="fas fa-play" style={{ color: "orange" }}></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </Content>
    </Container>
  );
};

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

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const ShowModal = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 10px;
  display: block;
  width: 100%;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

const Description = styled.p`
  color: hsla(0, 01, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  color: #fff;
`;

export default Home;
