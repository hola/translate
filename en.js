'use strict'; /*jshint browser:true, es5:true*/
define(function(){
var E = {
    /* Strings that MUST be translated for Hola to run in a new language */
    access_any_site: {message: 'Access any site from any country, free'},
    unblocker_site_list: {message: 'Unblocker site list'},
    settings: {message: 'Settings'},
    site_blocked: {message: '$1 blocked?'},
    site_unblocked: {message: '$1 unblocked'},
    more: {message: 'more...'},
    not_working_more_options: {message: 'not working? more options...'},
    even_more: {message: 'even more...'},
    back_to: {message: 'back to $1 $2'},
    unblocker: {message: 'Unblocker'},
    accelerator: {message: 'Accelerator'},
    on: {message: 'ON'},
    off: {message: 'OFF'},
    turn_on: {message: 'Turn on to get started'},
    unblocker_disabled: {message: 'Unblocker is disabled'},
    enable: {message: 'Enable'},
    app_name: {message: 'Hola Better Internet'},
    app_desc: {message: 'Access ALL of the Internet! Go to blocked '+
        'site -> click Hola icon -> change country flag -> ENJOY!'},
    hola: {message: 'Hola'},
    author_title: {message: 'Author: $1'}, // new
    site_title: {message: 'Author site: $1'}, // new
    users_title: {message: 'Number of users that use this rule'}, // new
    not_working_title: {message: 'Number of users that pressed '+
	'"not working"'}, // new
    country_vpn: {message: '$1 VPN'}, // new
    changing: {message: 'changing...'},
    update: {message: 'Update'},
    initializing: {message: 'Initializing...'},
    loading: {message: 'Loading'},
    reload: {message: 'Reload'},
    /* Optional strings that will make your Hola translation better */
    old_error: {message: 'Very old version of Chrome, <a>update</a> '+
        'Chrome to use Hola'},
    ext_conflict_error: {message:'Hola cannot work properly because another '
        +'extension is controlling your proxy settings. Please disable '
        +'other extensions that you think might control your proxy '
        +'settings in <a>extensions</a> (such as ad-blockers, other VPN '
        +'services, etc.).'},
    start: {message: 'start'},
    starting: {message: 'Starting...'},
    try_to_reload: {message: 'Try to <span>reload</span>'},
    there_is_error: {message: 'There seems to be an error'},
    reload_hola: {message: 'Reload Hola'},
    verify_internet: {message: 'Verify you have Internet'},
    get_help_skype: {message: 'Get help from engineer over skype: $1'},
    auto_rule_btn: {message: '$1 $2 $3'},
    script_btn: {message: '$1 $2 $3 fast'},
    country_and_prefix: {message: '$1 ($2)'},
    old_ff: {message: 'Old version of Firefox. '+
        'Press <a>here</a> to upgrade.'},
    old_ff_missing: {message: '(some Hola features are not available on '+
        'your version)'},
    not_free: {message: 'The free version of Hola needs to be '+
        're-enabled every 4 hours and is sponsored by ads.'},
    not_free_get: {message: 'Get Hola Plus for un-interrupted, '+
        'ad-free service.'},
    hola_on_other_devices: {message: 'Want Hola on other devices? '+
        '(Xbox, PS, Apple TV, iPhone...). Click here'},
    flag_country: {message: '$1 $2'},
    improve_translation: {message: 'improve translation'}, // new
    locale_en: {message: 'English'},
    locale_es: {message: 'Spanish'},
    locale_es_419: {message: 'Spanish, Latin America'},
    locale_ar: {message: 'Arabic'},
    locale_de: {message: 'German'},
    locale_fr: {message: 'French'},
    locale_he: {message: 'Hebrew'},
    locale_id: {message: 'Indonesian'},
    locale_it: {message: 'Italian'},
    locale_nl: {message: 'Dutch'},
    locale_pt_BR: {message: 'Portuguese'},
    locale_ru: {message: 'Russian'},
    Australia: {message: 'Australia'},
    Brazil: {message: 'Brazil'},
    Canada: {message: 'Canada'},
    Chile: {message: 'Chile'},
    Denmark: {message: 'Denmark'},
    Egypt: {message: 'Egypt'},
    France: {message: 'France'},
    Germany: {message: 'Germany'},
    'Hong Kong': {message: 'Hong Kong'},
    India: {message: 'India'},
    Ireland: {message: 'Ireland'},
    Italy: {message: 'Italy'},
    Netherlands: {message: 'Netherlands'},
    Poland: {message: 'Poland'},
    Russia: {message: 'Russia'},
    Singapore: {message: 'Singapore'},
    Spain: {message: 'Spain'},
    Sweden: {message: 'Sweden'},
    Switzerland: {message: 'Switzerland'},
    Turkey: {message: 'Turkey'},
    'Great Britain': {message: 'United Kingdom'},
    'United States': {message: 'United States'},
    /* no need to translate the below */
    locale_en_ar: {message: 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©'},
    locale_en_de: {message: 'Deutsch'},
    locale_en_en: {message: 'English'},
    locale_en_es_419: {message: 'EspaÃ±ol, AmÃ©rica Latina'},
    locale_en_es: {message: 'EspaÃ±ol'},
    locale_en_fr: {message: 'FranÃ§aise'},
    locale_en_he: {message: '×¢×‘×¨×™×ª'},
    locale_en_id: {message: 'Indonesia'},
    locale_en_it: {message: 'Italiana'},
    locale_en_nl: {message: 'Nederlandse'},
    locale_en_pt_BR: {message: 'PortuguÃªs'},
    locale_en_ru: {message: 'Ð ÑƒÑÑÐºÐ¸Ð¹'},
};

return E; });
