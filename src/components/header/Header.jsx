import React, { useState } from "react";
import styled from "styled-components";

/* Header with responsive function for nav */
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <Nav>
        <a href="/">
          <Logo>
            <img src="/images/logo.png" alt="logo" />
          </Logo>
        </a>
        <>
          <NavMenu isMobile={isMobile} onClick={() => setIsMobile(!isMobile)}>
            <a href="/">
              <img src="/images/home-icon.svg" alt="home icon" />
              <span>Home</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="movies icon" />
              <span>Our Popular Movies</span>
            </a>
            <a href="/about">
              <img src="/images/original-icon.svg" alt="original icon" />
              <span>About Developer</span>
            </a>
          </NavMenu>
        </>
        <StyledBurger
          isMobile={isMobile}
          onClick={() => setIsMobile(!isMobile)}
        >
          <div />
          <div />
          <div />
        </StyledBurger>
      </Nav>
    </div>
  );
};

/* Page styling */
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  width: 100%;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        left: 0px;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
        background-color: #03e5b7;
        background-image: linear-gradient(315deg, #03e5b7 0%, #037ade 74%);
      }
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ isMobile }) =>
      isMobile ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background-color: #090b13;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      transition: width 0.5s ease;
      height: 2px;
      background-image: linear-gradient(315deg, #037ade 0%, #03e5b7 74%);
    }

    &.active::after,
    &:hover::after {
      width: 100%;
    }

    a {
      display: flex;
      align-items: center;
      padding: 0 12px;
      text-decoration: none;
      margin-bottom: 50px;
      height: 8rem;
    }
  }
`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isMobile }) => (isMobile ? "red" : "orange")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isMobile }) =>
        isMobile ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ isMobile }) =>
        isMobile ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isMobile }) => (isMobile ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isMobile }) =>
        isMobile ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

export default Header;
