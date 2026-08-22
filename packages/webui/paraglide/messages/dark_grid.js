/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dark_GridInputs */

const zh_dark_grid = /** @type {(inputs: Dark_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`深色网格`)
};

const en_dark_grid = /** @type {(inputs: Dark_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dark Grid`)
};

/**
* | output |
* | --- |
* | "Dark Grid" |
*
* @param {Dark_GridInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dark_grid = /** @type {((inputs?: Dark_GridInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dark_GridInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_dark_grid(inputs)
	return en_dark_grid(inputs)
});