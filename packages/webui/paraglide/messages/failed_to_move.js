/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_MoveInputs */

const zh_failed_to_move = /** @type {(inputs: Failed_To_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移动失败`)
};

const en_failed_to_move = /** @type {(inputs: Failed_To_MoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to move`)
};

/**
* | output |
* | --- |
* | "Failed to move" |
*
* @param {Failed_To_MoveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_move = /** @type {((inputs?: Failed_To_MoveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_MoveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_move(inputs)
	return en_failed_to_move(inputs)
});