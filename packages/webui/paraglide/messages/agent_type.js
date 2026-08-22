/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_TypeInputs */

const zh_agent_type = /** @type {(inputs: Agent_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体类型`)
};

const en_agent_type = /** @type {(inputs: Agent_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Type`)
};

/**
* | output |
* | --- |
* | "Agent Type" |
*
* @param {Agent_TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_type = /** @type {((inputs?: Agent_TypeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_TypeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_type(inputs)
	return en_agent_type(inputs)
});