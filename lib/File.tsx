export { colors, tailwindColors } from "./Warna";

// Path logo
export const LOGO_PATH = "/logodt4.webp";

// Path background image
export const BG_IMAGE_PATH = "/bg.jpg";

// Path foto pondok pesantren
export const PONDOK_PHOTO_PATH = "/ganti_gambar.jpg";

// Informasi yayasan
export const YAYASAN_INFO = {
  name: "Yayasan Darut Taqwa",
  shortName: "Darut Taqwa 4",
  location: "Desa Modopuro, Kecamatan Mojosari, Kabupaten Mojokerto",
  fullName:
    "Yayasan Darut Taqwa - Desa Modopuro, Kecamatan Mojosari, Kabupaten Mojokerto",
  founded: 1998,
  leader: "Romo KH. Dhofir Bahruddin",
} as const;

// Alias untuk backward compatibility
export const PONDOK_INFO = YAYASAN_INFO;
