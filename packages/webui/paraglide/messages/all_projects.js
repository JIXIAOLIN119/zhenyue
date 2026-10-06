/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} All_ProjectsInputs */

const zh_all_projects = /** @type {(inputs: All_ProjectsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有项目`)
};

const en_all_projects = /** @type {(inputs: All_ProjectsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Projects`)
};

/**
* | output |
* | --- |
* | "All Projects" |
*
* @param {All_ProjectsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_projects = /** @type {((inputs?: All_ProjectsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<All_ProjectsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_all_projects(inputs)
	return en_all_projects(inputs)
});