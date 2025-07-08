import React from "react";
import PageTitle from "./PageTitle";
import Link from "./Link";

const PrivacyPolicy = () => {
  const params = new URLSearchParams(window.location.search);
  const urlParams = `?${params.toString()}`;
  return (
    <div>
      <PageTitle>プライバシーポリシー</PageTitle>
      <p>記載されている会社名・製品名・システム名などは各社の商標、または登録商標です。</p>
      <p>当サイトは、「Googleアナリティクス」を使用しています。</p>
      <p>データの収集のためにCookieを使用しています。</p>
      <p>このデータは匿名で収集されており、個人を特定するものではありません。</p>
      <p>
        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
      </p>
      <br />
      <p>この規約に関しての詳細は以下をご参照ください。</p>
      <Link href={"https://policies.google.com/technologies/partner-sites?hl=ja"} target="_blank" rel="noreferrer">Googleポリシーと規約</Link>
      <br />
      <p>
        当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
      </p>
      <br />
      <Link href={`/${urlParams}`}>TOPへ戻る</Link>
    </div>
  );
};

export default PrivacyPolicy;
