/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} General_Settings_DescriptionInputs */

const zh_general_settings_description = /** @type {(inputs: General_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看您的个人信息和团队角色。`)
};

const en_general_settings_description = /** @type {(inputs: General_Settings_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View your personal information and team role.`)
};

/**
* | output |
* | --- |
* | "View your personal information and team role." |
*
* @param {General_Settings_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const general_settings_description = /** @type {((inputs?: General_Settings_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<General_Settings_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_general_settings_description(inputs)
	return en_general_settings_description(inputs)
});