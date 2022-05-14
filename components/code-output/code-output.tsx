import React from 'react';
import {MdOutlineContentCopy} from "react-icons/md";
import {toast} from "react-hot-toast";

type Props = {
    type: "un-optimized";
    colorOne: string;
    colorTwo: string;
    orientation: string;
    isDarkRequired: boolean;
} | {
    type: "optimized";
    colorOne: string;
    colorTwo: string;
    generatedColorOne: string;
    generatedColorTwo: string;
    generatedColorThree: string;
    orientation: string;
    isDarkRequired: boolean;
};

function CodeOutput(props: Props) {
    const copyText = async() => {
        if(props.type === "un-optimized"){
            await navigator.clipboard.writeText(`background-image: linear-gradient(${props.orientation},${props.colorOne},${props.colorTwo});`);
        }
        else{
            await navigator.clipboard.writeText(`background-image: linear-gradient(${props.orientation},${props.colorOne},${props.generatedColorOne},${props.generatedColorTwo},${props.generatedColorThree},${props.colorTwo});`);
        }

        toast.success("Code copied successfully");
    }
    return (
        <div className="lg:w-1/3 md:w-1/2 w-full p-2 flex items-center mt-5 rounded-md" style={{background: "rgba(0,0,0,0.3)"}}>
            <div className="flex-grow flex flex-col w-full">
                {
                    props.type === "un-optimized" ? (
                        <>
                            <h3 className="font-manrope lg:text-xl md:text-lg text-base">
                                Base Code
                            </h3>
                            <p className="font-fira-code mt-3 break-all">
                                {
                                    `background-image: linear-gradient(${props.orientation},${props.colorOne},${props.colorTwo});`
                                }
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="font-manrope lg:text-xl md:text-lg text-base">
                                Optimized Code
                            </h3>
                            <p className="font-fira-code mt-3 break-all">
                                {
                                    `background-image: linear-gradient(${props.orientation},${props.colorOne},${props.generatedColorOne},${props.generatedColorTwo},${props.generatedColorThree},${props.colorTwo});`
                                }
                            </p>
                        </>
                    )
                }
            </div>
            <div className="w-10 h-full flex items-center justify-center">
                <button onClick={copyText}>
                    <MdOutlineContentCopy />
                </button>
            </div>
        </div>
    );
}

export default CodeOutput;