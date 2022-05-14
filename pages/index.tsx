import type { NextPage } from "next";
import CustomHead from "../components/custom-head";
import { useEffect, useState } from "react";
import type { OrientationType } from "../types/orientation-type";
import { checkDarkRequired } from "../helpers/check-dark-required";
import OrientationSection from "../components/orientation-section";
import InputSection from "../components/input-section";
import GenerateGradient from '../components/generate-gradient';
import CodeOutput from "../components/code-output";

const Home: NextPage = () => {
  const [colorOne, setColorOne] = useState<string>("#FF6347");
  const [colorTwo, setColorTwo] = useState<string>("#0000EE");

  const [inputColorOne, setInputColorOne] = useState<string>(colorOne);
  const [inputColorTwo, setInputColorTwo] = useState<string>(colorTwo);

  const [isDarkRequired, setIsDarkRequired] = useState<boolean>(false);

  const [orientation, setOrientation] =
    useState<OrientationType>("to right bottom");

  const [generatedColorOne, setGeneratedColorOne] = useState<string | null>(null);
  const [generatedColorTwo, setGeneratedColorTwo] = useState<string | null>(null);
  const [generatedColorThree, setGeneratedColorThree] = useState<string | null>(null);

  useEffect(() => {
    checkDarkRequired(colorOne, setIsDarkRequired, colorTwo);
  }, [colorOne, colorTwo]);

  useEffect(() => {
    console.log(generatedColorOne);
  }, [generatedColorOne, generatedColorTwo, generatedColorThree]);


  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center py-2 px-2 ${
        isDarkRequired ? "text-black" : "text-gray-50"
      }`}
      style={{
        background: `linear-gradient(${orientation},${colorOne},${generatedColorOne?generatedColorOne+",":""}${generatedColorTwo?generatedColorTwo+",":""}${generatedColorThree?generatedColorThree+",":""}${colorTwo})`
      }}
    >
      <CustomHead title="Oh My Gradient" />

      <h1 className="font-manrope text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        Generate CSS Color Gradient
      </h1>

      <h3 className="mt-4 font-manrope text-xs lg:text-base">
        Choose Orientation
      </h3>

      <div className="mt-4 w-full">
        <OrientationSection setOrientation={setOrientation} />
      </div>

      <InputSection
        inputColorOne={inputColorOne}
        inputColorTwo={inputColorTwo}
        setInputColorOne={setInputColorOne}
        setInputColorTwo={setInputColorTwo}
        isDarkRequired={isDarkRequired}
      />

      <GenerateGradient isDarkRequired={isDarkRequired} inputColorOne={inputColorOne} inputColorTwo={inputColorTwo} setColorOne={setColorOne} setColorTwo={setColorTwo} orientation={orientation} setGeneratedColorOne={setGeneratedColorOne} setGeneratedColorTwo={setGeneratedColorTwo} setGeneratedColorThree={setGeneratedColorThree} />


      <CodeOutput type="un-optimized" colorOne={colorOne} colorTwo={colorTwo} orientation={orientation} isDarkRequired={isDarkRequired} />

      {
        generatedColorOne && generatedColorTwo && generatedColorThree && (
            <CodeOutput type="optimized" colorOne={colorOne} colorTwo={colorTwo} orientation={orientation} generatedColorOne={generatedColorOne} generatedColorTwo={generatedColorTwo} generatedColorThree={generatedColorThree} isDarkRequired={isDarkRequired} />
          )
      }

      <button className={`bg-transparent text-base py-2 px-3 rounded-md hover:bg-[rgba(0,0,0,0.3)] mt-10 border-2 ${isDarkRequired ? "border-black" : "border-gray-50"}`}>
        <a href="https://www.buymeacoffee.com/ankan002" target="_blank" className="font-manrope font-semibold">
          ☕ Buy Me A Coffee
        </a>
      </button>
    </div>
  );
};

export default Home;
