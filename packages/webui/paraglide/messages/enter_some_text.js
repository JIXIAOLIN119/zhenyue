/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Enter_Some_TextInputs */

const zh_enter_some_text = /** @type {(inputs: Enter_Some_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入一些文字...`)
};

const en_enter_some_text = /** @type {(inputs: Enter_Some_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter some text...`)
};

/**
* | output |
* | --- |
* | "Enter some text..." |
*
* @param {Enter_Some_TextInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enter_some_text = /** @type {((inputs?: Enter_Some_TextInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Enter_Some_TextInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_enter_some_text(inputs)
	return en_enter_some_text(inputs)
});