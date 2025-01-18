import { Link } from "react-router-dom";
import { getClassNames } from "../data/helper"

type UserActionProps = {
    toggle: boolean
}

const UserAction: React.FC<UserActionProps> = ({toggle}) => {

    const buttonBg = toggle
    ? "bg-gray-700 hover:bg-gray-600"
    : "bg-gray-300 hover:bg-gray-200";

  return (
    <div className="flex flex-wrap gap-6 justify-center">
          <Link
            to="/signup"
            className={`flex items-center justify-center w-48 h-24 rounded-lg text-2xl font-semibold transition-all duration-300 ${buttonBg} ${getClassNames(
              !toggle
            )}`}
          >
            Signup
          </Link>
          <Link
            to="/login"
            className={`flex items-center justify-center w-48 h-24 rounded-lg text-2xl font-semibold transition-all duration-300 ${buttonBg} ${getClassNames(
              !toggle
            )}`}
          >
            Login
          </Link>
        </div>
  )
}
export default UserAction