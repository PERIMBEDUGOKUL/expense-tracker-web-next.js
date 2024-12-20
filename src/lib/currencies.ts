import { db } from "@/lib/db";

export const currencies =[

	{ value: "AED", label: "د.إ UAE Dirham", locale: "ar-AE" },
	{ value: "ARS", label: "$ Argentine Peso", locale: "es-AR" },
	{ value: "AUD", label: "$ Australian Dollar", locale: "en-AU" },
	{ value: "BDT", label: "৳ Bangladeshi Taka", locale: "bn-BD" },
	{ value: "BRL", label: "R$ Brazilian Real", locale: "pt-BR" },
	{ value: "CAD", label: "$ Canadian Dollar", locale: "en-CA" },
	{ value: "CHF", label: "CHF Swiss Franc", locale: "de-CH" },
	{ value: "CLP", label: "$ Chilean Peso", locale: "es-CL" },
	{ value: "CNY", label: "¥ Chinese Yuan", locale: "zh-CN" },
	{ value: "COP", label: "$ Colombian Peso", locale: "es-CO" },
	{ value: "CZK", label: "Kč Czech Koruna", locale: "cs-CZ" },
	{ value: "DKK", label: "kr Danish Krone", locale: "da-DK" },
	{ value: "EGP", label: "EGP Egyptian Pound", locale: "en-EG" },
	{ value: "EUR", label: "€ Euro", locale: "de-DE" },
	{ value: "GBP", label: "£ Pound", locale: "en-GB" },
	{ value: "HKD", label: "$ Hong Kong Dollar", locale: "en-HK" },
	{ value: "HRK", label: "kn Croatian Kuna", locale: "hr-HR" },
	{ value: "HUF", label: "Ft Hungarian Forint", locale: "hu-HU" },
	{ value: "IDR", label: "Rp Indonesian Rupiah", locale: "id-ID" },
	{ value: "ILS", label: "₪ Israeli New Shekel", locale: "he-IL" },
	{ value: "INR", label: "₹ Indian Rupee", locale: "hi-IN" },
	{ value: "JPY", label: "¥ Yen", locale: "ja-JP" },
	{ value: "KRW", label: "₩ South Korean Won", locale: "ko-KR" },
	{ value: "KWD", label: "د.ك Kuwaiti Dinar", locale: "ar-KW" },
	{ value: "MAD", label: "MAD Moroccan Dirham", locale: "ar-MA" },
	{ value: "MXN", label: "$ Mexican Peso", locale: "es-MX" },
	{ value: "MYR", label: "RM Malaysian Ringgit", locale: "ms-MY" },
	{ value: "NGN", label: "₦ Nigerian Naira", locale: "en-NG" },
	{ value: "NOK", label: "kr Norwegian Krone", locale: "nb-NO" },
	{ value: "NZD", label: "$ New Zealand Dollar", locale: "en-NZ" },
	{ value: "OMR", label: "﷼ Omani Rial", locale: "ar-OM" },
	{ value: "PEN", label: "S/. Peruvian Sol", locale: "es-PE" },
	{ value: "PHP", label: "₱ Philippine Peso", locale: "en-PH" },
	{ value: "PKR", label: "₨ Pakistani Rupee", locale: "ur-PK" },
	{ value: "PLN", label: "zł Polish Zloty", locale: "pl-PL" },
	{ value: "QAR", label: "﷼ Qatari Riyal", locale: "ar-QA" },
	{ value: "RON", label: "lei Romanian Leu", locale: "ro-RO" },
	{ value: "RUB", label: "₽ Russian Ruble", locale: "ru-RU" },
	{ value: "SAR", label: "﷼ Saudi Riyal", locale: "ar-SA" },
	{ value: "SEK", label: "kr Swedish Krona", locale: "sv-SE" },
	{ value: "SGD", label: "$ Singapore Dollar", locale: "en-SG" },
	{ value: "THB", label: "฿ Thai Baht", locale: "th-TH" },
	{ value: "TRY", label: "₺ Turkish Lira", locale: "tr-TR" },
	{ value: "TWD", label: "NT$ New Taiwan Dollar", locale: "zh-TW" },
	{ value: "USD", label: "$ Dollar", locale: "en-US" },
	{ value: "VND", label: "₫ Vietnamese Dong", locale: "vi-VN" },
	{ value: "ZAR", label: "R South African Rand", locale: "en-ZA" }
	
];

export type Currency = (typeof currencies)[0];


// export const fetchCurrencies = async (): Promise<any[]> => {
//     try {
// 		const currencyData = await db.currency.findMany();

// 		// console.log("Fetched currencies:", __dirname, JSON.stringify(currencyData, null, 2));
		
// 		const formattedCurrencies = currencyData.map((currency) => ({
// 			value: currency.value || 'N/A', // Use currency.value instead of currency.code
// 			label: currency.label || 'Unknown', // Use currency.label instead of currency.name
// 			locale: currency.locale || 'en-US', // Default to 'en-US' if locale is undefined
// 		}));

// 		// console.log("Formatted currencies:", JSON.stringify(formattedCurrencies, null, 2));
		
// 		return formattedCurrencies;
//     } catch (error) {
//         console.error('Error fetching currencies:', error);
//         throw new Error('Failed to fetch currencies'); 
//     }
// };

// export let currencies: any[] = [];


// const main = async () => {
//     try {
//         currencies = await fetchCurrencies();
//     } catch (error) {
//         console.error("Error fetching currencies:", error);
//     }
// };

// main().catch(console.error);