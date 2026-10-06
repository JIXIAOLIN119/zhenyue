/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manage_Env_Vars_DescriptionInputs */

const zh_manage_env_vars_description = /** @type {(inputs: Manage_Env_Vars_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理此技能实例的环境变量。`)
};

const en_manage_env_vars_description = /** @type {(inputs: Manage_Env_Vars_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage environment variables for this skill instance.`)
};

/**
* | output |
* | --- |
* | "Manage environment variables for this skill instance." |
*
* @param {Manage_Env_Vars_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const manage_env_vars_description = /** @type {((inputs?: Manage_Env_Vars_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manage_Env_Vars_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_manage_env_vars_description(inputs)
	return en_manage_env_vars_description(inputs)
});