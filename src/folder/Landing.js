import React from "react"
import styled from "styled-components"
import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }

  p {
    color: var(--grey-600);
  }

  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`

function Landing(props) {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby tousled shabby chic cray, raw denim mustache normcore
            chartreuse coloring book health goth. Keffiyeh everyday carry cred
            vape, brooklyn mlkshk fam hot chicken narwhal copper mug trust fund
            pinterest. Lo-fi banh mi gastropub hot chicken, photo booth keffiyeh
            kitsch deep v vice subway tile. Kogi sartorial sriracha 90's squid
            actually. Tilde gochujang fashion axe, coloring book readymade
            shoreditch biodiesel thundercats franzen. Succulents ramps tousled,
            disrupt lyft cloud bread chillwave wolf put a bird on it bitters
            tilde pop-up tattooed. Glossier biodiesel vice, tumblr narwhal
            master cleanse mixtape fanny pack church-key venmo vinyl.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
