/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Enter_Your_DetailsInputs */

const zh_enter_your_details = /** @type {(inputs: Enter_Your_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入您的信息`)
};

const en_enter_your_details = /** @type {(inputs: Enter_Your_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your details`)
};

/**
* | output |
* | --- |
* | "Enter your details" |
*
* @param {Enter_Your_DetailsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enter_your_details = /** @type {((inputs?: Enter_Your_DetailsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Enter_Your_DetailsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_enter_your_details(inputs)
	return en_enter_your_details(inputs)
});