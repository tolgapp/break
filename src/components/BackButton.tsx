import { useLocation, useNavigate } from "react-router-dom";

type ButtonProps = {
  toggle: boolean;
};

const BackButton: React.FC<ButtonProps> = ({ toggle }) => {
  
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/signup") {
    return (
      <img
        onClick={() => navigate("/profile")}
        src={toggle ? "/icons/back.png" : "/icons/backdark.png"}
        className={`${
          toggle ? "border-white" : "border-slate-900"
        } border cursor-pointer fixed left-8 top-6  p-2 rounded-xl w-16`}
      />
    );
  }

  return (
    <img
      onClick={() => navigate(-1)}
      src={toggle ? "/icons/back.png" : "/icons/backdark.png"}
      className={`${
        toggle ? "border-white" : "border-slate-900"
      } border cursor-pointer fixed left-8 top-6  p-2 rounded-xl w-16`}
    />
  );
};
export default BackButton;
