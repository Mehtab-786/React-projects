import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/login");
    }
  }, [authStatus, navigate, authentication]);

  return <>{children}</>;
}

export default AuthLayout;
