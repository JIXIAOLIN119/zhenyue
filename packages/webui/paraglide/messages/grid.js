/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} GridInputs */

const zh_grid = /** @type {(inputs: GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网格`)
};

const en_grid = /** @type {(inputs: GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grid`)
};

/**
* | output |
* | --- |
* | "Grid" |
*
* @param {GridInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const grid = /** @type {((inputs?: GridInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<GridInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_grid(inputs)
	return en_grid(inputs)
});