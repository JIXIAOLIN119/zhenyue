/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} AiInputs */

const zh_ai = /** @type {(inputs: AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI`)
};

const en_ai = /** @type {(inputs: AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI`)
};

/**
* | output |
* | --- |
* | "AI" |
*
* @param {AiInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai = /** @type {((inputs?: AiInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<AiInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_ai(inputs)
	return en_ai(inputs)
});