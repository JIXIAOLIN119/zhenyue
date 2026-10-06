/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Project_IdInputs */

const zh_project_id = /** @type {(inputs: Project_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目 ID`)
};

const en_project_id = /** @type {(inputs: Project_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project ID`)
};

/**
* | output |
* | --- |
* | "Project ID" |
*
* @param {Project_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_id = /** @type {((inputs?: Project_IdInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Project_IdInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project_id(inputs)
	return en_project_id(inputs)
});