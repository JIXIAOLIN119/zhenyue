/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_ModelInputs */

const zh_add_model = /** @type {(inputs: Add_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加模型`)
};

const en_add_model = /** @type {(inputs: Add_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Model`)
};

/**
* | output |
* | --- |
* | "Add Model" |
*
* @param {Add_ModelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_model = /** @type {((inputs?: Add_ModelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_ModelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_model(inputs)
	return en_add_model(inputs)
});