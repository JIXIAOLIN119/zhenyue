/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} _NewInputs */

const zh__new = /** @type {(inputs: _NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建`)
};

const en__new = /** @type {(inputs: _NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New`)
};

/**
* | output |
* | --- |
* | "New" |
*
* @param {_NewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
const _new = /** @type {((inputs?: _NewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<_NewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh__new(inputs)
	return en__new(inputs)
});
export { _new as "new" }