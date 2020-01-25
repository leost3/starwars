import React, { useState } from "react";

import Backdrop from "../UIElements/backdrop/Backdrop";
import SinginSingup from "../UIElements/SingupForm/SignupForm";

const Trailing = props => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [isUserUthenticated, setIsUserAthenticated] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(prevLogin => !prevLogin);
  };

  const closeLogin = e => {
    setIsLoginOpen(false);
  };

  const login = () => setIsUserAthenticated(true);

  const logout = e => {
    setIsUserAthenticated(false);
  };

  return (
    <div className="trailing">
      <button>login</button>
      {isLoginOpen && <Backdrop />}
      {isLoginOpen && <SinginSingup closeLogin={closeLogin} login={login} />}
    </div>
  );
};

export default Trailing;
