/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Zhenyue_AgentInputs */

const zh_zhenyue_agent = /** @type {(inputs: Zhenyue_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`帧阅智能体`)
};

const en_zhenyue_agent = /** @type {(inputs: Zhenyue_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZhenYue Agent`)
};

/**
* | output |
* | --- |
* | "ZhenYue Agent" |
*
* @param {Zhenyue_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const zhenyue_agent = /** @type {((inputs?: Zhenyue_AgentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Zhenyue_AgentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_zhenyue_agent(inputs)
	return en_zhenyue_agent(inputs)
});