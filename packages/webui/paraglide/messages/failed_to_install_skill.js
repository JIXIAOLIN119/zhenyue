/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Install_SkillInputs */

const zh_failed_to_install_skill = /** @type {(inputs: Failed_To_Install_SkillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装技能失败`)
};

const en_failed_to_install_skill = /** @type {(inputs: Failed_To_Install_SkillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to install skill`)
};

/**
* | output |
* | --- |
* | "Failed to install skill" |
*
* @param {Failed_To_Install_SkillInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_install_skill = /** @type {((inputs?: Failed_To_Install_SkillInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Install_SkillInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_install_skill(inputs)
	return en_failed_to_install_skill(inputs)
});