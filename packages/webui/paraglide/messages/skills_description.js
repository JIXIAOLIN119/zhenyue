/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Skills_DescriptionInputs */

const zh_skills_description = /** @type {(inputs: Skills_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为团队添加、更新和配置 AI 技能。`)
};

const en_skills_description = /** @type {(inputs: Skills_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add, update and configure AI skills for the team.`)
};

/**
* | output |
* | --- |
* | "Add, update and configure AI skills for the team." |
*
* @param {Skills_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const skills_description = /** @type {((inputs?: Skills_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Skills_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_skills_description(inputs)
	return en_skills_description(inputs)
});