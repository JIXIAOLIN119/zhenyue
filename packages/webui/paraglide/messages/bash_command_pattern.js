/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bash_Command_PatternInputs */

const zh_bash_command_pattern = /** @type {(inputs: Bash_Command_PatternInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bash 命令通配符`)
};

const en_bash_command_pattern = /** @type {(inputs: Bash_Command_PatternInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bash Match Wildcard`)
};

/**
* | output |
* | --- |
* | "Bash Match Wildcard" |
*
* @param {Bash_Command_PatternInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const bash_command_pattern = /** @type {((inputs?: Bash_Command_PatternInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bash_Command_PatternInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_bash_command_pattern(inputs)
	return en_bash_command_pattern(inputs)
});