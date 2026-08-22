/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_TaglineInputs */

const zh_auth_tagline = /** @type {(inputs: Auth_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一站式创意资产管理协作平台。`)
};

const en_auth_tagline = /** @type {(inputs: Auth_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One workspace for all your creative assets.`)
};

/**
* | output |
* | --- |
* | "One workspace for all your creative assets." |
*
* @param {Auth_TaglineInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_tagline = /** @type {((inputs?: Auth_TaglineInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_TaglineInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_auth_tagline(inputs)
	return en_auth_tagline(inputs)
});