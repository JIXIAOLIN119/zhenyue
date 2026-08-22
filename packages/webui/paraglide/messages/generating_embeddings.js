/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Generating_EmbeddingsInputs */

const zh_generating_embeddings = /** @type {(inputs: Generating_EmbeddingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在生成嵌入...`)
};

const en_generating_embeddings = /** @type {(inputs: Generating_EmbeddingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generating embeddings...`)
};

/**
* | output |
* | --- |
* | "Generating embeddings..." |
*
* @param {Generating_EmbeddingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const generating_embeddings = /** @type {((inputs?: Generating_EmbeddingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Generating_EmbeddingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_generating_embeddings(inputs)
	return en_generating_embeddings(inputs)
});