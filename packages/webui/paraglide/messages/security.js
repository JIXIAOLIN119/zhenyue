/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} SecurityInputs */

const zh_security = /** @type {(inputs: SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全`)
};

const en_security = /** @type {(inputs: SecurityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security`)
};

/**
* | output |
* | --- |
* | "Security" |
*
* @param {SecurityInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const security = /** @type {((inputs?: SecurityInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SecurityInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_security(inputs)
	return en_security(inputs)
});