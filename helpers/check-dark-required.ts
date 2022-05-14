import chroma from "chroma-js";

export const checkDarkRequired = (
    colorOne: string,
    setIsDarkRequired: Function,
    colorTwo?: string
) => {
    const contrastOne = chroma(colorOne).luminance();
    const contrastTwo = chroma(colorTwo ?? "#FFF").luminance();
    if(((contrastOne + contrastTwo) / 2) > 0.6){
        setIsDarkRequired(true)
    }else{
        setIsDarkRequired(false)
    } 
}