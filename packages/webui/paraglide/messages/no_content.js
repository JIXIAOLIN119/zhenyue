/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_ContentInputs */

const zh_no_content = /** @type {(inputs: No_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无内容。`)
};

const en_no_content = /** @type {(inputs: No_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No content.`)
};

/**
* | output |
* | --- |
* | "No content." |
*
* @param {No_ContentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_content = /** @type {((inputs?: No_ContentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_ContentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_content(inputs)
	return en_no_content(inputs)
});