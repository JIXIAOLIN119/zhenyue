/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Delete_Agent_ConfirmationInputs */

const zh_delete_agent_confirmation = /** @type {(inputs: Delete_Agent_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`此操作无法撤销。这将永久删除智能体 "${i?.name}" 并从服务器上删除其所有数据。`)
};

const en_delete_agent_confirmation = /** @type {(inputs: Delete_Agent_ConfirmationInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This action cannot be undone. This will permanently delete the agent "${i?.name}" and remove all its data from our servers.`)
};

/**
* | output |
* | --- |
* | "This action cannot be undone. This will permanently delete the agent \"{name}\" and remove all its data from our servers." |
*
* @param {Delete_Agent_ConfirmationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_agent_confirmation = /** @type {((inputs: Delete_Agent_ConfirmationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_Agent_ConfirmationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_agent_confirmation(inputs)
	return en_delete_agent_confirmation(inputs)
});