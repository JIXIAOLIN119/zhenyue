/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ProjectsInputs */

const zh_projects = /** @type {(inputs: ProjectsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目`)
};

const en_projects = /** @type {(inputs: ProjectsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Projects`)
};

/**
* | output |
* | --- |
* | "Projects" |
*
* @param {ProjectsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const projects = /** @type {((inputs?: ProjectsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ProjectsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_projects(inputs)
	return en_projects(inputs)
});