/**
* | output |
* | --- |
* | "{time} by {author}" |
*
* @param {Created_By_AtInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const created_by_at: ((inputs: Created_By_AtInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Created_By_AtInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Created_By_AtInputs = {
    time: NonNullable<unknown>;
    author: NonNullable<unknown>;
};
