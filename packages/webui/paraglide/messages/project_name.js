/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Project_NameInputs */

const zh_project_name = /** @type {(inputs: Project_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目名称`)
};

const en_project_name = /** @type {(inputs: Project_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project Name`)
};

/**
* | output |
* | --- |
* | "Project Name" |
*
* @param {Project_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_name = /** @type {((inputs?: Project_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Project_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project_name(inputs)
	return en_project_name(inputs)
});