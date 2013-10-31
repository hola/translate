'use strict'; /*jshint browser:true, es6:true*/
define(function(){
var E = {
    /* Strings that MUST be translated for Hola to run in a new language */
    access_any_site: {message: 'Få adgang til enhver side, fra ethvert land, gratis'},
    unblocker_site_list: {message: 'Deblokering side liste'},
    settings: {message: 'Indstillinger'},
    site_blocked: {message: '$1 blokeret?'},
    site_unblocked: {message: '$1 blokering ophævet'},
    more: {message: 'mere...'},
    not_working_more_options: {message: 'virker det ikke? flere muligheder...'},
    even_more: {message: 'endnu flere...'},
    back_to: {message: 'tilbage til $1 $2'},
    unblocker: {message: 'Deblokering'},
    accelerator: {message: 'Accelerator'},
    on: {message: 'TIL'},
    off: {message: 'FRA'},
    turn_on: {message: 'Slå til for at komme i gang'},
    unblocker_disabled: {message: 'Deblokering er deaktiveret'},
    enable: {message: 'Aktiver'},
    app_name: {message: 'Hola Bedre Internet'},
    app_desc: {message: 'Få adgang til HELE Internettet! Gå til blokering '+
        'side -> klik på Hola ikonet -> skift nationalflag -> NYD DET!'},
    hola: {message: 'Hola'},
    author_title: {message: 'Forfatter: $1'}, // new
    site_title: {message: 'Forfatter side: $1'}, // new
    users_title: {message: 'Antal af brugere der bruger denne indstilling'}, // new
    not_working_title: {message: 'Antal af brugere der trykkede'+
    '"virker ikke"'}, // new
    country_vpn: {message: '$1 VPN'}, // new
    changing: {message: 'skifter...'},
    update: {message: 'Opdater'},
    initializing: {message: 'Initialiserer...'},
    loading: {message: 'Indlæser'},
    reload: {message: 'Genindlæs'},
    /* Optional strings that will make your Hola translation better */
    old_error: {message: 'Gammel version af Chrome, <a>opdater</a> '+
        'Chrome for at bruge Hola'},
    ext_conflict_error: {message:'Hola kan ikke fungere optimalt da andre'
        +'tilføjelser styrer dine proxyindstillinger. Vær venlig at deaktivere '
        +'andre tilføjelser du mener kan styre dine proxy'
        +'indstillinger i <a>tilføjelser</a> (som annonce-blokkere, andre VPN '
        +'tjenester, mv.).'},
    start: {message: 'start'},
    starting: {message: 'Starter...'},
    try_to_reload: {message: 'Forsøg at <span>genindlæse</span>'},
    there_is_error: {message: 'Der opstod tilsyneladende en fejl'},
    reload_hola: {message: 'Genindlæs Hola'},
    verify_internet: {message: 'Verificer at du har forbindelse'},
    get_help_skype: {message: 'Få hjælp af en udvikler over skype: $1'},
    auto_rule_btn: {message: '$1 $2 $3'},
    script_btn: {message: '$1 $2 $3 hurtig'},
    country_and_prefix: {message: '$1 ($2)'},
    old_ff: {message: 'Gammel version af Firefox. '+
        'Klik <a>her</a> for at opgradere.'},
    old_ff_missing: {message: '(nogle Hola funktioner er ikke tilgængelige'+
        'i denne version)'},
    not_free: {message: 'Gratis versionen af Hola skal '+
        'genaktiveres hver 4. time og er sponsoreret af annoncer.'},
    not_free_get: {message: 'Få Hola Plus for en uafbrudt, '+
        'annonce-fri service.'},
    hola_on_other_devices: {message: 'Hola på flere enheder? '+
        '(Xbox, PS, Apple TV, iPhone...). Klik her'},
    flag_country: {message: '$1 $2'},
    improve_translation: {message: 'Forbedre oversættelse'}, // new
    translate_to_your_lang: {message: 'Oversæt til dit eget sprog'}, // new
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
    locale_pl: {message: 'Polish'}, // new
    locale_cz: {message: 'Czech'}, // new
    Australia: {message: 'Australia'},
    Brazil: {message: 'Brazil'},
    Canada: {message: 'Canada'},
    Chile: {message: 'Chile'},
    China: {message: 'China'}, // new
    Denmark: {message: 'Denmark'},
    Egypt: {message: 'Egypt'},
    France: {message: 'France'},
    Germany: {message: 'Germany'},
    'Great Britain': {message: 'United Kingdom'},
    Greece: {message: 'Greece'}, // new
    'Hong Kong': {message: 'Hong Kong'},
    India: {message: 'India'},
    Ireland: {message: 'Ireland'},
    Italy: {message: 'Italy'},
    Mexico: {message: 'Mexico'}, // new
    Netherlands: {message: 'Netherlands'},
    Poland: {message: 'Poland'},
    Russia: {message: 'Russia'},
    Singapore: {message: 'Singapore'},
    Spain: {message: 'Spain'},
    'South Korea': {message: 'South Korea'}, // new
    Sweden: {message: 'Sweden'},
    Switzerland: {message: 'Switzerland'},
    Turkey: {message: 'Turkey'},
    Uruguay: {message: 'Uruguay'}, // new
    Venezuela: {message: 'Venezuela'}, // new
    'United States': {message: 'United States'},
    /* no need to translate the below */
    locale_en_ar: {message: 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©'},
    locale_en_cs: {message: 'Czech'},
    locale_en_de: {message: 'Deutsch'},
    locale_en_en: {message: 'English'},
    locale_en_es_419: {message: 'EspaÃ±ol, AmÃ©rica Latina'},
    locale_en_es: {message: 'EspaÃ±ol'},
    locale_en_fr: {message: 'FranÃ§aise'},
    locale_en_he: {message: '×¢×‘×¨×™×ª'},
    locale_en_id: {message: 'Indonesia'},
    locale_en_it: {message: 'Italiana'},
    locale_en_nl: {message: 'Nederlandse'},
    locale_en_pl: {message: 'Polish'},
    locale_en_pt_BR: {message: 'PortuguÃªs'},
    locale_en_ru: {message: 'Ð ÑƒÑÑÐºÐ¸Ð¹'},
};

return E; });
