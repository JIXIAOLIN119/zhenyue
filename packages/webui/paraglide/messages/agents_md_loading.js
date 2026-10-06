/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agents_Md_LoadingInputs */

const zh_agents_md_loading = /** @type {(inputs: Agents_Md_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载 AGENTS.md...`)
};

const en_agents_md_loading = /** @type {(inputs: Agents_Md_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading AGENTS.md...`)
};

/**
* | output |
* | --- |
* | "Loading AGENTS.md..." |
*
* @param {Agents_Md_LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agents_md_loading = /** @type {((inputs?: Agents_Md_LoadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agents_Md_LoadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agents_md_loading(inputs)
	return en_agents_md_loading(inputs)
});