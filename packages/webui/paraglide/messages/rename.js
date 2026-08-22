/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} RenameInputs */

const zh_rename = /** @type {(inputs: RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重命名`)
};

const en_rename = /** @type {(inputs: RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rename`)
};

/**
* | output |
* | --- |
* | "Rename" |
*
* @param {RenameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const rename = /** @type {((inputs?: RenameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<RenameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_rename(inputs)
	return en_rename(inputs)
});