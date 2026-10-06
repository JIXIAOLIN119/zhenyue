/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Balanced_ThoughtInputs */

const zh_balanced_thought = /** @type {(inputs: Balanced_ThoughtInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平衡思考`)
};

const en_balanced_thought = /** @type {(inputs: Balanced_ThoughtInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Balanced thought`)
};

/**
* | output |
* | --- |
* | "Balanced thought" |
*
* @param {Balanced_ThoughtInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const balanced_thought = /** @type {((inputs?: Balanced_ThoughtInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Balanced_ThoughtInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_balanced_thought(inputs)
	return en_balanced_thought(inputs)
});