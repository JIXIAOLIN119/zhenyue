/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unknown_AssetInputs */

const zh_unknown_asset = /** @type {(inputs: Unknown_AssetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知资源`)
};

const en_unknown_asset = /** @type {(inputs: Unknown_AssetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`unknown asset`)
};

/**
* | output |
* | --- |
* | "unknown asset" |
*
* @param {Unknown_AssetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unknown_asset = /** @type {((inputs?: Unknown_AssetInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unknown_AssetInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_unknown_asset(inputs)
	return en_unknown_asset(inputs)
});