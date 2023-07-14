import { StoryObj, Meta } from "@storybook/react";

import { Select } from "./Select";

const languages_list = [
  { label: "Afrikaans", value: "af" },
  { label: "Albanian - shqip", value: "sq" },
  { label: "Amharic - አማርኛ", value: "am" },
  { label: "Arabic - العربية", value: "ar" },
  { label: "Aragonese - aragonés", value: "an" },
  { label: "Armenian - հայերեն", value: "hy" },
  { label: "Asturian - asturianu", value: "ast" },
  { label: "Azerbaijani - azərbaycan dili", value: "az" },
  { label: "Basque - euskara", value: "eu" },
  { label: "Belarusian - беларуская", value: "be" },
  { label: "Bengali - বাংলা", value: "bn" },
  { label: "Bosnian - bosanski", value: "bs" },
  { label: "Breton - brezhoneg", value: "br" },
  { label: "Bulgarian - български", value: "bg" },
  { label: "Catalan - català", value: "ca" },
  { label: "Central Kurdish - کوردی (دەستنوسی عەرەبی)", value: "ckb" },
  { label: "Chinese - 中文", value: "zh" },
  { label: "Chinese (Hong Kong) - 中文（香港）", value: "zh-HK" },
  { label: "Chinese (Simplified) - 中文（简体）", value: "zh-CN" },
  { label: "Chinese (Traditional) - 中文（繁體）", value: "zh-TW" },
  { label: "Corsican", value: "co" },
  { label: "Croatian - hrvatski", value: "hr" },
  { label: "Czech - čeština", value: "cs" },
  { label: "Danish - dansk", value: "da" },
  { label: "Dutch - Nederlands", value: "nl" },
  { label: "English", value: "en" },
  { label: "English (Australia)", value: "en-AU" },
  { label: "English (Canada)", value: "en-CA" },
  { label: "English (India)", value: "en-IN" },
  { label: "English (New Zealand)", value: "en-NZ" },
  { label: "English (South Africa)", value: "en-ZA" },
  { label: "English (United Kingdom)", value: "en-GB" },
  { label: "English (United States)", value: "en-US" },
  { label: "Esperanto - esperanto", value: "eo" },
  { label: "Estonian - eesti", value: "et" },
  { label: "Faroese - føroyskt", value: "fo" },
  { label: "Filipino", value: "fil" },
  { label: "Finnish - suomi", value: "fi" },
  { label: "French - français", value: "fr" },
  { label: "French (Canada) - français (Canada)", value: "fr-CA" },
  { label: "French (France) - français (France)", value: "fr-FR" },
  { label: "French (Switzerland) - français (Suisse)", value: "fr-CH" },
  { label: "Galician - galego", value: "gl" },
  { label: "Georgian - ქართული", value: "ka" },
  { label: "German - Deutsch", value: "de" },
  { label: "German (Austria) - Deutsch (Österreich)", value: "de-AT" },
  { label: "German (Germany) - Deutsch (Deutschland)", value: "de-DE" },
  { label: "German (Liechtenstein) - Deutsch (Liechtenstein)", value: "de-LI" },
  { label: "German (Switzerland) - Deutsch (Schweiz)", value: "de-CH" },
  { label: "Greek - Ελληνικά", value: "el" },
  { label: "Guarani", value: "gn" },
  { label: "Gujarati - ગુજરાતી", value: "gu" },
  { label: "Hausa", value: "ha" },
  { label: "Hawaiian - ʻŌlelo Hawaiʻi", value: "haw" },
  { label: "Hebrew - עברית", value: "he" },
  { label: "Hindi - हिन्दी", value: "hi" },
  { label: "Hungarian - magyar", value: "hu" },
  { label: "Icelandic - íslenska", value: "is" },
  { label: "Indonesian - Indonesia", value: "id" },
  { label: "Interlingua", value: "ia" },
  { label: "Irish - Gaeilge", value: "ga" },
  { label: "Italian - italiano", value: "it" },
  { label: "Italian (Italy) - italiano (Italia)", value: "it-IT" },
  { label: "Italian (Switzerland) - italiano (Svizzera)", value: "it-CH" },
  { label: "Japanese - 日本語", value: "ja" },
  { label: "Kannada - ಕನ್ನಡ", value: "kn" },
  { label: "Kazakh - қазақ тілі", value: "kk" },
  { label: "Khmer - ខ្មែរ", value: "km" },
  { label: "Korean - 한국어", value: "ko" },
  { label: "Kurdish - Kurdî", value: "ku" },
  { label: "Kyrgyz - кыргызча", value: "ky" },
  { label: "Lao - ລາວ", value: "lo" },
  { label: "Latin", value: "la" },
  { label: "Latvian - latviešu", value: "lv" },
  { label: "Lingala - lingála", value: "ln" },
  { label: "Lithuanian - lietuvių", value: "lt" },
  { label: "Macedonian - македонски", value: "mk" },
  { label: "Malay - Bahasa Melayu", value: "ms" },
  { label: "Malayalam - മലയാളം", value: "ml" },
  { label: "Maltese - Malti", value: "mt" },
  { label: "Marathi - मराठी", value: "mr" },
  { label: "Mongolian - монгол", value: "mn" },
  { label: "Nepali - नेपाली", value: "ne" },
  { label: "Norwegian - norsk", value: "no" },
  { label: "Norwegian Bokmål - norsk bokmål", value: "nb" },
  { label: "Norwegian Nynorsk - nynorsk", value: "nn" },
  { label: "Occitan", value: "oc" },
  { label: "Oriya - ଓଡ଼ିଆ", value: "or" },
  { label: "Oromo - Oromoo", value: "om" },
  { label: "Pashto - پښتو", value: "ps" },
  { label: "Persian - فارسی", value: "fa" },
  { label: "Polish - polski", value: "pl" },
  { label: "Portuguese - português", value: "pt" },
  { label: "Portuguese (Brazil) - português (Brasil)", value: "pt-BR" },
  { label: "Portuguese (Portugal) - português (Portugal)", value: "pt-PT" },
  { label: "Punjabi - ਪੰਜਾਬੀ", value: "pa" },
  { label: "Quechua", value: "qu" },
  { label: "Romanian - română", value: "ro" },
  { label: "Romanian (Moldova) - română (Moldova)", value: "mo" },
  { label: "Romansh - rumantsch", value: "rm" },
  { label: "Russian - русский", value: "ru" },
  { label: "Scottish Gaelic", value: "gd" },
  { label: "Serbian - српски", value: "sr" },
  { label: "Serbo - Croatian", value: "sh" },
  { label: "Shona - chiShona", value: "sn" },
  { label: "Sindhi", value: "sd" },
  { label: "Sinhala - සිංහල", value: "si" },
  { label: "Slovak - slovenčina", value: "sk" },
  { label: "Slovenian - slovenščina", value: "sl" },
  { label: "Somali - Soomaali", value: "so" },
  { label: "Southern Sotho", value: "st" },
  { label: "Spanish - español", value: "es" },
  { label: "Spanish (Argentina) - español (Argentina)", value: "es-AR" },
  { label: "Spanish (Latin America) - español (Latinoamérica)", value: "es-419" },
  { label: "Spanish (Mexico) - español (México)", value: "es-MX" },
  { label: "Spanish (Spain) - español (España)", value: "es-ES" },
  { label: "Spanish (United States) - español (Estados Unidos)", value: "es-US" },
  { label: "Sundanese", value: "su" },
  { label: "Swahili - Kiswahili", value: "sw" },
  { label: "Swedish - svenska", value: "sv" },
  { label: "Tajik - тоҷикӣ", value: "tg" },
  { label: "Tamil - தமிழ்", value: "ta" },
  { label: "Tatar", value: "tt" },
  { label: "Telugu - తెలుగు", value: "te" },
  { label: "Thai - ไทย", value: "th" },
  { label: "Tigrinya - ትግርኛ", value: "ti" },
  { label: "Tongan - lea fakatonga", value: "to" },
  { label: "Turkish - Türkçe", value: "tr" },
  { label: "Turkmen", value: "tk" },
  { label: "Twi", value: "tw" },
  { label: "Ukrainian - українська", value: "uk" },
  { label: "Urdu - اردو", value: "ur" },
  { label: "Uyghur", value: "ug" },
  { label: "Uzbek - o‘zbek", value: "uz" },
  { label: "Vietlabelse - Tiếng Việt", value: "vi" },
  { label: "Walloon - wa", value: "wa" },
  { label: "Welsh - Cymraeg", value: "cy" },
  { label: "Western Frisian", value: "fy" },
  { label: "Xhosa", value: "xh" },
  { label: "Yiddish", value: "yi" },
  { label: "Yoruba - Èdè Yorùbá", value: "yo" },
  { label: "Zulu - isiZulu", value: "zu" }
];

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ["autodocs"],
  title: "Input/Select",
  args: { label: "Language:", options: languages_list }
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {};

export const OutlineColor: Story = {
  args: {
    color: "inherit",
    outlineColor: "info"
  }
};

export const OutlineColorOnFocus: Story = {
  args: {
    outlineColor: "info"
  }
};

export const Small: Story = {
  args: {
    size: "sl"
  }
};

export const fullWidth: Story = {
  args: {
    fullWidth: true
  }
};

export const HelperText: Story = {
  args: {
    helperText: "Testing how helper text is displayed."
  }
};

export const Custom: Story = {
  args: {
    size: "lg",
    color: "success",
    outlineColor: "error"
  }
};
