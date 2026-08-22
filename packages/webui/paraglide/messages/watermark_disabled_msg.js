/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Watermark_Disabled_MsgInputs */

const zh_watermark_disabled_msg = /** @type {(inputs: Watermark_Disabled_MsgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`水印已禁用`)
};

const en_watermark_disabled_msg = /** @type {(inputs: Watermark_Disabled_MsgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Watermark disabled`)
};

/**
* | output |
* | --- |
* | "Watermark disabled" |
*
* @param {Watermark_Disabled_MsgInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark_disabled_msg = /** @type {((inputs?: Watermark_Disabled_MsgInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Watermark_Disabled_MsgInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_watermark_disabled_msg(inputs)
	return en_watermark_disabled_msg(inputs)
});