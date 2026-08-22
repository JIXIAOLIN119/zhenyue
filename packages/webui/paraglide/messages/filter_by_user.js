/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Filter_By_UserInputs */

const zh_filter_by_user = /** @type {(inputs: Filter_By_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按用户筛选`)
};

const en_filter_by_user = /** @type {(inputs: Filter_By_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter by User`)
};

/**
* | output |
* | --- |
* | "Filter by User" |
*
* @param {Filter_By_UserInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const filter_by_user = /** @type {((inputs?: Filter_By_UserInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Filter_By_UserInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_filter_by_user(inputs)
	return en_filter_by_user(inputs)
});