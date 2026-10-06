/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Preview_BackdropInputs */

const zh_preview_backdrop = /** @type {(inputs: Preview_BackdropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预览背景`)
};

const en_preview_backdrop = /** @type {(inputs: Preview_BackdropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview Background`)
};

/**
* | output |
* | --- |
* | "Preview Background" |
*
* @param {Preview_BackdropInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const preview_backdrop = /** @type {((inputs?: Preview_BackdropInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Preview_BackdropInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_preview_backdrop(inputs)
	return en_preview_backdrop(inputs)
});