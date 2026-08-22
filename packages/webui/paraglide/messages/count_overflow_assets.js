/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Count_Overflow_AssetsInputs */

const zh_count_overflow_assets = /** @type {(inputs: Count_Overflow_AssetsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`10000+ 资源`)
};

const en_count_overflow_assets = /** @type {(inputs: Count_Overflow_AssetsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`10000+ Assets`)
};

/**
* | output |
* | --- |
* | "10000+ Assets" |
*
* @param {Count_Overflow_AssetsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const count_overflow_assets = /** @type {((inputs?: Count_Overflow_AssetsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Count_Overflow_AssetsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_count_overflow_assets(inputs)
	return en_count_overflow_assets(inputs)
});