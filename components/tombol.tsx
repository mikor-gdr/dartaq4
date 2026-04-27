import Link from "next/link";
import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";

const tombol = () => {
  return (
    <Link
      href="/siswa/tambah"
      className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
    >
      <IoPersonAddSharp size={20} />
      Tambah
    </Link>
  );
};

export default tombol;
