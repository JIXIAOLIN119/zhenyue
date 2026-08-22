/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Agent_Created_SuccessfullyInputs */

const zh_agent_created_successfully = /** @type {(inputs: Agent_Created_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体创建成功`)
};

const en_agent_created_successfully = /** @type {(inputs: Agent_Created_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent created successfully`)
};

/**
* | output |
* | --- |
* | "Agent created successfully" |
*
* @param {Agent_Created_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_created_successfully = /** @type {((inputs?: Agent_Created_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Agent_Created_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agent_created_successfully(inputs)
	return en_agent_created_successfully(inputs)
});