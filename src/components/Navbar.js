import React from "react"
import Wrapper from "../assets/wrappers/Navbar"
import { useState } from "react"
import Logo from "./Logo"
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar, logoutUser } from "../features/user/userSlice"
// import { useNavigate } from "react-router-dom"

function Navbar(props) {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [showLogout, setShowLogout] = useState(false)

  //   const navigate = useNavigate()

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => {
            dispatch(toggleSidebar())
          }}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            onClick={() => {
              setShowLogout(!showLogout)
              console.log("Show Logout buttoon")
            }}
            type="button"
            className="btn"
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              onClick={() => {
                dispatch(logoutUser())
              }}
              className="dropdown-btn"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
