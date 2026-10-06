/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} UnreadInputs */

const zh_unread = /** @type {(inputs: UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未读`)
};

const en_unread = /** @type {(inputs: UnreadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unread`)
};

/**
* | output |
* | --- |
* | "Unread" |
*
* @param {UnreadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unread = /** @type {((inputs?: UnreadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<UnreadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_unread(inputs)
	return en_unread(inputs)
});