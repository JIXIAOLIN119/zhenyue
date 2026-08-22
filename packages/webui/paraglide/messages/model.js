/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ModelInputs */

const zh_model = /** @type {(inputs: ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模型`)
};

const en_model = /** @type {(inputs: ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Model`)
};

/**
* | output |
* | --- |
* | "Model" |
*
* @param {ModelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const model = /** @type {((inputs?: ModelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ModelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_model(inputs)
	return en_model(inputs)
});