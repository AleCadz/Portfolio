"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row w-full justify-between">
        <button
          type="button"
          className="flex self-start text-GrayLetters "
          onClick={() => router.push("/dashboard")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </button>

        <div className="flex gap-5">
          <button
            type="button"
            className="flex text-GrayLetters"
            onClick={() => router.push("/about")}
          >
            About
          </button>
          <button
            type="button"
            className="flex text-GrayLetters"
            onClick={() => router.push("/dashboard")}
          >
            Projects
          </button>
          <button
            type="button"
            className="flex text-GrayLetters"
            onClick={() => router.push("/dashboard")}
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
