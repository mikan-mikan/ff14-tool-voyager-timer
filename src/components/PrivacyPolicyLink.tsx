import React from "react";
import Link from "./Link";

const PrivacyPolicyLink = () => {
  const params = new URLSearchParams(window.location.search);
  const urlParams = `?${params.toString()}`;
  return (
    <Link href={`/privacy/${urlParams}`}>プライバシーポリシー</Link>
  );
};

export default PrivacyPolicyLink;
