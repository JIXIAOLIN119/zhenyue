/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} SavedInputs */

const zh_saved = /** @type {(inputs: SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已保存`)
};

const en_saved = /** @type {(inputs: SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saved`)
};

/**
* | output |
* | --- |
* | "Saved" |
*
* @param {SavedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const saved = /** @type {((inputs?: SavedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SavedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_saved(inputs)
	return en_saved(inputs)
});