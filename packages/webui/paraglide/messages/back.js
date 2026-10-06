/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} BackInputs */

const zh_back = /** @type {(inputs: BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回`)
};

const en_back = /** @type {(inputs: BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
};

/**
* | output |
* | --- |
* | "Back" |
*
* @param {BackInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const back = /** @type {((inputs?: BackInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<BackInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_back(inputs)
	return en_back(inputs)
});