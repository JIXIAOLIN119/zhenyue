/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Moved_To_TrashInputs */

const zh_moved_to_trash = /** @type {(inputs: Moved_To_TrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已移至回收站`)
};

const en_moved_to_trash = /** @type {(inputs: Moved_To_TrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moved to trash`)
};

/**
* | output |
* | --- |
* | "Moved to trash" |
*
* @param {Moved_To_TrashInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const moved_to_trash = /** @type {((inputs?: Moved_To_TrashInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Moved_To_TrashInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_moved_to_trash(inputs)
	return en_moved_to_trash(inputs)
});