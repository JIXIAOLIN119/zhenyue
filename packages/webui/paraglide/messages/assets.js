/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} AssetsInputs */

const zh_assets = /** @type {(inputs: AssetsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`资源`)
};

const en_assets = /** @type {(inputs: AssetsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assets`)
};

/**
* | output |
* | --- |
* | "Assets" |
*
* @param {AssetsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const assets = /** @type {((inputs?: AssetsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<AssetsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_assets(inputs)
	return en_assets(inputs)
});