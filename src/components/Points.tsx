import { getClassNames, getLogoSrc } from "../data/helper";
import BackButton from "./BackButton";
import Logo from "./Logo";

type PointsProps = {
    toggle: boolean;
    setToggle: (value: boolean) => void;
}

const Points: React.FC<PointsProps> = ({toggle, setToggle}) => {


  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${getClassNames(
        toggle
      )}`}>
        <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc}/>
        <BackButton toggle={toggle}/>
        <h2 className={`text-3xl`}>POINTS</h2>
    </div>
  )

}

export default Points