/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Project_Name_HintInputs */

const zh_project_name_hint = /** @type {(inputs: Project_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简洁明了的名称，用于标识您的项目空间。`)
};

const en_project_name_hint = /** @type {(inputs: Project_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A clear, concise name to identify your project space.`)
};

/**
* | output |
* | --- |
* | "A clear, concise name to identify your project space." |
*
* @param {Project_Name_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_name_hint = /** @type {((inputs?: Project_Name_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Project_Name_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project_name_hint(inputs)
	return en_project_name_hint(inputs)
});