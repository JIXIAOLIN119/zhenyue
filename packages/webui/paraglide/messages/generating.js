/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} GeneratingInputs */

const zh_generating = /** @type {(inputs: GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在生成...`)
};

const en_generating = /** @type {(inputs: GeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generating...`)
};

/**
* | output |
* | --- |
* | "Generating..." |
*
* @param {GeneratingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const generating = /** @type {((inputs?: GeneratingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<GeneratingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_generating(inputs)
	return en_generating(inputs)
});