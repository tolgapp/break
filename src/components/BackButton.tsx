import { useNavigate } from "react-router-dom";

const BackButton = () => {

  const navigate = useNavigate();


  return (
    <button onClick={() => navigate(-1)} className="cursor-pointer fixed left-10 top-10 border p-2 text-2xl  rounded-xl text-white">
      BACK
    </button>
  );
};
export default BackButton;
