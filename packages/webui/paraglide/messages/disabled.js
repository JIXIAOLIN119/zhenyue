/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} DisabledInputs */

const zh_disabled = /** @type {(inputs: DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已禁用`)
};

const en_disabled = /** @type {(inputs: DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disabled`)
};

/**
* | output |
* | --- |
* | "Disabled" |
*
* @param {DisabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const disabled = /** @type {((inputs?: DisabledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<DisabledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_disabled(inputs)
	return en_disabled(inputs)
});