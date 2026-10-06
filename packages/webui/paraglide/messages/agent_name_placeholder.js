/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Name_PlaceholderInputs */

const zh_agent_name_placeholder = /** @type {(inputs: Agent_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：支持助手`)
};

const en_agent_name_placeholder = /** @type {(inputs: Agent_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g., Support Assistant`)
};

/**
* | output |
* | --- |
* | "e.g., Support Assistant" |
*
* @param {Agent_Name_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_name_placeholder = /** @type {((inputs?: Agent_Name_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Name_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_name_placeholder(inputs)
	return en_agent_name_placeholder(inputs)
});