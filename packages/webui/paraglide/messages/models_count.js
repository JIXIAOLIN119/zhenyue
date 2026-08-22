/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Models_CountInputs */

const zh_models_count = /** @type {(inputs: Models_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模型`)
};

const en_models_count = /** @type {(inputs: Models_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Models`)
};

/**
* | output |
* | --- |
* | "Models" |
*
* @param {Models_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const models_count = /** @type {((inputs?: Models_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Models_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_models_count(inputs)
	return en_models_count(inputs)
});