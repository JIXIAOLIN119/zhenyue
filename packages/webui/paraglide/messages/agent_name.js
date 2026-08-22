/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_NameInputs */

const zh_agent_name = /** @type {(inputs: Agent_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体名称`)
};

const en_agent_name = /** @type {(inputs: Agent_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Name`)
};

/**
* | output |
* | --- |
* | "Agent Name" |
*
* @param {Agent_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_name = /** @type {((inputs?: Agent_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_name(inputs)
	return en_agent_name(inputs)
});