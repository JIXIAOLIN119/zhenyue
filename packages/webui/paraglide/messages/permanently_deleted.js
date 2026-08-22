/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Permanently_DeletedInputs */

const zh_permanently_deleted = /** @type {(inputs: Permanently_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已永久删除`)
};

const en_permanently_deleted = /** @type {(inputs: Permanently_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permanently deleted`)
};

/**
* | output |
* | --- |
* | "Permanently deleted" |
*
* @param {Permanently_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const permanently_deleted = /** @type {((inputs?: Permanently_DeletedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Permanently_DeletedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_permanently_deleted(inputs)
	return en_permanently_deleted(inputs)
});