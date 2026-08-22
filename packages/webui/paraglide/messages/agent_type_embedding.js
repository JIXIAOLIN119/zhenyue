/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Type_EmbeddingInputs */

const zh_agent_type_embedding = /** @type {(inputs: Agent_Type_EmbeddingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`嵌入`)
};

const en_agent_type_embedding = /** @type {(inputs: Agent_Type_EmbeddingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Embedding`)
};

/**
* | output |
* | --- |
* | "Embedding" |
*
* @param {Agent_Type_EmbeddingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_type_embedding = /** @type {((inputs?: Agent_Type_EmbeddingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Type_EmbeddingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_type_embedding(inputs)
	return en_agent_type_embedding(inputs)
});