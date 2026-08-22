/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Model_IdInputs */

const zh_model_id = /** @type {(inputs: Model_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模型 ID`)
};

const en_model_id = /** @type {(inputs: Model_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Model ID`)
};

/**
* | output |
* | --- |
* | "Model ID" |
*
* @param {Model_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const model_id = /** @type {((inputs?: Model_IdInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Model_IdInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_model_id(inputs)
	return en_model_id(inputs)
});