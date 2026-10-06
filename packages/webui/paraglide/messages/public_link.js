/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Public_LinkInputs */

const zh_public_link = /** @type {(inputs: Public_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公开链接`)
};

const en_public_link = /** @type {(inputs: Public_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Public Link`)
};

/**
* | output |
* | --- |
* | "Public Link" |
*
* @param {Public_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const public_link = /** @type {((inputs?: Public_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Public_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_public_link(inputs)
	return en_public_link(inputs)
});