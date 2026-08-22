/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Project_MemberInputs */

const zh_project_member = /** @type {(inputs: Project_MemberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目成员`)
};

const en_project_member = /** @type {(inputs: Project_MemberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project Member`)
};

/**
* | output |
* | --- |
* | "Project Member" |
*
* @param {Project_MemberInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_member = /** @type {((inputs?: Project_MemberInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Project_MemberInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project_member(inputs)
	return en_project_member(inputs)
});