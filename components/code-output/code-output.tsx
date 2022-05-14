import React from 'react';

type Props = {
    type: "un-optimized";
    colorOne: string;
    colorTwo: string;
    orientation: string
} | {
    type: "optimized";
    colorOne: string;
    colorTwo: string;
    generatedColorOne: string;
    generatedColorTwo: string;
    generatedColorThree: string;
    orientation: string;
};

function CodeOutput(props: Props) {
    //TODO: Create a copy button
    return (
        <div className="lg:w-1/3 md:w-1/2 w-full p-2 flex items-center mt-5 rounded-md" style={{background: "rgba(0,0,0,0.3)"}}>
            <div className="flex-grow flex flex-col justify-center">
                {
                    props.type === "un-optimized" ? (
                        <>
                            <h3 className="font-manrope lg:text-xl md:text-lg text-base">
                                Base Code
                            </h3>
                            <p className="font-fira-code mt-3">
                                {
                                    `background-image: linear-gradient(${props.orientation},${props.colorOne},${props.colorTwo})`
                                }
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="font-manrope lg:text-xl md:text-lg text-base">
                                Optimized Code Code
                            </h3>
                            <p className="font-fira-code mt-3">
                                {
                                    `background-image: linear-gradient(${props.orientation},${props.colorOne},${props.generatedColorOne},${props.generatedColorTwo},${props.generatedColorThree},${props.colorTwo})`
                                }
                            </p>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default CodeOutput;