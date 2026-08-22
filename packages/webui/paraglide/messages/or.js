/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} OrInputs */

const zh_or = /** @type {(inputs: OrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`或`)
};

const en_or = /** @type {(inputs: OrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OR`)
};

/**
* | output |
* | --- |
* | "OR" |
*
* @param {OrInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const or = /** @type {((inputs?: OrInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<OrInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_or(inputs)
	return en_or(inputs)
});