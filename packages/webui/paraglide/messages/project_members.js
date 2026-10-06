/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Project_MembersInputs */

const zh_project_members = /** @type {(inputs: Project_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目成员`)
};

const en_project_members = /** @type {(inputs: Project_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project Members`)
};

/**
* | output |
* | --- |
* | "Project Members" |
*
* @param {Project_MembersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_members = /** @type {((inputs?: Project_MembersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Project_MembersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project_members(inputs)
	return en_project_members(inputs)
});