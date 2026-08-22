/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Personal_InfoInputs */

const zh_personal_info = /** @type {(inputs: Personal_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人信息`)
};

const en_personal_info = /** @type {(inputs: Personal_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personal Info`)
};

/**
* | output |
* | --- |
* | "Personal Info" |
*
* @param {Personal_InfoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const personal_info = /** @type {((inputs?: Personal_InfoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Personal_InfoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_personal_info(inputs)
	return en_personal_info(inputs)
});