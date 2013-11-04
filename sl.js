Sure =) .. I hope all is ok, because it is kind of hard to translate out of context. 

'use strict'; /*jshint browser:true, es5:true*/
define(function(){
var E = {
    /* Strings that MUST be translated for Hola to run in a new language */
    access_any_site: {message: 'Dostop do katerekoli strani, iz katerkoli države, zastonj'},
    unblocker_site_list: {message: 'Unblocker seznam strani'},
    settings: {message: 'Nastavitve'},
    site_blocked: {message: '$1 blokirano?'},
    site_unblocked: {message: '$1 odblokirano'},
    more: {message: 'več...'},
    not_working_more_options: {message: 'ne deluje? več možnosti...'},
    even_more: {message: 'še več...'},
    back_to: {message: 'nazaj k $1 $2'},
    unblocker: {message: 'Unblocker'},
    accelerator: {message: 'Pospeševalnik'},
    on: {message: 'Vključeno'},
    off: {message: 'Izključeno'},
    turn_on: {message: 'Vključi, da začneš'},
    unblocker_disabled: {message: 'Unblocker je onemogočen'},
    enable: {message: 'Omogoči'},
    app_name: {message: 'Hola Boljši Internet'},
    app_desc: {message: 'Dostop do CELOTNEGA interneta! Pojdi na blokirano stran '+
        'stran -> klikno Hola ikono -> zamenjaj zastavo države -> UŽIVAJ!'},
    hola: {message: 'Hola'},
    author_title: {message: 'Avtor: $1'}, // new
    site_title: {message: 'Stran avtorja: $1'}, // new
    users_title: {message: 'Število uporabnikov, ki uporablja to možnost'}, // new
    not_working_title: {message: 'Število uporabnikov, ki je pritisnilo '+
'"ne deluje"'}, // new
    country_vpn: {message: '$1 VPN'}, // new
    changing: {message: 'menjam...'},
    update: {message: 'Osveži'},
    initializing: {message: 'Inicializiram...'},
    loading: {message: 'Nalagam'},
    reload: {message: 'Osveži'},
    /* Optional strings that will make your Hola translation better */
    old_error: {message: 'VZelo stara verija Chroma, <a>posodobi</a> '+
        'Chrome za uporabo Hola'},
    ext_conflict_error: {message:'Hola ne more delovati pravilno, ker druga '
        +'razširitev kontrolira vaše proxy nastavitve. Prosim onemogočite '
        +'druge razširitve za katere mislite, da kontrolirajo vaš proxy '
        +'nastavitve v <a>razširitve</a> (kot so ad-blockers, drugi VPN '
        +'storitve, itd.).'},
    start: {message: 'začni'},
    starting: {message: 'Zaganjam...'},
    try_to_reload: {message: 'Poskusite <span>osvežiti</span>'},
    there_is_error: {message: 'Zdi se, da je prišlo do napake'},
    reload_hola: {message: 'Osveži Hola'},
    verify_internet: {message: 'Preverite, če imate internet'},
    get_help_skype: {message: 'Dobite pomoč od inžinirja preko Skypa: $1'},
    auto_rule_btn: {message: '$1 $2 $3'},
    script_btn: {message: '$1 $2 $3 hitro'},
    country_and_prefix: {message: '$1 ($2)'},
    metro: {message: 'Hola ne deluje dobro v Windows 8 načinu. '+ // new
        'Prosim preklopite v namizen način, Kliknite <a>tu</a> za navodila'},
    old_ff: {message: 'Stara verzija Firefoxa. '+
        'Kliknite <a>tu</a> za posodobitev.'},
    old_ff_missing: {message: '(Nekatere Hola storitve niso na voljo v  '+
        'vaši verziji)'},
    not_free: {message: 'Zastonjska verzija Hola mora biti '+
        'reaktivirana vsake 4 ure in je sponzorirana z oglasi.'},
    not_free_get: {message: 'Dobite Hola Plus za neprekinjeno, '+
        'brez oglasno storitev.'},
    hola_on_other_devices: {message: 'Želite Hola na drugih napravah? '+
        '(Xbox, PS, Apple TV, iPhone...). Kliknite tu'},
    flag_country: {message: '$1 $2'},
    improve_translation: {message: 'Izboljšaj prevod'}, // new
    translate_to_your_lang: {message: 'Prevedite v vaš jezik'}, // new
    locale_en: {message: 'Angleščina'},
    locale_es: {message: 'Spanščina'},
    locale_es_419: {message: 'Spanščina, Latinska Amerika'},
    locale_ar: {message: 'Arabščina'},
    locale_de: {message: 'Nemčšina'},
    locale_fr: {message: 'Francoščina'},
    locale_he: {message: 'Hebrejščina'},
    locale_id: {message: 'Indonezijščina'},
    locale_it: {message: 'Itajljanščina'},
    locale_nl: {message: 'Nizozemščina'},
    locale_pt_BR: {message: 'Portugalščina'},
    locale_ru: {message: 'Ruščina'},
    locale_pl: {message: 'Poljščina'}, // new
    locale_cz: {message: 'Češčina'}, // new
    Australia: {message: 'Avstralija'},
    Brazil: {message: 'Brazilija'},
    Canada: {message: 'Kanada'},
    Chile: {message: 'Čile'},
    China: {message: 'Kitajščina'}, // new
    Denmark: {message: 'Danska'},
    Egypt: {message: 'Egipt'},
    France: {message: 'Francija'},
    Germany: {message: 'Nemčija'},
    'Great Britain': {message: 'Velika Britanija'},
    Greece: {message: 'Grčija'}, // new
    'Hong Kong': {message: 'Hong Kong'},
    India: {message: 'Indija'},
    Ireland: {message: 'Irska'},
    Italy: {message: 'Italija'},
    Mexico: {message: 'Mehika'}, // new
    Netherlands: {message: 'Nizozemska'},
    Poland: {message: 'Poljska'},
    Russia: {message: 'Rusija'},
    Singapore: {message: 'Singapur'},
    Spain: {message: 'Španija'},
    'South Korea': {message: 'Južna Koreja'}, // new
    Sweden: {message: 'Švedska'},
    Switzerland: {message: 'Švica'},
    Turkey: {message: 'Turčija'},
    Uruguay: {message: 'Urugvaj'}, // new
    Venezuela: {message: 'Venezuela'}, // new
    'United States': {message: 'Združene države'},
    /* no need to translate the below */
    locale_en_ar: {message: 'العربية'},
    locale_en_cs: {message: 'Czech'},
    locale_en_da: {message: 'Dansk'},
    locale_en_de: {message: 'Deutsch'},
    locale_en_en: {message: 'English'},
    locale_en_es_419: {message: 'Español, América Latina'},
    locale_en_es: {message: 'Español'},
    locale_en_fa: {message: 'فارسی'},
    locale_en_fr: {message: 'Française'},
    locale_en_he: {message: 'עברית'},
    locale_en_id: {message: 'Indonesia'},
    locale_en_it: {message: 'Italiana'},
    locale_en_nl: {message: 'Nederlandse'},
    locale_en_pl: {message: 'Polish'},
    locale_en_pt_BR: {message: 'Português'},
    locale_en_ru: {message: 'Русский'},
};

return E; });

