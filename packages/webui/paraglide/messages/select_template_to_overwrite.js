/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_Template_To_OverwriteInputs */

const zh_select_template_to_overwrite = /** @type {(inputs: Select_Template_To_OverwriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择要覆盖的模板`)
};

const en_select_template_to_overwrite = /** @type {(inputs: Select_Template_To_OverwriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select template to overwrite`)
};

/**
* | output |
* | --- |
* | "Select template to overwrite" |
*
* @param {Select_Template_To_OverwriteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_template_to_overwrite = /** @type {((inputs?: Select_Template_To_OverwriteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_Template_To_OverwriteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_template_to_overwrite(inputs)
	return en_select_template_to_overwrite(inputs)
});