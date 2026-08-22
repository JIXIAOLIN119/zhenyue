/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Audit_LogsInputs */

const zh_audit_logs = /** @type {(inputs: Audit_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审计日志`)
};

const en_audit_logs = /** @type {(inputs: Audit_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audit Logs`)
};

/**
* | output |
* | --- |
* | "Audit Logs" |
*
* @param {Audit_LogsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const audit_logs = /** @type {((inputs?: Audit_LogsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Audit_LogsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_audit_logs(inputs)
	return en_audit_logs(inputs)
});