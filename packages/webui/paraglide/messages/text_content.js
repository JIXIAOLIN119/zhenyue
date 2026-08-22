/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Text_ContentInputs */

const zh_text_content = /** @type {(inputs: Text_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文本内容`)
};

const en_text_content = /** @type {(inputs: Text_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Text Content`)
};

/**
* | output |
* | --- |
* | "Text Content" |
*
* @param {Text_ContentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const text_content = /** @type {((inputs?: Text_ContentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Text_ContentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_text_content(inputs)
	return en_text_content(inputs)
});