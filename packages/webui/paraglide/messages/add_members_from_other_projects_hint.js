/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_Members_From_Other_Projects_HintInputs */

const zh_add_members_from_other_projects_hint = /** @type {(inputs: Add_Members_From_Other_Projects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前无权访问此项目的项目成员。`)
};

const en_add_members_from_other_projects_hint = /** @type {(inputs: Add_Members_From_Other_Projects_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project-scoped members who currently do not have access to this project.`)
};

/**
* | output |
* | --- |
* | "Project-scoped members who currently do not have access to this project." |
*
* @param {Add_Members_From_Other_Projects_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_members_from_other_projects_hint = /** @type {((inputs?: Add_Members_From_Other_Projects_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_Members_From_Other_Projects_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_members_from_other_projects_hint(inputs)
	return en_add_members_from_other_projects_hint(inputs)
});