/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Project_CoverInputs */

const zh_project_cover = /** @type {(inputs: Project_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目封面`)
};

const en_project_cover = /** @type {(inputs: Project_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project Cover`)
};

/**
* | output |
* | --- |
* | "Project Cover" |
*
* @param {Project_CoverInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_cover = /** @type {((inputs?: Project_CoverInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Project_CoverInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project_cover(inputs)
	return en_project_cover(inputs)
});