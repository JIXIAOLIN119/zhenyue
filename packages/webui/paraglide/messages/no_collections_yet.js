/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Collections_YetInputs */

const zh_no_collections_yet = /** @type {(inputs: No_Collections_YetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无媒体合集。`)
};

const en_no_collections_yet = /** @type {(inputs: No_Collections_YetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No collections created yet.`)
};

/**
* | output |
* | --- |
* | "No collections created yet." |
*
* @param {No_Collections_YetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_collections_yet = /** @type {((inputs?: No_Collections_YetInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Collections_YetInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_collections_yet(inputs)
	return en_no_collections_yet(inputs)
});