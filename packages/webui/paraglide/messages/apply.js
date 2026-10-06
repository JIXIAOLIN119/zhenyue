/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ApplyInputs */

const zh_apply = /** @type {(inputs: ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用`)
};

const en_apply = /** @type {(inputs: ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply`)
};

/**
* | output |
* | --- |
* | "Apply" |
*
* @param {ApplyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const apply = /** @type {((inputs?: ApplyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ApplyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_apply(inputs)
	return en_apply(inputs)
});