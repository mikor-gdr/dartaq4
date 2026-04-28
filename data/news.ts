export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  slug: string;
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Pembukaan Tahun Ajaran Baru 2025/2026',
    date: '2025-07-01',
    excerpt: 'Pondok Pesantren Darut Taqwa 4 membuka pendaftaran untuk tahun ajaran baru 2025/2026. Dapatkan informasi lengkap tentang program dan pendaftaran.',
    content: `Pondok Pesantren Darut Taqwa 4 dengan bangga mengumumkan pembukaan pendaftaran untuk tahun ajaran baru 2025/2026. 

Tahun ajaran baru ini akan dimulai pada bulan Juli 2025 dengan berbagai program unggulan yang telah disiapkan untuk para santri.

Program yang tersedia meliputi:
- Pendidikan Madrasah dengan kurikulum terpadu
- Pengajian kitab kuning
- Program asrama dengan pembinaan intensif
- Berbagai ekstrakurikuler untuk pengembangan bakat

Bagi para orang tua yang berminat mendaftarkan putra-putrinya, silakan menghubungi bagian pendaftaran atau mengisi formulir pendaftaran online di website kami.

Mari bersama-sama membentuk generasi yang berakhlak mulia dan berilmu!`,
    image: '',
    slug: 'pembukaan-tahun-ajaran-baru-2025',
  },
  {
    id: '2',
    title: 'Santri Raih Prestasi di Kompetisi Nasional',
    date: '2025-06-15',
    excerpt: 'Beberapa santri Pondok Pesantren Darut Taqwa 4 berhasil meraih prestasi gemilang dalam kompetisi nasional bidang keagamaan dan akademik.',
    content: `Kami dengan bangga mengumumkan bahwa beberapa santri Pondok Pesantren Darut Taqwa 4 telah berhasil meraih prestasi gemilang dalam berbagai kompetisi nasional.

Prestasi yang diraih meliputi:
- Juara 1 Lomba Tahfidz Al-Quran tingkat nasional
- Juara 2 Lomba Pidato Bahasa Arab
- Juara 3 Olimpiade Matematika tingkat provinsi

Prestasi ini merupakan hasil dari kerja keras para santri dan bimbingan para ustadz/ustadzah yang tidak kenal lelah. Kami berharap prestasi ini dapat memotivasi santri lainnya untuk terus berprestasi.

Selamat kepada para santri yang telah mengharumkan nama pondok pesantren!`,
    image: '',
    slug: 'santri-raih-prestasi-kompetisi-nasional',
  },
  {
    id: '3',
    title: 'Kegiatan Bakti Sosial di Lingkungan Sekitar',
    date: '2025-06-01',
    excerpt: 'Santri Pondok Pesantren Darut Taqwa 4 mengadakan kegiatan bakti sosial untuk membantu masyarakat sekitar, mengamalkan nilai-nilai kepedulian sosial.',
    content: `Sebagai bentuk pengamalan nilai-nilai kepedulian sosial, santri Pondok Pesantren Darut Taqwa 4 mengadakan kegiatan bakti sosial di lingkungan sekitar pondok.

Kegiatan yang dilakukan meliputi:
- Membersihkan lingkungan sekitar
- Membantu warga yang membutuhkan
- Mengadakan pengajian umum untuk masyarakat
- Membagikan sembako kepada keluarga kurang mampu

Kegiatan ini diikuti oleh seluruh santri dengan penuh semangat dan antusias. Melalui kegiatan ini, santri belajar untuk peduli terhadap sesama dan mengamalkan nilai-nilai kebaikan yang telah diajarkan di pondok.

Kami berharap kegiatan ini dapat memberikan manfaat bagi masyarakat sekitar dan menjadi contoh yang baik bagi generasi muda.`,
    image: '',
    slug: 'kegiatan-bakti-sosial-lingkungan',
  },
  {
    id: '4',
    title: 'Workshop Parenting untuk Orang Tua Santri',
    date: '2025-05-20',
    excerpt: 'Pondok Pesantren mengadakan workshop parenting untuk membantu orang tua dalam mendidik dan membimbing anak-anak mereka.',
    content: `Pondok Pesantren Darut Taqwa 4 mengadakan workshop parenting khusus untuk orang tua santri. Workshop ini bertujuan untuk membantu orang tua dalam memahami cara mendidik dan membimbing anak-anak mereka dengan baik.

Materi yang disampaikan meliputi:
- Komunikasi efektif dengan anak
- Menanamkan nilai-nilai agama sejak dini
- Mengatasi tantangan dalam mendidik remaja
- Kolaborasi antara orang tua dan pondok pesantren

Workshop ini dihadiri oleh puluhan orang tua santri dan mendapat respon yang sangat positif. Para orang tua merasa terbantu dengan materi yang disampaikan dan berharap workshop serupa dapat diadakan secara rutin.

Kami berkomitmen untuk terus mendukung orang tua dalam mendidik putra-putri mereka menjadi generasi yang berakhlak mulia.`,
    image: '',
    slug: 'workshop-parenting-orang-tua-santri',
  },
  {
    id: '5',
    title: 'Peresmian Laboratorium Komputer Baru',
    date: '2025-05-10',
    excerpt: 'Pondok Pesantren meresmikan laboratorium komputer baru yang dilengkapi dengan peralatan modern untuk mendukung pembelajaran santri.',
    content: `Pondok Pesantren Darut Taqwa 4 dengan bangga meresmikan laboratorium komputer baru yang dilengkapi dengan peralatan modern dan terkini.

Laboratorium ini dilengkapi dengan:
- 30 unit komputer dengan spesifikasi terbaru
- Koneksi internet berkecepatan tinggi
- Software pembelajaran yang lengkap
- Ruangan yang nyaman dan kondusif

Laboratorium ini akan digunakan untuk mendukung pembelajaran santri, terutama dalam mata pelajaran teknologi informasi dan komunikasi. Dengan adanya laboratorium ini, diharapkan santri dapat mengikuti perkembangan teknologi dan siap menghadapi era digital.

Peresmian laboratorium ini dihadiri oleh pengurus pondok, para ustadz/ustadzah, dan perwakilan santri.`,
    image: '',
    slug: 'peresmian-laboratorium-komputer-baru',
  },
  {
    id: '6',
    title: 'Kegiatan Outbound untuk Pengembangan Karakter',
    date: '2025-04-25',
    excerpt: 'Santri mengikuti kegiatan outbound yang dirancang khusus untuk mengembangkan karakter, kerja sama tim, dan kepemimpinan.',
    content: `Sebagai bagian dari program pengembangan karakter, santri Pondok Pesantren Darut Taqwa 4 mengikuti kegiatan outbound yang dirancang khusus untuk mengembangkan berbagai aspek kepribadian.

Kegiatan outbound ini meliputi:
- Permainan team building
- Latihan kepemimpinan
- Tantangan fisik dan mental
- Refleksi dan evaluasi diri

Melalui kegiatan ini, santri belajar untuk:
- Bekerja sama dalam tim
- Mengembangkan rasa percaya diri
- Menghadapi tantangan dengan berani
- Menjadi pemimpin yang baik

Kegiatan ini mendapat respon yang sangat positif dari para santri. Mereka merasa kegiatan ini sangat bermanfaat dan menyenangkan. Kami berharap kegiatan serupa dapat diadakan secara rutin untuk terus mengembangkan karakter santri.`,
    image: '',
    slug: 'kegiatan-outbound-pengembangan-karakter',
  },
];

