/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Save_ChangesInputs */

const zh_save_changes = /** @type {(inputs: Save_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存更改`)
};

const en_save_changes = /** @type {(inputs: Save_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save Changes`)
};

/**
* | output |
* | --- |
* | "Save Changes" |
*
* @param {Save_ChangesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const save_changes = /** @type {((inputs?: Save_ChangesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Save_ChangesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_save_changes(inputs)
	return en_save_changes(inputs)
});