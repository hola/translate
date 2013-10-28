'use strict'; /*jshint browser:true, es5:true*/
define(function(){
var E = {
    access_any_site: {message: 'Dostęp do każdej strony z każdego kraju, za darmo'},
    unblocker_site_list: {message: 'Strony które możesz odblokować'},
    settings: {message: 'Ustawienia'},
    site_blocked: {message: '$1 zablokowane?'},
    site_unblocked: {message: '$1 odblokowane'},
    more: {message: 'więcej...'},
    not_working_more_options: {message: 'nie działa? więcej opcji...'},
    even_more: {message: 'jeszcze więcej...'},
    back_to: {message: 'powrót do $1 $2'},
    unblocker: {message: 'odblokować'},
    accelerator: {message: 'Akcelerator'},
    on: {message: 'ON'},
    off: {message: 'OFF'},
    turn_on: {message: 'Uruchom by rozpocząć'},
    unblocker_disabled: {message: 'Hola jest wyłączony'},
    enable: {message: 'Uruchom'},
    app_name: {message: 'Hola - lepszy internet'},
    app_desc: {message: 'Dostęp do CAŁEGO internetu! Przejdź do blokowanej '+
        'strony -> kliknij ikonkę Hola -> zmien flagę kraju -> ENJOY!'},
    hola: {message: 'Hola'},
    author_title: {message: 'Autor: $1'}, // new
    site_title: {message: 'Autor strony: $1'}, // new
    users_title: {message: 'Ilość użytkowników korzystających z tej opcji'}, // new
    not_working_title: {message: 'Ilość użytkowników, którzy wybrali '+
	'"nie działa"'}, // new
    country_vpn: {message: '$1 VPN'}, // new
    changing: {message: 'uwalniam...'},
    update: {message: 'Aktualizuj'},
    initializing: {message: 'Inicjalizacja...'},
    loading: {message: 'Ładowanie'},
    reload: {message: 'Przeładuj'},
    old_error: {message: 'Bardzo stara wersja Google Chrome, <a>zaktualizuj</a> '+
        'Chrome by móc używać Hola'},
    ext_conflict_error: {message:'Hola nie może działać prawidłowo, ponieważ inne '
        +'rozszerzenie kontroluje twoje ustawienia proxy. Wyłącz proszę '
        +'inne rozszerzenia, które mogą kontrolować ustawienia '
        +'proxy (takie jak ad-blocki lub inne VPNy '
        +'itp)'},
    start: {message: 'rozpocznij'},
    starting: {message: 'rozpoczynam...'},
    try_to_reload: {message: 'Spróbuj <span>odświeżyć</span>'},
    there_is_error: {message: 'Mamy problem'},
    reload_hola: {message: 'Przeładuj Hola'},
    verify_internet: {message: 'Sprawdź czy masz dostęp do internetu'},
    get_help_skype: {message: 'Uzyskaj pomoc poprzez od inżyniera Skype: $1'},
    auto_rule_btn: {message: '$1 $2 $3'},
    script_btn: {message: '$1 $2 $3 szybko'},
    country_and_prefix: {message: '$1 ($2)'},
    old_ff: {message: 'Stara wersja Firefoxa. '+
        'Kliknij <a>tutaj</a> by go zaktualizować.'},
    old_ff_missing: {message: '(niektóre funkcje Hola nie są dostępne w '+
        'twojej wersji)'},
    not_free: {message: 'Darmowa wersja dodatku Hola musi być '+
        'ponownie uruchamiana co 4 godziny i jest sponsorowana przez reklamy.'},
    not_free_get: {message: 'Pobierz Hola Plus dla nieprzerwanej '+
        'usługi bez reklam.'},
    hola_on_other_devices: {message: 'Potrzebujesz Hola na innych urządzeniach? '+
        '(Xbox, PS, Apple TV, iPhone...). Kliknij tutaj.'},
    flag_country: {message: '$1 $2'},
    improve_translation: {message: 'ulepsz tłumaczenie'}, // new
    locale_en: {message: 'Angielski'},
    locale_es: {message: 'Hiszpański'},
    locale_es_419: {message: 'Hiszpański, Ameryka Łacińska'},
    locale_ar: {message: 'Arabski'},
    locale_de: {message: 'Niemiecki'},
    locale_fr: {message: 'Francuski'},
    locale_he: {message: 'Hebrajski'},
    locale_id: {message: 'Indonezyjski'},
    locale_it: {message: 'Włoski'},
    locale_nl: {message: 'Holenderski'},
    locale_pt_BR: {message: 'Portugalski'},
    locale_ru: {message: 'Rosyjski'},
    Australia: {message: 'Australia'},
    Brazil: {message: 'Brazylia'},
    Canada: {message: 'Kanada'},
    Chile: {message: 'Republika Chile'},
    China: {message: 'Chiny'},
    Denmark: {message: 'Dania'},
    Egypt: {message: 'Egipt'},
    France: {message: 'Francja'},
    Germany: {message: 'Niemcy'},
    'Great Britain': {message: 'Wielka Brytania'},
    Greece: {message: 'Grecja'},
    'Hong Kong': {message: 'Hong Kong'},
    India: {message: 'Indie'},
    Ireland: {message: 'Irlandia'},
    Italy: {message: 'Włochy'},
    Netherlands: {message: 'Holandia'},
    Poland: {message: 'Polska'},
    Russia: {message: 'Rosja'},
    Singapore: {message: 'Singapur'},
    Spain: {message: 'Hiszpania'},
    'South Korea': {message: 'South Korea'},
    Sweden: {message: 'Szwecja'},
    Switzerland: {message: 'Szwajcaria'},
    Turkey: {message: 'Turcja'},
    'United States': {message: 'Stany Zjednoczone'},
    Uruguay: {message: 'Urugwaj'},
    Venezuela: {message: 'Venezuela'},
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
};

return E; });
