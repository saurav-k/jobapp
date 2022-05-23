import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

import { Logo, FormRow } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"
import { useSelector, useDispatch } from "react-redux"
import { loginUser, registerUser } from "../features/user/userSlice"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

function Register(props) {
  const dispatch = useDispatch()
  const { isLoading, user } = useSelector((store) => store.user)
  const navigate = useNavigate()

  const [values, setValues] = useState(initialState)

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    // console.log(`${name}:${value}`);
    setValues({ ...values, [name]: value })

    // console.log(event.target);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields")
      return
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* { name field} */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* { email field} */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* { password field} */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Loading ..." : "Submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
