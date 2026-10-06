/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Move_HereInputs */

const zh_move_here = /** @type {(inputs: Move_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移动到此处`)
};

const en_move_here = /** @type {(inputs: Move_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move Here`)
};

/**
* | output |
* | --- |
* | "Move Here" |
*
* @param {Move_HereInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const move_here = /** @type {((inputs?: Move_HereInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Move_HereInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_move_here(inputs)
	return en_move_here(inputs)
});