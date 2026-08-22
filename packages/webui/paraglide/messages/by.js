/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ByInputs */

const zh_by = /** @type {(inputs: ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`由`)
};

const en_by = /** @type {(inputs: ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`by`)
};

/**
* | output |
* | --- |
* | "by" |
*
* @param {ByInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const by = /** @type {((inputs?: ByInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ByInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_by(inputs)
	return en_by(inputs)
});