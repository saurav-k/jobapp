import React from "react"
import { Link } from "react-router-dom"
import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from "../components"

function Landing(props) {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
