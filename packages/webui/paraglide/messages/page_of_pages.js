/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown>, total: NonNullable<unknown> }} Page_Of_PagesInputs */

const zh_page_of_pages = /** @type {(inputs: Page_Of_PagesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.current} / ${i?.total} 页`)
};

const en_page_of_pages = /** @type {(inputs: Page_Of_PagesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.current} of ${i?.total}`)
};

/**
* | output |
* | --- |
* | "Page {current} of {total}" |
*
* @param {Page_Of_PagesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const page_of_pages = /** @type {((inputs: Page_Of_PagesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Page_Of_PagesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_page_of_pages(inputs)
	return en_page_of_pages(inputs)
});