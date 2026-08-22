/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} CreatorInputs */

const zh_creator = /** @type {(inputs: CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建者`)
};

const en_creator = /** @type {(inputs: CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

/**
* | output |
* | --- |
* | "Creator" |
*
* @param {CreatorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const creator = /** @type {((inputs?: CreatorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<CreatorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_creator(inputs)
	return en_creator(inputs)
});