/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Display_Name_OptionalInputs */

const zh_display_name_optional = /** @type {(inputs: Display_Name_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示名称（可选）`)
};

const en_display_name_optional = /** @type {(inputs: Display_Name_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display Name (Optional)`)
};

/**
* | output |
* | --- |
* | "Display Name (Optional)" |
*
* @param {Display_Name_OptionalInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const display_name_optional = /** @type {((inputs?: Display_Name_OptionalInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Display_Name_OptionalInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_display_name_optional(inputs)
	return en_display_name_optional(inputs)
});