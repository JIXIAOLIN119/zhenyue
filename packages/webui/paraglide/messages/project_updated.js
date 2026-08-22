/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Project_UpdatedInputs */

const zh_project_updated = /** @type {(inputs: Project_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目已更新`)
};

const en_project_updated = /** @type {(inputs: Project_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project updated`)
};

/**
* | output |
* | --- |
* | "Project updated" |
*
* @param {Project_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_updated = /** @type {((inputs?: Project_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Project_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project_updated(inputs)
	return en_project_updated(inputs)
});