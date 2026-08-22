/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agents_Md_Save_FailedInputs */

const zh_agents_md_save_failed = /** @type {(inputs: Agents_Md_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存失败`)
};

const en_agents_md_save_failed = /** @type {(inputs: Agents_Md_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to save`)
};

/**
* | output |
* | --- |
* | "Failed to save" |
*
* @param {Agents_Md_Save_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agents_md_save_failed = /** @type {((inputs?: Agents_Md_Save_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agents_Md_Save_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agents_md_save_failed(inputs)
	return en_agents_md_save_failed(inputs)
});