/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} RotationInputs */

const zh_rotation = /** @type {(inputs: RotationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`旋转角度`)
};

const en_rotation = /** @type {(inputs: RotationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rotation`)
};

/**
* | output |
* | --- |
* | "Rotation" |
*
* @param {RotationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const rotation = /** @type {((inputs?: RotationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<RotationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_rotation(inputs)
	return en_rotation(inputs)
});