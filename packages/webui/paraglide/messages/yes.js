/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} YesInputs */

const zh_yes = /** @type {(inputs: YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`是`)
};

const en_yes = /** @type {(inputs: YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes`)
};

/**
* | output |
* | --- |
* | "Yes" |
*
* @param {YesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const yes = /** @type {((inputs?: YesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<YesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_yes(inputs)
	return en_yes(inputs)
});