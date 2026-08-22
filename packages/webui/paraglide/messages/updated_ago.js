/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Updated_AgoInputs */

const zh_updated_ago = /** @type {(inputs: Updated_AgoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新于`)
};

const en_updated_ago = /** @type {(inputs: Updated_AgoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updated`)
};

/**
* | output |
* | --- |
* | "Updated" |
*
* @param {Updated_AgoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const updated_ago = /** @type {((inputs?: Updated_AgoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Updated_AgoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_updated_ago(inputs)
	return en_updated_ago(inputs)
});