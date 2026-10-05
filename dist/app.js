'use strict';
const products = {
  "noir-suit": {
    "name": "NOIR SUIT",
    "category": "TAILORED",
    "image": "assets/noir-suit.jpg",
    "url": "https://unrwld.booth.pm/items/7883046",
    "ko": "검정 수트의 클래식한 라인과 디지털 세계의 감각이 만나는 컬렉션. 재킷과 셔츠, 타이로 완성하는 또 다른 모습의 나.",
    "en": "Classic black tailoring meets a digital state of mind. A jacket, a shirt, a tie — a new way to express your other self.",
    "ja": "黒いスーツのクラシックなラインとデジタル世界の感性が出会うコレクション。ジャケット、シャツ、タイで、新しい自分を表現。"
  },
  "loose-n-loud": {
    "name": "LOOSE-'N-LOUD",
    "category": "STREET",
    "image": "assets/loose-n-loud.jpg",
    "url": "https://unrwld.booth.pm/items/7459966",
    "ko": "선명한 블루와 느슨한 실루엣. 스트리트 무드를 담아 가상 세계에서 더욱 자유로운 스타일을 만나보세요.",
    "en": "Vivid blue. A relaxed silhouette. Bring a little street energy into your virtual wardrobe.",
    "ja": "鮮やかなブルーとゆったりしたシルエット。仮想世界のワードローブに、自由なストリートスタイルを。"
  },
  "void-type": {
    "name": "VOID TYPE",
    "category": "STREET",
    "image": "assets/void-type.jpg",
    "url": "https://unrwld.booth.pm/items/7021465",
    "ko": "블랙과 화이트의 대비가 만드는 선명한 무드. 여유 있는 실루엣으로 아바타의 새로운 분위기를 발견하세요.",
    "en": "A distinct mood in black and white. Explore another side of your avatar through relaxed silhouettes.",
    "ja": "白と黒のコントラストが生む、印象的なムード。ゆったりしたシルエットで、アバターの新しい魅力を発見。"
  },
  "low-rise": {
    "name": "LOW RISE",
    "category": "CASUAL",
    "image": "assets/low-rise.jpg",
    "url": "https://unrwld.booth.pm/items/8719405",
    "ko": "블루와 핑크, 가볍고 편안한 캐주얼 무드. 가상 세계 속 일상에도 당신만의 스타일을 더해보세요.",
    "en": "Blue, pink, and an easygoing mood. A casual edit for the everyday moments in your virtual world.",
    "ja": "ブルーとピンク、軽やかで心地よいカジュアルスタイル。仮想世界の日常にも、あなたらしさを。"
  }
};
const translations = {
  "ko": {
    "skip": "본문으로 이동",
    "navCollection": "컬렉션",
    "navAbout": "브랜드",
    "navGuide": "이용 안내",
    "heroDescription": "가상 세계에서도, 당신다운 실루엣.<br>아바타를 위한 옷, UNRWLD.",
    "explore": "컬렉션 살펴보기",
    "collectionIntro": "수트부터 스트리트웨어까지.<br>당신의 다음 스타일을 찾아보세요.",
    "allOnBooth": "BOOTH에서 전체 보기",
    "filterAll": "전체",
    "filterTailored": "테일러드",
    "filterStreet": "스트리트",
    "filterCasual": "캐주얼",
    "noirShort": "클래식한 수트, 또렷한 존재감.",
    "looseShort": "느슨한 실루엣, 자유로운 에너지.",
    "voidShort": "블랙과 화이트 사이의 새로운 무드.",
    "lowShort": "가볍게, 편안하게, 나답게.",
    "empty": "검색 결과가 없습니다.",
    "reset": "전체 컬렉션 보기 ↗",
    "collectionNote": "지원 아바타, 구성품, 가격 및 최신 업데이트는 각 BOOTH 상품 페이지에서 확인해 주세요.",
    "aboutText": "어떤 세계에 있든, 스타일은 당신의 것.<br>UNRWLD는 아바타를 위한 디지털 의상을 만듭니다.<br>클래식한 테일러링부터 자유로운 스트리트 무드까지,<br>다른 모습의 나를 발견하는 순간을 함께합니다.",
    "follow": "X에서 UNRWLD 만나기",
    "guideTitle": "첫 만남부터,<br>자연스럽게.",
    "guideIntro": "구매 전 확인할 내용과<br>필요한 도움을 한곳에.",
    "contact": "디스코드에서 함께 이야기해요",
    "faq1Title": "내 아바타에 사용할 수 있나요?",
    "faq1Text": "상품마다 지원하는 아바타와 쉐이프키가 다릅니다. 구매 전 BOOTH 상품 페이지에서 아바타 이름, 지원 쉐이프키, 제공 패키지를 확인하고 알맞은 옵션을 선택해 주세요.",
    "faq2Title": "설치 방법은 어디서 확인하나요?",
    "faq2Text": "설치 환경과 필요한 도구는 각 상품의 설명을 확인해 주세요. NOIR SUIT는 Modular Avatar 사용을 권장합니다. 다른 컬렉션에도 같은 조건이 적용되는지는 해당 상품 페이지에서 확인해 주세요.",
    "faq3Title": "재배포나 상업적 이용이 가능한가요?",
    "faq3Text": "개인은 영리·비영리 여부와 관계없이 이용할 수 있으며, 영상·음성 작품에 이용할 수 있습니다. 원본·수정본 모델 데이터의 재배포 및 판매는 금지됩니다. 법인 이용과 출판물·실물 상품·자체 개발 소프트웨어에 이용하거나 의상·텍스처 및 2차 창작물을 제작하려면 권리자에게 개별 문의해 주세요. 전체 조건과 특기사항은 아래 언어별 이용규약을 확인해 주세요.",
    "terms": "BOOTH 이용 안내 확인",
    "licenseCaption": "UNRWLD 이용규약 v1.1 · 한국어판 우선",
    "faq4Title": "소식과 이야기는 어디서 나누나요?",
    "faq4Text": "디스코드에 참여해 UNRWLD의 소식과 이야기를 함께 나눠요. 상품에 대해 궁금한 점도 편하게 이야기해 주세요. 최신 파일과 업데이트는 BOOTH 상품 페이지에서 확인할 수 있으며, 새로운 소식은 X에서도 만나볼 수 있습니다.",
    "shopCta": "UNRWLD 공식 BOOTH 스토어에서 만나보세요.",
    "footerContact": "Discord 참여 ↗",
    "formatLabel": "형식",
    "formatValue": "VRChat용 디지털 3D 의상",
    "compatLabel": "지원 아바타",
    "compatValue": "BOOTH의 최신 지원 목록 확인",
    "dialogNote": "구매 전 지원 아바타, 필수 도구와 이용약관을 확인해 주세요. 구매와 다운로드는 BOOTH에서 진행됩니다.",
    "viewProduct": "BOOTH 상품 보기"
  },
  "en": {
    "skip": "Skip to content",
    "navCollection": "Collection",
    "navAbout": "About",
    "navGuide": "Guide",
    "heroDescription": "Your silhouette. Your virtual world.<br>Digital wear by UNRWLD.",
    "explore": "Explore the collection",
    "collectionIntro": "From tailoring to streetwear.<br>Find your next expression.",
    "allOnBooth": "View all on BOOTH",
    "filterAll": "All",
    "filterTailored": "Tailored",
    "filterStreet": "Street",
    "filterCasual": "Casual",
    "noirShort": "Classic tailoring. A distinct presence.",
    "looseShort": "Relaxed silhouettes. Free energy.",
    "voidShort": "A new mood in black and white.",
    "lowShort": "Easygoing. Effortlessly you.",
    "empty": "No collections match your search.",
    "reset": "Show all collections ↗",
    "collectionNote": "Check each BOOTH product page for supported avatars, package contents, prices, and the latest updates.",
    "aboutText": "Whatever world you live in, your style is yours.<br>UNRWLD creates digital clothing for avatars.<br>From classic tailoring to a free-spirited street mood,<br>discover a different expression of yourself.",
    "follow": "Follow UNRWLD on X",
    "guideTitle": "Make yourself<br>at home.",
    "guideIntro": "A few things to know before you shop.<br>And a little help when you need it.",
    "contact": "Join the conversation on Discord",
    "faq1Title": "Will it work with my avatar?",
    "faq1Text": "Supported avatars and shape keys vary by product. Check the avatar name, compatible shape keys, and included packages on the BOOTH product page before choosing your option.",
    "faq2Title": "Where can I find installation instructions?",
    "faq2Text": "See the individual product description for setup requirements and tools. Modular Avatar is recommended for NOIR SUIT. Check the relevant product page for the requirements of other collections.",
    "faq3Title": "Can I redistribute or use the files commercially?",
    "faq3Text": "Individuals may use the model for commercial or non-commercial purposes; use in video or audio works is permitted. Redistribution and sale of original or modified model data are prohibited. Contact the rights holder for corporate use, publications, physical products, incorporation into self-developed software, clothing or texture creation, and derivative works. See the full terms and special provisions below.",
    "terms": "Read the shop guidelines",
    "licenseCaption": "UNRWLD Terms v1.1 · Korean version takes precedence",
    "faq4Title": "Where can I connect and keep up with news?",
    "faq4Text": "Join our Discord to keep up with UNRWLD and chat with the community. Feel free to ask about our products, too. Check the BOOTH product pages for current files and updates, and follow us on X for news.",
    "shopCta": "Discover the collection at the official UNRWLD BOOTH store.",
    "footerContact": "Join Discord ↗",
    "formatLabel": "Format",
    "formatValue": "Digital 3D clothing for VRChat",
    "compatLabel": "Avatars",
    "compatValue": "See the current list on BOOTH",
    "dialogNote": "Check supported avatars, required tools, and terms before purchasing. Purchases and downloads are handled on BOOTH.",
    "viewProduct": "View on BOOTH"
  },
  "ja": {
    "skip": "本文へ移動",
    "navCollection": "コレクション",
    "navAbout": "ブランド",
    "navGuide": "ご利用ガイド",
    "heroDescription": "仮想世界でも、あなたらしいシルエット。<br>アバターのための服、UNRWLD。",
    "explore": "コレクションを見る",
    "collectionIntro": "スーツからストリートウェアまで。<br>あなたの次のスタイルを見つけよう。",
    "allOnBooth": "BOOTHですべて見る",
    "filterAll": "すべて",
    "filterTailored": "テーラード",
    "filterStreet": "ストリート",
    "filterCasual": "カジュアル",
    "noirShort": "クラシックなスーツ、際立つ存在感。",
    "looseShort": "ゆったりしたシルエット、自由なエネルギー。",
    "voidShort": "白と黒の間に生まれる、新しいムード。",
    "lowShort": "軽やかに、心地よく、自分らしく。",
    "empty": "検索結果がありません。",
    "reset": "すべてのコレクションを見る ↗",
    "collectionNote": "対応アバター、同梱内容、価格、最新情報は各BOOTH商品ページをご確認ください。",
    "aboutText": "どんな世界にいても、スタイルはあなたのもの。<br>UNRWLDはアバターのためのデジタル衣装を制作しています。<br>クラシックなテーラリングから自由なストリートスタイルまで、<br>新しい自分に出会う瞬間を、ともに。",
    "follow": "XでUNRWLDをフォロー",
    "guideTitle": "はじめてでも、<br>自然に。",
    "guideIntro": "購入前に知っておきたいことと、<br>必要なサポートをひとつに。",
    "contact": "Discordで一緒にお話ししましょう",
    "faq1Title": "自分のアバターに使えますか？",
    "faq1Text": "対応アバターとシェイプキーは商品ごとに異なります。購入前にBOOTH商品ページでアバター名、対応シェイプキー、同梱パッケージを確認し、適切なオプションをお選びください。",
    "faq2Title": "導入方法はどこで確認できますか？",
    "faq2Text": "導入環境や必要なツールは各商品の説明をご確認ください。NOIR SUITではModular Avatarの使用を推奨しています。他のコレクションの条件については、それぞれの商品ページをご確認ください。",
    "faq3Title": "再配布や商用利用はできますか？",
    "faq3Text": "個人は営利・非営利を問わず利用でき、映像・音声作品への利用も可能です。未改変・改変済みモデルデータの再配布および販売は禁止です。法人利用、出版物・実物の商品・自作ソフトウェアへの利用、衣装・テクスチャや二次創作物の制作については、権利者へ個別にお問い合わせください。詳しい条件と特記事項は、以下の各言語の利用規約をご確認ください。",
    "terms": "BOOTHの利用案内を確認",
    "licenseCaption": "UNRWLD 利用規約 v1.1 · 韓国語版が優先",
    "faq4Title": "お知らせや交流はどこでできますか？",
    "faq4Text": "Discordに参加して、UNRWLDの最新情報やお話を一緒に楽しみましょう。商品について気になることも、お気軽にお話しください。最新ファイルやアップデートはBOOTH商品ページ、お知らせはXでもご確認いただけます。",
    "shopCta": "UNRWLD公式BOOTHストアでコレクションをご覧ください。",
    "footerContact": "Discordに参加 ↗",
    "formatLabel": "形式",
    "formatValue": "VRChat向けデジタル3D衣装",
    "compatLabel": "対応アバター",
    "compatValue": "BOOTHの最新対応一覧をご確認ください",
    "dialogNote": "購入前に対応アバター、必要なツール、利用規約をご確認ください。購入とダウンロードはBOOTHで行います。",
    "viewProduct": "BOOTHで商品を見る"
  }
};
let language = 'ja';
let activeFilter = 'all';
let selectedProduct = null;
let previousFocus = null;
const search = document.getElementById('product-search');
const dialog = document.getElementById('product-dialog');
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

function filterProducts() {
  const query = search.value.trim().toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');
  let count = 0;
  document.querySelectorAll('.product').forEach(card => {
    const p = products[card.dataset.product];
    const searchable = `${p.name} ${p.category} ${p.ko} ${p.en} ${p.ja}`.toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');
    const visible = (activeFilter === 'all' || card.dataset.category === activeFilter) && (!query || searchable.includes(query));
    card.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById('empty-state').hidden = count !== 0;
  document.getElementById('result-count').textContent = language === 'ko' ? `${count}개의 컬렉션` : language === 'ja' ? `${count}件のコレクション` : `${count} collections found`;
}
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(b => {b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  filterProducts();
}));
search.addEventListener('input', filterProducts);
document.getElementById('reset-filters').addEventListener('click', () => {search.value='';document.querySelector('[data-filter="all"]').click();search.focus();});

function fillDialog(id) {
  const p = products[id];
  document.getElementById('dialog-title').textContent = p.name;
  document.getElementById('dialog-category').textContent = `UNRWLD / ${p.category}`;
  document.getElementById('dialog-description').textContent = p[language];
  document.getElementById('dialog-image').src = p.image;
  document.getElementById('dialog-image').alt = `${p.name} — UNRWLD`;
  document.getElementById('dialog-booth').href = p.url;
}
document.querySelectorAll('[data-open-product]').forEach(button => button.addEventListener('click', () => {
  selectedProduct=button.dataset.openProduct;
  previousFocus=button;
  fillDialog(selectedProduct);
  dialog.showModal();
  document.body.style.overflow='hidden';
}));
document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => {document.body.style.overflow='';previousFocus?.focus();selectedProduct=null;});
dialog.addEventListener('click', e => {if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});

function setMenu(open) {mobileNav.hidden=!open;menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',language==='ko'?(open?'메뉴 닫기':'메뉴 열기'):language==='ja'?(open?'メニューを閉じる':'メニューを開く'):(open?'Close menu':'Open menu'));}
menuToggle.addEventListener('click', () => setMenu(mobileNav.hidden));
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){setMenu(false);menuToggle.focus();}});
window.matchMedia('(min-width: 761px)').addEventListener('change',e=>{if(e.matches)setMenu(false);});

function setLanguage(next) {
  language=next;
  document.documentElement.lang=language;
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=translations[language][el.dataset.i18n];});
  document.getElementById('language-switch').value=language;
  document.querySelectorAll('.product-image img').forEach(img=>{const p=products[img.closest('[data-open-product]').dataset.openProduct];img.alt=p.name+' — UNRWLD';});
  search.placeholder={ja:'コレクションを検索',ko:'컬렉션 검색',en:'Search collections'}[language];
  search.setAttribute('aria-label',search.placeholder);
  document.getElementById('dialog-close').setAttribute('aria-label',{ja:'商品詳細を閉じる',ko:'상세 보기 닫기',en:'Close product details'}[language]);
  document.querySelectorAll('[data-open-product]').forEach(el=>el.setAttribute('aria-label',products[el.dataset.openProduct].name+' '+{ja:'詳細を見る',ko:'상세 보기',en:'details'}[language]));
  document.querySelectorAll('.wordmark,.footer-wordmark').forEach(el=>el.setAttribute('aria-label','UNRWLD '+{ja:'ホーム',ko:'홈',en:'home'}[language]));
  document.querySelector('.desktop-nav').setAttribute('aria-label',{ja:'メインメニュー',ko:'주 메뉴',en:'Main navigation'}[language]);
  mobileNav.setAttribute('aria-label',{ja:'モバイルメニュー',ko:'모바일 메뉴',en:'Mobile navigation'}[language]);
  document.querySelector('.filters').setAttribute('aria-label',{ja:'コレクション絞り込み',ko:'컬렉션 필터',en:'Collection filters'}[language]);
  document.querySelector('.hero-image').setAttribute('aria-label','NOIR SUIT '+{ja:'コレクションを見る',ko:'컬렉션 보기',en:'collection'}[language]);
  setMenu(!mobileNav.hidden);
  if(selectedProduct)fillDialog(selectedProduct);
  filterProducts();
  try{localStorage.setItem('unrwld-language-v2',language);}catch{}
}
document.getElementById('language-switch').addEventListener('change',e=>setLanguage(e.target.value));
document.getElementById('year').textContent=String(new Date().getFullYear());
let preferred='ja';
try{const saved=localStorage.getItem('unrwld-language-v2');if(Object.hasOwn(translations,saved))preferred=saved;}catch{}
setLanguage(preferred);
filterProducts();
function openLinkedLicense() {
  if (location.hash === '#license-faq') document.getElementById('license-faq').open = true;
}
window.addEventListener('hashchange', openLinkedLicense);
openLinkedLicense();
