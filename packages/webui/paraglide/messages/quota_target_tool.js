/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ value: NonNullable<unknown> }} Quota_Target_ToolInputs */

const zh_quota_target_tool = /** @type {(inputs: Quota_Target_ToolInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`工具：${i?.value}`)
};

const en_quota_target_tool = /** @type {(inputs: Quota_Target_ToolInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tool: ${i?.value}`)
};

/**
* | output |
* | --- |
* | "Tool: {value}" |
*
* @param {Quota_Target_ToolInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_target_tool = /** @type {((inputs: Quota_Target_ToolInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Target_ToolInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_target_tool(inputs)
	return en_quota_target_tool(inputs)
});