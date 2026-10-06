/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agents_Md_Readonly_HintInputs */

const zh_agents_md_readonly_hint = /** @type {(inputs: Agents_Md_Readonly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只有团队所有者可以修改此文件。`)
};

const en_agents_md_readonly_hint = /** @type {(inputs: Agents_Md_Readonly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only team owners can edit this file.`)
};

/**
* | output |
* | --- |
* | "Only team owners can edit this file." |
*
* @param {Agents_Md_Readonly_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agents_md_readonly_hint = /** @type {((inputs?: Agents_Md_Readonly_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agents_Md_Readonly_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agents_md_readonly_hint(inputs)
	return en_agents_md_readonly_hint(inputs)
});