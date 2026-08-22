/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Autofill_AgentInputs */

const zh_autofill_agent = /** @type {(inputs: Autofill_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动填充智能体`)
};

const en_autofill_agent = /** @type {(inputs: Autofill_AgentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autofill Agent`)
};

/**
* | output |
* | --- |
* | "Autofill Agent" |
*
* @param {Autofill_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_agent = /** @type {((inputs?: Autofill_AgentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Autofill_AgentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_autofill_agent(inputs)
	return en_autofill_agent(inputs)
});