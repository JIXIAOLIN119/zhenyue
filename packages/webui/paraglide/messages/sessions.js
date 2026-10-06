/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} SessionsInputs */

const zh_sessions = /** @type {(inputs: SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会话列表`)
};

const en_sessions = /** @type {(inputs: SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sessions`)
};

/**
* | output |
* | --- |
* | "Sessions" |
*
* @param {SessionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sessions = /** @type {((inputs?: SessionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SessionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sessions(inputs)
	return en_sessions(inputs)
});