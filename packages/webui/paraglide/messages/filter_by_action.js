/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Filter_By_ActionInputs */

const zh_filter_by_action = /** @type {(inputs: Filter_By_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按操作筛选`)
};

const en_filter_by_action = /** @type {(inputs: Filter_By_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter by Action`)
};

/**
* | output |
* | --- |
* | "Filter by Action" |
*
* @param {Filter_By_ActionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const filter_by_action = /** @type {((inputs?: Filter_By_ActionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Filter_By_ActionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_filter_by_action(inputs)
	return en_filter_by_action(inputs)
});