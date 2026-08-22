/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Session_TypeInputs */

const zh_session_type = /** @type {(inputs: Session_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会话类型`)
};

const en_session_type = /** @type {(inputs: Session_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Session Type`)
};

/**
* | output |
* | --- |
* | "Session Type" |
*
* @param {Session_TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const session_type = /** @type {((inputs?: Session_TypeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Session_TypeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_session_type(inputs)
	return en_session_type(inputs)
});