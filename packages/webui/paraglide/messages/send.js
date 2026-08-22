/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} SendInputs */

const zh_send = /** @type {(inputs: SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发送`)
};

const en_send = /** @type {(inputs: SendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Send`)
};

/**
* | output |
* | --- |
* | "Send" |
*
* @param {SendInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const send = /** @type {((inputs?: SendInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SendInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_send(inputs)
	return en_send(inputs)
});