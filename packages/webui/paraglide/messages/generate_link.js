/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Generate_LinkInputs */

const zh_generate_link = /** @type {(inputs: Generate_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成链接`)
};

const en_generate_link = /** @type {(inputs: Generate_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generate Link`)
};

/**
* | output |
* | --- |
* | "Generate Link" |
*
* @param {Generate_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const generate_link = /** @type {((inputs?: Generate_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Generate_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_generate_link(inputs)
	return en_generate_link(inputs)
});