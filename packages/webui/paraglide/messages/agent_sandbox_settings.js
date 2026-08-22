/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Sandbox_SettingsInputs */

const zh_agent_sandbox_settings = /** @type {(inputs: Agent_Sandbox_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体沙箱设置`)
};

const en_agent_sandbox_settings = /** @type {(inputs: Agent_Sandbox_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Sandbox Settings`)
};

/**
* | output |
* | --- |
* | "Agent Sandbox Settings" |
*
* @param {Agent_Sandbox_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_sandbox_settings = /** @type {((inputs?: Agent_Sandbox_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Sandbox_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_sandbox_settings(inputs)
	return en_agent_sandbox_settings(inputs)
});