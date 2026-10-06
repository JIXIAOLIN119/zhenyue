/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Move_ToInputs */

const zh_move_to = /** @type {(inputs: Move_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移动到`)
};

const en_move_to = /** @type {(inputs: Move_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move to`)
};

/**
* | output |
* | --- |
* | "Move to" |
*
* @param {Move_ToInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const move_to = /** @type {((inputs?: Move_ToInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Move_ToInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_move_to(inputs)
	return en_move_to(inputs)
});