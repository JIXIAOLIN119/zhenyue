/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Skills_InstalledInputs */

const zh_no_skills_installed = /** @type {(inputs: No_Skills_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无已安装的技能`)
};

const en_no_skills_installed = /** @type {(inputs: No_Skills_InstalledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No skills installed`)
};

/**
* | output |
* | --- |
* | "No skills installed" |
*
* @param {No_Skills_InstalledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_skills_installed = /** @type {((inputs?: No_Skills_InstalledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Skills_InstalledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_skills_installed(inputs)
	return en_no_skills_installed(inputs)
});