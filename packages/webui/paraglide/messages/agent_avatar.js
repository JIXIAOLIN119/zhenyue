/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_AvatarInputs */

const zh_agent_avatar = /** @type {(inputs: Agent_AvatarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体头像`)
};

const en_agent_avatar = /** @type {(inputs: Agent_AvatarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Avatar`)
};

/**
* | output |
* | --- |
* | "Agent Avatar" |
*
* @param {Agent_AvatarInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_avatar = /** @type {((inputs?: Agent_AvatarInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_AvatarInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_avatar(inputs)
	return en_agent_avatar(inputs)
});