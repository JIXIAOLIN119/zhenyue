/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Packages_Must_Contain_Skill_MdInputs */

const zh_packages_must_contain_skill_md = /** @type {(inputs: Packages_Must_Contain_Skill_MdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`包必须包含 SKILL.md`)
};

const en_packages_must_contain_skill_md = /** @type {(inputs: Packages_Must_Contain_Skill_MdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Packages must contain a SKILL.md`)
};

/**
* | output |
* | --- |
* | "Packages must contain a SKILL.md" |
*
* @param {Packages_Must_Contain_Skill_MdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const packages_must_contain_skill_md = /** @type {((inputs?: Packages_Must_Contain_Skill_MdInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Packages_Must_Contain_Skill_MdInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_packages_must_contain_skill_md(inputs)
	return en_packages_must_contain_skill_md(inputs)
});