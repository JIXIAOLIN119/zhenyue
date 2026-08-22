/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Import_Skill_DescriptionInputs */

const zh_import_skill_description = /** @type {(inputs: Import_Skill_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从本地 ZIP 压缩包或 GitHub 仓库导入技能。`)
};

const en_import_skill_description = /** @type {(inputs: Import_Skill_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import a skill from a local ZIP archive or a GitHub repository.`)
};

/**
* | output |
* | --- |
* | "Import a skill from a local ZIP archive or a GitHub repository." |
*
* @param {Import_Skill_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const import_skill_description = /** @type {((inputs?: Import_Skill_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Import_Skill_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_import_skill_description(inputs)
	return en_import_skill_description(inputs)
});