'use strict'; /*jshint browser:true, es5:true*/
/* Thank you for your help with Hola translation.
 * Please fill in the following details when you submit your translation
 * so we can send you a nice gift.
 * Your name:
 * Your email:
 * Your phone:
 * Your address:
 */
define(function(){
var E = {
    access_any_site: {message: 'Získtejte přístup k jakékoliv stránce z jakékoliv země zdarma'},
    unblocker_site_list: {message: 'Seznam stránek k odemčení'},
    settings: {message: 'Nastavení'},
    site_blocked: {message: 'Stránka $1 je zablokována?'},
    site_unblocked: {message: 'Stránka $1 je odblokována'},
    more: {message: 'více...'},
    not_working_more_options: {message: 'nefunguje? více možností...'},
    even_more: {message: 'ještě více...'},
    back_to: {message: 'back to $1 $2'},
    unblocker: {message: 'Odemykač'},
    accelerator: {message: 'Urychlovač'},
    on: {message: 'ZAP'},
    off: {message: 'VYP'},
    turn_on: {message: 'Zapněte pro započetí'},
    unblocker_disabled: {message: 'Odblokátor je zakázán'},
    enable: {message: 'Povolit'},
    app_name: {message: 'Hola Lepší Internet'},
    app_desc: {message: 'Získtejte přístup ke všemu na internetu! Jděte na zablokovanou '+
        'stránku -> klikněte na Hola ikonu -> změňte vlajku země -> užívejte!'},
    hola: {message: 'Hola'},
    author_title: {message: 'Autor: $1'}, // new
    site_title: {message: 'Autorovy stránky: $1'}, // new
    users_title: {message: 'Počet uživatelů kteří použili tuhle volbu'}, // new
    not_working_title: {message: 'Počet uživatelů kteří zvolili, že '+
	'"nefunguje"'}, // new
    country_vpn: {message: '$1 VPN'}, // new
    changing: {message: 'Probíhá změna...'},
    update: {message: 'Aktualizovat'},
    initializing: {message: 'Inicializování...'},
    loading: {message: 'Načítání'},
    reload: {message: 'Znovu načíst'},
    old_error: {message: 'Tohle je stará verze Chromu, <a>aktualizujte</a> '+
        'Chrome abyste mohli používat Hola'},
    ext_conflict_error: {message:'Hola nemůže pracovat správně, protože jiné '
        +'rozšíření ovádá vaše nastavení proxy. Zakažte, prosím, '
        +'ostatní rozšíření které si myslíte, že by mothly ovládat vaše proxy '
        +'nastavení v <a>rozšířeních</a> (jako třeba blokátory reklam, jiné VPN '
        +'služby, atd.).'},
    start: {message: 'start'},
    starting: {message: 'Startování...'},
    try_to_reload: {message: 'Zkuste <span>znovu načíst</span>'},
    there_is_error: {message: 'Vypadá to, že nastala chyba'},
    reload_hola: {message: 'Načíst znovu Hola'},
    verify_internet: {message: 'Ověřte vaše internetové připojení'},
    get_help_skype: {message: 'Získat pomoc od technika přes Skype: $1'},
    auto_rule_btn: {message: '$1 $2 $3'},
    script_btn: {message: '$1 $2 $3 fast'},
    country_and_prefix: {message: '$1 ($2)'},
    old_ff: {message: 'Stará verze Firefoxu. '+
        'Klikněte <a>zde</a> pro upgrade.'},
    old_ff_missing: {message: '(některé Hola funkce nejsou k dispozici na'+
        'vaší verzi)'},
    not_free: {message: 'Verze Hola, kterou máte je třeba '+
        'znovu povolit každé 4 hodiny a je sponzorována reklamami.'},
    not_free_get: {message: 'Získtejte Hola Plus pro nepřerušovanou a '+
        'plně bez reklam službu.'},
    hola_on_other_devices: {message: 'Chcete Hola na ostatních zařízeních? '+
        '(Xbox, PS, Apple TV, iPhone...). Klikněte zde'},
    flag_country: {message: '$1 $2'},
    improve_translation: {message: 'zdokonalit překlad'}, // new
    locale_en: {message: 'angličtina'},
    locale_es: {message: 'španělština'},
    locale_es_419: {message: 'španělština, Latinská Amerika'},
    locale_ar: {message: 'arabština'},
    locale_de: {message: 'němčina'},
    locale_fr: {message: 'francouzština'},
    locale_he: {message: 'hebrejština'},
    locale_id: {message: 'indonesianština'},
    locale_it: {message: 'italština'},
    locale_nl: {message: 'holandština'},
    locale_pt_BR: {message: 'portugalština'},
    locale_ru: {message: 'ruština'},
    locale_pl: {message: 'Polsko'},
    locale_cz: {message: 'čeština'},
    Australia: {message: 'Austrálie'},
    Brazil: {message: 'Brazílie'},
    Canada: {message: 'Kanada'},
    Chile: {message: 'Chile'},
    China: {message: 'Čína'}, // new
    'Czech Republic': {message: 'Česká republika'}, // new
    Denmark: {message: 'Dánsko'},
    Egypt: {message: 'Egypt'},
    France: {message: 'Francie'},
    Germany: {message: 'Německo'},
    'Great Britain': {message: 'Spojené království'},
    Greece: {message: 'Řecko'}, // new
    'Hong Kong': {message: 'Hong Kong'},
    India: {message: 'Indie'},
    Ireland: {message: 'Irsko'},
    Italy: {message: 'Itálie'},
    Mexico: {message: 'Mexiko'}, // new
    Netherlands: {message: 'Nizozemí'},
    Poland: {message: 'Polsko'},
    Russia: {message: 'Rusko'},
    Singapore: {message: 'Singapur'},
    Spain: {message: 'Španělsko'},
    'South Korea': {message: 'Jižní Korea'}, // new
    Sweden: {message: 'Švédsko'},
    Switzerland: {message: 'Švýcarsko'},
    Turkey: {message: 'Turecko'},
    Uruguay: {message: 'Uruguay'}, // new
    Venezuela: {message: 'Venezuela'}, // new
    'United States': {message: 'Spojené státy'},
    /* no need to translate the below */
    locale_en_ar: {message: 'العربية'},
    locale_en_de: {message: 'Deutsch'},
    locale_en_en: {message: 'English'},
    locale_en_es_419: {message: 'Español, América Latina'},
    locale_en_es: {message: 'Español'},
    locale_en_fr: {message: 'Française'},
    locale_en_he: {message: 'עברית'},
    locale_en_id: {message: 'Indonesia'},
    locale_en_it: {message: 'Italiana'},
    locale_en_nl: {message: 'Nederlandse'},
    locale_en_pt_BR: {message: 'Português'},
    locale_en_ru: {message: 'Русский'},
    locale_en_cs: {message: 'Czech'} // new
};

return E; });
