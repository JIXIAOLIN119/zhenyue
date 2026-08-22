/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ProcessingInputs */

const zh_processing = /** @type {(inputs: ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处理中...`)
};

const en_processing = /** @type {(inputs: ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processing...`)
};

/**
* | output |
* | --- |
* | "Processing..." |
*
* @param {ProcessingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const processing = /** @type {((inputs?: ProcessingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ProcessingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_processing(inputs)
	return en_processing(inputs)
});