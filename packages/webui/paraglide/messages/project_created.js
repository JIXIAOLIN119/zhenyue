/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Project_CreatedInputs */

const zh_project_created = /** @type {(inputs: Project_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目已创建`)
};

const en_project_created = /** @type {(inputs: Project_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project created`)
};

/**
* | output |
* | --- |
* | "Project created" |
*
* @param {Project_CreatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_created = /** @type {((inputs?: Project_CreatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Project_CreatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project_created(inputs)
	return en_project_created(inputs)
});