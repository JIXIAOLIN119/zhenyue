/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ai_AgentsInputs */

const zh_ai_agents = /** @type {(inputs: Ai_AgentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 智能体`)
};

const en_ai_agents = /** @type {(inputs: Ai_AgentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI Agents`)
};

/**
* | output |
* | --- |
* | "AI Agents" |
*
* @param {Ai_AgentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai_agents = /** @type {((inputs?: Ai_AgentsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ai_AgentsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_ai_agents(inputs)
	return en_ai_agents(inputs)
});