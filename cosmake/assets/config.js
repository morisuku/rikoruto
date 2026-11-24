// ============================================================
//  CosMake（Face・Skin）LP と購入後ページの設定
// ============================================================
window.LP_CONFIG = {
  // ライセンスの窓口（license-gas/Code.gs を公開したウェブアプリの URL。…/exec で終わる）
  // 購入後ページはここに注文番号を送り、ライセンスキーと Drive のリンクを受け取る
  // （Drive のリンクは Apps Script 側の DRIVE_URL に入れる。このファイルには書かない）
  licenseUrl: "https://script.google.com/macros/s/AKfycbz8M6UT_nZiKIfpHykVNuUXeMxsKam35vJ5Fik0o5xfXhnUNMlyHGnd_KYgGeyu3iOM/exec",

  // ---- LP（index.html）----
  // 発売するまで false。false の間は購入ボタンが「近日発売」になり、Stripe には飛ばない
  // （localhost で ?open=1 を付けると、発売後の見た目を確かめられる）
  open: false,
  // 発売の日時。これを過ぎると open:false のままでも自動で発売後の表示になる（購入ボタンが開く・検索に出す）
  openAt: "2026-11-27T00:00:00+09:00",
  // 発売日を表に出すとき（例 "12月14日"）。空なら「近日発売」だけ
  launchText: "11月27日（金）",

  // 値段（税込・円）。セールが終わったあとも、この値段で売る
  price: { face: 9800, skin: 9800, set: 14800 },

  // 発売記念価格（ブラックフライデーに合わせた販売開始セール）
  //  - end を過ぎると自動で上の通常の値段に戻る（null にすればセールの表示を全部消せる）
  //  - 発売前（open:false）は「発売記念価格（期間）」の予告として表示する
  //  - 発売後は購入ボタンのリンクに promo のコードを付けて、Stripe の画面で最初から値引きが入った状態で開く
  //    （値引きの本体は Stripe のプロモーションコード。期限も Stripe 側で切れるようにしておく）
  //  - localhost では ?now=2026-11-28 のように付けると、その日時の見た目を確かめられる
  sale: {
    price: { face: 7800, skin: 7800, set: 11800 },
    start: "2026-11-27T00:00:00+09:00",
    end: "2026-12-01T23:59:59+09:00",
    periodText: "11月27日（金）〜12月1日（火）23:59",
    endText: "12月1日（火）23:59",
    afterText: "12月2日（水）",
    promo: { face: "CMLAUNCH", skin: "CMLAUNCH", set: "CMLAUNCHSET" }, // Stripe の本番に 11/19 作成（12/1 23:59 で切れる）。空ならリンクにコードを付けない
  },

  // Stripe の Payment Link（本番）
  stripe: {
    face: "https://buy.stripe.com/3cI4gz5nd3hh8Eo0jQ3cc05",
    skin: "https://buy.stripe.com/dRmfZheXN2dd6wg8Qm3cc06",
    set: "https://buy.stripe.com/14AeVd16X5ppaMw1nU3cc07",
  },

  // 体験版（× 印つき・期限なし）のダウンロード先。空なら「近日公開」
  trialUrl: "https://drive.google.com/file/d/1eJX1aWyt5FwUjocjNFaWaCcaFC40PToq/view?usp=sharing",   // 体験版 = 製品版と同じ zip（Drive「CosMake 配布」、11/24 最新版）

  // サポート・SNS（空ならリンクを出さない）
  contactEmail: "info@rikoruto.jp",
  discordUrl: "",
  xUrl: "",
  youtubeUrl: "",

  // ほかの人物のサンプル（LP の「ほかの人でも、こう変わります。」の欄）。空なら欄ごと隠れる
  //  動画は lp/tools/make_samples.py で作る（左半分=補正前・右半分=補正後、720x720 ずつ）
  //  例: { video: "assets/samples/04.mp4", before: "assets/samples/04-before.jpg", after: "assets/samples/04-after.jpg",
  //        label: "笑顔のほうれい線", fx: "Face＋Skin・ほうれい線 0.8" },
  samples: [
    { video: "assets/samples/04.mp4", before: "assets/samples/04-before.jpg", after: "assets/samples/04-after.jpg", label: "年配の女性・肌のしわとシミ", fx: "Face＋Skin" },
    { video: "assets/samples/06.mp4", before: "assets/samples/06-before.jpg", after: "assets/samples/06-after.jpg", label: "メガネの男性", fx: "Face＋Skin" },
    { video: "assets/samples/07.mp4", before: "assets/samples/07-before.jpg", after: "assets/samples/07-after.jpg", label: "男性・頬のシミ", fx: "Face＋Skin" },
    { video: "assets/samples/12.mp4", before: "assets/samples/12-before.jpg", after: "assets/samples/12-after.jpg", label: "笑顔の女性", fx: "Face＋Skin" },
  ],
};
