import React from "react";
import "../component/Input";


export default function Input({ Finder }) {
  return (
    <div id="navbar">
      <input
        type="search"
        placeholder={" Location : "}
        onChange={Finder}
      />
    </div>
  );
}
