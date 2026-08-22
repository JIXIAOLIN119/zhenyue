/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} FullscreenInputs */

const zh_fullscreen = /** @type {(inputs: FullscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全屏`)
};

const en_fullscreen = /** @type {(inputs: FullscreenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fullscreen`)
};

/**
* | output |
* | --- |
* | "Fullscreen" |
*
* @param {FullscreenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const fullscreen = /** @type {((inputs?: FullscreenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<FullscreenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_fullscreen(inputs)
	return en_fullscreen(inputs)
});