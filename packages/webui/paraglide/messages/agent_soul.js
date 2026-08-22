/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_SoulInputs */

const zh_agent_soul = /** @type {(inputs: Agent_SoulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体灵魂（个性）`)
};

const en_agent_soul = /** @type {(inputs: Agent_SoulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Soul (Personality)`)
};

/**
* | output |
* | --- |
* | "Agent Soul (Personality)" |
*
* @param {Agent_SoulInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_soul = /** @type {((inputs?: Agent_SoulInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_SoulInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_soul(inputs)
	return en_agent_soul(inputs)
});