/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_AgentInputs */

const zh_select_agent = /** @type {(inputs: Select_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择智能体`)
};

const en_select_agent = /** @type {(inputs: Select_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select Agent`)
};

/**
* | output |
* | --- |
* | "Select Agent" |
*
* @param {Select_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_agent = /** @type {((inputs?: Select_AgentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_AgentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_agent(inputs)
	return en_select_agent(inputs)
});