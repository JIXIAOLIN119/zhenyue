/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Light_GridInputs */

const zh_light_grid = /** @type {(inputs: Light_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浅色网格`)
};

const en_light_grid = /** @type {(inputs: Light_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light Grid`)
};

/**
* | output |
* | --- |
* | "Light Grid" |
*
* @param {Light_GridInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const light_grid = /** @type {((inputs?: Light_GridInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Light_GridInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_light_grid(inputs)
	return en_light_grid(inputs)
});