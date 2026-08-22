/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Project_PreferencesInputs */

const zh_project_preferences = /** @type {(inputs: Project_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目偏好设置`)
};

const en_project_preferences = /** @type {(inputs: Project_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project Preferences`)
};

/**
* | output |
* | --- |
* | "Project Preferences" |
*
* @param {Project_PreferencesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_preferences = /** @type {((inputs?: Project_PreferencesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Project_PreferencesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project_preferences(inputs)
	return en_project_preferences(inputs)
});