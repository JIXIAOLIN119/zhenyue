/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Untitled_SessionInputs */

const zh_untitled_session = /** @type {(inputs: Untitled_SessionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未命名会话`)
};

const en_untitled_session = /** @type {(inputs: Untitled_SessionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Untitled Session`)
};

/**
* | output |
* | --- |
* | "Untitled Session" |
*
* @param {Untitled_SessionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const untitled_session = /** @type {((inputs?: Untitled_SessionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Untitled_SessionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_untitled_session(inputs)
	return en_untitled_session(inputs)
});