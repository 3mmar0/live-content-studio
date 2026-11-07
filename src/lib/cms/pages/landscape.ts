import { definePage, f, section } from "../schema";
import heroImg from "@/assets/landscape/hero.jpg";
import phase1 from "@/assets/landscape/phase-1.jpg";
import phase2 from "@/assets/landscape/phase-2.jpg";
import phase3 from "@/assets/landscape/phase-3.jpg";
import softscape from "@/assets/landscape/softscape.jpg";
import hardscape from "@/assets/landscape/hardscape.jpg";
import projectImg from "@/assets/landscape/project.jpg";

export const landscapeHero = section("hero", {
  label: "الواجهة الرئيسية",
  fields: [f.text("eyebrow", "eyebrow"), f.text("title", "title"), f.textarea("subtitle", "subtitle"), f.image("image", "image"), f.text("phasesLabel", "phasesLabel"), f.url("phasesHref", "phasesHref"), f.text("engineersLabel", "engineersLabel"), f.url("engineersHref", "engineersHref"), f.text("requestLabel", "requestLabel"), f.url("requestHref", "requestHref")],
  defaults: {"eyebrow": "هندسة المناظر الطبيعية والزراعة المستدامة", "title": "خدمات هندسة وتصميم اللاندسكيب", "subtitle": "نُحوّل المساحات الخارجية إلى لوحات طبيعية بيئية تجمع بين الفخامة المعمارية والاستدامة البيئية، عبر دورة متكاملة تشمل التصميم ثنائي وثلاثي الأبعاد، المعاينة الميدانية الدقيقة، والتنفيذ الاحترافي بإشراف نخبة من كبار المهندسين.", "image": heroImg, "phasesLabel": "مراحل خدماتنا", "phasesHref": "#phases", "engineersLabel": "فريق المهندسين", "engineersHref": "#engineers", "requestLabel": "طلب معاينة وتصميم", "requestHref": "#landscape-form"},
});

export const landscapeBreadcrumbs = section("breadcrumbs", {
  label: "مسار التنقل",
  fields: [f.list("items", "items", "عنصر", [f.text("label", "label"), f.url("href", "href")])],
  defaults: {"items": [{"label": "الرئيسية", "href": "/"}, {"label": "اللاندسكيب", "href": ""}]},
});

export const landscapeStats = section("stats", {
  label: "الأرقام والإحصائيات",
  fields: [f.list("items", "items", "عنصر", [f.text("v", "v"), f.text("l", "l")])],
  defaults: {"items": [{"v": "+150", "l": "مشروع لاندسكيب منفذ بنجاح"}, {"v": "3D / VR", "l": "محاكاة ثلاثية الأبعاد قبل التنفيذ"}, {"v": "40%", "l": "توفير في استهلاك المياه بنظم الري الذكي"}, {"v": "100%", "l": "ضمان جودة النباتات والأعمال الإنشائية"}]},
});

export const landscapePhases = section("phases", {
  label: "مراحل خدمات اللاندسكيب",
  fields: [f.text("eyebrow", "eyebrow"), f.text("title", "title"), f.textarea("desc", "desc"), f.list("items", "items", "عنصر", [f.text("n", "n"), f.text("t", "t"), f.textarea("d", "d"), f.image("img", "img"), f.text("item1", "item1"), f.text("item2", "item2"), f.text("item3", "item3")]), f.image("background", "background")],
  defaults: {"eyebrow": "المراحل الثلاث المتكاملة", "title": "من الفكرة إلى حديقة واقعية نابضة بالحياة", "desc": "نعتمد منهجية هندسية صارمة تضمن مطابقة ما تم تصميمه على المخططات لما يتم تنفيذه على أرض الواقع بدقة متناهية.", "items": [{"n": "المرحلة الأولى", "t": "المعاينة والرفع المساحي", "d": "زيارة ميدانية شاملة من مهندسينا لدراسة طبيعة التربة، زوايا سطوع الشمس والرياح، قياس المناسيب والميول، وفحص مصادر مياه الري لضمان تصميم قابل للتنفيذ المستدام.", "img": phase1, "item1": "رفع مساحي دقيق بالأجهزة الهندسية", "item2": "تحليل ملوحة التربة والمياه واختبارات الصرف", "item3": "تحديد مسارات الحركة والإطلالات البصرية"}, {"n": "المرحلة الثانية", "t": "التصميم المعماري ثلاثي الأبعاد", "d": "إعداد مخططات الهاردسكيب (الممرات، البرجولات، الجلسات، الشلالات) والسوفتسكيب (الأشجار، المسطحات الخضراء، الزهور) مع عروض ثلاثية الأبعاد وجولات فيديو واقعية.", "img": phase2, "item1": "مخططات 2D تنفيذية ومخططات شبكات الري والإنارة", "item2": "ريندر واقعي 3D ليلاً ونهاراً يوضح نمو النباتات", "item3": "جداول حصر الكميات والتوصيف النباتي المعتمد"}, {"n": "المرحلة الثالثة", "t": "التنفيذ الهندسي والإشراف", "d": "تنفيذ احترافي بأعلى معايير الجودة بإشراف طاقم مهندسي الموقع؛ تركيب شبكات الري الأوتوماتيكية الذكية، أعمال التبليط والإنارة، وزراعة نباتات متكيفة عالية الحيوية.", "img": phase3, "item1": "شبكات ري ذكية بمستشعرات الرطوبة والتحكم الآلي", "item2": "جودة خامات الهاردسكيب والأحجار الطبيعية والإنارة", "item3": "برامج رعاية وصيانة دورية بعد تسليم المشروع"}], "background": "/shapes/wavy.svg"},
});

export const landscapeElements = section("elements", {
  label: "عناصر اللاندسكيب",
  fields: [f.text("eyebrow", "eyebrow"), f.text("title", "title"), f.textarea("desc", "desc"), f.list("items", "items", "عنصر", [f.icon("icon", "icon"), f.image("img", "img"), f.text("t", "t"), f.textarea("d", "d")])],
  defaults: {"eyebrow": "تكامل الطبيعة مع العمارة", "title": "عناصر اللاندسكيب التي نصممها وننفذها", "desc": "نجمع بين الجوانب الحية (Softscape) والإنشائية (Hardscape) ونظم التحكم التكنولوجي لخلق بيئة متوازنة مريحة للحواس", "items": [{"icon": "Trees", "img": softscape, "t": "السوفتسكيب (Softscape)", "d": "اختيار وتوزيع الأشجار الظليلة والنخيل والمسطحات الخضراء الطبيعية، والزهور والنباتات العطرية الملائمة مناخياً والمقاومة للجفاف وارتفاع درجات الحرارة."}, {"icon": "Cuboid", "img": hardscape, "t": "الهاردسكيب (Hardscape)", "d": "الممرات الحجرية والخشبية، البرجولات والمظلات العصرية، الجلسات الخارجية وحفر النار (Fire Pits)، والشلالات والنوافير والمسطحات المائية الهادئة."}, {"icon": "Droplets", "img": projectImg, "t": "الري الذكي والإنارة البيئية", "d": "شبكات ري بالتنقيط والرشاشات الدقيقة تعمل عبر لوحات تحكم ذكية، مع توزيع إضاءات ليلية خافتة موفرة للطاقة تُبرز جمال التكوينات النباتية والمعمارية."}]},
});

export const landscapeExperts = section("experts", {
  label: "فريق المهندسين",
  fields: [f.text("eyebrow", "eyebrow"), f.text("title", "title"), f.textarea("desc", "desc"), f.list("items", "items", "عنصر", [f.text("name", "name"), f.text("role", "role"), f.textarea("bio", "bio"), f.image("image", "image")]), f.image("background", "background")],
  defaults: {"eyebrow": "فريق الخبراء الميداني", "title": "نخبة مهندسي اللاندسكيب والتصميم البيئي", "desc": "فريق هندسي متخصص يجمع بين الخبرة الأكاديمية والمهارة الحقلية في كبرى مشاريع الفلل، المجمعات السكنية، والمنتجعات السياحية.", "items": [{"name": "م. طارق الزيات", "role": "رئيس قسم هندسة اللاندسكيب والتخطيط", "bio": "خبرة أكثر من 16 عاماً في تخطيط وتصميم المساحات الخضراء والحدائق المفتوحة للكمبوندات والقصور الفاخرة.", "image": ""}, {"name": "م. نورهان الشناوي", "role": "كبير مهندسي التصميم المعماري 3D", "bio": "متخصصة في النمذجة ثلاثية الأبعاد والمحاكاة البيئية البصرية ودمج الإضاءة الليلية التفاعلية.", "image": ""}, {"name": "م. ياسين المنشاوي", "role": "مدير الإشراف والتنفيذ الميداني", "bio": "متخصص في إدارة مواقع التنفيذ، جودة أعمال الهاردسكيب والأحجار، وتطبيق الجداول الزمنية بدقة.", "image": ""}, {"name": "م. حسام الدين فريد", "role": "مهندس النظم الزراعية والري الذكي", "bio": "خبير في هندسة شبكات الري الأوتوماتيكية، ملاءمة التربة والنباتات، والزراعة العضوية المستدامة.", "image": ""}], "background": "/shapes/floats.svg"},
});

export const landscapeSteps = section("steps", {
  label: "خطوات طلب وتنفيذ الخدمة",
  fields: [f.text("eyebrow", "eyebrow"), f.text("title", "title"), f.textarea("desc", "desc"), f.list("items", "items", "عنصر", [f.text("n", "n"), f.text("t", "t"), f.textarea("d", "d")])],
  defaults: {"eyebrow": "خطوات طلب وتنفيذ الخدمة", "title": "كيف نبدأ العمل معاً في مشروعك؟", "desc": "رحلة واضحة المعالم من التواصل الأولي حتى استلام حديقتك جاهزة بالكامل مع برامج الصيانة والضمان", "items": [{"n": "01", "t": "طلب المعاينة وحجز الموعد", "d": "تسجيل بيانات الموقع وتحديد موعد لزيارة طاقم المهندسين للرفع المساحي الأولي."}, {"n": "02", "t": "التصميم والموافقة المبدئية", "d": "عرض المخططات ونماذج الـ 3D ومناقشة تفاصيل الخامات وتوزيع النباتات مع العميل."}, {"n": "03", "t": "بدء التنفيذ والإنشاء الميداني", "d": "تجهيز التربة وشبكات البنية التحتية والري ثم تنفيذ عناصر الهاردسكيب والسوفتسكيب."}, {"n": "04", "t": "التسليم النهائي وجدول الرعاية", "d": "تسليم رسمي للموقع مطروحاً معه كتيب الإرشاد وبرنامج المتابعة والصيانة الدورية."}]},
});

export const landscapeProjects = section("projects", {
  label: "دليل المشاريع التفاعلي",
  fields: [f.text("eyebrow", "eyebrow"), f.text("title", "title"), f.textarea("desc", "desc"), f.list("items", "items", "عنصر", [f.text("id", "id"), f.text("label", "label"), f.text("t", "t"), f.text("badge", "badge"), f.textarea("d", "d"), f.text("eng", "eng"), f.text("cta", "cta"), f.url("ctaHref", "ctaHref")]), f.image("background", "background")],
  defaults: {"eyebrow": "دليل المشاريع التفاعلي", "title": "اختر نوع مشروعك لاستعراض الحل الهندسي الأنسب", "desc": "اضغط على نوع المساحة التي ترغب في تصميمها لمعرفة المكونات الهندسية الموصى بها وفترة التنفيذ التقديرية", "items": [{"id": "villas", "t": "لاندسكيب الفلل والقصور السكنية (Private Villas)", "badge": "الخصوصية والراحة العائلية الفاخرة", "d": "تصميم يركز على عزل الخصوصية بأسيجة نباتية كثيفة، مناطق لعب آمنة للأطفال، جلسات خارجية مظللة متكاملة مع إضاءة ساحرة، وشلالات أو مسابح محاطة بمسطحات خضراء دائمة النضارة.", "eng": "المهندس المشرف المقترح: م. طارق الزيات وم. نورهان الشناوي", "cta": "طلب معاينة الفيلا", "label": "حدائق الفلل والقصور السكنية", "ctaHref": "#landscape-form"}, {"id": "roof", "t": "لاندسكيب الأسطح والحدائق المعلقة (Roof Gardens)", "badge": "استغلال أمثل للمساحات الحضرية", "d": "أنظمة متطورة تعتمد على العزل المائي والحراري المتقدم، أحواض زراعة خفيفة الوزن ونباتات مدمجة تتحمل الرياح والحرارة العالية، مع مقاعد خشبية معالجة وجلسات باربكيو مطلة.", "eng": "المهندس المشرف المقترح: م. حسام الدين فريد وم. ياسين المنشاوي", "cta": "طلب معاينة الروف", "label": "لاندسكيب الأسطح والتراسات (Roof Garden)", "ctaHref": "#landscape-form"}, {"id": "commercial", "t": "المشاريع الاستثمارية والتجارية والكمبوندات", "badge": "كثافة استخدام ومتانة عالية", "d": "تخطيط للمساحات الشاسعة وممرات المشاة والدراجات، مساحات انتظار خضراء، محطات ري ذكية مركزية، وتنسيق نباتي قليل الصيانة ومقاوم للاستهلاك العام.", "eng": "المهندس المشرف المقترح: الفريق الهندسي المتكامل بقيادة م. طارق الزيات", "cta": "طلب دراسة المشروع التجاري", "label": "المجمعات التجارية والشركات والمنتجعات", "ctaHref": "#landscape-form"}], "background": "/shapes/wavy.svg"},
});

export const landscapeForm = section("form", {
  label: "حجز موعد المعاينة والتصميم",
  fields: [f.text("badge", "badge"), f.text("title", "title"), f.textarea("body", "body"), f.text("survey", "survey"), f.text("design", "design"), f.text("execution", "execution"), f.text("irrigation", "irrigation"), f.text("successTitle", "successTitle"), f.textarea("successBody", "successBody"), f.text("successLabel", "successLabel"), f.text("serviceLabel", "serviceLabel"), f.text("servicePlaceholder", "servicePlaceholder"), f.text("nameLabel", "nameLabel"), f.text("placeLabel", "placeLabel"), f.text("placePlaceholder", "placePlaceholder"), f.text("areaLabel", "areaLabel"), f.text("countryLabel", "countryLabel"), f.text("countryPlaceholder", "countryPlaceholder"), f.text("phoneLabel", "phoneLabel"), f.text("emailLabel", "emailLabel"), f.text("notesLabel", "notesLabel"), f.text("submitLabel", "submitLabel"), f.text("namePlaceholder", "namePlaceholder"), f.text("areaPlaceholder", "areaPlaceholder"), f.text("emailPlaceholder", "emailPlaceholder"), f.text("notesPlaceholder", "notesPlaceholder"), f.text("phonePlaceholder", "phonePlaceholder"), f.text("initialPhonePrefix", "initialPhonePrefix"), f.text("emptyPhonePrefix", "emptyPhonePrefix"), f.url("successHref", "successHref"), f.list("services", "services", "عنصر", [f.text("label", "label")]), f.list("places", "places", "عنصر", [f.text("label", "label")]), f.list("countries", "countries", "عنصر", [f.text("label", "label"), f.text("prefix", "prefix")])],
  defaults: {"badge": "حجز موعد المعاينة والتصميم", "title": "ابدأ مشروع اللاندسكيب الخاص بك الآن", "body": "سجل تفاصيل مساحتك ونوع الخدمة المطلوبة (تصميم، معاينة، تنفيذ كامل)، وسيقوم فريق المهندسين بالتواصل معك لتحديد موعد الزيارة الميدانية.", "survey": "معاينة ميدانية ورفع مساحي", "design": "تصميم تنفيذي وثلاثي الأبعاد", "execution": "تنفيذ بإشراف هندسي كامل", "irrigation": "ري ذكي وإنارة بيئية", "successTitle": "تم استلام طلبك بنجاح!", "successBody": "شكراً لك، سيتواصل معك فريق المهندسين لتنسيق موعد المعاينة الميدانية ومناقشة تفاصيل التصميم والتنفيذ.", "successLabel": "تواصل معنا", "serviceLabel": "نوع الخدمة الهندسية المطلوبة *", "servicePlaceholder": "اختر نوع الخدمة...", "nameLabel": "الاسم الكريم / العميل *", "placeLabel": "طبيعة المكان أو العقار *", "placePlaceholder": "اختر طبيعة المكان...", "areaLabel": "المساحة التقديرية بالمتر المربع", "countryLabel": "البلد (الدولة) *", "countryPlaceholder": "اختر الدولة...", "phoneLabel": "رقم الهاتف / واتساب *", "emailLabel": "البريد الإلكتروني *", "notesLabel": "ملاحظات أو تفاصيل إضافية عن الموقع", "submitLabel": "إرسال طلب المعاينة والتصميم", "namePlaceholder": "أدخل اسمك", "areaPlaceholder": "مثال: 350", "emailPlaceholder": "name@domain.com", "notesPlaceholder": "اكتب أي ملاحظات حول الموقع أو متطلبات التصميم...", "phonePlaceholder": "مثال: {prefix} 10xxxxxxxx", "initialPhonePrefix": "+20", "emptyPhonePrefix": "+", "successHref": "/contact", "services": [{"label": "معاينة ميدانية ورفع مساحي للموقع"}, {"label": "تصميم لاندسكيب معماري ثلاثي الأبعاد (2D + 3D)"}, {"label": "تنفيذ متكامل (تصميم + توريد + تنفيذ + ري ذكي)"}, {"label": "تطوير وتجديد حديقة قائمة وصيانة شبكات الري"}, {"label": "استشارة هندسية مع أحد كبار المهندسين"}], "places": [{"label": "فيلا خاصة / قصر سكني"}, {"label": "روف أو تراس معلق (Roof Garden)"}, {"label": "مزرعة خاصة أو استراحة"}, {"label": "كمبوند سكني أو مجمع تجاري"}, {"label": "فندق أو منتجع سياحي"}], "countries": [{"label": "مصر (+20)", "prefix": "+20"}, {"label": "المملكة العربية السعودية (+966)", "prefix": "+966"}, {"label": "الإمارات العربية المتحدة (+971)", "prefix": "+971"}, {"label": "الكويت (+965)", "prefix": "+965"}, {"label": "قطر (+974)", "prefix": "+974"}, {"label": "البحرين (+973)", "prefix": "+973"}, {"label": "سلطنة عمان (+968)", "prefix": "+968"}, {"label": "الأردن (+962)", "prefix": "+962"}, {"label": "العراق (+964)", "prefix": "+964"}, {"label": "ليبيا (+218)", "prefix": "+218"}, {"label": "دولة أخرى", "prefix": ""}]},
});

export const landscapeCta = section("cta", {
  label: "دعوة لحجز الاستشارة",
  fields: [f.text("title", "title"), f.textarea("body", "body"), f.text("ctaLabel", "ctaLabel"), f.url("ctaHref", "ctaHref")],
  defaults: {"title": "هل لديك مساحة خارجية وترغب في تحويلها إلى تحفة خضراء؟", "body": "تواصل معنا مباشرة مع كبار مهندسي اللاندسكيب لحجز موعد الرفع المساحي والمعاينة الميدانية.", "ctaLabel": "حجز موعد استشارة ومعاينة", "ctaHref": "/contact"},
});

export const landscapePage = definePage({
  key: "landscape",
  slug: "/landscape",
  title: "اللاندسكيب",
  description: "خدمات هندسة وتصميم اللاندسكيب والمعاينة والتنفيذ.",
  sections: [landscapeHero, landscapeBreadcrumbs, landscapeStats, landscapePhases, landscapeElements, landscapeExperts, landscapeSteps, landscapeProjects, landscapeForm, landscapeCta],
});
