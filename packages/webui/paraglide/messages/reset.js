/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ResetInputs */

const zh_reset = /** @type {(inputs: ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重置`)
};

const en_reset = /** @type {(inputs: ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset`)
};

/**
* | output |
* | --- |
* | "Reset" |
*
* @param {ResetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const reset = /** @type {((inputs?: ResetInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ResetInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_reset(inputs)
	return en_reset(inputs)
});