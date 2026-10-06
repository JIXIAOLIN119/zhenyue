/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} CopyInputs */

const zh_copy = /** @type {(inputs: CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制`)
};

const en_copy = /** @type {(inputs: CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy`)
};

/**
* | output |
* | --- |
* | "Copy" |
*
* @param {CopyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const copy = /** @type {((inputs?: CopyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<CopyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_copy(inputs)
	return en_copy(inputs)
});