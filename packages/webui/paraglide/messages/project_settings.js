/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Project_SettingsInputs */

const zh_project_settings = /** @type {(inputs: Project_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目设置`)
};

const en_project_settings = /** @type {(inputs: Project_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project Settings`)
};

/**
* | output |
* | --- |
* | "Project Settings" |
*
* @param {Project_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_settings = /** @type {((inputs?: Project_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Project_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project_settings(inputs)
	return en_project_settings(inputs)
});