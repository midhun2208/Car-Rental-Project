import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSignIn(true);
    }, 200);
  }, []);

  //state for registration
  const [registration, setRegistration] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggle = () => {
    setIsSignIn(!isSignIn);
    setRegistration({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  console.log(registration);

  return (
    <div className={`container ${isSignIn ? "sign-in" : "sign-up"}`}>
      <div className={`container ${isSignIn ? "sign-in" : "sign-up"}`}>
        {/* FORM SECTION */}
        <div className="row">
          {/* SIGN UP */}
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) =>
                      setRegistration({
                        ...registration,
                        userName: e.target.value,
                      })
                    }
                    value={registration.userName}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setRegistration({
                        ...registration,
                        email: e.target.value,
                      })
                    }
                    value={registration.email}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setRegistration({
                        ...registration,
                        password: e.target.value,
                      })
                    }
                    value={registration.password}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    onChange={(e) =>
                      setRegistration({
                        ...registration,
                        confirmPassword: e.target.value,
                      })
                    }
                    value={registration.confirmPassword}
                  />
                </div>
                <button>Sign up</button>
                <p>
                  <span>Already have an account? &nbsp;</span>
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
          {/* END SIGN UP */}
          {/* SIGN IN */}
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="email"
                    placeholder="Username"
                    onChange={(e) =>
                      setRegistration({
                        ...registration,
                        email: e.target.value,
                      })
                    }
                    value={registration.email}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setRegistration({
                        ...registration,
                        password: e.target.value,
                      })
                    }
                    value={registration.password}
                  />
                </div>
                <button>Sign in</button>
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don't have an account?&nbsp;</span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper">
              {/* Additional content for the form wrapper if needed */}
            </div>
          </div>
          {/* END SIGN IN */}
        </div>
        {/* END FORM SECTION */}
        {/* CONTENT SECTION */}
        <div className="row content-row">
          {/* SIGN IN CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome </h2>
            </div>
            <div className="img sign-in">
              {/* Additional content for the sign-in section if needed */}
            </div>
          </div>
          {/* END SIGN IN CONTENT */}
          {/* SIGN UP CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="img sign-up">
              {/* Additional content for the sign-up section if needed */}
            </div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
          {/* END SIGN UP CONTENT */}
        </div>
        {/* END CONTENT SECTION */}
      </div>
    </div>
  );
};

export default Login;
