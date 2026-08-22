/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ApproveInputs */

const zh_approve = /** @type {(inputs: ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`批准`)
};

const en_approve = /** @type {(inputs: ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approve`)
};

/**
* | output |
* | --- |
* | "Approve" |
*
* @param {ApproveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const approve = /** @type {((inputs?: ApproveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ApproveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_approve(inputs)
	return en_approve(inputs)
});