import { motion } from "framer-motion";
import { container, element } from "../utils/animation";

const white =
  "bg-gradient-to-r from-LinearGradient01 to-LinearGradient02 text-VeryLightGrayisBlue my-[24px] py-8";
const normal = "bg-VeryLightGrayishBlue my-12 py-8";

const textNormal = "text-DarkGrayishBlue";
const textWhite = "text-VeryLightGrayishBlue";

const lineNormal = "text-LightGrayishBlue";
const lineWhite = "text-VeryLightGrayishBlue";

const buttonNormal =
  "bg-gradient-to-r from-LinearGradient01 to-LinearGradient02 text-VeryLightGrayishBlue hover:bg-gradient hover:from-VeryLightGrayishBlue hover:to-VeryLightGrayishBlue hover:text-LinearGradient01 hover:border-2 hover:border-LinearGradient01";
const buttonWhite =
  "bg-VeryLightGrayishBlue text-DarkGrayishBlue hover:bg-opacity-0 hover:text-VeryLightGrayishBlue hover:border-2 hover:border-VeryLightGrayishBlue";

const Card = ({ data }) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="lg:flex lg:justify-center lg:mt-12"
    >
      {data.map((item, index) => {
        return (
          <motion.article
            variants={element}
            className={`${
              index === 1 ? white : normal
            } rounded-lg shadow-sm px-12 lg:w-[400px] `}
          >
            <h2
              className={`${
                index === 1 ? textWhite : textNormal
              } text-[1.3rem] text-center font-bold my-2`}
            >
              {item.type}
            </h2>
            <div className="text-center">
              <span
                className={`${
                  index === 1 ? textWhite : textNormal
                } text-[2rem] font-bold sm:text-[4rem]`}
              >
                {item.price}
              </span>
              <hr className={`${index === 1 ? lineWhite : lineNormal} my-4`} />
              <span
                className={`${
                  index === 1 ? textWhite : textNormal
                } text-[1.2rem] font-medium`}
              >
                {item.storage}
              </span>
              <hr className={`${index === 1 ? lineWhite : lineNormal} my-4`} />
              <span
                className={`${
                  index === 1 ? textWhite : textNormal
                } text-[1.2rem] font-medium`}
              >
                {item.users}
              </span>
              <hr className={`${index === 1 ? lineWhite : lineNormal} my-4`} />
              <span
                className={`${
                  index === 1 ? textWhite : textNormal
                } text-[1.2rem] font-medium`}
              >
                {item.send}
              </span>
              <hr className={`${index === 1 ? lineWhite : lineNormal} my-4`} />
            </div>
            <button
              type="button"
              className={`${
                index === 1 ? buttonWhite : buttonNormal
              } font-bold tracking-widest rounded-md transition duration-150 ease-out w-[100%] mt-4 py-4`}
            >
              LEARN MORE
            </button>
          </motion.article>
        );
      })}
    </motion.section>
  );
};

export default Card;
