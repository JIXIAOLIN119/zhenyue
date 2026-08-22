/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ value: NonNullable<unknown> }} Quota_Target_ServerInputs */

const zh_quota_target_server = /** @type {(inputs: Quota_Target_ServerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`服务：${i?.value}`)
};

const en_quota_target_server = /** @type {(inputs: Quota_Target_ServerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Server: ${i?.value}`)
};

/**
* | output |
* | --- |
* | "Server: {value}" |
*
* @param {Quota_Target_ServerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_target_server = /** @type {((inputs: Quota_Target_ServerInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Target_ServerInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_target_server(inputs)
	return en_quota_target_server(inputs)
});