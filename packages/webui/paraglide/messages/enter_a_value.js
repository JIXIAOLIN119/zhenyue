/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Enter_A_ValueInputs */

const zh_enter_a_value = /** @type {(inputs: Enter_A_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入一个值`)
};

const en_enter_a_value = /** @type {(inputs: Enter_A_ValueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a value`)
};

/**
* | output |
* | --- |
* | "Enter a value" |
*
* @param {Enter_A_ValueInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enter_a_value = /** @type {((inputs?: Enter_A_ValueInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Enter_A_ValueInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_enter_a_value(inputs)
	return en_enter_a_value(inputs)
});