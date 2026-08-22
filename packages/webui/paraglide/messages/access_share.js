/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Access_ShareInputs */

const zh_access_share = /** @type {(inputs: Access_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访问分享`)
};

const en_access_share = /** @type {(inputs: Access_ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Access Share`)
};

/**
* | output |
* | --- |
* | "Access Share" |
*
* @param {Access_ShareInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const access_share = /** @type {((inputs?: Access_ShareInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Access_ShareInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_access_share(inputs)
	return en_access_share(inputs)
});