/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Role_AgentInputs */

const zh_role_agent = /** @type {(inputs: Role_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体`)
};

const en_role_agent = /** @type {(inputs: Role_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent`)
};

/**
* | output |
* | --- |
* | "Agent" |
*
* @param {Role_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const role_agent = /** @type {((inputs?: Role_AgentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Role_AgentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_role_agent(inputs)
	return en_role_agent(inputs)
});