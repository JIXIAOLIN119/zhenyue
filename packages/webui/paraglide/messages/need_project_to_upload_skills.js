/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Need_Project_To_Upload_SkillsInputs */

const zh_need_project_to_upload_skills = /** @type {(inputs: Need_Project_To_Upload_SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`您的团队中至少需要一个项目才能上传技能。`)
};

const en_need_project_to_upload_skills = /** @type {(inputs: Need_Project_To_Upload_SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You need at least one project in your team to upload skills.`)
};

/**
* | output |
* | --- |
* | "You need at least one project in your team to upload skills." |
*
* @param {Need_Project_To_Upload_SkillsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const need_project_to_upload_skills = /** @type {((inputs?: Need_Project_To_Upload_SkillsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Need_Project_To_Upload_SkillsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_need_project_to_upload_skills(inputs)
	return en_need_project_to_upload_skills(inputs)
});