/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Move_To_TrashInputs */

const zh_failed_move_to_trash = /** @type {(inputs: Failed_Move_To_TrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移至回收站失败`)
};

const en_failed_move_to_trash = /** @type {(inputs: Failed_Move_To_TrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to move to trash`)
};

/**
* | output |
* | --- |
* | "Failed to move to trash" |
*
* @param {Failed_Move_To_TrashInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_move_to_trash = /** @type {((inputs?: Failed_Move_To_TrashInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Move_To_TrashInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_move_to_trash(inputs)
	return en_failed_move_to_trash(inputs)
});