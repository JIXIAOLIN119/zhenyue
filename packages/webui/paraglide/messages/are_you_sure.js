/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Are_You_SureInputs */

const zh_are_you_sure = /** @type {(inputs: Are_You_SureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确定要执行此操作吗？`)
};

const en_are_you_sure = /** @type {(inputs: Are_You_SureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are you absolutely sure?`)
};

/**
* | output |
* | --- |
* | "Are you absolutely sure?" |
*
* @param {Are_You_SureInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const are_you_sure = /** @type {((inputs?: Are_You_SureInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Are_You_SureInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_are_you_sure(inputs)
	return en_are_you_sure(inputs)
});