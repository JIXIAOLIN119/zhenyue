/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Model_Is_RequiredInputs */

const zh_model_is_required = /** @type {(inputs: Model_Is_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模型为必填项`)
};

const en_model_is_required = /** @type {(inputs: Model_Is_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Model is required`)
};

/**
* | output |
* | --- |
* | "Model is required" |
*
* @param {Model_Is_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const model_is_required = /** @type {((inputs?: Model_Is_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Model_Is_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_model_is_required(inputs)
	return en_model_is_required(inputs)
});