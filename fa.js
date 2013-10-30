'use strict'; /*jshint browser:true, es5:true*/

var E = {
    /* Strings that must be transalted before adding a new Hola language */
    access_any_site: {message: 'دسترسی به هر سایتی از هر کشوری، مجانی'},
    unblocker_site_list: {message: 'لیست سایتهای رفع فیلترشده'},
    settings: {message: 'تنظیمات'},
    site_blocked: {message: '$1 فیلتر است؟'},
    site_unblocked: {message: '$1 رفع فیلترشد'},
    more: {message: '...بیشتر'},
    not_working_more_options: {message: 'کار نمیکنه؟ تنظیمات بیشتر...'},
    even_more: {message: 'حتی بیشتر...'},
    back_to: {message: 'برگرد به $1 $2'},
    unblocker: {message: 'فیلترشکن'},
    accelerator: {message: 'شتاب دهنده'},
    on: {message: 'روشن'},
    off: {message: 'خاموش'},
    turn_on: {message: 'برای شروع روشن کنید'},
    unblocker_disabled: {message: 'فیلترشکن غیرفعال است'},
    enable: {message: 'فعال'},
    app_name: {message: 'هولا اینترنت بهتر'},
    app_desc: {message: 'به همه اینترنت دسترسی داشته باشید،حتی سایت فیلتر '+
        'سایت ->  روی آیکون هولا کلیک کن -> پرچم کشور رو عوض کن -> حالشو ببر!'},
    hola: {message: 'هولا'},
    author_title: {message: 'نویسنده: $1'}, // new
    site_title: {message: 'سایت نویسنده: $1'}, // new
    users_title: {message: 'تعداد کاربرانی که از این گزینه استفاده میکنند'}, // new
    not_working_title: {message: 'تعداد کاربرانی که انتخاب کرده اند '+
	'"کار نمیکنه"'}, // new
    country_vpn: {message: '$1 VPN'}, // new
    changing: {message: 'در حال تغییر...'},
    update: {message: 'به روز رسانی'},
    initializing: {message: 'راه اندازی...'},
    loading: {message: 'بارگذاری'},
    reload: {message: 'بارگذاری دوباره'},
    /* Optional strings that makes your Hola translation better */
    old_error: {message: 'ورژن کروم شما خیلی قدیمیه, <a>بروز کنید</a> '+
        'کروم رو تا از هولا استفاده کنید'},
    ext_conflict_error: {message:'هولا نمیتواند به درستی کار کند به دلایل زیر '
        +'تنظیمات اضافی پروکسی خود را لطفاً غیر فعال کنید '
        +'افزونه های دیگری که میتوانند پروکسی شما رو کنترل کنند '
        +'به این تنظیمات بروید <a>extensions</a> (such as ad-blockers, other VPN '
        +'services, etc.).'},
    start: {message: 'شروع'},
    starting: {message: 'در حال شروع...'},
    try_to_reload: {message: '<span>بارگذاری</span>در حال سعی برای'},
    there_is_error: {message: 'به نظر مشکلی پیش اومده'},
    reload_hola: {message: 'بارگذاری دوباره هولا'},
    verify_internet: {message: 'مطمئن شوید که اینترنت شما متصل است'},
    get_help_skype: {message: 'از مهندسین ما کمک بگیرید توسط اسکایپ: $1'},
    auto_rule_btn: {message: '$1 $2 $3'},
    script_btn: {message: '$1 $2 $3 fast'},
    country_and_prefix: {message: '$1 ($2)'},
    old_ff: {message: 'ورژن فایرفاکس شما قدیمیه. '+
        'کلیک کنید <a>اینجا</a>برای به روز کردن '},
    old_ff_missing: {message: '(بعضی از ویژگی های هولا نمیتوانند کامل شوند '+
        'به خاطر ورژن موجود)'},
    not_free: {message: 'نسخه مجانی از هولا احتیاج داره '+
        'هر چهار ساعت از دوباره فعال بشه و دارای تبلیغاته'},
    not_free_get: {message: 'هولا پلاس بگیرید تا بی وقفه وصل باشید, '+
        'بدون تبلیغات'},
    hola_on_other_devices: {message: 'میخواهید هولا را روی دیگر دستگاه ها امتحان کنید؟ '+
        '(Xbox, PS, Apple TV, iPhone...). اینجا کلیک کنید'},
    flag_country: {message: '$1 $2'},
    improve_translation: {message: 'تصحیح ترجمه'}, // new
    translate_to_your_lang: {message: 'به زبان خودتون ترجمه کنید'}, // new
    locale_en: {message: 'انگلیسی'},
    locale_es: {message: 'اسپانیایی'},
    locale_es_419: {message: 'اسپانیایی ،امریکای لاتین'},
    locale_ar: {message: 'عربی'},
    locale_de: {message: 'آلمان'},
    locale_fr: {message: 'فرانسه'},
    locale_he: {message: 'عبری'},
    locale_id: {message: 'اندونزی'},
    locale_it: {message: 'ایتالیا'},
    locale_nl: {message: 'هلندی'},
    locale_pt_BR: {message: 'پرتغالی'},
    locale_ru: {message: 'روسیه ای'},
    Australia: {message: 'استرالیایی'},
    Brazil: {message: 'برزیلی'},
    Canada: {message: 'کانادایی'},
    Chile: {message: 'شیلی'},
    China: {message: 'چینی'}, // new
    Denmark: {message: 'دانمارک'},
    Egypt: {message: 'مصر'},
    France: {message: 'فرانسه'},
    Germany: {message: 'آلمان'},
    'Great Britain': {message: 'انگلستان'},
    Greece: {message: 'یونان'}, // new
    'Hong Kong': {message: 'هنگ کنگ'},
    India: {message: 'هند'},
    Ireland: {message: 'ایرلند'},
    Italy: {message: 'ایتالیا'},
    Mexico: {message: 'مکزیک'}, // new
    Netherlands: {message: 'هلند'},
    Poland: {message: 'لهستان'},
    Russia: {message: 'روسیه'},
    Singapore: {message: 'سنگاپور'},
    Spain: {message: 'اسپانیا'},
    'South Korea': {message: 'کره جنوبی'}, // new
    Sweden: {message: 'سوئد'},
    Switzerland: {message: 'سویس'},
    Turkey: {message: 'ترکیه'},
    Uruguay: {message: 'اوروگوئه'}, // new
    Venezuela: {message: 'ونزوئلا'}, // new
    'United States': {message: 'آمریکا'},
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
