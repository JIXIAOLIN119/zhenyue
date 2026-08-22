/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Audit_LogsInputs */

const zh_no_audit_logs = /** @type {(inputs: No_Audit_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到审计日志`)
};

const en_no_audit_logs = /** @type {(inputs: No_Audit_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No audit logs found`)
};

/**
* | output |
* | --- |
* | "No audit logs found" |
*
* @param {No_Audit_LogsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_audit_logs = /** @type {((inputs?: No_Audit_LogsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Audit_LogsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_audit_logs(inputs)
	return en_no_audit_logs(inputs)
});