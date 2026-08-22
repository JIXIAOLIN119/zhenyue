/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} At_Least_One_Model_RequiredInputs */

const zh_at_least_one_model_required = /** @type {(inputs: At_Least_One_Model_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`至少需要一个模型`)
};

const en_at_least_one_model_required = /** @type {(inputs: At_Least_One_Model_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`At least one model is required`)
};

/**
* | output |
* | --- |
* | "At least one model is required" |
*
* @param {At_Least_One_Model_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const at_least_one_model_required = /** @type {((inputs?: At_Least_One_Model_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<At_Least_One_Model_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_at_least_one_model_required(inputs)
	return en_at_least_one_model_required(inputs)
});