/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ inviterName: NonNullable<unknown>, targetName: NonNullable<unknown>, role: NonNullable<unknown> }} Invite_Join_MessageInputs */

const zh_invite_join_message = /** @type {(inputs: Invite_Join_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.inviterName} 邀请您加入 ${i?.targetName}，角色为 ${i?.role}。`)
};

const en_invite_join_message = /** @type {(inputs: Invite_Join_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.inviterName} invited you to join ${i?.targetName} as ${i?.role}.`)
};

/**
* | output |
* | --- |
* | "{inviterName} invited you to join {targetName} as {role}." |
*
* @param {Invite_Join_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const invite_join_message = /** @type {((inputs: Invite_Join_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Invite_Join_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_invite_join_message(inputs)
	return en_invite_join_message(inputs)
});