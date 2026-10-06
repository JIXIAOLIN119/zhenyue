/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Position_And_ResizeInputs */

const zh_position_and_resize = /** @type {(inputs: Position_And_ResizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`定位和调整大小`)
};

const en_position_and_resize = /** @type {(inputs: Position_And_ResizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Position and resize`)
};

/**
* | output |
* | --- |
* | "Position and resize" |
*
* @param {Position_And_ResizeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const position_and_resize = /** @type {((inputs?: Position_And_ResizeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Position_And_ResizeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_position_and_resize(inputs)
	return en_position_and_resize(inputs)
});