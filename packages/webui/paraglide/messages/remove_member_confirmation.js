/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ type: NonNullable<unknown>, name: NonNullable<unknown> }} Remove_Member_ConfirmationInputs */

const zh_remove_member_confirmation = /** @type {(inputs: Remove_Member_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`确定要从此${i?.type}中移除 ${i?.name} 吗？此操作无法撤销。`)
};

const en_remove_member_confirmation = /** @type {(inputs: Remove_Member_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Are you sure you want to remove ${i?.name} from this ${i?.type}? This action cannot be undone.`)
};

/**
* | output |
* | --- |
* | "Are you sure you want to remove {name} from this {type}? This action cannot be undone." |
*
* @param {Remove_Member_ConfirmationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove_member_confirmation = /** @type {((inputs: Remove_Member_ConfirmationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Remove_Member_ConfirmationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_remove_member_confirmation(inputs)
	return en_remove_member_confirmation(inputs)
});