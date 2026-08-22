/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} CopiedInputs */

const zh_copied = /** @type {(inputs: CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制！`)
};

const en_copied = /** @type {(inputs: CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied!`)
};

/**
* | output |
* | --- |
* | "Copied!" |
*
* @param {CopiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const copied = /** @type {((inputs?: CopiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<CopiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_copied(inputs)
	return en_copied(inputs)
});