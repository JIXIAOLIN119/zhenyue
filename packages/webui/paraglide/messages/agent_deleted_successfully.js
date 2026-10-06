/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Deleted_SuccessfullyInputs */

const zh_agent_deleted_successfully = /** @type {(inputs: Agent_Deleted_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体删除成功`)
};

const en_agent_deleted_successfully = /** @type {(inputs: Agent_Deleted_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent deleted successfully`)
};

/**
* | output |
* | --- |
* | "Agent deleted successfully" |
*
* @param {Agent_Deleted_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_deleted_successfully = /** @type {((inputs?: Agent_Deleted_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Deleted_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_deleted_successfully(inputs)
	return en_agent_deleted_successfully(inputs)
});