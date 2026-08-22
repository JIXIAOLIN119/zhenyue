/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} CloseInputs */

const zh_close = /** @type {(inputs: CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭`)
};

const en_close = /** @type {(inputs: CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
};

/**
* | output |
* | --- |
* | "Close" |
*
* @param {CloseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const close = /** @type {((inputs?: CloseInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<CloseInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_close(inputs)
	return en_close(inputs)
});