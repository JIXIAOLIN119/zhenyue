/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Access_DeniedInputs */

const zh_access_denied = /** @type {(inputs: Access_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访问被拒绝`)
};

const en_access_denied = /** @type {(inputs: Access_DeniedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Access Denied`)
};

/**
* | output |
* | --- |
* | "Access Denied" |
*
* @param {Access_DeniedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const access_denied = /** @type {((inputs?: Access_DeniedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Access_DeniedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_access_denied(inputs)
	return en_access_denied(inputs)
});