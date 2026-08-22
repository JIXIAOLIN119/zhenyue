/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_AgentInputs */

const zh_delete_agent = /** @type {(inputs: Delete_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除智能体`)
};

const en_delete_agent = /** @type {(inputs: Delete_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete Agent`)
};

/**
* | output |
* | --- |
* | "Delete Agent" |
*
* @param {Delete_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_agent = /** @type {((inputs?: Delete_AgentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_AgentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_agent(inputs)
	return en_delete_agent(inputs)
});