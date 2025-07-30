// components/ScrollLink.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

const ScrollLink = ({ to, children, className }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      if (location.pathname === to) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(to);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 50); // delay ensures scroll happens after page transition
      }
    },
    [location.pathname, navigate, to]
  );

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default ScrollLink;
