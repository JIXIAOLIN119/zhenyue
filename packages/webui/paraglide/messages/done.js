/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} DoneInputs */

const zh_done = /** @type {(inputs: DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完成`)
};

const en_done = /** @type {(inputs: DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Done`)
};

/**
* | output |
* | --- |
* | "Done" |
*
* @param {DoneInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const done = /** @type {((inputs?: DoneInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<DoneInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_done(inputs)
	return en_done(inputs)
});