/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ShareInputs */

const zh_share = /** @type {(inputs: ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享`)
};

const en_share = /** @type {(inputs: ShareInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share`)
};

/**
* | output |
* | --- |
* | "Share" |
*
* @param {ShareInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share = /** @type {((inputs?: ShareInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ShareInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_share(inputs)
	return en_share(inputs)
});