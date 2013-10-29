'use strict'; /*jshint browser:true, es5:true*/
define(function(){
var E = {
    /* Strings that must be transalted before adding a new Hola language */
    access_any_site: {message: 'Toegang tot elke site vanuit elk land, gratis'},
    unblocker_site_list: {message: 'Unblocker sitelijst'},
    settings: {message: 'Instellingen'},
    site_blocked: {message: '$1 geblokkeerd?'},
    site_unblocked: {message: '$1 gedeblokkeerd'},
    more: {message: 'meer...'},
    not_working_more_options: {message: 'Werkt het niet? Meer opties...'},
    even_more: {message: 'meer...'},
    back_to: {message: 'terug naar $1 $2'},
    unblocker: {message: 'Unblocker'},
    accelerator: {message: 'Versneller'},
    on: {message: 'AAN'},
    off: {message: 'UIT'},
    turn_on: {message: 'Schakel in om aan de slag te gaan'},
    unblocker_disabled: {message: 'Unblocker is uitgeschakeld'},
    enable: {message: 'Inschakelen'},
    app_name: {message: 'Hola beter internet'},
    app_desc: {message: 'Access ALL of the Internet! Go to blocked '+
        'site -> click Hola icon -> change country flag -> ENJOY!'},
    hola: {message: 'Hola'},
    author_title: {message: 'Author: $1'}, // new
    site_title: {message: 'Author site: $1'}, // new
    users_title: {message: 'Number of users that use this option'}, // new
    not_working_title: {message: 'Number of users that pressed '+
	'"not working"'}, // new
	country_vpn: {message: '$1 VPN'}, // new
    changing: {message: 'veranderen...'},
    update: {message: 'Bijwerken'},
    initializing: {message: 'Inschakelen...'},
    loading: {message: 'Aan het laden'},
    reload: {message: 'Vernieuwen'},
     /* Optional strings that makes your Hola translation better */
    old_error: {message: 'Zeer oude versie van Chrome, <a>update</a> '+
        'Chrome om Hola te gebruiken'},
    ext_conflict_error: {message:'Hola kan niet correct werken, omdat een andere '
        +'extensie je proxyinstellingen beheert. Schakel '
        +'de andere extentie die waarschijnlijk je proxyinstellingen '
        +'beheert uit in <a>Extensies</a> (bijvoorbeeld ad-blockers, andere '
        +'VPN-services, etc.).'},
    start: {message: 'start'},
    starting: {message: 'Opstarten...'},
    try_to_reload: {message: 'Probeer <span>opnieuw te laden</span>'},
    there_is_error: {message: 'Er lijkt een fout te zijn'},
    reload_hola: {message: 'Start Hola opnieuw'},
    verify_internet: {message: 'Controleer je internetverbinding'},
    get_help_skype: {message: 'Krijg hulp van een expert via Skype: $1'},
    auto_rule_btn: {message: '$1 $2 $3'},
    script_btn: {message: '$1 $2 $3 snel'},
    country_and_prefix: {message: '$1 ($2)'},
    old_ff: {message: 'Oude versie van Firefox. '+
        'Klik <a>hier</a> om te upgraden.'},
    old_ff_missing: {message: '(sommige functies van Hola zijn niet '+
        'beschikbaar in deze versie)'},
    not_free: {message: 'De gratis versie van Hola moet om de 4 uur '+
        'opnieuw worden ingeschakeld en wordt gesponsord door advertenties.'},
    not_free_get: {message: 'Neem Hola Plus voor een ononderbroken, '+
        'dienst, zonder advertenties.'},
    hola_on_other_devices: {message: 'Hola ook op andere apparaten? '+
        '(Xbox, PS, Apple TV, iPhone ...). Klik hier'},
    flag_country: {message: '$1 $2'},
    improve_translation: {message: 'Verbeter vertaling'}, // new
    translate_to_your_lang: {message: 'Vertaal naar jouw taal'}, // new
    locale_en: {message: 'Engels'},
    locale_es: {message: 'Spaans'},
    locale_es_419: {message: 'Spaans, Latijns-Amerika'},
    locale_ar: {message: 'Arabisch'},
    locale_de: {message: 'Duits'},
    locale_fr: {message: 'Frans'},
    locale_he: {message: 'Hebreeuws'},
    locale_id: {message: 'Indonesisch'},
    locale_it: {message: 'Italiaans'},
    locale_nl: {message: 'Nederlands'},
    locale_pt_BR: {message: 'Portugees'},
    locale_ru: {message: 'Russisch'},
    locale_pl: {message: 'Pools'}, // new
    locale_cz: {message: 'Tsjechisch'}, // new
    Australia: {message: 'Australië'},
    Brazil: {message: 'Brazilië'},
    Canada: {message: 'Canada'},
    Chile: {message: 'Chili'},
    China: {message: 'China'}, // new
    Denmark: {message: 'Denemarken'},
    Egypt: {message: 'Egypte'},
    France: {message: 'Frankrijk'},
    Germany: {message: 'Duitsland'},
    'Great Britain': {message: 'Groot-Brittannië'},
    Greece: {message: 'Griekenland'}, // new
    'Hong Kong': {message: 'Hongkong'},
    India: {message: 'India'},
    Ireland: {message: 'Ierland'},
    Italy: {message: 'Italië'},
    Mexico: {message: 'Mexico'}, // new
    Netherlands: {message: 'Nederland'},
    Poland: {message: 'Polen'},
    Russia: {message: 'Rusland'},
    Singapore: {message: 'Singapore'},
    Spain: {message: 'Spanje'},
    'South Korea': {message: 'Zuid-Korea'}, // new
    Sweden: {message: 'Zweden'},
    Switzerland: {message: 'Zwitserland'},
    Turkey: {message: 'Turkije'},
    Uruguay: {message: 'Uruguay'}, // new
    Venezuela: {message: 'Venezuela'}, // new
    'United States': {message: 'Verenigde Staten'},
};

return E; });
