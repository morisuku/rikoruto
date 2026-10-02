// ============================================================
//  Editcraft Kit LP 設定 — 公開前にここだけ書き換えてください
// ============================================================
window.LP_CONFIG = {
  // 発売記念価格の終了日時（日本時間）。過ぎると自動で通常価格の表示に切り替わる
  // ※ Stripe のクーポン（プロモーションコード）の有効期限と同じ日時にすること
  saleEnd: "2026-10-16T23:59:59+09:00",

  price: { sale: 4980, regular: 7980 },

  // Stripe の Payment Link（¥7,980 の1本だけ。「プロモーションコードを許可」をオンにする）
  //   発売記念の間は、購入ボタンに ?prefilled_promo_code=<promoCode> を付けて、
  //   決済画面で ¥3,000 引きのクーポンが最初から入った状態にする（期限が来ると Stripe 側で自動で無効）
  stripe: {
    link: "",                 // 例: https://buy.stripe.com/xxxxxxxx
    promoCode: "LAUNCH3000",  // Stripe で作るプロモーションコードと同じ文字
  },

  // ライセンス管理（Google Apps Script のウェブアプリ URL。…/exec で終わる）
  // 購入後ページはここに注文番号を送り、ライセンスキーと Drive のリンクを受け取る
  // （Drive のリンクは Apps Script 側の DRIVE_URL に入れる。このファイルには書かない）
  licenseUrl: "https://script.google.com/macros/s/AKfycbzLol5xD19K9H9yfu5lUJH9v-IK9a50z0Ncll5SxkqoUgDUgyGA77hnFwUvX5pPZ1ZE/exec",

  // SNS / サポート
  discordUrl: "",
  xUrl: "",
  youtubeUrl: "",
  contactEmail: "info@rikoruto.jp",
};
