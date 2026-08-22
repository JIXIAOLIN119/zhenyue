/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} NoInputs */

const zh_no = /** @type {(inputs: NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`否`)
};

const en_no = /** @type {(inputs: NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No`)
};

/**
* | output |
* | --- |
* | "No" |
*
* @param {NoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no = /** @type {((inputs?: NoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<NoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no(inputs)
	return en_no(inputs)
});