/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ChineseInputs */

const zh_chinese = /** @type {(inputs: ChineseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简体中文 (Chinese)`)
};

const en_chinese = /** @type {(inputs: ChineseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简体中文 (Chinese)`)
};

/**
* | output |
* | --- |
* | "简体中文 (Chinese)" |
*
* @param {ChineseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const chinese = /** @type {((inputs?: ChineseInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ChineseInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_chinese(inputs)
	return en_chinese(inputs)
});