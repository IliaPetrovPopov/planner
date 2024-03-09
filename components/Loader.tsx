import React from "react";

export default function Loader() {
  return (
    <div className="h-dvh w-dvw transform translate-x-1/2 translate-y-1/2 bg-stone-200 bg-opacity-55">
      <div className="border-t-transparent border-solid animate-spin rounded-full border-green-600 border-8 h-56 w-56"></div>
    </div>
  );
}
