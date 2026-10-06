/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ user: NonNullable<unknown>, team: NonNullable<unknown> }} Notification_Joined_TeamInputs */

const zh_notification_joined_team = /** @type {(inputs: Notification_Joined_TeamInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.user} 加入了 ${i?.team}`)
};

const en_notification_joined_team = /** @type {(inputs: Notification_Joined_TeamInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.user} joined ${i?.team}`)
};

/**
* | output |
* | --- |
* | "{user} joined {team}" |
*
* @param {Notification_Joined_TeamInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_joined_team = /** @type {((inputs: Notification_Joined_TeamInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Joined_TeamInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_notification_joined_team(inputs)
	return en_notification_joined_team(inputs)
});