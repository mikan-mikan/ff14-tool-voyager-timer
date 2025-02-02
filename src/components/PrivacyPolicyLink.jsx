import React from "react";
// import styled from "@emotion/styled";
import Link from "./Link.jsx";

const PrivacyPolicyLink = () => {
  const params = new URLSearchParams(window.location.search);
  const urlParams = `?${params.toString()}`;
  return (
    <Link href={`/privacy/${urlParams}`}>プライバシーポリシー</Link>
  );
}

export default PrivacyPolicyLink;
