/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Demo_AccessInputs */

const zh_demo_access = /** @type {(inputs: Demo_AccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`演示访问：`)
};

const en_demo_access = /** @type {(inputs: Demo_AccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demo Access:`)
};

/**
* | output |
* | --- |
* | "Demo Access:" |
*
* @param {Demo_AccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const demo_access = /** @type {((inputs?: Demo_AccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Demo_AccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_demo_access(inputs)
	return en_demo_access(inputs)
});