/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Failed_To_Add_MemberInputs */

const zh_failed_to_add_member = /** @type {(inputs: Failed_To_Add_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`添加 ${i?.name} 失败`)
};

const en_failed_to_add_member = /** @type {(inputs: Failed_To_Add_MemberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Failed to add ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Failed to add {name}" |
*
* @param {Failed_To_Add_MemberInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_add_member = /** @type {((inputs: Failed_To_Add_MemberInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Add_MemberInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_add_member(inputs)
	return en_failed_to_add_member(inputs)
});