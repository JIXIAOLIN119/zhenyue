/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Move_To_TrashInputs */

const zh_move_to_trash = /** @type {(inputs: Move_To_TrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移至回收站`)
};

const en_move_to_trash = /** @type {(inputs: Move_To_TrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move to Trash`)
};

/**
* | output |
* | --- |
* | "Move to Trash" |
*
* @param {Move_To_TrashInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const move_to_trash = /** @type {((inputs?: Move_To_TrashInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Move_To_TrashInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_move_to_trash(inputs)
	return en_move_to_trash(inputs)
});