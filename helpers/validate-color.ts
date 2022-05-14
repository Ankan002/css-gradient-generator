import chroma from "chroma-js";

export const validateColor = (color: string): boolean => chroma.valid(color);