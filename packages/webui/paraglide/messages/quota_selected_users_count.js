/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Quota_Selected_Users_CountInputs */

const zh_quota_selected_users_count = /** @type {(inputs: Quota_Selected_Users_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已选择 ${i?.count} 位成员`)
};

const en_quota_selected_users_count = /** @type {(inputs: Quota_Selected_Users_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} members selected`)
};

/**
* | output |
* | --- |
* | "{count} members selected" |
*
* @param {Quota_Selected_Users_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_selected_users_count = /** @type {((inputs: Quota_Selected_Users_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Selected_Users_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_selected_users_count(inputs)
	return en_quota_selected_users_count(inputs)
});