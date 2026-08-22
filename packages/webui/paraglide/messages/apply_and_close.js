/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Apply_And_CloseInputs */

const zh_apply_and_close = /** @type {(inputs: Apply_And_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用并关闭`)
};

const en_apply_and_close = /** @type {(inputs: Apply_And_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply and Close`)
};

/**
* | output |
* | --- |
* | "Apply and Close" |
*
* @param {Apply_And_CloseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const apply_and_close = /** @type {((inputs?: Apply_And_CloseInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Apply_And_CloseInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_apply_and_close(inputs)
	return en_apply_and_close(inputs)
});