/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_SandboxInputs */

const zh_agent_sandbox = /** @type {(inputs: Agent_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体沙箱`)
};

const en_agent_sandbox = /** @type {(inputs: Agent_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Sandbox`)
};

/**
* | output |
* | --- |
* | "Agent Sandbox" |
*
* @param {Agent_SandboxInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_sandbox = /** @type {((inputs?: Agent_SandboxInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_SandboxInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_sandbox(inputs)
	return en_agent_sandbox(inputs)
});