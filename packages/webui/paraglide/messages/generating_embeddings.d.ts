/**
* | output |
* | --- |
* | "Generating embeddings..." |
*
* @param {Generating_EmbeddingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const generating_embeddings: ((inputs?: Generating_EmbeddingsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Generating_EmbeddingsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Generating_EmbeddingsInputs = {};
