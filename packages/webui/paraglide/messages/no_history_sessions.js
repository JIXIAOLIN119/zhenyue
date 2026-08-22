/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_History_SessionsInputs */

const zh_no_history_sessions = /** @type {(inputs: No_History_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无历史会话记录`)
};

const en_no_history_sessions = /** @type {(inputs: No_History_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No chat history found.`)
};

/**
* | output |
* | --- |
* | "No chat history found." |
*
* @param {No_History_SessionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_history_sessions = /** @type {((inputs?: No_History_SessionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_History_SessionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_history_sessions(inputs)
	return en_no_history_sessions(inputs)
});