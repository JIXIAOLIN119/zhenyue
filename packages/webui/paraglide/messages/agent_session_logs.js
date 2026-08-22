/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Session_LogsInputs */

const zh_agent_session_logs = /** @type {(inputs: Agent_Session_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体会话日志`)
};

const en_agent_session_logs = /** @type {(inputs: Agent_Session_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Session Logs`)
};

/**
* | output |
* | --- |
* | "Agent Session Logs" |
*
* @param {Agent_Session_LogsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_session_logs = /** @type {((inputs?: Agent_Session_LogsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Session_LogsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_session_logs(inputs)
	return en_agent_session_logs(inputs)
});