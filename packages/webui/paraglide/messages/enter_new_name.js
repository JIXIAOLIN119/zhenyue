/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Enter_New_NameInputs */

const zh_enter_new_name = /** @type {(inputs: Enter_New_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入新名称`)
};

const en_enter_new_name = /** @type {(inputs: Enter_New_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter new name`)
};

/**
* | output |
* | --- |
* | "Enter new name" |
*
* @param {Enter_New_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enter_new_name = /** @type {((inputs?: Enter_New_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Enter_New_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_enter_new_name(inputs)
	return en_enter_new_name(inputs)
});