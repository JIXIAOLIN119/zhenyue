/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Sessions_FoundInputs */

const zh_no_sessions_found = /** @type {(inputs: No_Sessions_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到会话`)
};

const en_no_sessions_found = /** @type {(inputs: No_Sessions_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No sessions found`)
};

/**
* | output |
* | --- |
* | "No sessions found" |
*
* @param {No_Sessions_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_sessions_found = /** @type {((inputs?: No_Sessions_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Sessions_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_sessions_found(inputs)
	return en_no_sessions_found(inputs)
});