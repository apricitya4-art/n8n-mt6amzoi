/* =====================================================================
   1) TRANSLATIONS
   ===================================================================== */
const I18N = {
ar:{
brandTag:"STUDY · UNDERSTAND · APPLY",
navHome:"الرئيسية", navStore:"المتجر", navLibrary:"مكتبتي", navSummaries:"الملخصات", navGirls:"My Girls' Space", navTeam:"انضمي لفريقي", navContact:"تواصل",
heroEyebrow:"طالبة طب - السنة الخامسة", heroTagline:"From med school to making a difference",
heroBio:"مرحبًا، أنا Dr. Amnesia، طالبة طب في السنة الخامسة بإذن الله. متفوقة في شهادة البكالوريا، وأشارك معلومات طبية ونصائح لطلبة الطب، خاصة طلبة السنة الأولى والثانية، وأيضًا للمقبلين على البكالوريا. أنشر بين الحين والآخر ملخصات مفيدة لمختلف السنوات، وأملك متجرًا صغيرًا بمنتجات مستوحاة من عالم الطب.",
storeTitle:"المتجر", storeSub:"منتجات مستوحاة من عالم الطب — اختر الخيارات ثم أضف للسلة",
catAll:"الكل", catCups:"الكؤوس", catAprons:"الأمزرة", catPens:"الأقلام", catBottles:"القوارير", catStickers:"ستيكرز", catPlanners:"بلانرز ودفاتر", catAccessories:"إكسسوارات", catPacks:"باقات هدايا",
libraryTitle:"مكتبتي", librarySub:"كتبي الخاصة، بمعاينة وتقييمات القارئات",
addToLibraryCart:"أضف للسلة", openBook:"معاينة الكتاب", addReview:"أضيفي تقييمك", reviewNamePh:"اسمك", reviewCommentPh:"رأيك في الكتاب", submitReview:"إرسال التقييم",
summariesTitle:"الملخصات", summariesSub:"ملخصات مرتّبة حسب السنة الدراسية — اضغط لفتح رابط درايف",
year1:"السنة الأولى", year2:"السنة الثانية", bac:"البكالوريا", openDrive:"فتح على درايف",
girlsTitle:"My Girls' Space", girlsSub:"مجرة صغيرة من كلمات صديقاتي — قرّبي الماوس من نجمة لتقرأي",
girlsDemoNote:"⚠️ قسم تجريبي حاليًا: التعليقات تُحفظ فقط في هذه الجلسة وتختفي عند التحديث. سيُربط بحفظ دائم حقيقي عبر Firebase لاحقًا.",
girlsAdminToggle:"🌙 لوحة المراجعة (مؤقتة)", girlsAdminPanelTitle:"التعليقات بانتظار الموافقة", girlsNoPending:"لا يوجد حاليًا أي تعليق ينتظر الموافقة",
girlsApprove:"موافقة", girlsReject:"رفض", girlsEmptyTitle:"نجمة بلا تعليق بعد ✨", girlsEmptyBody:"اضغطي هنا لتكتبي كلمتك، وستظهر للجميع بعد موافقتي عليها.",
girlsFormNamePh:"اسمك (أو اسم مستعار)", girlsFormCommentPh:"اكتبي تعليقك هنا...", girlsFormSubmit:"إرسال للمراجعة",
girlsPendingBadge:"قيد المراجعة", girlsPendingBody:"شكرًا لك 🌸 تعليقك الآن قيد المراجعة، ولن يظهر لبقية الزائرات حتى أوافق عليه.",
teamTitle:"انضمي لفريقي الطبي", teamSub:"لطلبة الطب والباحثين الراغبين في التعاون معي ضمن مجموعة أو فريق طبي",
teamPerk1:"تبادل ملخصات وموارد طبية محدثة", teamPerk2:"مجتمع داعم من طلبة الطب والباحثين", teamPerk3:"فرص للمشاركة في محتوى وأبحاث مشتركة",
teamTelegramNote:"تقدري أيضًا تنضمي مباشرة لقناة التلغرام الطبية 👇",
teamFormTitle:"طلب الانضمام", teamFormNote:"عبّئي المعلومات، وسأتواصل معك في أقرب وقت",
teamNamePh:"اسمك الكامل", teamTypeStudent:"طالبة/طالب طب", teamTypeResearcher:"باحثة/باحث", teamTypeOther:"أخرى",
teamContactPh:"إيميل أو رقم للتواصل", teamMessagePh:"اكتبي نبذة عنك ولماذا تودين الانضمام", teamSubmit:"إرسال الطلب",
teamSuccessMsg:"تم استلام طلبك 🌸 سأتواصل معك قريبًا إن شاء الله.", teamErrorMsg:"عبّئي على الأقل الاسم وطريقة التواصل.",
contactTitle:"تواصل معي", contactSub:"تابعيني/تابعني على منصاتي، وللطلبات راسليني بالطريقة الأنسب لك",
askTitle:"عندك سؤال؟ راسليني مباشرة", askNote:"رسالتك توصل مباشرة لإيميلي",
askNamePh:"اسمك (اختياري)", askMessagePh:"اكتبي سؤالك هنا...", askSubmit:"إرسال السؤال",
askSuccessMsg:"تم إرسال سؤالك بنجاح، شكرًا لك 🌸", askErrorMsg:"اكتبي سؤالك أولاً من فضلك.",
askNotConfiguredMsg:"⚠️ خدمة الإرسال غير مفعّلة بعد من طرف صاحبة الموقع (يجب ربط EmailJS).",
footerText:"© Dr. Amnesia — جميع الحقوق محفوظة",
cartTitle:"سلة الطلبات", chooseWilaya:"اختر الولاية للتوصيل", subtotal:"المجموع الفرعي", discountLabel:"الخصم", shipping:"التوصيل", total:"المجموع الكلي",
checkoutWhatsapp:"إتمام الطلب عبر واتساب", checkoutInstagram:"أو راسليني عبر انستغرام",
cartEmpty:"سلتك فارغة حاليًا 🌸", addToCart:"أضف إلى السلة", added:"تمت الإضافة ✓",
color:"اللون", size:"المقاس", gender:"الفئة", male:"رجالي", female:"نسائي",
customize:"أضف شعارك أو اسمك (+رسوم طباعة)", yourName:"اكتبي الاسم المطلوب طباعته", basePriceNote:"سعر إضافي عند اختيار الطباعة",
remove:"إزالة", checkoutMsgTitle:"مرحبًا، أريد إتمام طلب:", wilayaLabel:"الولاية",
promoPh:"كود الخصم", promoApply:"تطبيق", promoValid:"تم تطبيق الكود بنجاح ✓", promoInvalid:"الكود غير صالح أو مستخدم من قبل", promoUsedNote:"(الأكواد لا تُستخدم مرتين في نفس الجلسة)"
},
en:{
brandTag:"STUDY · UNDERSTAND · APPLY",
navHome:"Home", navStore:"Store", navLibrary:"My Library", navSummaries:"Summaries", navGirls:"My Girls' Space", navTeam:"Join My Team", navContact:"Contact",
heroEyebrow:"5th Year Medical Student", heroTagline:"From med school to making a difference",
heroBio:"Hi, I'm Dr. Amnesia, a 5th year medical student (in shaa Allah). Top scorer at the Baccalaureate, I share medical knowledge and advice for med students — especially 1st and 2nd year students — and for future Bac candidates. I regularly post helpful summaries for different years, and I run a small store with medicine-inspired products.",
storeTitle:"Store", storeSub:"Medicine-inspired products — choose your options and add to cart",
catAll:"All", catCups:"Mugs", catAprons:"Aprons", catPens:"Pens", catBottles:"Bottles", catStickers:"Stickers", catPlanners:"Planners & Notebooks", catAccessories:"Accessories", catPacks:"Gift Packs",
libraryTitle:"My Library", librarySub:"My own books, with previews and reader reviews",
addToLibraryCart:"Add to cart", openBook:"Preview book", addReview:"Add your review", reviewNamePh:"Your name", reviewCommentPh:"Your thoughts on the book", submitReview:"Submit review",
summariesTitle:"Summaries", summariesSub:"Summaries organized by school year — tap to open the Drive link",
year1:"1st Year", year2:"2nd Year", bac:"Baccalaureate", openDrive:"Open on Drive",
girlsTitle:"My Girls' Space", girlsSub:"A little galaxy of my friends' words — hover a star to read",
girlsDemoNote:"⚠️ Currently a demo section: comments only saved for this session and disappear on refresh. Will be connected to real permanent storage via Firebase later.",
girlsAdminToggle:"🌙 Review panel (temporary)", girlsAdminPanelTitle:"Comments awaiting approval", girlsNoPending:"No comments waiting for approval right now",
girlsApprove:"Approve", girlsReject:"Reject", girlsEmptyTitle:"A star with no comment yet ✨", girlsEmptyBody:"Tap here to write your words — it will show to everyone once I approve it.",
girlsFormNamePh:"Your name (or a nickname)", girlsFormCommentPh:"Write your comment here...", girlsFormSubmit:"Submit for review",
girlsPendingBadge:"Under review", girlsPendingBody:"Thank you 🌸 Your comment is under review, and won't show to other visitors until I approve it.",
teamTitle:"Join My Medical Team", teamSub:"For med students and researchers who'd like to collaborate with me in a group or medical team",
teamPerk1:"Exchange updated medical summaries and resources", teamPerk2:"A supportive community of med students and researchers", teamPerk3:"Opportunities for shared content and research",
teamTelegramNote:"You can also join the medical Telegram channel directly 👇",
teamFormTitle:"Join Request", teamFormNote:"Fill in your info and I'll get back to you soon",
teamNamePh:"Your full name", teamTypeStudent:"Med student", teamTypeResearcher:"Researcher", teamTypeOther:"Other",
teamContactPh:"Email or phone to reach you", teamMessagePh:"Tell me about yourself and why you'd like to join", teamSubmit:"Send Request",
teamSuccessMsg:"Your request was received 🌸 I'll get back to you soon in shaa Allah.", teamErrorMsg:"Please fill at least your name and contact info.",
contactTitle:"Get in touch", contactSub:"Follow me on my platforms, and message me however suits you best for orders",
askTitle:"Have a question? Message me directly", askNote:"Your message goes straight to my email",
askNamePh:"Your name (optional)", askMessagePh:"Write your question here...", askSubmit:"Send question",
askSuccessMsg:"Your question was sent successfully, thank you 🌸", askErrorMsg:"Please write your question first.",
askNotConfiguredMsg:"⚠️ Sending isn't configured yet by the site owner (EmailJS needs to be connected).",
footerText:"© Dr. Amnesia — All rights reserved",
cartTitle:"Your Cart", chooseWilaya:"Choose delivery wilaya", subtotal:"Subtotal", discountLabel:"Discount", shipping:"Shipping", total:"Total",
checkoutWhatsapp:"Checkout via WhatsApp", checkoutInstagram:"Or message me on Instagram",
cartEmpty:"Your cart is empty for now 🌸", addToCart:"Add to cart", added:"Added ✓",
color:"Color", size:"Size", gender:"Type", male:"Men", female:"Women",
customize:"Add your logo or name (+print fee)", yourName:"Type the name to print", basePriceNote:"extra fee if you choose printing",
remove:"Remove", checkoutMsgTitle:"Hello, I'd like to place an order:", wilayaLabel:"Wilaya",
promoPh:"Promo code", promoApply:"Apply", promoValid:"Code applied successfully ✓", promoInvalid:"Invalid or already-used code", promoUsedNote:"(codes can't be reused in the same session)"
},
fr:{
brandTag:"STUDY · UNDERSTAND · APPLY",
navHome:"Accueil", navStore:"Boutique", navLibrary:"Ma Bibliothèque", navSummaries:"Résumés", navGirls:"My Girls' Space", navTeam:"Rejoindre l'équipe", navContact:"Contact",
heroEyebrow:"Étudiante en médecine, 5ème année", heroTagline:"From med school to making a difference",
heroBio:"Bonjour, je suis Dr. Amnesia, étudiante en médecine en 5ème année (in shaa Allah). Major au Baccalauréat, je partage des connaissances et des conseils médicaux pour les étudiants en médecine, en particulier ceux de 1ère et 2ème année, ainsi que pour les futurs candidats au Bac. Je publie régulièrement des résumés utiles, et je tiens une petite boutique de produits inspirés du monde médical.",
storeTitle:"Boutique", storeSub:"Produits inspirés du monde médical — choisissez vos options puis ajoutez au panier",
catAll:"Tout", catCups:"Tasses", catAprons:"Blouses", catPens:"Stylos", catBottles:"Gourdes", catStickers:"Stickers", catPlanners:"Planners & Carnets", catAccessories:"Accessoires", catPacks:"Packs Cadeaux",
libraryTitle:"Ma Bibliothèque", librarySub:"Mes propres livres, avec aperçu et avis des lectrices",
addToLibraryCart:"Ajouter au panier", openBook:"Aperçu du livre", addReview:"Ajouter votre avis", reviewNamePh:"Votre nom", reviewCommentPh:"Votre avis sur le livre", submitReview:"Envoyer l'avis",
summariesTitle:"Résumés", summariesSub:"Résumés classés par année scolaire — cliquez pour ouvrir le lien Drive",
year1:"1ère Année", year2:"2ème Année", bac:"Baccalauréat", openDrive:"Ouvrir sur Drive",
girlsTitle:"My Girls' Space", girlsSub:"Une petite galaxie de mots d'amies — survolez une étoile pour lire",
girlsDemoNote:"⚠️ Section actuellement en démo : commentaires enregistrés uniquement pour cette session, effacés à l'actualisation. Sera connecté à un stockage réel via Firebase plus tard.",
girlsAdminToggle:"🌙 Panneau de modération (temporaire)", girlsAdminPanelTitle:"Commentaires en attente d'approbation", girlsNoPending:"Aucun commentaire en attente pour le moment",
girlsApprove:"Approuver", girlsReject:"Refuser", girlsEmptyTitle:"Une étoile sans commentaire ✨", girlsEmptyBody:"Appuyez ici pour écrire vos mots — ils apparaîtront pour tous une fois approuvés.",
girlsFormNamePh:"Votre nom (ou surnom)", girlsFormCommentPh:"Écrivez votre commentaire ici...", girlsFormSubmit:"Envoyer pour modération",
girlsPendingBadge:"En modération", girlsPendingBody:"Merci 🌸 Votre commentaire est en modération et n'apparaîtra pas aux autres tant qu'il n'est pas approuvé.",
teamTitle:"Rejoignez mon équipe médicale", teamSub:"Pour les étudiants en médecine et chercheurs souhaitant collaborer avec moi",
teamPerk1:"Échange de résumés et ressources médicales actualisées", teamPerk2:"Une communauté solidaire d'étudiants et chercheurs", teamPerk3:"Opportunités de contenu et recherches partagés",
teamTelegramNote:"Vous pouvez aussi rejoindre directement le canal Telegram médical 👇",
teamFormTitle:"Demande d'adhésion", teamFormNote:"Remplissez vos informations, je vous répondrai bientôt",
teamNamePh:"Votre nom complet", teamTypeStudent:"Étudiant(e) en médecine", teamTypeResearcher:"Chercheur(se)", teamTypeOther:"Autre",
teamContactPh:"Email ou téléphone", teamMessagePh:"Parlez-moi de vous et pourquoi vous souhaitez rejoindre", teamSubmit:"Envoyer la demande",
teamSuccessMsg:"Votre demande a été reçue 🌸 Je vous répondrai bientôt in shaa Allah.", teamErrorMsg:"Merci de remplir au moins votre nom et contact.",
contactTitle:"Me contacter", contactSub:"Suivez-moi sur mes plateformes, et écrivez-moi comme il vous convient pour vos commandes",
askTitle:"Une question ? Écrivez-moi directement", askNote:"Votre message arrive directement dans mon email",
askNamePh:"Votre nom (facultatif)", askMessagePh:"Écrivez votre question ici...", askSubmit:"Envoyer la question",
askSuccessMsg:"Votre question a été envoyée avec succès, merci 🌸", askErrorMsg:"Veuillez écrire votre question d'abord.",
askNotConfiguredMsg:"⚠️ L'envoi n'est pas encore configuré par la propriétaire du site (EmailJS à connecter).",
footerText:"© Dr. Amnesia — Tous droits réservés",
cartTitle:"Votre panier", chooseWilaya:"Choisissez la wilaya de livraison", subtotal:"Sous-total", discountLabel:"Réduction", shipping:"Livraison", total:"Total",
checkoutWhatsapp:"Commander via WhatsApp", checkoutInstagram:"Ou écrivez-moi sur Instagram",
cartEmpty:"Votre panier est vide pour le moment 🌸", addToCart:"Ajouter au panier", added:"Ajouté ✓",
color:"Couleur", size:"Taille", gender:"Type", male:"Homme", female:"Femme",
customize:"Ajoutez votre logo ou nom (+frais d'impression)", yourName:"Nom à imprimer", basePriceNote:"frais supplémentaires si vous choisissez l'impression",
remove:"Retirer", checkoutMsgTitle:"Bonjour, je souhaite passer une commande :", wilayaLabel:"Wilaya",
promoPh:"Code promo", promoApply:"Appliquer", promoValid:"Code appliqué avec succès ✓", promoInvalid:"Code invalide ou déjà utilisé", promoUsedNote:"(les codes ne sont pas réutilisables dans la même session)"
}
};
let currentLang = "ar";

/* =====================================================================
   2) SOCIAL LINKS
   ===================================================================== */
const SOCIALS = [
  {icon:"📷", label:"Instagram", handle:"@dr.amnesia.dz", url:"https://instagram.com/dr.amnesia.dz"},
  {icon:"✈️", label:"Telegram",  handle:"@dramnesiadz",  url:"https://t.me/dramnesiadz"},
  {icon:"▶️", label:"YouTube",   handle:"@dramnesiadz",  url:"https://youtube.com/@dramnesiadz"},
  {icon:"🎵", label:"TikTok",    handle:"@dr.amnesia.dz",url:"https://tiktok.com/@dr.amnesia.dz"},
  {icon:"📘", label:"Facebook",  handle:"@dr.amnesia.dz",url:"https://facebook.com/dr.amnesia.dz"}
];
const TEAM_TELEGRAM_URL = "https://t.me/dramnesiadz";

/* =====================================================================
   3) PRODUCTS — add more anytime. "genderImages"/"colors" are placeholder
   colors standing in for real photos — replace with real image URLs
   in an "images" field whenever you have actual product photos.
   ===================================================================== */
const PRODUCTS = [
  {id:"cup", category:"cups", emoji:"☕", basePrice:1200,
    name:{ar:"كأس طالب الطب", en:"Medical Student Mug", fr:"Tasse Étudiant en Médecine"},
    hasColor:true, colors:[
      {key:"pink", hex:"#c98aa0", label:{ar:"وردي", en:"Pink", fr:"Rose"}},
      {key:"burgundy", hex:"#6b2c3e", label:{ar:"عنابي", en:"Burgundy", fr:"Bordeaux"}},
      {key:"white", hex:"#f3ece9", label:{ar:"أبيض", en:"White", fr:"Blanc"}},
      {key:"gold", hex:"#b8935a", label:{ar:"ذهبي", en:"Gold", fr:"Doré"}}
    ], customizable:true, customPrice:300},

  {id:"apron", category:"aprons", emoji:"🥼", basePrice:3500,
    name:{ar:"مئزر طبي", en:"Medical Apron", fr:"Blouse Médicale"},
    hasSize:true, sizes:["36","38","40","42","44","46","48"],
    hasGender:true, genderImages:{male:"#8a97ad", female:"#c98aa0"},
    customizable:true, customPrice:500},

  {id:"pen", category:"pens", emoji:"🖊️", basePrice:350,
    name:{ar:"قلم طبي ملون", en:"Colored Medical Pen", fr:"Stylo Médical Coloré"},
    hasColor:true, colors:[
      {key:"pink", hex:"#c98aa0", label:{ar:"وردي", en:"Pink", fr:"Rose"}},
      {key:"teal", hex:"#5c8a86", label:{ar:"فيروزي", en:"Teal", fr:"Sarcelle"}},
      {key:"navy", hex:"#33465e", label:{ar:"كحلي", en:"Navy", fr:"Marine"}},
      {key:"red", hex:"#a94442", label:{ar:"أحمر", en:"Red", fr:"Rouge"}}
    ]},

  {id:"bottle", category:"bottles", emoji:"🧴", basePrice:900,
    name:{ar:"قارورة مياه طبية", en:"Medical Water Bottle", fr:"Gourde Médicale"},
    hasColor:true, colors:[
      {key:"pink", hex:"#c98aa0", label:{ar:"وردي", en:"Pink", fr:"Rose"}},
      {key:"white", hex:"#eee2df", label:{ar:"أبيض", en:"White", fr:"Blanc"}},
      {key:"mint", hex:"#9cc4b5", label:{ar:"نعناعي", en:"Mint", fr:"Menthe"}}
    ], customizable:true, customPrice:250},

  {id:"stickers", category:"stickers", emoji:"✨", basePrice:250,
    name:{ar:"ورقة ستيكرز طبية", en:"Medical Sticker Sheet", fr:"Planche de Stickers Médicaux"}},

  {id:"planner-mini", category:"planners", emoji:"📅", basePrice:800,
    name:{ar:"بلانر صغير", en:"Mini Planner", fr:"Mini Planner"},
    hasColor:true, colors:[
      {key:"pink", hex:"#c98aa0", label:{ar:"وردي", en:"Pink", fr:"Rose"}},
      {key:"cream", hex:"#e7d3c9", label:{ar:"كريمي", en:"Cream", fr:"Crème"}}
    ]},

  {id:"notebook-mini", category:"planners", emoji:"📓", basePrice:700,
    name:{ar:"كناش صغير", en:"Mini Notebook", fr:"Petit Carnet"},
    hasColor:true, colors:[
      {key:"burgundy", hex:"#6b2c3e", label:{ar:"عنابي", en:"Burgundy", fr:"Bordeaux"}},
      {key:"gold", hex:"#b8935a", label:{ar:"ذهبي", en:"Gold", fr:"Doré"}}
    ]},

  {id:"badge-reel", category:"accessories", emoji:"🪪", basePrice:450,
    name:{ar:"حامل بطاقة (Badge Reel)", en:"Badge Reel", fr:"Porte-Badge"}},
  {id:"keychain", category:"accessories", emoji:"🔑", basePrice:350,
    name:{ar:"ميدالية مفاتيح", en:"Keychain", fr:"Porte-Clés"}},
  {id:"tote", category:"accessories", emoji:"👜", basePrice:1400,
    name:{ar:"توت باغ لحمل الكتب", en:"Book Tote Bag", fr:"Tote Bag Porte-Livres"}},
  {id:"phone-grip", category:"accessories", emoji:"📱", basePrice:400,
    name:{ar:"ماسك هاتف", en:"Phone Grip", fr:"Support Téléphone"}},
  {id:"lanyard", category:"accessories", emoji:"🎗️", basePrice:400,
    name:{ar:"حبل تعليق البطاقة", en:"Lanyard", fr:"Tour de Cou"}},

  {id:"princess-pack", category:"packs", emoji:"👑", basePrice:6200, discountBadge:true,
    name:{ar:"Pack الأميرة", en:"Princess Pack", fr:"Pack Princesse"},
    packIncludes:{
      ar:"يشمل: مئزر طبي وردي + خمار/حجاب وردي بنفس المقاس + قارورة مياه وردية — بسعر مخفض 🎁",
      en:"Includes: pink medical apron + matching pink hijab/khimar + pink water bottle — at a discounted price 🎁",
      fr:"Inclut : blouse médicale rose + hijab/khimar rose assorti + gourde rose — à prix réduit 🎁"
    },
    hasSize:true, sizes:["36","38","40","42","44","46","48"],
    customizable:true, customPrice:500}
];
const CATEGORIES = ["all","cups","aprons","pens","bottles","stickers","planners","accessories","packs"];
let currentCategory = "all";

/* =====================================================================
   3.5) BOOKS — My Library
   ===================================================================== */
const BOOKS = [
  {id:1, emoji:"📕", price:1800,
    title:{ar:"طريقك نحو التميز", en:"Your Path to Excellence", fr:"Votre Chemin vers l'Excellence"},
    summary:{ar:"كتاب في التنمية البشرية يساعدك تكتشفي قدراتك وتنظمي وقتك وتحققي أهدافك خطوة بخطوة.",
      en:"A personal development book that helps you discover your abilities, organize your time, and reach your goals step by step.",
      fr:"Un livre de développement personnel qui vous aide à découvrir vos capacités, organiser votre temps et atteindre vos objectifs étape par étape."},
    reviews:[{name:"Amina", stars:5, comment:{ar:"غيّر نظرتي للدراسة كليًا",en:"Changed how I see studying completely",fr:"A complètement changé ma vision des études"}}]},
  {id:2, emoji:"📗", price:1600,
    title:{ar:"عقلية الطالب الناجح", en:"The Successful Student Mindset", fr:"L'Esprit de l'Étudiant Qui Réussit"},
    summary:{ar:"نصائح عملية لبناء عادات دراسية قوية والتغلب على التسويف والقلق الدراسي.",
      en:"Practical tips for building strong study habits and overcoming procrastination and academic anxiety.",
      fr:"Des conseils pratiques pour construire de bonnes habitudes d'étude et surmonter la procrastination et le stress scolaire."},
    reviews:[]},
  {id:3, emoji:"📘", price:2000,
    title:{ar:"يوميات طالبة طب", en:"Diary of a Med Student", fr:"Journal d'une Étudiante en Médecine"},
    summary:{ar:"تجربتي الشخصية في كلية الطب، بكل تحدياتها ولحظاتها الجميلة، وما تعلمته على الطريق.",
      en:"My personal journey through medical school, its challenges and beautiful moments, and everything I learned along the way.",
      fr:"Mon parcours personnel en école de médecine, ses défis et ses beaux moments, et tout ce que j'ai appris en chemin."},
    reviews:[{name:"Sarah", stars:4, comment:{ar:"قريت فيه نفسي بزاف",en:"I saw a lot of myself in it",fr:"Je me suis beaucoup reconnue dedans"}}]}
];

/* =====================================================================
   3.6) SUMMARIES
   ===================================================================== */
const SUMMARIES = {
  year1:[
    {ar:"التشريح Anatomie", en:"Anatomy", fr:"Anatomie", url:"#"},
    {ar:"الفيزيولوجيا Physiologie", en:"Physiology", fr:"Physiologie", url:"#"},
    {ar:"الكيمياء الحيوية Biochimie", en:"Biochemistry", fr:"Biochimie", url:"#"},
    {ar:"النسيج والجنين", en:"Histology & Embryology", fr:"Histologie & Embryologie", url:"#"}
  ],
  year2:[
    {ar:"الباثولوجيا العامة", en:"General Pathology", fr:"Pathologie Générale", url:"#"},
    {ar:"علم الأدوية Pharmacologie", en:"Pharmacology", fr:"Pharmacologie", url:"#"},
    {ar:"علم الأحياء الدقيقة", en:"Microbiology", fr:"Microbiologie", url:"#"},
    {ar:"المناعة Immunologie", en:"Immunology", fr:"Immunologie", url:"#"}
  ],
  bac:[
    {ar:"الرياضيات", en:"Mathematics", fr:"Mathématiques", url:"#"},
    {ar:"الفيزياء", en:"Physics", fr:"Physique", url:"#"},
    {ar:"علوم الطبيعة والحياة", en:"Natural Sciences", fr:"Sciences Naturelles", url:"#"},
    {ar:"اللغة العربية", en:"Arabic", fr:"Arabe", url:"#"}
  ]
};
let currentYear = "year1";

/* =====================================================================
   3.7) GIRLS' SPACE testimonial stars
   ===================================================================== */
const TESTIMONIALS = [
  {id:1, x:15, y:22, status:"approved", name:"Amina", comment:{ar:"ملخصاتك غيّرت طريقة مراجعتي بالكامل، شكرًا Dr. Amnesia 💕", en:"Your summaries completely changed how I study, thank you Dr. Amnesia 💕", fr:"Tes résumés ont complètement changé ma façon de réviser, merci Dr. Amnesia 💕"}},
  {id:2, x:32, y:55, status:"approved", name:"Sarah", comment:{ar:"صراحة نصائحك ساعدتني نتخطى قلق البكالوريا 🌸", en:"Honestly your advice helped me get through Bac anxiety 🌸", fr:"Honnêtement tes conseils m'ont aidée à surmonter le stress du Bac 🌸"}},
  {id:3, x:50, y:18, status:"approved", name:"Yasmine", comment:{ar:"أحلى بلانر جاني من متجرك، تنظيمي تحسن بزاف", en:"The prettiest planner I got from your store, my organization improved a lot", fr:"Le plus beau planner que j'ai reçu de ta boutique, mon organisation s'est beaucoup améliorée"}},
  {id:4, x:68, y:48, status:"approved", name:"Nour", comment:{ar:"متابعة صفحتك من سنة أولى، وأنتي مصدر إلهام حقيقي", en:"I've followed your page since 1st year, you're a real inspiration", fr:"Je te suis depuis la 1ère année, tu es une vraie source d'inspiration"}},
  {id:5, x:83, y:25, status:"approved", name:"Lina", comment:{ar:"الكأس زاد حلو من الصور، وسريع الوصول 🌷", en:"The mug is even prettier in person, and arrived fast 🌷", fr:"La tasse est encore plus jolie en vrai, et livrée rapidement 🌷"}},
  {id:6, x:22, y:75, status:"empty"}, {id:7, x:40, y:35, status:"empty"}, {id:8, x:58, y:70, status:"empty"},
  {id:9, x:75, y:60, status:"empty"}, {id:10, x:90, y:80, status:"empty"}, {id:11, x:8, y:45, status:"empty"}, {id:12, x:47, y:88, status:"empty"}
];

/* =====================================================================
   3.8) PROMO CODES (demo only — real one-time-use across all visitors
   needs Firebase; for now a code can't be re-applied within this
   browser session once successfully used)
   ===================================================================== */
const PROMO_CODES = [
  {code:"WELCOME10", type:"percent", value:10},
  {code:"EID500", type:"fixed", value:500}
];
let usedPromoCodesThisSession = new Set();
let appliedPromo = null;

/* =====================================================================
   4) WILAYAS & SHIPPING (placeholders — edit to your real prices)
   ===================================================================== */
const WILAYAS = [
  ["Adrar",800],["Chlef",500],["Laghouat",700],["Oum El Bouaghi",500],["Batna",500],
  ["Béjaïa",450],["Biskra",600],["Béchar",800],["Blida",400],["Bouira",450],
  ["Tamanrasset",1000],["Tébessa",600],["Tlemcen",550],["Tiaret",550],["Tizi Ouzou",450],
  ["Algiers",350],["Djelfa",600],["Jijel",500],["Sétif",500],["Saïda",600],
  ["Skikda",500],["Sidi Bel Abbès",550],["Annaba",550],["Guelma",550],["Constantine",500],
  ["Médéa",450],["Mostaganem",550],["M'Sila",550],["Mascara",550],["Ouargla",750],
  ["Oran",550],["El Bayadh",700],["Illizi",1000],["Bordj Bou Arréridj",500],["Boumerdès",400],
  ["El Tarf",600],["Tindouf",1000],["Tissemsilt",550],["El Oued",750],["Khenchela",600],
  ["Souk Ahras",600],["Tipaza",400],["Mila",500],["Aïn Defla",500],["Naâma",750],
  ["Aïn Témouchent",550],["Ghardaïa",700],["Relizane",550],["Timimoun",850],["Bordj Badji Mokhtar",1000],
  ["Ouled Djellal",650],["Béni Abbès",850],["In Salah",950],["In Guezzam",1050],["Touggourt",750],
  ["Djanet",1000],["El M'Ghair",700],["El Meniaa",800]
];


function paintImg(box,bg,url){box.style.background=url?`center/cover no-repeat url("${url}")`:bg;const e=box.querySelector('[data-emoji]');if(e)e.style.display=url?'none':'';}
function sbSubmit(type,data){try{if(!window.SB||/YOUR/.test(SB.url))return;fetch(SB.url+'/rest/v1/submissions',{method:'POST',headers:{apikey:SB.key,Authorization:'Bearer '+SB.key,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({type,data})}).catch(()=>{});}catch(e){}}
