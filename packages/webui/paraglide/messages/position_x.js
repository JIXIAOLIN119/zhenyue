/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Position_XInputs */

const zh_position_x = /** @type {(inputs: Position_XInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`水平位置 (%)`)
};

const en_position_x = /** @type {(inputs: Position_XInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Position X (%)`)
};

/**
* | output |
* | --- |
* | "Position X (%)" |
*
* @param {Position_XInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const position_x = /** @type {((inputs?: Position_XInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Position_XInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_position_x(inputs)
	return en_position_x(inputs)
});