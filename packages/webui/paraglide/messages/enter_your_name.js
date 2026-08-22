/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Enter_Your_NameInputs */

const zh_enter_your_name = /** @type {(inputs: Enter_Your_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入您的名称`)
};

const en_enter_your_name = /** @type {(inputs: Enter_Your_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your name`)
};

/**
* | output |
* | --- |
* | "Enter your name" |
*
* @param {Enter_Your_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enter_your_name = /** @type {((inputs?: Enter_Your_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Enter_Your_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_enter_your_name(inputs)
	return en_enter_your_name(inputs)
});