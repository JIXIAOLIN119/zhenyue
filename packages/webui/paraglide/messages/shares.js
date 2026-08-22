/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} SharesInputs */

const zh_shares = /** @type {(inputs: SharesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享`)
};

const en_shares = /** @type {(inputs: SharesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shares`)
};

/**
* | output |
* | --- |
* | "Shares" |
*
* @param {SharesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const shares = /** @type {((inputs?: SharesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SharesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_shares(inputs)
	return en_shares(inputs)
});