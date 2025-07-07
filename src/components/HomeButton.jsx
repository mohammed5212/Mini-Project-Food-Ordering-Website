import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
   <div className="flex justify-center mt-10 mb-6">
      <button
        onClick={() => navigate("/products")}
        className="w-1/2 bg-white bg-opacity-80 text-black py-3 rounded-md shadow-md hover:bg-opacity-100 transition"
      >
        🏠 Back to Home
      </button>
    </div>
  );
};

export default HomeButton;
