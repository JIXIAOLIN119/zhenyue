/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agents_MdInputs */

const zh_agents_md = /** @type {(inputs: Agents_MdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AGENTS.md`)
};

const en_agents_md = /** @type {(inputs: Agents_MdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AGENTS.md`)
};

/**
* | output |
* | --- |
* | "AGENTS.md" |
*
* @param {Agents_MdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agents_md = /** @type {((inputs?: Agents_MdInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agents_MdInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agents_md(inputs)
	return en_agents_md(inputs)
});