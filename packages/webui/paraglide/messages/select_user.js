/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_UserInputs */

const zh_select_user = /** @type {(inputs: Select_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择用户`)
};

const en_select_user = /** @type {(inputs: Select_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select User`)
};

/**
* | output |
* | --- |
* | "Select User" |
*
* @param {Select_UserInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_user = /** @type {((inputs?: Select_UserInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_UserInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_user(inputs)
	return en_select_user(inputs)
});