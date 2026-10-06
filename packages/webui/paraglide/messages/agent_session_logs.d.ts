/**
* | output |
* | --- |
* | "Agent Session Logs" |
*
* @param {Agent_Session_LogsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_session_logs: ((inputs?: Agent_Session_LogsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Session_LogsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Session_LogsInputs = {};
