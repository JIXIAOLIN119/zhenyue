/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} AgentsInputs */

const zh_agents = /** @type {(inputs: AgentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`智能体`)
};

const en_agents = /** @type {(inputs: AgentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agents`)
};

/**
* | output |
* | --- |
* | "Agents" |
*
* @param {AgentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agents = /** @type {((inputs?: AgentsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<AgentsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_agents(inputs)
	return en_agents(inputs)
});