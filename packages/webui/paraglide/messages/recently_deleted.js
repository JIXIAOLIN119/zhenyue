/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Recently_DeletedInputs */

const zh_recently_deleted = /** @type {(inputs: Recently_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近删除`)
};

const en_recently_deleted = /** @type {(inputs: Recently_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recently Deleted`)
};

/**
* | output |
* | --- |
* | "Recently Deleted" |
*
* @param {Recently_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const recently_deleted = /** @type {((inputs?: Recently_DeletedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Recently_DeletedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_recently_deleted(inputs)
	return en_recently_deleted(inputs)
});