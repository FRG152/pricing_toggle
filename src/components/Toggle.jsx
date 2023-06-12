import { motion } from "framer-motion";
import { spring } from "../utils/animation";

const Toggle = ({ isOn, toggleSwitch }) => {
  return (
    <section>
      <motion.article
        initial={{ translateY: "-200px" }}
        animate={{ translateY: "0px" }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-DarkGrayishBlue text-[2.5rem] font-bold text-center">
          Our Princing
        </h1>
        <div className="flex items-center justify-center mt-12 gap-x-5">
          <span className="text-GrayishBlue font-medium text-[1.2rem]">
            Annually
          </span>
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
          <span className="text-GrayishBlue font-medium text-[1.2rem]">
            Monthly
          </span>
        </div>
      </motion.article>
    </section>
  );
};

export default Toggle;
