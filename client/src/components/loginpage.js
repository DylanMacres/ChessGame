import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"



const LogIn = ({socket}) => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", userName)
        socket.emit("newUser", {userName, socketID: socket.id})
        navigate("/chat")
    }

return(

  <div className="container">
    <div className="row px-3">
      <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
        <div className="img-left d-none d-md-flex">
          <div className="card-body">
            <h4 className="title text-center mt-4"> Account Login</h4>
            <form className="form-box px-3"/>
              <div className="form-input">
                
                <input type="email" name="" placeholder="📧  email@domain.com" required/>
  
              <div className="form-input">
               
                <input type="password" name="" placeholder="🔑  password" required/>
              </div>

              <div className="mb-3">
                <div className="cutom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="cb1" name=""/>
                  <label className="custom-control-label" for="cb1"> Remember me</label>
                </div>
              </div>



              <div className="mb-3">
                <button type="submit" className="btn btn-block text-uppercase">
                  Login
                </button>
              </div>

              <div className="text-center mb-3">
                <div className="col-4"><a href="#" className="btn btn-facebook">
                     facebook
                  </a> 
                 
                </div>

                <div className="col-4"><a href="#" className="btn btn-google">
                  Google
               </a> 
             </div>
             <hr className="my-4"/>
             <div className="text-center mb-2">
                Don't have an account?
                <a href="#" className="register-link">
                  Register here
                </a>
             </div>


              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default LogIn