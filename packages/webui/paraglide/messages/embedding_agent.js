/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Embedding_AgentInputs */

const zh_embedding_agent = /** @type {(inputs: Embedding_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`嵌入智能体`)
};

const en_embedding_agent = /** @type {(inputs: Embedding_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Embedding Agent`)
};

/**
* | output |
* | --- |
* | "Embedding Agent" |
*
* @param {Embedding_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const embedding_agent = /** @type {((inputs?: Embedding_AgentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Embedding_AgentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_embedding_agent(inputs)
	return en_embedding_agent(inputs)
});