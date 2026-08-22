/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Position_YInputs */

const zh_position_y = /** @type {(inputs: Position_YInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`垂直位置 (%)`)
};

const en_position_y = /** @type {(inputs: Position_YInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Position Y (%)`)
};

/**
* | output |
* | --- |
* | "Position Y (%)" |
*
* @param {Position_YInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const position_y = /** @type {((inputs?: Position_YInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Position_YInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_position_y(inputs)
	return en_position_y(inputs)
});