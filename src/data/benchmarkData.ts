import {
  BenchmarkActivity,
  CorporateProgramPhase,
  InsightBlock,
  InstitutionSummary,
  TarunaDailySlot,
} from '../types/benchmark';

export const INSTITUTIONS: InstitutionSummary[] = [
  {
    id: 'taruna-nusantara',
    rank: 1,
    name: 'SMA Taruna Nusantara',
    shortName: 'SMA Taruna Nusantara',
    institutionType: 'SMA Berasrama Semi-Militer (Benchmark Karakter & Disiplin)',
    location: 'Magelang (serta 6 Kampus Integrasi: Malang, Cimahi, IKN, Langowan, Pagar Alam)',
    flagshipPrograms:
      'Rutinitas Harian Asrama (04.30–22.00), Pendidikan Dasar Kedisiplinan & Kepemimpinan (PDK 3 Bulan), Napak Tilas Rute Panglima Besar Jenderal Sudirman (RPS 3 Hari)',
    coachingFocus:
      'Pembinaan fisik harian, disiplin waktu ketat, bela negara, PBB, survival, jiwa korsa, kepemimpinan lapangan, dan akademik berasrama',
    completeness: 'Lengkap',
    completenessDetail:
      'Jadwal harian resmi berbasis jam (04.30–22.00 WIB), Kurikulum Khusus (Kenusantaraan, Bela Negara, Kepemimpinan), durasi PDK (3 bulan), dan rincian Napak Tilas RPS (3 hari, etape I 9 km) terdokumentasi terbuka di situs resmi sekolah.',
    keyStrengths:
      'Standar emas pembentukan disiplin berbasis ritme asrama 24 jam, pemisahan tegas rutinitas harian vs kegiatan terprogram/terproyek, dan integrasi mata pelajaran Bela Negara & Kepemimpinan ke kehidupan sehari-hari.',
    dataLimitations:
      'Jadwal harian diambil langsung dari laman Kurikulum resmi SMA Taruna Nusantara (smatncimahi.sch.id/kurikulum/); durasi menit sub-aktivitas di dalam blok sore (15.00–18.30) serta rubrik evaluasi kuantitatif internal tidak dipublikasikan terbuka.',
    officialPortal: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'lpp',
    rank: 2,
    name: 'Politeknik LPP Yogyakarta & PT LPP Agro Nusantara',
    shortName: 'Politeknik LPP / LPP Agro',
    institutionType: 'Vokasi Perkebunan & Corporate University BUMN Perkebunan',
    location: 'Yogyakarta (Kampus Vokasi & LPP Agro Learning Service)',
    flagshipPrograms:
      'PLDP II & III (Plantation Leadership Development Program), Peningkatan Kompetensi Teknis & Manajerial Asisten Tanaman, Uji Sertifikasi BNSP Asisten Kebun, Magang Industri & PKKMB',
    coachingFocus:
      'Kepemimpinan manajerial perkebunan berjenjang, manajemen afdeling, sertifikasi kompetensi profesi BNSP, dan kesiapan kerja Asisten Kebun/Pabrik',
    completeness: 'Lengkap',
    completenessDetail:
      'Mencakup dua sisi sekaligus: pendidikan vokasi mahasiswa (Politeknik LPP + LSP) dan pelatihan profesional karyawan (PT LPP Agro Nusantara).',
    keyStrengths:
      'Benchmark paling relevan untuk jenjang karier profesional industri kelapa sawit karena menghubungkan pendidikan vokasi, sertifikasi BNSP, hingga program leadership berjenjang (PLDP II/III) untuk PTPN Group.',
    dataLimitations:
      'Durasi jam pelatihan rinci per modul silabus Asisten Tanaman dan PKKMB tidak dipublikasikan terbuka di halaman web; sebagian halaman Politeknik LPP membatasi akses otomatis.',
    officialPortal: 'https://lpp.co.id',
  },
  {
    id: 'akpy-stiper',
    rank: 3,
    name: 'AKPY-STIPER (Akademi Komunitas Perkebunan Yogyakarta)',
    shortName: 'AKPY-STIPER',
    institutionType: 'Perguruan Tinggi Vokasi Perkebunan (D1/D2 Mitra BPDPKS)',
    location: 'Yogyakarta & KP2 Ungaran, Semarang',
    flagshipPrograms:
      'Bintalfisdisbun di Denhanud 474 Kopasgat, Bintalfisdis Sesi II Pra-Magang, Learning Factory Kebun Sawit (Learning by Doing), Magang Industri & Malam Inagurasi',
    coachingFocus:
      'Pembinaan mental-fisik-disiplin bersama satuan TNI AU (Kopasgat), pengenalan budaya kebun, praktik lapangan intensif calon mandor/krani, dan serapan industri',
    completeness: 'Lengkap',
    completenessDetail:
      'Publikasi resmi kampus memuat jumlah peserta aktual (570 mahasiswa baru 2025/2026), mitra militer (Denhanud 474 Kopasgat), tahapan teori 5 bulan + Learning Factory, hingga Malam Inagurasi magang.',
    keyStrengths:
      'Model pembinaan dua tahap yang sangat konkret (Bintalfisdisbun awal masuk + Bintalfisdis Sesi II menjelang magang) dipadukan dengan Learning Factory berorientasi budaya kebun.',
    dataLimitations:
      'Rincian jumlah hari pelaksanaan Bintalfisdisbun dan rubrik penilaian evaluasi teknis Learning Factory tidak dicantumkan eksplisit pada berita resmi kampus.',
    officialPortal: 'https://akpy-stiper.ac.id',
  },
  {
    id: 'polbangtan-medan',
    rank: 4,
    name: 'Polbangtan Medan (Politeknik Pembangunan Pertanian Medan)',
    shortName: 'Polbangtan Medan',
    institutionType: 'Politeknik Kedinasan Vokasi Kementerian Pertanian (Fokus Perkebunan & Sawit)',
    location: 'Medan, Sumatera Utara',
    flagshipPrograms:
      'MABIDAMA & Bela Negara (216 Mahasiswa), Sistem Pembinaan Asrama Terpadu, Pembekalan Magang Berdampak "Become to Outcome" (225 Mahasiswa), Teaching Factory (TEFA)',
    coachingFocus:
      'Kedisiplinan asrama terpadu, bela negara, penguasaan rantai pasok kelapa sawit hulu-hilir, outbound teamwork, dan praktik produksi standar DUDI',
    completeness: 'Lengkap',
    completenessDetail:
      'Situs resmi polbangtanmedan.ac.id mendokumentasikan secara terbuka struktur tugas Unit Asrama, pelaksanaan MABIDAMA, TEFA, serta jadwal 2 hari Pembekalan Magang Berdampak bersama mitra.',
    keyStrengths:
      'Kombinasi langka antara pembinaan kehidupan berasrama harian (bangun pagi, ibadah, senam, apel malam) dengan kurikulum vokasi kelapa sawit dan pembekalan soft skills/outbound sebelum magang.',
    dataLimitations:
      'Jam rinci rutinitas harian asrama dan dokumen kurikulum detail per mata praktik tidak dipublikasikan terbuka pada laman profil unit.',
    officialPortal: 'https://www.polbangtanmedan.ac.id',
  },
  {
    id: 'instiper',
    rank: 5,
    name: 'INSTIPER Yogyakarta (Institut Pertanian STIPER)',
    shortName: 'INSTIPER Yogyakarta',
    institutionType: 'Perguruan Tinggi Spesialis Perkebunan, Pertanian & Kehutanan',
    location: 'Yogyakarta & KP2 Ungaran',
    flagshipPrograms:
      'Praktik Lapangan Wajib (1 Minggu Pembekalan + 7 Minggu Lapangan), Pembekalan Magang Institut (2 Hari, 690 Mahasiswa), Magang Industri Kurikulum Berdampak (4–6 Bulan di 79 Mitra)',
    coachingFocus:
      'Integrasi teori-praktik berjenjang (Praktik Lapang -> Pembekalan Etika/BPJS/Adaptasi -> Magang Industri 4–6 Bulan) dengan jejaring perusahaan sawit nasional',
    completeness: 'Lengkap',
    completenessDetail:
      'Kalender akademik PDF dan berita resmi kampus mencantumkan durasi eksak: 1 minggu pembekalan + 7 minggu Praktik Lapangan, 2 hari pembekalan magang, dan 4–6 bulan magang industri.',
    keyStrengths:
      'Skala penempatan magang terverifikasi sangat masif (671 mahasiswa ke 79 mitra di 18 provinsi) dan pembekalan terstruktur yang mencakup perlindungan kerja BPJS Ketenagakerjaan serta etika profesi.',
    dataLimitations:
      'Dokumentasi terbuka terkait latihan fisik semi-militer atau program kedisiplinan harian berasrama tidak ditemukan di laman publik resmi INSTIPER.',
    officialPortal: 'https://instiperjogja.ac.id',
  },
  {
    id: 'poltek-cwe',
    rank: 6,
    name: 'Politeknik Kelapa Sawit Citra Widya Edukasi (Poltek CWE)',
    shortName: 'Politeknik CWE',
    institutionType: 'Politeknik Vokasi Khusus Kelapa Sawit',
    location: 'Bekasi, Jawa Barat',
    flagshipPrograms:
      'Estate Management Training (90% Praktis), Mill Management Training (90% Praktis), PKL/Magang pada 100+ Mitra Industri, Sertifikasi Profesi BNSP (LSP-PHI & LSP-TMI)',
    coachingFocus:
      'Penguasaan teknis praktis hulu (estate) dan hilir (mill/PKS), sertifikasi kompetensi asisten kebun & pabrik, dan pembinaan disiplin vokasi',
    completeness: 'Cukup Lengkap',
    completenessDetail:
      'Halaman resmi Estate & Mill Management Training, repositori PKL, serta publikasi sertifikasi BNSP terverifikasi; namun durasi hari rinci dan silabus jam tidak dicantumkan di web publik.',
    keyStrengths:
      'Proporsi pelatihan praktis mencapai 90% turun lapang dan mencakup dua pilar operasional utama perusahaan sawit (Estate dan Mill) sekaligus jejaring 100+ mitra industri.',
    dataLimitations:
      'Rincian durasi hari untuk Estate/Mill Management Training, jadwal harian asrama kampus, serta rincian kurikulum Latsar/Bintalsik belum tersedia dalam dokumen publik terbuka.',
    officialPortal: 'https://www.poltekcwe.ac.id',
  },
  {
    id: 'itsi',
    rank: 7,
    name: 'Institut Teknologi Sawit Indonesia (ITSI)',
    shortName: 'ITSI (eks STIP-AP)',
    institutionType: 'Institut Pendidikan Tinggi Vokasi & Sains Khusus Sawit',
    location: 'Medan, Sumatera Utara',
    flagshipPrograms:
      'Pekan Orientasi Studi dan Perkebunan (POSBUN — 572 Mahasiswa Baru), Bimtek & Bintalfisdis Pra-PKL (bersama TNI & HRD Perkebunan), PKL/Magang Berbasis OBE-MBKM',
    coachingFocus:
      'Pembentukan mental-fisik-disiplin khas perkebunan (POSBUN & Bintalfisdis Pra-PKL) dan kesiapan kerja operasional perkebunan kelapa sawit',
    completeness: 'Cukup Lengkap',
    completenessDetail:
      'Pelaksanaan POSBUN 2024 (572 mahasiswa) terverifikasi di itsi.ac.id dan Bintalfisdis-Bimtek Pra-PKL terverifikasi melalui liputan berita resmi bersama TNI dan HRD perkebunan.',
    keyStrengths:
      'Tradisi kuat eks STIP-AP Medan dalam menyiapkan lulusan siap kerja di kebun melalui dua lapis pembinaan karakter: saat masuk (POSBUN) dan menjelang turun PKL (Bintalfisdis + Bimtek).',
    dataLimitations:
      'Dokumen silabus PDF, durasi hari pasti Bintalfisdis/POSBUN, serta rubrik evaluasi tertulis tidak tersedia terbuka pada domain publik itsi.ac.id.',
    officialPortal: 'https://itsi.ac.id',
  },
  {
    id: 'bpdp-ditjenbun',
    rank: 8,
    name: 'BPDP / BPDPKS & Ditjenbun Kementerian Pertanian',
    shortName: 'BPDP & Ditjenbun',
    institutionType: 'Lembaga Pengelola Dana & Regulator Pengembangan SDM Sawit Nasional',
    location: 'Nasional (diselenggarakan bersama lembaga pelatihan mitra di sentra sawit)',
    flagshipPrograms:
      'Pelatihan Teknis ISPO & Sawit Berkelanjutan, Program Pengembangan SDM PKS (Budidaya/GAP, Panen & Pascapanen, Pemetaan Lokasi, Pengelolaan Sarpras)',
    coachingFocus:
      'Standardisasi kompetensi teknis budidaya berkelanjutan (GAP), sertifikasi ISPO, kepatuhan lingkungan, dan peningkatan kapasitas pekebun/SDM sawit',
    completeness: 'Cukup Lengkap',
    completenessDetail:
      'Didukung dokumen resmi Panduan Teknis Seleksi 2025 (PDF bpdp.or.id) dan berita resmi pelaksanaan pelatihan ISPO bersama Dinas Perkebunan.',
    keyStrengths:
      'Referensi nasional paling otoritatif untuk aspek Lingkungan, kepatuhan sertifikasi ISPO, dan standar kurikulum pelatihan teknis lapangan berskala nasional.',
    dataLimitations:
      'Berfokus pada pekebun swadaya/kelembagaan dan standar pelatihan teknis; tidak memuat pembinaan fisik/disiplin semi-militer atau kepemimpinan korporat.',
    officialPortal: 'https://www.bpdp.or.id',
  },
  {
    id: 'ppks-iopri',
    rank: 9,
    name: 'Pusat Penelitian Kelapa Sawit (PPKS / IOPRI)',
    shortName: 'PPKS (IOPRI)',
    institutionType: 'Lembaga Riset & Pelatihan Teknis Industri Kelapa Sawit',
    location: 'Medan, Sumatera Utara (serta In-House Training di lokasi perusahaan)',
    flagshipPrograms:
      'Pelatihan Teknik Budidaya & Pengolahan Kelapa Sawit (On-Farm & Off-Farm), Pelatihan Tekno Ekonomi Budidaya/Pengolahan & Industri Hilir, In-House Training Tematik',
    coachingFocus:
      'Pendalaman sains agronomis berbasis riset (instruktur peneliti S2/S3), kelayakan tekno-ekonomi, mitigasi risiko usaha, dan optimasi teknis kebun-pabrik',
    completeness: 'Cukup Lengkap',
    completenessDetail:
      'Katalog layanan pelatihan resmi di iopri.co.id merinci jenis pelatihan, sasaran peserta, tujuan pembelajaran, serta kualifikasi instruktur peneliti.',
    keyStrengths:
      'Kredibilitas ilmiah tertinggi di Indonesia untuk penguatan teknis budidaya dan pengolahan kelapa sawit serta analisis kelayakan tekno-ekonomi bagi staf kebun dan manajemen.',
    dataLimitations:
      'Durasi hari rinci dan silabus harian spesifik tiap paket tidak ditampilkan publik pada halaman katalog (harus konfirmasi jadwal/penawaran resmi ke unit pelatihan PPKS).',
    officialPortal: 'https://iopri.co.id',
  },
  {
    id: 'poltek-kampar',
    rank: 10,
    name: 'Politeknik Kampar (POLKAM)',
    shortName: 'Politeknik Kampar',
    institutionType: 'Politeknik Vokasi Kelapa Sawit Hulu-Hilir',
    location: 'Bangkinang, Kabupaten Kampar, Riau',
    flagshipPrograms:
      'SEPORA 2 (Studi Pengenalan Orientasi Raya Mahasiswa — Wawasan Sawit & K3), Magang Industri & Seminar Magang, Praktikum Pabrik Mini Pengolahan Sawit',
    coachingFocus:
      'Pengenalan industri sawit sejak orientasi, integrasi materi Keselamatan dan Kesehatan Kerja (K3), etika profesi, dan praktik pengolahan pabrik mini',
    completeness: 'Parsial',
    completenessDetail:
      'Berita resmi SEPORA 2 (materi wawasan sawit & K3) dan mekanisme magang industri terverifikasi; namun dokumen kurikulum rinci, durasi hari, dan evaluasi detail terbatas di web publik.',
    keyStrengths:
      'Menonjol karena mengintegrasikan kesadaran Keselamatan & Kesehatan Kerja (K3) sejak kegiatan orientasi mahasiswa baru (SEPORA) serta memiliki fasilitas pabrik mini sawit.',
    dataLimitations:
      'Durasi hari kegiatan SEPORA 2 dan magang tidak tercantum eksplisit pada sumber berita; sebagian portal menggunakan subdomain demo/arsip.',
    officialPortal: 'https://poltek-kampar.ac.id',
  },
  {
    id: 'itp2i',
    rank: 11,
    name: 'Institut Teknologi Perkebunan Pelalawan Indonesia (ITP2I)',
    shortName: 'ITP2I Pelalawan',
    institutionType: 'Institut Teknologi Perkebunan Berbasis Technopark (Mitra Beasiswa BPDPKS)',
    location: 'Kabupaten Pelalawan, Riau',
    flagshipPrograms:
      'PKKMB Pembinaan Mental & Fisik (7 Hari: 8–14 Agustus 2024, Pendekatan Pengasuhan Non-Perploncoan), Kerja Praktik (KP) & Praktikum Pilot Plant Technopark Pelalawan',
    coachingFocus:
      'Orientasi mental-fisik berbasis pengasuhan humanis (anti-perploncoan), teknologi pasca panen, dan praktikum pilot plant minyak goreng kelapa sawit',
    completeness: 'Parsial',
    completenessDetail:
      'Durasi eksak PKKMB (8–14 Agustus 2024, 137 mahasiswa) dan fasilitas Pilot Plant Technopark terverifikasi; namun data detail kegiatan pembinaan lanjutan dan evaluasi masih terbatas.',
    keyStrengths:
      'Pendekatan orientasi mental-fisik yang secara eksplisit menekankan model pengasuhan tanpa perploncoan serta dukungan fasilitas pilot plant pengolahan hilir di Technopark Pelalawan.',
    dataLimitations:
      'Belum ditemukan dokumen kurikulum publik rinci mengenai durasi Kerja Praktik/Magang, jadwal harian pembinaan, maupun program pelatihan karyawan eksternal.',
    officialPortal: 'https://itp2i-yap.ac.id',
  },
];

export const ACTIVITIES: BenchmarkActivity[] = [
  // ================= 1. SMA TARUNA NUSANTARA =================
  {
    id: 'tn-01',
    institutionId: 'taruna-nusantara',
    institution: 'SMA Taruna Nusantara',
    program: 'Rutinitas Harian Asrama Taruna (04.30 – 22.00 WIB)',
    programType: 'Rutinitas Harian Asrama',
    categories: ['Fisik', 'Disiplin', 'Mental', 'Akademik', 'Bela Negara'],
    targetParticipants: 'Seluruh Siswa/Taruna Kelas X, XI, dan XII di lingkungan asrama',
    description:
      'Pola kehidupan berasrama terstruktur 24 jam ("Mata Kegiatan Rutin Terjadwal — Fondasi Disiplin Harian") yang mengatur disiplin waktu sejak bangun pagi pukul 04.30 WIB, ibadah, olahraga pagi, makan pagi, apel pagi, KBM klasikal, menyanyikan Lagu Indonesia Raya & mengucapkan Pancasila pukul 10.00 WIB, apel siang, kegiatan terprogram/ekstrakurikuler sore, belajar malam, apel malam, hingga istirahat malam pukul 22.00 WIB.',
    activitiesAndMaterials:
      '04.30 Bangun pagi (Hari Libur 05.30), 04.40 Ibadah, 05.15 Olahraga pagi, 06.15 Makan pagi, 06.45 Apel pagi, 07.00 Belajar (KBM) Klasikal, 10.00 Menyanyikan Lagu Indonesia Raya & Mengucapkan Pancasila, 13.45 Apel siang (Jumat 11.15), 14.00 Makan siang, 15.00 Terprogram / Belajar Sore / Ekstrakurikuler, 18.30 Makan malam, 19.00 Belajar malam, 21.00 Apel malam (Malam Libur tidak ada), dan 22.00 Istirahat malam (Malam Libur 22.30).',
    duration: '17,5 jam aktivitas terjadwal per hari (04.30–22.00 WIB); berlangsung sepanjang 3 tahun masa pendidikan',
    schedule: 'Setiap hari pukul 04.30–22.00 WIB (Hari Libur bangun 05.30; Jumat Apel Siang 11.15; Malam Libur tanpa apel malam & istirahat 22.30 WIB)',
    frequency: 'Harian (rutin setiap hari)',
    deliveryMethod: 'Kehidupan berasrama (boarding), apel terjadwal, olahraga bersama, pembelajaran kelas, dan pembinaan pamong',
    objectives:
      'Membentuk kedisiplinan waktu otomatis, kebugaran fisik konsisten, kemandirian hidup, jiwa nasionalisme harian, dan kebiasaan belajar mandiri yang teratur.',
    evaluation: 'Pengawasan dan pembinaan harian oleh Pamong Pengasuh asrama (instrumen skor internal tidak dipublikasikan terbuka)',
    year: '2025',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
    sourceLabel: 'SMA Taruna Nusantara (Resmi) — Kurikulum Khusus & Jadwal Rutin Harian',
    notes: 'Sumber terbuka langsung dari laman resmi SMA Taruna Nusantara tanpa paywall. Jam mulai tiap blok tercatat eksplisit; durasi sub-aktivitas di dalam blok sore (15.00–18.30) tidak dipecah per menit pada sumber.',
  },
  {
    id: 'tn-02',
    institutionId: 'taruna-nusantara',
    institution: 'SMA Taruna Nusantara',
    program: 'Pendidikan Dasar Kedisiplinan dan Kepemimpinan (PDK)',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['Fisik', 'Mental', 'Disiplin', 'Leadership', 'Bela Negara', 'Teamwork'],
    targetParticipants: 'Siswa/Taruna baru Kelas X (contoh: 378 siswa Angkatan XXXIV TA 2023/2024)',
    description:
      'Program orientasi dan penggemblengan karakter wajib pada awal masuk sekolah guna mentransformasi pola pikir pelajar SMP menjadi taruna yang tangguh, disiplin, mandiri, dan memiliki jiwa kepemimpinan serta korsa.',
    activitiesAndMaterials:
      'Orientasi kelembagaan & kehidupan berasrama, Peraturan Baris-Berbaris (PBB), pembinaan kesamaptaan jasmani intensif, mental kejuangan, cara belajar mandiri, display drumband, bela diri, kesenian, defile, dan upacara penutupan PDK di Gedung Balairung Pancasila.',
    duration: '3 bulan penuh di awal tahun ajaran',
    schedule: 'Awal tahun ajaran (Juli – Oktober, ditutup pada upacara resmi bulan Oktober)',
    frequency: 'Program khusus tahunan (sekali di awal masa pendidikan Kelas X)',
    deliveryMethod: 'Pelatihan intensif berasrama, latihan lapangan, baris-berbaris (PBB), simulasi kepemimpinan, dan upacara tradisi',
    objectives:
      'Membentuk ketahanan fisik, mental tangguh, kepatuhan terhadap tata tertib dan komando, kemandirian asrama, serta solidaritas angkatan.',
    evaluation: 'Penilaian ketuntasan rangkaian PDK dan atraksi/defile penutupan (rubrik kuantitatif rinci tidak dipublikasikan pada sumber)',
    year: '2023',
    sourceUrl: 'https://www.beritamagelang.id/ratusan-pelajar-sma-taruna-nusantara-selesai-pendidikan-dasar-kepemimpinan-dan-kedisiplinan',
    sourceLabel: 'Berita Magelang (Pemkab Magelang) — Penutupan PDK SMA Taruna Nusantara',
    notes: 'Sumber media pemerintah daerah Magelang mendokumentasikan durasi eksplisit 3 bulan dan jumlah peserta 378 siswa pada Angkatan XXXIV.',
  },
  {
    id: 'tn-03',
    institutionId: 'taruna-nusantara',
    institution: 'SMA Taruna Nusantara',
    program: 'Napak Tilas Rute Gerilya Panglima Besar Jenderal Sudirman (RPS) & Pembaretan',
    programType: 'Kegiatan Khusus & Tradisi',
    categories: ['Fisik', 'Mental', 'Bela Negara', 'Teamwork', 'Leadership'],
    targetParticipants: 'Siswa Kelas X lintas kampus (contoh: 1.450+ siswa Angkatan 36 dari 6 kampus didampingi 300+ Pamong)',
    description:
      'Tradisi puncak dalam rangkaian PDK berupa perjalanan lintas medan kolosal menelusuri rute perjuangan gerilya Panglima Besar Jenderal Sudirman sebagai ujian fisik, mental, dan integrasi jiwa korsa sebelum penyematan baret.',
    activitiesAndMaterials:
      'Pembagian ke dalam 3 Batalyon integrasi lintas kampus; Etape I mars/jalan kaki sejauh 9 km dari Dodiklatpur Rindam IV Diponegoro Paliyan menuju SMPN 2 Panggang, Gunung Kidul dengan medan tanjakan curam, turunan terjal, dan panas terik; pendampingan langsung pimpinan sekolah & pamong; tradisi penyematan baret.',
    duration: '3 hari penuh (termasuk Etape I sejauh 9 km dimulai pukul 09.00 WIB)',
    schedule: 'Periodik tahunan pada puncak akhir masa PDK Kelas X (start Etape I pukul 09.00 WIB)',
    frequency: 'Kegiatan tradisi khusus tahunan (1 kali per angkatan)',
    deliveryMethod: 'Outdoor ekstrem, long march / lintas medan terstruktur, kolaborasi militer (Rindam IV Diponegoro), dan seremoni tradisi',
    objectives:
      'Menguji daya juang dan ketahanan fisik-mental di medan berat, menanamkan nilai kejuangan nasional, serta membangun jiwa korsa (esprit de corps) lintas kampus.',
    evaluation: 'Ketuntasan menempuh seluruh etape rute RPS dan kelayakan mengikuti tradisi pembaretan',
    year: '2025',
    sourceUrl: 'https://smatncimahi.sch.id/enam-kampus-satu-jiwa-satu-baret-integrasi-kolosal-1-450-siswa-tn36-di-rute-panglima-sudirman/',
    sourceLabel: 'SMA Taruna Nusantara Kampus Cimahi — Integrasi Kolosal 1.450 Siswa di RPS',
    notes: 'Sumber resmi kampus mencantumkan angka konkret 3 hari penuh, 1.450+ siswa, 300+ pamong, start pukul 09.00 WIB, dan jarak Etape I 9 km.',
  },
  {
    id: 'tn-04',
    institutionId: 'taruna-nusantara',
    institution: 'SMA Taruna Nusantara',
    program: 'Kurikulum Khusus Bela Negara, Ketangkasan Lapangan, PERSAMI & Latihan Pilih Ksatria Tangkas (PKT)',
    programType: 'Kegiatan Khusus & Tradisi',
    categories: ['Fisik', 'Mental', 'Disiplin', 'Teamwork', 'Bela Negara', 'Leadership'],
    targetParticipants: 'Seluruh Siswa/Taruna SMA Taruna Nusantara sesuai jenjang kelas',
    description:
      'Integrasi Mata Pelajaran Kurikulum Khusus (Kenusantaraan, Bela Negara, Kepemimpinan) dengan rangkaian Kegiatan Terproyek lapangan seperti PERSAMI, Latihan Pilih Ksatria Tangkas & Pembaretan (PKT), Latihan Hulubalang, dan LKPL untuk menguji ketahanan fisik, navigasi medan, dan kepemimpinan praktis.',
    activitiesAndMaterials:
      'Bela Negara (Peraturan Baris-Berbaris/PBB, Peraturan Penghormatan, Tata Upacara, Pembinaan Jasmani, Ketangkasan, Pengetahuan Medan, Keterampilan Lapangan, Praktek Lapangan), Kepemimpinan (Teori/Prinsip/Seni Kepemimpinan, Dasar Manajemen, Metode Pemecahan Persoalan), serta Kegiatan Terproyek: PERSAMI, PKT & Pembaretan, Latihan Hulubalang, dan LKPL.',
    duration: 'Tidak ditemukan pada sumber (durasi jam pelajaran/hari spesifik tiap kegiatan terproyek tidak dirinci pada laman kurikulum)',
    schedule: 'Terintegrasi pada kalender KBM Kurikulum Khusus dan jadwal Kegiatan Terproyek tahunan',
    frequency: 'Rutin (mata pelajaran khusus) dan periodik/tahunan (PERSAMI, PKT, Hulubalang, LKPL)',
    deliveryMethod: 'Pembelajaran kelas khusus, praktik PBB/upacara, perkemahan outdoor (PERSAMI), latihan ketangkasan medan, dan pemecahan masalah regu',
    objectives:
      'Membentuk disiplin tinggi, ketahanan mental, penguasaan pengetahuan medan dan keterampilan lapangan, serta kemampuan memimpin tim dan mengambil keputusan di bawah tekanan.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2025',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
    sourceLabel: 'SMA Taruna Nusantara (Resmi) — Kurikulum Khusus & Kegiatan Terproyek',
    notes: 'Sumber resmi merinci seluruh pokok bahasan Mata Pelajaran Kenusantaraan, Bela Negara, dan Kepemimpinan beserta daftar Kegiatan Terproyek secara terbuka.',
  },
  {
    id: 'tn-05',
    institutionId: 'taruna-nusantara',
    institution: 'SMA Taruna Nusantara',
    program: 'Kegiatan Terprogram (Wajib & Pilihan), Ekstrakurikuler & Pembinaan Kehidupan Asrama',
    programType: 'Ekstrakurikuler & Pengembangan Diri',
    categories: ['Leadership', 'Teamwork', 'Soft Skills', 'Fisik', 'Akademik'],
    targetParticipants: 'Seluruh siswa SMA Taruna Nusantara (Kelas X, XI, dan XII)',
    description:
      'Pilar pengembangan diri di luar KBM reguler yang terdiri atas Kegiatan Terprogram Wajib untuk fondasi karakter dan Kegiatan Pilihan untuk eksplorasi bakat, dipadukan dengan tata tertib kehidupan asrama dan organisasi kesiswaan (OSIS/Peleton).',
    activitiesAndMaterials:
      'Kegiatan Terprogram Wajib: Pramuka, Bela Diri (Kls X), Pidato & Diskusi (Kls X), Praktikum IPA (Kls XI–XII), Praktikum Komputer (Kls XI–XII IPS). Kegiatan Pilihan: Olahraga, Seni, Keterampilan, dan Peleton. Ditunjang kegiatan OSIS (LKIP, Jumpa Tokoh Nasional, Porsistara), pengabdian masyarakat, serta pembinaan tata tertib & pesiar akhir pekan (Sabtu 14.00–17.00 & Minggu 10.00–17.00).',
    duration: 'Blok harian sore mulai pukul 15.00 hingga 18.30 WIB (durasi spesifik per cabang ekstrakurikuler tidak dipecah pada sumber)',
    schedule: 'Harian pada blok 15.00–18.30 WIB (Terprogram / Belajar Sore / Ekstrakurikuler) serta agenda periodik organisasi',
    frequency: 'Harian / mingguan dan periodik',
    deliveryMethod: 'Latihan wajib berbasis kelas/regu, klub bakat/ekstrakurikuler, praktik organisasi siswa, dan pembinaan tata tertib asrama',
    objectives:
      'Membangun pribadi seimbang, kompeten, dan multidimensi melalui penguasaan bela diri, komunikasi publik (pidato & diskusi), kepemimpinan organisasi, dan tanggung jawab sosial.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2025',
    sourceUrl: 'https://smatncimahi.sch.id/informasi-tata-tertib/',
    sourceLabel: 'SMA Taruna Nusantara (Resmi) — Informasi Program Rutin Siswa & Tata Tertib Asrama',
    notes: 'Menggabungkan verifikasi laman resmi Informasi & Tata Tertib (program rutin siswa, aturan asrama, seragam PDH/PDL/Pesiar) dengan daftar Kegiatan Terprogram pada laman Kurikulum resmi.',
  },

  // ================= 2. POLITEKNIK LPP & PT LPP AGRO NUSANTARA =================
  {
    id: 'lpp-01',
    institutionId: 'lpp',
    institution: 'Politeknik LPP Yogyakarta & PT LPP Agro Nusantara',
    program: 'Plantation Leadership Development Program (PLDP) II — Intermediate Plantation Management Skill',
    programType: 'Pelatihan Profesional',
    categories: ['Leadership', 'Manajemen', 'Teknis Perkebunan', 'Soft Skills'],
    targetParticipants: 'Calon pimpinan/manajer menengah dan staf potensial entitas PT Perkebunan Nusantara (PTPN) Group',
    description:
      'Program penjenjangan kepemimpinan perkebunan tingkat menengah yang diselenggarakan PT LPP Agro Nusantara sebagai corporate university Holding Perkebunan Nusantara untuk mencetak calon pemimpin masa depan (next leader).',
    activitiesAndMaterials:
      'Intermediate Plantation Management Skill, manajemen operasional perkebunan, efisiensi kinerja unit/afdeling, kepemimpinan strategis dan supervisi tim lapangan, studi kasus bisnis perkebunan, serta penugasan lanjutan (journey assignment).',
    duration: '12–14 hari sesi tatap muka/in-class (sekitar 13 hari efektif pada beberapa angkatan) ditambah sesi hybrid/penugasan',
    schedule: 'Diselenggarakan per angkatan secara terjadwal di Kampus PT LPP Agro Nusantara Yogyakarta (contoh penutupan Angkatan 37: 9 Oktober 2026)',
    frequency: 'Periodik per angkatan (program penjenjangan karier korporat)',
    deliveryMethod: 'Hybrid learning (mandiri online + tatap muka kelas intensif, studi kasus, presentasi, dan penugasan proyek)',
    objectives:
      'Menyiapkan next leader perkebunan yang menguasai keterampilan manajerial tingkat menengah, kepemimpinan operasional, dan pengambilan keputusan bisnis.',
    evaluation: 'Laporan pelaksanaan & evaluasi hasil pelatihan (tercatat capaian evaluasi Excellent pada penutupan PLDP II Angkatan 37)',
    year: '2026',
    sourceUrl: 'https://lpp.co.id/lpp-agro-nusantara-resmi-tutup-pldp-ii-angkatan-37-dorong-peserta-jadi-next-leader-pt-perkebunan-nusantara-group/',
    sourceLabel: 'PT LPP Agro Nusantara — Penutupan PLDP II Angkatan 37',
    notes: 'Rincian modul harian jam-per-jam bersifat internal korporasi PTPN Group dan tidak dipublikasikan sebagai PDF terbuka.',
  },
  {
    id: 'lpp-02',
    institutionId: 'lpp',
    institution: 'Politeknik LPP Yogyakarta & PT LPP Agro Nusantara',
    program: 'Plantation Leadership Development Program (PLDP) III',
    programType: 'Pelatihan Profesional',
    categories: ['Leadership', 'Manajemen', 'Soft Skills', 'Teknis Perkebunan'],
    targetParticipants: 'Karyawan/staf operasional tingkat dasar hingga asisten muda di lingkungan PTPN Group',
    description:
      'Program pengembangan kepemimpinan dan manajemen dasar perkebunan berjenjang bagi lini operasional awal agar siap memimpin unit kerja kebun atau pabrik secara efektif.',
    activitiesAndMaterials:
      'Dasar-dasar kepemimpinan lapangan, supervisi tenaga kerja, perencanaan dan pengendalian operasional perkebunan, manajemen kinerja, serta integrasi budaya kerja korporasi.',
    duration: 'Sekitar 13 hari tatap muka intensif (per batch/angkatan)',
    schedule: 'Terjadwal per angkatan (contoh: PLDP III Angkatan 32)',
    frequency: 'Periodik per angkatan',
    deliveryMethod: 'Kelas intensif tatap muka, diskusi kasus, simulasi manajerial, dan evaluasi akhir',
    objectives:
      'Meningkatkan kesiapan supervisi dan kepemimpinan operasional karyawan lini pertama di perusahaan perkebunan.',
    evaluation: 'Evaluasi pembelajaran kelas dan penilaian akhir peserta (bobot rinci tidak dipublikasikan pada sumber)',
    year: '2024',
    sourceUrl: 'https://lpp.co.id/pt-lpp-agro-nusantara-menggelar-pelatihan-pldp-iii-angkatan-32/',
    sourceLabel: 'PT LPP Agro Nusantara — Pelaksanaan PLDP III Angkatan 32',
    notes: 'Sumber resmi mengonfirmasi penyelenggaraan berjenjang PLDP III sebagai bagian dari jalur leadership PTPN Group.',
  },
  {
    id: 'lpp-03',
    institutionId: 'lpp',
    institution: 'Politeknik LPP Yogyakarta & PT LPP Agro Nusantara',
    program: 'Peningkatan Kompetensi Teknis dan Manajerial Asisten Tanaman Kelapa Sawit',
    programType: 'Pelatihan Profesional',
    categories: ['Teknis Perkebunan', 'Manajemen', 'Soft Skills', 'Leadership'],
    targetParticipants: 'Asisten Tanaman / Asisten Kebun kelapa sawit sebagai garda terdepan operasional afdeling',
    description:
      'Pelatihan terpadu yang memadukan penguatan hard skill teknis budidaya dan soft skill manajerial khusus untuk peran Asisten Tanaman dalam mengelola afdeling secara efektif.',
    activitiesAndMaterials:
      'Teknis budidaya kelapa sawit yang baik dan benar, manajemen afdeling dalam perusahaan perkebunan, perencanaan dan realisasi kerja kebun, pengelolaan SDM/mandor, serta pembentukan budaya kerja positif.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Berdasarkan jadwal pelatihan LPP Agro Learning Service / permintaan korporat',
    frequency: 'Program pelatihan khusus (terbuka maupun in-house)',
    deliveryMethod: 'Kelas tatap muka, diskusi operasional, dan studi kasus manajemen afdeling',
    objectives:
      'Memastikan asisten tanaman memahami teknis budidaya tepat standar, mampu mengelola operasional afdeling, serta mengoptimalkan kinerja tim lapangan.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2025',
    sourceUrl: 'https://lpp.co.id/pelatihan/peningkatan-kompetensi-teknis-dan-manajerial-asisten-tanaman/',
    sourceLabel: 'LPP Agro Learning Service — Peningkatan Kompetensi Asisten Tanaman',
    notes: 'Halaman katalog resmi mencantumkan deskripsi dan sasaran pembelajaran secara jelas, namun durasi hari dan metode evaluasi tidak ditulis eksplisit.',
  },
  {
    id: 'lpp-04',
    institutionId: 'lpp',
    institution: 'Politeknik LPP Yogyakarta & PT LPP Agro Nusantara',
    program: 'Uji Sertifikasi Kompetensi BNSP — Skema Asisten Kebun Kelapa Sawit',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Teknis Perkebunan', 'Manajemen', 'K3', 'Akademik'],
    targetParticipants: 'Mahasiswa vokasi Politeknik LPP Yogyakarta (penerima hibah program sertifikasi kompetensi vokasi)',
    description:
      'Pelaksanaan uji kompetensi resmi berlisensi BNSP melalui LSP Politeknik LPP untuk memvalidasi kesiapan kerja mahasiswa pada okupasi Asisten Kebun Kelapa Sawit sesuai standar industri nasional.',
    activitiesAndMaterials:
      'Asesmen unit kompetensi skema Asisten Kebun Kelapa Sawit mencakup pengelolaan teknis kebun, perencanaan kerja, pengawasan lapangan, penerapan K3 perkebunan, dan wawancara/demonstrasi kompetensi oleh asesor BNSP.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Dilaksanakan menjelang kelulusan / periode hibah sertifikasi tahunan (2025)',
    frequency: 'Periodik tahunan',
    deliveryMethod: 'Assessment kompetensi (uji praktik, portofolio, uji tulis/lisan oleh asesor bersertifikat BNSP)',
    objectives:
      'Menjamin lulusan memiliki sertifikat kompetensi profesi yang diakui industri sebagai Asisten Kebun Kelapa Sawit siap kerja.',
    evaluation: 'Penetapan status Kompeten (K) / Belum Kompeten (BK) oleh Asesor Kompetensi LSP berlisensi BNSP',
    year: '2025',
    sourceUrl: 'https://lsp.polteklpp.ac.id/pelaksanaan-uji-sertifikasi-hibah-program-sertifikasi-kompetensi-dan-profesi-mahasiswa-vokasi-tahun-2025-skema-uji-asisten-kebun-kelapa-sawit/',
    sourceLabel: 'LSP Politeknik LPP — Uji Sertifikasi Skema Asisten Kebun Kelapa Sawit 2025',
    notes: 'Sangat kuat sebagai benchmark metode evaluasi berbasis standar okupasi nasional (SKKNI/BNSP).',
  },
  {
    id: 'lpp-05',
    institutionId: 'lpp',
    institution: 'Politeknik LPP Yogyakarta & PT LPP Agro Nusantara',
    program: 'Magang Industri & Supervisi Lapangan Mahasiswa Vokasi',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Praktik Lapangan', 'Teknis Perkebunan', 'Manajemen', 'Soft Skills'],
    targetParticipants: 'Mahasiswa aktif Politeknik LPP Yogyakarta',
    description:
      'Program magang wajib mahasiswa vokasi di perusahaan perkebunan dan agroindustri mitra (seperti PTPN dan mitra nasional) yang dilengkapi mekanisme supervisi langsung dosen pembimbing ke lokasi kerja.',
    activitiesAndMaterials:
      'Penempatan langsung di unit kebun/pabrik mitra, pengamatan dan keterlibatan operasional harian, supervisi langsung oleh dosen pembimbing ke lokasi magang, koordinasi evaluasi bersama pembimbing industri, serta penyusunan laporan akhir magang.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Mengikuti kalender akademik semester magang Politeknik LPP',
    frequency: 'Program wajib per angkatan / semester magang',
    deliveryMethod: 'Praktik kerja nyata di industri (on-the-job training) + supervisi lapangan dosen + pelaporan',
    objectives:
      'Menghubungkan kompetensi vokasi kampus dengan standar kerja nyata di kebun dan pabrik serta memastikan kesesuaian pembimbingan industri.',
    evaluation: 'Supervisi langsung dosen ke lokasi mitra, penilaian pembimbing lapangan, dan laporan magang',
    year: '2024',
    sourceUrl: 'https://polteklpp.ac.id/supervisi-dosen-ke-lokasi-magang-mahasiswa-politeknik-lpp-yogyakarta/',
    sourceLabel: 'Politeknik LPP Yogyakarta — Supervisi Dosen ke Lokasi Magang',
    notes: 'Situs resmi polteklpp.ac.id membatasi sebagian scraping otomatis; durasi bulan spesifik tidak tercantum pada ringkasan indeks berita tersebut.',
  },
  {
    id: 'lpp-06',
    institutionId: 'lpp',
    institution: 'Politeknik LPP Yogyakarta & PT LPP Agro Nusantara',
    program: 'PKKMB Politeknik LPP Yogyakarta',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['Disiplin', 'Mental', 'Akademik', 'Teamwork'],
    targetParticipants: 'Mahasiswa baru Politeknik LPP Yogyakarta',
    description:
      'Kegiatan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru untuk membangun adaptasi sistem pembelajaran vokasi, tata tertib kampus, dan karakter disiplin dasar dunia perkebunan.',
    activitiesAndMaterials:
      'Pengenalan sistem akademik vokasi, tata kelola kampus, penanaman budaya disiplin perkebunan, wawasan kebangsaan, dan kegiatan kebersamaan mahasiswa baru.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Awal tahun akademik mahasiswa baru',
    frequency: 'Tahunan (1 kali saat masuk kuliah)',
    deliveryMethod: 'Orientasi kampus, pemaparan materi, dan pembinaan karakter kolektif',
    objectives:
      'Mempersiapkan mahasiswa baru beradaptasi dengan kultur pendidikan tinggi vokasi perkebunan yang disiplin dan berorientasi praktik.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2024',
    sourceUrl: 'https://polteklpp.ac.id/pkkmb/',
    sourceLabel: 'Politeknik LPP Yogyakarta — Laman Resmi PKKMB',
    notes: 'Laman resmi mengembalikan HTTP 403 untuk akses crawler otomatis sehingga rincian jadwal hari dan durasi tidak dapat diverifikasi langsung.',
  },

  // ================= 3. AKPY-STIPER =================
  {
    id: 'akpy-01',
    institutionId: 'akpy-stiper',
    institution: 'AKPY-STIPER (Akademi Komunitas Perkebunan Yogyakarta)',
    program: 'Pembinaan Mental, Fisik, Disiplin dan Kenal Kebun (Bintalfisdisbun) di Denhanud 474 Kopasgat',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['Fisik', 'Mental', 'Disiplin', 'Teamwork', 'Bela Negara', 'Teknis Perkebunan'],
    targetParticipants: '570 mahasiswa baru TA 2025/2026 (D1 Pembibitan & Pemeliharaan Sawit, D2 Budidaya & Pengolahan Sawit; mayoritas penerima Beasiswa BPDP)',
    description:
      'Program pembinaan karakter awal wajib bagi seluruh mahasiswa baru AKPY-STIPER yang memadukan penggemblengan fisik-mental-disiplin bersama satuan militer TNI AU (Denhanud 474 Kopasgat Yogyakarta) dengan pengenalan ekosistem kebun kelapa sawit.',
    activitiesAndMaterials:
      'Pelatihan mental, fisik, dan kedisiplinan bersama instruktur Denhanud 474 Kopasgat; penanaman etos kerja dan kerja sama tim; serta pengenalan kebun (Kenal Kebun) mencakup persiapan lahan, pembibitan (pre-nursery & main-nursery), pemeliharaan TBM/TM, panen, dan mekanisasi perkebunan.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Awal Tahun Akademik 2025–2026',
    frequency: 'Program wajib tahunan bagi mahasiswa baru',
    deliveryMethod: 'Pelatihan semi-militer outdoor di markas satuan TNI AU (Denhanud 474 Kopasgat) + pengenalan lapangan kebun',
    objectives:
      'Menguatkan ketahanan mental, kebugaran fisik, disiplin tinggi, kerja sama tim, dan pemahaman awal budaya kerja perkebunan sawit.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2025',
    sourceUrl: 'https://akpy-stiper.ac.id/Berita/23-bintalfisdisbun-2025-di-denhanud-474-kopasgat-yogyakarta-direktur-akpy-stiper-kuatkan-mental-fisik-dan-disiplin-mahasiswa-baru',
    sourceLabel: 'AKPY-STIPER — Bintalfisdisbun 2025 di Denhanud 474 Kopasgat Yogyakarta',
    notes: 'Sumber resmi kampus mencantumkan rincian peserta sangat akurat (570 mahasiswa: 539 BPDP, 19 KIP Kuliah, 12 Reguler), namun jumlah hari pelaksanaan tidak disebut eksplisit.',
  },
  {
    id: 'akpy-02',
    institutionId: 'akpy-stiper',
    institution: 'AKPY-STIPER (Akademi Komunitas Perkebunan Yogyakarta)',
    program: 'Bintalfisdis Sesi II — Pembekalan Mental & Disiplin Pra-Magang',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['Mental', 'Fisik', 'Disiplin', 'Teamwork', 'Soft Skills'],
    targetParticipants: 'Mahasiswa AKPY-STIPER yang akan diberangkatkan magang ke perusahaan perkebunan mitra',
    description:
      'Tahap kedua pembinaan mental, fisik, dan disiplin yang dilaksanakan khusus sebelum mahasiswa diterjunkan ke kebun mitra agar kesiapan mental, etika kerja, dan daya tahan adaptasi kembali terasah.',
    activitiesAndMaterials:
      'Penyegaran kedisiplinan dan ketangguhan mental, simulasi penyesuaian budaya kerja lapangan perkebunan, penguatan kerja sama tim, dan kesiapan sikap kerja di perusahaan mitra.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Dilaksanakan menjelang keberangkatan program magang industri',
    frequency: 'Periodik per angkatan (sesi pra-magang)',
    deliveryMethod: 'Pembinaan fisik-mental terstruktur dan pengarahan budaya kerja industri',
    objectives:
      'Menghilangkan kejutan budaya (culture shock) di kebun terpencil dan memastikan mahasiswa mematuhi disiplin operasional perusahaan mitra.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2024',
    sourceUrl: 'https://sawitindonesia.com/bintalfisdis-akpy-stiper-sesi-ii-jadi-bekal-mahasiswa-jalani-magang',
    sourceLabel: 'Majalah Sawit Indonesia — Bintalfisdis AKPY-STIPER Sesi II Pra-Magang',
    notes: 'Pola dua sesi (awal masuk + pra-magang) merupakan keunikan kuat yang sangat layak diadopsi untuk tahap orientasi dan pra-penempatan MT perusahaan.',
  },
  {
    id: 'akpy-03',
    institutionId: 'akpy-stiper',
    institution: 'AKPY-STIPER (Akademi Komunitas Perkebunan Yogyakarta)',
    program: 'Learning Factory / Praktik Kebun Kelapa Sawit (Learning by Doing)',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Praktik Lapangan', 'Teknis Perkebunan', 'Disiplin', 'Akademik'],
    targetParticipants: 'Mahasiswa Diploma I (Prodi Pemeliharaan Tanaman Kelapa Sawit & Prodi Pembibitan Kelapa Sawit — Beasiswa BPDPKS)',
    description:
      'Kegiatan praktik kerja lapangan wajib setelah mahasiswa menempuh sekitar 5 bulan teori di kampus, menggunakan pendekatan learning by doing langsung di kebun pendidikan (KP2 Ungaran) untuk membentuk calon mandor dan krani profesional.',
    activitiesAndMaterials:
      'Praktik langsung pembibitan, pemeliharaan tanaman, budidaya dan penanganan tanaman kelapa sawit di laboratorium kebun, pembiasaan ritme dan budaya kerja kebun nyata.',
    duration: 'Dilaksanakan setelah ±5 bulan pembelajaran teori di kampus (durasi minggu spesifik Learning Factory tidak tertulis pada artikel)',
    schedule: 'Setelah menyelesaikan fase teori 5 bulan pada program D1',
    frequency: 'Program wajib kurikulum D1',
    deliveryMethod: 'Learning by doing / praktik kebun langsung di Kebun Pendidikan dan Penelitian (KP2)',
    objectives:
      'Mendidik calon mandor dan krani profesional dengan memperdalam pengetahuan teknis, karakter, dan budaya kerja kebun kelapa sawit.',
    evaluation: 'Pengamatan praktik lapangan dan ketercapaian keterampilan teknis kebun (rubrik rinci tidak dicantumkan pada sumber)',
    year: '2025',
    sourceUrl: 'https://akpy-stiper.ac.id/Berita/25-learning-factory-dalami-materi-dan-praktik-kebun-sawit',
    sourceLabel: 'AKPY-STIPER — Learning Factory Dalami Materi dan Praktik Kebun Sawit',
    notes: 'Artikel resmi menegaskan porsi teori 5 bulan sebelum terjun penuh ke praktik lapangan Learning Factory.',
  },
  {
    id: 'akpy-04',
    institutionId: 'akpy-stiper',
    institution: 'AKPY-STIPER (Akademi Komunitas Perkebunan Yogyakarta)',
    program: 'Magang Industri & Malam Inagurasi Pelepasan D1 Sawit Nasional',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Praktik Lapangan', 'Teknis Perkebunan', 'Soft Skills', 'Mental'],
    targetParticipants: 'Mahasiswa Program Diploma I (D1) AKPY-STIPER',
    description:
      'Pelepasan resmi mahasiswa D1 menuju perusahaan perkebunan kelapa sawit mitra nasional (Best Agro, Teladan Prima Agro, Goodhope, Palma Serasih, MSAL Group, Karyamas, dll.) sebagai jembatan link and match menuju penyerapan kerja.',
    activitiesAndMaterials:
      'Seremoni Malam Inagurasi dihadiri Ditjenbun Kementan, BPDP, dan perusahaan mitra; penempatan on-the-job training di sentra sawit nasional; pendampingan operasional kebun nyata.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Pelepasan tercatat pada 22 Mei 2026 menuju fase magang industri akhir program D1',
    frequency: 'Program wajib akhir tahun akademik D1',
    deliveryMethod: 'On-the-job training (magang industri langsung di perkebunan mitra)',
    objectives:
      'Menghubungkan kompetensi vokasi lulusan dengan standar kerja perusahaan mitra dan mempercepat serapan kerja (indent/rekrutmen langsung).',
    evaluation: 'Penilaian performa magang oleh perusahaan mitra sebagai dasar kelulusan dan penyerapan kerja',
    year: '2026',
    sourceUrl: 'https://akpy-stiper.ac.id/Berita/25-malam-inagurasi-akpy-stiper-2026-lepas-mahasiswa-d1-siap-terjun-ke-industri-sawit-nasional',
    sourceLabel: 'AKPY-STIPER — Malam Inagurasi 2026 Lepas Mahasiswa D1 ke Industri Sawit',
    notes: 'Menunjukkan keterlibatan langsung pemangku kepentingan pemerintah (Ditjenbun, BPDP) dan grup industri dalam transisi magang.',
  },

  // ================= 4. POLBANGTAN MEDAN =================
  {
    id: 'pbm-01',
    institutionId: 'polbangtan-medan',
    institution: 'Polbangtan Medan (Politeknik Pembangunan Pertanian Medan)',
    program: 'Masa Bimbingan Dasar Mahasiswa (MABIDAMA) & Bela Negara',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['Fisik', 'Mental', 'Disiplin', 'Bela Negara', 'Teamwork'],
    targetParticipants: '216 mahasiswa baru Polbangtan Medan (Kementerian Pertanian)',
    description:
      'Program pembinaan dasar terpadu bagi mahasiswa baru guna menanamkan kedisiplinan harian asrama, integritas, wawasan kebangsaan, dan jiwa bela negara sejak hari pertama masuk kampus.',
    activitiesAndMaterials:
      'Registrasi dan pengenalan fasilitas asrama/ruang makan/masjid, pembiasaan rutinitas terjadwal mulai bangun pagi, ibadah bersama, senam pagi, upacara bendera/HUT Kemerdekaan, apel malam, peraturan baris-berbaris, serta materi bela negara lintas instansi.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Awal tahun akademik (bertepatan dengan bulan Agustus / peringatan HUT Kemerdekaan RI)',
    frequency: 'Tahunan (wajib bagi seluruh mahasiswa baru)',
    deliveryMethod: 'Orientasi berasrama, latihan fisik/senam pagi, upacara kedisiplinan, apel rutin, dan pembekalan kelas',
    objectives:
      'Membangun karakter tangguh, jiwa bela negara, kedisiplinan harian, dan tanggung jawab kolektif calon SDM pertanian dan perkebunan.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2025',
    sourceUrl: 'https://www.polbangtanmedan.ac.id/216-mahasiswa-polbangtan-kementan-ikut-mabidama-bangun-karakter-dan-jiwa-bela-negara/',
    sourceLabel: 'Polbangtan Medan — 216 Mahasiswa Ikut MABIDAMA Bangun Karakter & Bela Negara',
    notes: 'Situs resmi secara konkret mendokumentasikan pembiasaan rutinitas harian sejak hari pertama (bangun pagi, ibadah, senam pagi, hingga apel malam).',
  },
  {
    id: 'pbm-02',
    institutionId: 'polbangtan-medan',
    institution: 'Polbangtan Medan (Politeknik Pembangunan Pertanian Medan)',
    program: 'Pembinaan Kehidupan Asrama Terpadu (Unit Asrama)',
    programType: 'Rutinitas Harian Asrama',
    categories: ['Disiplin', 'Mental', 'Soft Skills', 'Fisik'],
    targetParticipants: 'Mahasiswa berasrama Polbangtan Medan',
    description:
      'Sistem pengasuhan asrama resmi di bawah Unit Asrama Polbangtan Medan yang mengintegrasikan pengelolaan akomodasi, konsumsi, kesehatan, kebersihan lingkungan, serta pembinaan akhlak, karakter, dan budaya pertanian.',
    activitiesAndMaterials:
      'Pelaksanaan Tata Kehidupan Kampus Mahasiswa, pembinaan akhlak & karakter, pengembangan minat dan bakat, pengawasan kebersihan asrama/ruang makan/dapur, pembinaan budaya pertanian, serta pemantauan kesehatan mahasiswa.',
    duration: 'Sepanjang masa tinggal mahasiswa di asrama kampus (durasi tahun spesifik per angkatan tidak dirinci pada laman profil)',
    schedule: 'Berlangsung harian mengikuti Tata Kehidupan Kampus Mahasiswa',
    frequency: 'Harian (berkelanjutan selama berasrama)',
    deliveryMethod: 'Pengasuhan asrama terpadu (boarding system), pengawasan berkala, dan pembinaan karakter harian',
    objectives:
      'Menanamkan kedisiplinan hidup teratur, kebersihan, akhlak, kesehatan fisik, dan etos budaya kerja pertanian/perkebunan.',
    evaluation: 'Pengawasan rutin dan laporan evaluasi pengelolaan pembinaan oleh Unit Asrama',
    year: '2025',
    sourceUrl: 'https://www.polbangtanmedan.ac.id/asrama/',
    sourceLabel: 'Polbangtan Medan — Profil & Uraian Tugas Unit Asrama',
    notes: 'Jam rinci bangun-tidur asrama tidak dipublikasikan sebagai tabel jam terbuka di halaman ini.',
  },
  {
    id: 'pbm-03',
    institutionId: 'polbangtan-medan',
    institution: 'Polbangtan Medan (Politeknik Pembangunan Pertanian Medan)',
    program: 'Pembekalan Magang Berdampak ("Become to Outcome")',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['Teknis Perkebunan', 'Leadership', 'Teamwork', 'Soft Skills', 'Disiplin', 'Manajemen'],
    targetParticipants: '225 mahasiswa Prodi Teknologi Produksi Tanaman Perkebunan (termasuk 94 mahasiswa Semester V Kelas B, C, D bersama DGL Learning Institute)',
    description:
      'Program pembekalan intensif pra-magang TA 2026/2027 yang menjembatani teori akademik dengan praktik nyata di industri kelapa sawit melalui kolaborasi praktisi dan lembaga pelatihan profesional.',
    activitiesAndMaterials:
      'Pemahaman rantai industri kelapa sawit dari hulu ke hilir, kompetensi teknis kebun dan pabrik, kedisiplinan dan integritas kerja, komunikasi efektif, kepemimpinan (leadership), simulasi kesiapan menghadapi magang, serta sesi outbound untuk membangun kerja sama tim dan kekompakan.',
    duration: '2 hari (tercatat untuk kelompok kolaborasi DGL Learning Institute: 18–19 Agustus 2026)',
    schedule: '18–19 Agustus 2026 (memasuki periode Magang Berdampak TA 2026/2027)',
    frequency: 'Periodik per angkatan sebelum penerjunan magang',
    deliveryMethod: 'Kelas interaktif bersama praktisi/mitra pelatihan, simulasi kesiapan kerja, dan outbound teamwork',
    objectives:
      'Memastikan mahasiswa siap secara teknis (hulu-hilir sawit), manajerial, komunikasi, kepemimpinan, dan kekompakan tim sebelum memasuki perusahaan perkebunan.',
    evaluation: 'Simulasi kesiapan menghadapi magang (indikator nilai rinci tidak dicantumkan pada berita)',
    year: '2026',
    sourceUrl: 'https://www.polbangtanmedan.ac.id/pembekalan-magang-berdampak-225-mahasiswa-polbangtan-kementan-siap-masuk-dunia-industri-perkebunan/',
    sourceLabel: 'Polbangtan Medan — Pembekalan Magang Berdampak 225 Mahasiswa TPTP (2026)',
    notes: 'Sumber resmi sangat konkret: memuat tanggal pasti (18–19 Agustus 2026), jumlah peserta (225 total / 94 per klaster), mitra pelaksana (DGL Learning Institute), dan adanya sesi outbound.',
  },
  {
    id: 'pbm-04',
    institutionId: 'polbangtan-medan',
    institution: 'Polbangtan Medan (Politeknik Pembangunan Pertanian Medan)',
    program: 'Teaching Factory (TEFA) Perkebunan',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Praktik Lapangan', 'Teknis Perkebunan', 'Manajemen', 'Akademik'],
    targetParticipants: 'Mahasiswa vokasi Polbangtan Medan (termasuk Prodi Teknologi Produksi Tanaman Perkebunan)',
    description:
      'Model pembelajaran berbasis praktik produksi nyata di lingkungan kampus yang menyimulasikan suasana kerja sesungguhnya sesuai standar Dunia Usaha dan Dunia Industri (DUDI).',
    activitiesAndMaterials:
      'Pelayanan kegiatan praktik produksi dalam atmosfer kerja nyata DUDI, pengelolaan unit produksi dan perbenihan perkebunan, integrasi pembelajaran terapan dengan riset dan pengabdian masyarakat.',
    duration: 'Terintegrasi dalam semester perkuliahan vokasi (durasi jam praktik spesifik tidak dirinci pada laman profil)',
    schedule: 'Sepanjang semester akademik sesuai jadwal praktikum unit TEFA',
    frequency: 'Rutin mingguan/semesteran',
    deliveryMethod: 'Praktik produksi langsung (work-based learning) berstandar pasar/DUDI',
    objectives:
      'Membentuk kompetensi teknis, manajerial, dan kewirausahaan mahasiswa di bidang perkebunan melalui pengalaman produksi nyata.',
    evaluation: 'Kualitas output produksi sesuai tuntutan pasar/standar DUDI (rubrik rinci tidak dipublikasikan pada laman profil)',
    year: '2025',
    sourceUrl: 'https://www.polbangtanmedan.ac.id/teaching-factory-tefa/',
    sourceLabel: 'Polbangtan Medan — Teaching Factory (TEFA)',
    notes: 'Sesuai pedoman pendidikan vokasi Kementerian Pertanian untuk menjembatani kesenjangan praktikum laboratorium dengan kondisi kerja industri.',
  },

  // ================= 5. INSTIPER YOGYAKARTA =================
  {
    id: 'ins-01',
    institutionId: 'instiper',
    institution: 'INSTIPER Yogyakarta (Institut Pertanian STIPER)',
    program: 'Praktik Lapangan (PL) Wajib Perkebunan & Pengolahan',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Praktik Lapangan', 'Teknis Perkebunan', 'Akademik', 'Teamwork'],
    targetParticipants: 'Mahasiswa INSTIPER (umumnya Semester 5 dengan prasyarat minimal 80 SKS)',
    description:
      'Kegiatan kurikuler wajib (umumnya 3 SKS) sebelum fase magang industri, dirancang untuk mengasah keterampilan teknis lapangan dan pola pikir logis mahasiswa di Kebun Pendidikan dan Penelitian (KP2) maupun mitra industri.',
    activitiesAndMaterials:
      'Pembekalan teknis sebelum turun lapangan; praktik langsung perawatan tanaman, pemupukan, pengendalian gulma, pemanenan Tandan Buah Segar (TBS) kelapa sawit, mekanisasi pertanian, serta pengolahan hasil perkebunan.',
    duration: '1 minggu pembekalan + 7 minggu pelaksanaan Praktik Lapangan (total 8 minggu)',
    schedule: 'Tercantum resmi pada Kalender Akademik INSTIPER (fase pembekalan dilanjutkan 7 minggu lapangan)',
    frequency: 'Program wajib kurikuler (1 kali sebelum magang industri)',
    deliveryMethod: 'Pembekalan kelas + praktik kebun/pabrik langsung di KP2 dan mitra industri',
    objectives:
      'Memastikan mahasiswa menguasai keterampilan teknis dasar budidaya/pengolahan secara nyata sebelum terjun ke program magang 4–6 bulan.',
    evaluation: 'Penilaian akademik mata kuliah Praktik Lapangan (3 SKS) berdasarkan pelaksanaan dan laporan praktik',
    year: '2025',
    sourceUrl: 'https://www.infoakademik.instiperjogja.ac.id/assets/pdf/KALENDER_AKADEMIK.pdf',
    sourceLabel: 'INSTIPER Yogyakarta — PDF Kalender Akademik Resmi',
    notes: 'Durasi eksak (1 minggu pembekalan + 7 minggu pelaksanaan) terverifikasi langsung dari PDF Kalender Akademik resmi INSTIPER.',
  },
  {
    id: 'ins-02',
    institutionId: 'instiper',
    institution: 'INSTIPER Yogyakarta (Institut Pertanian STIPER)',
    program: 'Pembekalan Magang Tingkat Institut',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['Soft Skills', 'K3', 'Disiplin', 'Mental'],
    targetParticipants: '690 mahasiswa INSTIPER calon peserta magang tahun 2026',
    description:
      'Program pembekalan massal terstruktur tingkat institut di Grha INSTIPER untuk memastikan seluruh mahasiswa memiliki kesiapan mental, etika kerja, dan pemahaman perlindungan kerja sebelum berangkat ke 79 perusahaan mitra.',
    activitiesAndMaterials:
      'Etika dan profesionalisme kerja, perlindungan kerja dan keselamatan melalui BPJS Ketenagakerjaan, peran mahasiswa sebagai duta kampus, strategi adaptasi dari dunia akademik ke dunia industri, pembuatan dokumentasi/konten selama magang, serta sesi berbagi pengalaman alumni dan praktisi industri.',
    duration: '2 hari pelaksanaan',
    schedule: 'Bulan Juli (menjelang pelepasan magang 30 Juli 2026) bertempat di Grha INSTIPER',
    frequency: 'Tahunan (wajib bagi calon peserta magang)',
    deliveryMethod: 'Seminar/pembekalan klasikal massal, sharing session alumni & praktisi industri',
    objectives:
      'Memperkuat kesiapan etika, keselamatan/perlindungan kerja, dan kemampuan adaptasi mahasiswa menghadapi ritme kerja di perkebunan.',
    evaluation: 'Kehadiran dan kelengkapan kesiapan keberangkatan magang (ujian tertulis tidak disebut pada sumber)',
    year: '2026',
    sourceUrl: 'https://home.instiperjogja.ac.id/berita/dari-kampus-ke-dunia-industri-690-mahasiswa-instiper-ikuti-pembekalan-magang',
    sourceLabel: 'INSTIPER Yogyakarta — 690 Mahasiswa Ikuti Pembekalan Magang (2 Hari)',
    notes: 'Sangat baik sebagai benchmark materi pra-penempatan karena secara eksplisit memasukkan modul perlindungan kerja (BPJS Ketenagakerjaan) dan adaptasi budaya kerja.',
  },
  {
    id: 'ins-03',
    institutionId: 'instiper',
    institution: 'INSTIPER Yogyakarta (Institut Pertanian STIPER)',
    program: 'Program Magang Industri Kurikulum Berdampak / MBKM',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Praktik Lapangan', 'Teknis Perkebunan', 'Manajemen', 'Soft Skills'],
    targetParticipants: '671 mahasiswa INSTIPER lintas fakultas/prodi (pelepasan 30 Juli 2026)',
    description:
      'Program magang industri jangka panjang di 79 mitra perusahaan perkebunan kelapa sawit, non-sawit, dan kehutanan yang tersebar di 18 provinsi (terbanyak Kalimantan Tengah, Sumatera Utara, dan Kalimantan Barat).',
    activitiesAndMaterials:
      'Keterlibatan langsung dalam operasional bisnis perkebunan sawit secara menyeluruh: pembibitan (nursery), pemeliharaan tanaman, panen TBS, pengolahan di Pabrik Kelapa Sawit (PKS) hingga CPO, serta tugas analisis/manajemen lapangan.',
    duration: '4–6 bulan penuh di lokasi mitra industri',
    schedule: 'Pelepasan resmi 30 Juli 2026 di Lapangan Grha INSTIPER untuk masa penempatan 4–6 bulan',
    frequency: 'Program wajib kurikuler / MBKM (1 semester penuh)',
    deliveryMethod: 'Imersi kerja penuh di perusahaan mitra (on-the-job immersion) di 18 provinsi',
    objectives:
      'Menghubungkan teori akademik dengan realitas bisnis perkebunan skala besar serta menghasilkan lulusan yang siap memimpin operasional lapangan.',
    evaluation: 'Penilaian pembimbing industri, pelaporan akhir, dan konversi SKS kurikulum terdampak/MBKM',
    year: '2026',
    sourceUrl: 'https://home.instiperjogja.ac.id/berita/instiper-lepas-671-mahasiswa-magang-ke-79-mitra-industri-di-18-provinsi-indonesia',
    sourceLabel: 'INSTIPER Yogyakarta — Pelepasan 671 Mahasiswa Magang ke 79 Mitra Industri',
    notes: 'Salah satu program praktik lapangan terpanjang dan terbesar skalanya dalam benchmark ini dengan durasi eksplisit 4–6 bulan.',
  },
  {
    id: 'ins-04',
    institutionId: 'instiper',
    institution: 'INSTIPER Yogyakarta (Institut Pertanian STIPER)',
    program: 'Praktik Lapang Terpadu di Kebun Pendidikan dan Penelitian (KP2)',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Praktik Lapangan', 'Teknis Perkebunan', 'Akademik'],
    targetParticipants: 'Mahasiswa program sarjana INSTIPER',
    description:
      'Pelaksanaan praktikum lapangan terpadu di Kebun Pendidikan dan Penelitian (KP2) milik INSTIPER yang ditinjau langsung oleh LLDIKTI Wilayah V sebagai bukti kesesuaian kurikulum dengan kebutuhan industri perkebunan.',
    activitiesAndMaterials:
      'Simulasi dan praktik budidaya lapangan langsung di kebun pendidikan, pengamatan agronomi tanaman perkebunan, serta pengenalan alat dan teknik operasional kebun.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Terjadwal rutin pada kalender praktikum semester',
    frequency: 'Periodik per semester',
    deliveryMethod: 'Praktik langsung di kebun pendidikan (KP2) di bawah bimbingan dosen dan teknisi kebun',
    objectives:
      'Memastikan keterkaitan kuat antara teori kuliah dengan praktik budidaya riil sebelum mahasiswa menghadapi perusahaan perkebunan.',
    evaluation: 'Evaluasi praktikum lapangan oleh dosen pengampu (format rinci tidak dicantumkan pada berita)',
    year: '2024',
    sourceUrl: 'https://home.instiperjogja.ac.id/berita/tinjau-praktek-lapang-mahasiswa-instiper-kepala-lldikti-v-apresiasi-kurikulum-instiper-sesuai-dengan-kebutuhan-dunia-industri',
    sourceLabel: 'INSTIPER Yogyakarta — Tinjauan LLDIKTI V pada Praktik Lapang Mahasiswa',
    notes: 'Memperkuat validitas bahwa praktik kebun dijalankan secara nyata di fasilitas KP2 milik kampus, bukan sekadar simulasi kelas.',
  },

  // ================= 6. POLITEKNIK CWE =================
  {
    id: 'cwe-01',
    institutionId: 'poltek-cwe',
    institution: 'Politeknik Kelapa Sawit Citra Widya Edukasi (Poltek CWE)',
    program: 'Estate Management Training (Pelatihan Manajemen Perkebunan)',
    programType: 'Pelatihan Profesional',
    categories: ['Teknis Perkebunan', 'Praktik Lapangan', 'Manajemen'],
    targetParticipants: 'Mahasiswa, calon asisten kebun, karyawan perusahaan perkebunan, dan profesional industri sawit',
    description:
      'Program pelatihan khusus berbasis industri yang dirancang dengan komposisi 90% pelatihan praktis turun lapang untuk mendalami manajemen operasional perkebunan kelapa sawit dari hulu hingga panen.',
    activitiesAndMaterials:
      'Pembibitan kelapa sawit (nursery), pemeliharaan tanaman, pengendalian gulma, pemupukan, teknik panen TBS, transportasi hasil panen, serta manajemen operasional kebun.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Sesuai kalender pelatihan khusus / in-house Poltek CWE',
    frequency: 'Program pelatihan khusus (periodik / sesuai permintaan industri)',
    deliveryMethod: '90% praktik langsung turun lapangan + 10% teori terstruktur',
    objectives:
      'Meningkatkan kompetensi teknis operasional dan manajerial kebun agar peserta siap bertugas sebagai asisten kebun maupun wirausaha sawit.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2025',
    sourceUrl: 'https://www.poltekcwe.ac.id/program-pelatihan/estate-management-training/',
    sourceLabel: 'Politeknik CWE — Halaman Resmi Estate Management Training',
    notes: 'Halaman resmi menegaskan angka 90% pelatihan praktis turun lapang dan 2.000+ alumni peserta pelatihan, namun jumlah hari per batch tidak ditampilkan publik.',
  },
  {
    id: 'cwe-02',
    institutionId: 'poltek-cwe',
    institution: 'Politeknik Kelapa Sawit Citra Widya Edukasi (Poltek CWE)',
    program: 'Mill Management Training (Pelatihan Manajemen Pabrik Kelapa Sawit)',
    programType: 'Pelatihan Profesional',
    categories: ['Teknis Perkebunan', 'Praktik Lapangan', 'Manajemen', 'K3'],
    targetParticipants: 'Mahasiswa, calon asisten pabrik, operator, karyawan PKS, dan profesional industri sawit',
    description:
      'Pelatihan teknis dan manajerial khusus pengolahan di Pabrik Kelapa Sawit (PKS) yang memadukan teori singkat dengan 90% praktik operasional untuk meningkatkan efisiensi dan menekan kehilangan minyak (losses).',
    activitiesAndMaterials:
      'Operasional pengolahan PKS, pemecahan masalah teknis (technical troubleshooting), efisiensi proses pengolahan, manajemen mutu dan losses CPO/PK, serta tata kelola operasional pabrik.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Sesuai jadwal program pelatihan khusus Poltek CWE',
    frequency: 'Program pelatihan khusus (periodik / in-house)',
    deliveryMethod: '90% praktik lapangan/operasional pabrik mini & industri + teori terapan',
    objectives:
      'Membekali peserta dengan keterampilan teknis operasional pabrik kelapa sawit, troubleshooting mesin/proses, dan pengendalian mutu produksi.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2025',
    sourceUrl: 'https://www.poltekcwe.ac.id/program-pelatihan/mill-management-training/',
    sourceLabel: 'Politeknik CWE — Halaman Resmi Mill Management Training',
    notes: 'Salah satu sedikit institusi yang mempublikasikan jalur pelatihan terpisah secara jelas untuk Estate (Kebun) dan Mill (Pabrik).',
  },
  {
    id: 'cwe-03',
    institutionId: 'poltek-cwe',
    institution: 'Politeknik Kelapa Sawit Citra Widya Edukasi (Poltek CWE)',
    program: 'Praktik Kerja Lapangan (PKL) & Magang pada 100+ Mitra Industri',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Praktik Lapangan', 'Teknis Perkebunan', 'Akademik', 'Soft Skills'],
    targetParticipants: 'Mahasiswa D3 dan D4 Politeknik CWE (Prodi Budidaya, Pengolahan, Manajemen Logistik, Teknologi Produksi)',
    description:
      'Program wajib kurikulum vokasi berupa penempatan kerja langsung di perusahaan perkebunan dan pabrik kelapa sawit mitra (seperti Astra Agro Lestari, Triputra Agro Persada, Minamas, PTPN, dll.) dengan bimbingan supervisor lapangan.',
    activitiesAndMaterials:
      'Pelaksanaan kerja operasional di kebun, PKS, atau divisi logistik mitra industri; bimbingan langsung oleh mandor/asisten/supervisor lapangan; pengumpulan data operasional; serta penyusunan laporan akhir dan Tugas Akhir.',
    duration: 'Beberapa bulan sesuai kurikulum D3/D4 (durasi bulan seragam tidak tertulis eksplisit pada ringkasan bab pendahuluan repositori)',
    schedule: 'Terjadwal pada semester magang/PKL sesuai kalender akademik',
    frequency: 'Wajib per angkatan (kurikulum reguler vokasi)',
    deliveryMethod: 'Praktik kerja nyata di industri mitra + bimbingan supervisor + penyusunan laporan ilmiah/TA',
    objectives:
      'Mengaplikasikan ilmu vokasi di lingkungan kerja nyata, membangun etos kerja lapangan, dan membuka jalur rekrutmen langsung perusahaan mitra.',
    evaluation: 'Laporan kegiatan PKL/magang dan penyusunan karya ilmiah/Tugas Akhir sebagai syarat kelulusan',
    year: '2024',
    sourceUrl: 'https://repository.poltekcwe.ac.id/id/eprint/509/8/PENDAHULUAN.pdf',
    sourceLabel: 'Repositori Resmi Poltek CWE — Dokumen Tugas Akhir / PKL Industri',
    notes: 'Didukung juga klaim 100+ perusahaan mitra industri pada laman resmi Poltek CWE; durasi spesifik berbeda antar prodi D3 dan D4.',
  },
  {
    id: 'cwe-04',
    institutionId: 'poltek-cwe',
    institution: 'Politeknik Kelapa Sawit Citra Widya Edukasi (Poltek CWE)',
    program: 'Sertifikasi Kompetensi Profesi BNSP (LSP-PHI & LSP-TMI)',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Teknis Perkebunan', 'Manajemen', 'K3'],
    targetParticipants: 'Mahasiswa tingkat akhir / calon lulusan Ahli Madya (D3) dan Sarjana Terapan (D4) Poltek CWE',
    description:
      'Uji sertifikasi kompetensi profesi bekerja sama dengan lembaga sertifikasi berlisensi BNSP (LSP Perkebunan dan Hortikultura Indonesia / LSP-PHI serta LSP Teknik dan Manajemen Industri / LSP-TMI) sebelum wisuda.',
    activitiesAndMaterials:
      'Uji kompetensi skema Asisten Kebun Kelapa Sawit dan Asisten Pengolahan Pabrik Kelapa Sawit sesuai standar SKKNI dan BNSP.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Menjelang kelulusan/wisuda tahunan',
    frequency: 'Periodik tahunan bagi calon lulusan',
    deliveryMethod: 'Assessment kompetensi profesi oleh asesor resmi BNSP',
    objectives:
      'Memastikan seluruh lulusan terverifikasi kompeten secara nasional pada jabatan operasional inti industri sawit.',
    evaluation: 'Penerbitan sertifikat kompetensi BNSP bagi peserta yang dinyatakan kompeten',
    year: '2023',
    sourceUrl: 'https://www.infosawit.com/2023/10/16/poltek-cwe-luluskan-sarjana-terapan-dan-ahli-madya-serta-capai-segudang-prestasi-diraih/',
    sourceLabel: 'InfoSawit — Wisuda & Capaian Sertifikasi Kompetensi Poltek CWE',
    notes: 'Menunjukkan standar ganda (ijazah vokasi + sertifikat kompetensi profesi BNSP) yang relevan untuk seleksi MT/Asisten perusahaan.',
  },
  {
    id: 'cwe-05',
    institutionId: 'poltek-cwe',
    institution: 'Politeknik Kelapa Sawit Citra Widya Edukasi (Poltek CWE)',
    program: 'Orientasi Mahasiswa Baru, Latihan Dasar Kedisiplinan (Latsar) & LDKM',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['Disiplin', 'Mental', 'Fisik', 'Leadership', 'Teamwork'],
    targetParticipants: 'Mahasiswa baru dan pengurus organisasi kemahasiswaan Politeknik CWE',
    description:
      'Rangkaian pembinaan karakter awal mencakup orientasi kampus (PKKMB/MPOMB), latihan dasar kedisiplinan dan mental bersama instansi militer/TNI AD, serta Latihan Dasar Kepemimpinan Mahasiswa (LDKM) untuk penguatan organisasi.',
    activitiesAndMaterials:
      'Pengenalan kultur kampus vokasi sawit, latihan kedisiplinan fisik-mental (Latsar/Bintalsik), pelatihan kepemimpinan dasar dan manajemen organisasi kemahasiswaan (LDKM).',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Awal masa perkuliahan dan periode regenerasi organisasi mahasiswa',
    frequency: 'Tahunan per angkatan',
    deliveryMethod: 'Orientasi kelas, pelatihan disiplin outdoor/militer, dan pelatihan kepemimpinan organisasi',
    objectives:
      'Membentuk karakter sigap, tangguh, disiplin tinggi, serta jiwa kepemimpinan organisatoris mahasiswa vokasi kelapa sawit.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2023',
    sourceUrl: 'https://repository.poltekcwe.ac.id/521/1/pendahuluan.pdf',
    sourceLabel: 'Repositori Resmi Poltek CWE — Dokumen Akademik & Pembinaan Mahasiswa',
    notes: 'Keterbatasan data: jadwal rinci harian dan silabus tertulis Latsar/LDKM tidak tersedia terbuka sebagai dokumen panduan publik.',
  },

  // ================= 7. ITSI (INSTITUT TEKNOLOGI SAWIT INDONESIA) =================
  {
    id: 'itsi-01',
    institutionId: 'itsi',
    institution: 'Institut Teknologi Sawit Indonesia (ITSI)',
    program: 'Pekan Orientasi Studi dan Perkebunan (POSBUN)',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['Mental', 'Fisik', 'Disiplin', 'Akademik', 'Teamwork'],
    targetParticipants: '572 mahasiswa baru ITSI TA 2024/2025 (Prodi Budidaya Perkebunan, TPHP, Agribisnis, Teknik Kimia, STI, Proteksi Tanaman)',
    description:
      'Agenda orientasi wajib khas ITSI (eks STIP-AP Medan) yang menggabungkan pengenalan sistem akademik dengan pembinaan fisik-mental, kedisiplinan, dan pengenalan kultur industri perkebunan kelapa sawit.',
    activitiesAndMaterials:
      'Sosialisasi dan persiapan atribut, pembinaan mental, fisik, dan kedisiplinan oleh panitia dan kakak regu, penelusuran minat bakat, bakti kampus, pemaparan sistem akademik, serta pengenalan profil industri perkebunan sawit.',
    duration: '1 pekan (tercermin dari nama program "Pekan Orientasi", berpuncak Sabtu 21 September 2024; jumlah jam rinci tidak dicantumkan)',
    schedule: 'September 2024 (puncak pelaksanaan Sabtu, 21 September 2024 di Kampus ITSI Medan)',
    frequency: 'Tahunan (1 kali bagi mahasiswa baru)',
    deliveryMethod: 'Orientasi kampus, kegiatan lapangan/regu, pembinaan disiplin, dan pemaparan materi',
    objectives:
      'Menanamkan identitas dan kedisiplinan khas SDM perkebunan sejak awal kuliah serta memperkenalkan struktur studi lintas prodi sawit.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2024',
    sourceUrl: 'https://itsi.ac.id/index.php/572-mahasiswa-baru-institut-teknologi-sawit-indonesia-ikuti-pekan-orientasi-studi-dan-perkebunan-posbun-tahun-2024/',
    sourceLabel: 'ITSI — 572 Mahasiswa Baru Ikuti POSBUN Tahun 2024',
    notes: 'Sumber resmi kampus mencantumkan sebaran peserta per prodi (200 BDP, 94 TPHP, dll.), namun rincian jadwal harian per jam tidak dimuat.',
  },
  {
    id: 'itsi-02',
    institutionId: 'itsi',
    institution: 'Institut Teknologi Sawit Indonesia (ITSI)',
    program: 'Bimbingan Teknis (Bimtek) & Pembinaan Mental, Fisik, Disiplin (Bintalfisdis) Pra-PKL',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['Fisik', 'Mental', 'Disiplin', 'Soft Skills', 'Teknis Perkebunan'],
    targetParticipants: 'Mahasiswa tingkat dua ITSI yang akan melaksanakan Praktik Kerja Lapangan (PKL)',
    description:
      'Program persiapan terpadu menjelang keberangkatan PKL yang memadukan pembinaan fisik-mental-disiplin bersama pelatih TNI dan pembekalan etos kerja bersama praktisi HRD perusahaan perkebunan.',
    activitiesAndMaterials:
      'Latihan ketahanan fisik dan kedisiplinan bersama unsur TNI, pembekalan mentality mindset dan budaya kerja perkebunan oleh praktisi HRD industri sawit, serta bimbingan teknis praktik lapangan kebun/pabrik.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Dilaksanakan sebelum pemberangkatan PKL (tercatat publikasi 9 Juni 2023)',
    frequency: 'Tahunan / periodik pra-PKL',
    deliveryMethod: 'Pelatihan fisik-disiplin lapangan (kolaborasi TNI) + kelas bimbingan teknis bersama HRD industri',
    objectives:
      'Membekali mahasiswa dengan ketahanan mental, kebugaran fisik, disiplin lapangan, dan mindset kerja yang dibutuhkan agar cepat beradaptasi saat PKL di kebun/pabrik.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2023',
    sourceUrl: 'https://medan.tribunnews.com/2023/06/09/itsi-berikan-bimbingan-teknis-dan-pembinaan-mental-fisik-disiplin-bagi-mahasiswa',
    sourceLabel: 'Tribun Medan — ITSI Berikan Bimtek dan Bintalfisdis Bagi Mahasiswa',
    notes: 'Kolaborasi ganda (TNI untuk fisik-disiplin + HRD Perkebunan untuk mindset kerja) adalah praktik terbaik yang langsung dapat diadaptasi oleh perusahaan sawit.',
  },
  {
    id: 'itsi-03',
    institutionId: 'itsi',
    institution: 'Institut Teknologi Sawit Indonesia (ITSI)',
    program: 'Praktik Kerja Lapangan (PKL) & Magang Industri Berbasis OBE/MBKM',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Praktik Lapangan', 'Teknis Perkebunan', 'Akademik'],
    targetParticipants: 'Mahasiswa Fakultas Vokasi (D4) dan Fakultas Sains & Teknologi ITSI',
    description:
      'Implementasi kurikulum berbasis Outcome-Based Education (OBE) dan MBKM melalui penempatan PKL/magang di mitra strategis seperti PTPN Group dan perusahaan perkebunan kelapa sawit nasional.',
    activitiesAndMaterials:
      'Penempatan operasional di perusahaan perkebunan/pabrik mitra, pengamatan dan pengerjaan proyek berbasis capaian pembelajaran (OBE), serta penyusunan laporan praktik/riset terapan.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Mengikuti kalender akademik semester PKL/MBKM ITSI',
    frequency: 'Program wajib kurikuler per angkatan',
    deliveryMethod: 'Praktik lapangan industri (on-the-job learning) dan proyek terapan berbasis OBE',
    objectives:
      'Mendekatkan mahasiswa pada realitas teknis operasional sawit dan meningkatkan kesiapan penyerapan ke program Management Trainee (MT) maupun staf perkebunan.',
    evaluation: 'Evaluasi capaian pembelajaran (OBE) dan laporan PKL/magang',
    year: '2024',
    sourceUrl: 'https://itsi.ac.id/index.php/program-studi/sistem-dan-teknologi-informasi/',
    sourceLabel: 'ITSI — Informasi Kurikulum OBE/MBKM & Kemitraan Magang Industri',
    notes: 'Durasi minggu/bulan rinci per program studi tidak dipublikasikan terbuka pada halaman profil prodi.',
  },

  // ================= 8. BPDP / BPDPKS & DITJENBUN =================
  {
    id: 'bpdp-01',
    institutionId: 'bpdp-ditjenbun',
    institution: 'BPDP / BPDPKS & Ditjenbun Kementerian Pertanian',
    program: 'Pelatihan Teknis ISPO (Indonesian Sustainable Palm Oil) & Kebun Berkelanjutan',
    programType: 'Pelatihan Profesional',
    categories: ['Lingkungan', 'Teknis Perkebunan', 'Manajemen', 'K3'],
    targetParticipants: 'Pekebun kelapa sawit, pengurus kelembagaan/koperasi pekebun, dan pendamping lapangan',
    description:
      'Pelatihan teknis intensif yang didanai BPDPKS bersama Ditjenbun Kementan dan Dinas Perkebunan/mitra pelatihan untuk meningkatkan pemahaman standar mutu dan keberlanjutan ISPO.',
    activitiesAndMaterials:
      'Prinsip dan kriteria sertifikasi ISPO, legalitas lahan dan kelembagaan, pengelolaan kebun ramah lingkungan, pemenuhan standar K3 dan tata kelola berkelanjutan, serta penyusunan kesiapan sertifikasi ISPO.',
    duration: 'Sekitar 4–5 hari intensif (berdasarkan pola umum penyelenggaraan pelatihan akselerasi ISPO mitra BPDPKS; jam rinci per sesi berbeda antar lembaga penyelenggara)',
    schedule: 'Terjadwal per angkatan di provinsi sentra sawit (contoh: Sumatera Selatan, April 2024)',
    frequency: 'Periodik per angkatan / tahun anggaran',
    deliveryMethod: 'Kelas intensif, workshop penyusunan dokumen ISPO, dan kunjungan/praktik lapangan',
    objectives:
      'Membangun tata kelola usaha perkebunan kelapa sawit yang patuh hukum, ramah lingkungan, dan siap tersertifikasi ISPO.',
    evaluation: 'Pre-test, post-test, serta sertifikat penyelesaian pelatihan (rubrik skor rinci tergantung lembaga penyelenggara)',
    year: '2024',
    sourceUrl: 'https://www.bpdp.or.id/bpdpks-ditjenbun-dan-pt-sib-gelar-pelatihan-teknis-ispo-pekebun-sawit-sumsel-upaya-membangun-sawit-berkelanjutan',
    sourceLabel: 'BPDP Resmi — Pelatihan Teknis ISPO Pekebun Sawit Sumsel (2024)',
    notes: 'Rujukan kunci untuk kategori Lingkungan dan kepatuhan regulasi sawit berkelanjutan (ISPO).',
  },
  {
    id: 'bpdp-02',
    institutionId: 'bpdp-ditjenbun',
    institution: 'BPDP / BPDPKS & Ditjenbun Kementerian Pertanian',
    program: 'Program Pengembangan SDM PKS (Pelatihan Teknis Budidaya/GAP, Panen-Pascapanen, Pemetaan & Sarpras)',
    programType: 'Pelatihan Profesional',
    categories: ['Teknis Perkebunan', 'Praktik Lapangan', 'Lingkungan', 'Manajemen'],
    targetParticipants: 'Pekebun, keluarga pekebun, tenaga pendamping, dan SDM operasional perkebunan kelapa sawit nasional',
    description:
      'Skema nasional pelatihan teknis terstandar yang diatur dalam Panduan Teknis Seleksi Lembaga Penyelenggara Pelatihan SDMPKS BPDP guna meningkatkan produktivitas dan penerapan Good Agricultural Practices (GAP).',
    activitiesAndMaterials:
      'Pelatihan Teknis Budidaya Kelapa Sawit (pemilihan bibit unggul, pemupukan, pengendalian hama/gulma, GAP), Pelatihan Panen & Pascapanen (kriteria matang panen TBS, brondolan, minimasi susut), Pemetaan Lokasi Kebun, serta Pengelolaan Sarana Prasarana Perkebunan.',
    duration: 'Umumnya 4–6 hari (tercatat ±6 hari / 48 JP untuk teknis budidaya & 4–6 hari untuk panen-pascapanen sesuai proposal lembaga tersertifikasi)',
    schedule: 'Mengikuti kalender seleksi dan pelaksanaan tahunan (Panduan Teknis 2025)',
    frequency: 'Program nasional tahunan per batch',
    deliveryMethod: 'Fullboard/klasikal + praktik langsung di kebun percontohan bersama lembaga pelatihan terseleksi',
    objectives:
      'Meningkatkan produktivitas kebun, ketepatan teknik panen-pascapanen, dan penerapan standar praktik pertanian yang baik (GAP).',
    evaluation: 'Evaluasi teknis oleh lembaga penyelenggara pelatihan terseleksi dan pelaporan ke BPDP/Ditjenbun',
    year: '2025',
    sourceUrl: 'https://www.bpdp.or.id/uploads/2024/Panduan%20Teknis%20Seleksi%202025.pdf',
    sourceLabel: 'BPDP Resmi — PDF Panduan Teknis Seleksi Pelatihan SDMPKS 2025',
    notes: 'Dokumen PDF resmi pemerintah; rincian jam pelajaran per angkatan mengikuti proposal teknis masing-masing lembaga penyelenggara yang lolos seleksi.',
  },

  // ================= 9. PPKS / IOPRI =================
  {
    id: 'ppks-01',
    institutionId: 'ppks-iopri',
    institution: 'Pusat Penelitian Kelapa Sawit (PPKS / IOPRI)',
    program: 'Pelatihan Teknik Budidaya & Pengolahan Kelapa Sawit (On-Farm & Off-Farm) + In-House Training',
    programType: 'Pelatihan Profesional',
    categories: ['Teknis Perkebunan', 'Praktik Lapangan', 'Lingkungan'],
    targetParticipants: 'Manajer kebun, Asisten Kepala, Asisten Kebun/Tanaman, pengawas lapangan, praktisi perkebunan, dan dinas terkait',
    description:
      'Program peningkatan kompetensi teknis berbasis riset yang dipandu langsung oleh para peneliti ahli PPKS (S2/S3) mencakup operasional pra-panen (on-farm) hingga pasca-panen/pengolahan (off-farm), tersedia pula secara tematik in-house.',
    activitiesAndMaterials:
      'Aspek teknis budidaya kelapa sawit mutakhir (on-farm), teknik pengolahan hasil kelapa sawit (off-farm), identifikasi faktor kunci keberhasilan operasional, serta topik tematik khusus sesuai kebutuhan perusahaan.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Sesuai kalender pelatihan reguler PPKS atau jadwal permintaan in-house perusahaan',
    frequency: 'Periodik reguler dan on-demand (in-house training)',
    deliveryMethod: 'Pemaparan pakar/peneliti S2-S3, diskusi teknis kasus kebun/pabrik, dan kunjungan/praktik',
    objectives:
      'Memperluas wawasan dan penguasaan teknis operasional budidaya maupun pengolahan kelapa sawit berdasarkan hasil riset terbaru.',
    evaluation: 'Sertifikat pelatihan PPKS (metode ujian/evaluasi rinci tidak dipublikasikan pada laman katalog)',
    year: '2025',
    sourceUrl: 'https://iopri.co.id/productGroup/detail/pelatihan',
    sourceLabel: 'PPKS (IOPRI) — Layanan Resmi Pelatihan Teknis Kelapa Sawit',
    notes: 'Katalog resmi tidak mencantumkan durasi hari pasti per modul secara terbuka; perusahaan perlu meminta silabus penawaran resmi ke unit pelatihan PPKS.',
  },
  {
    id: 'ppks-02',
    institutionId: 'ppks-iopri',
    institution: 'Pusat Penelitian Kelapa Sawit (PPKS / IOPRI)',
    program: 'Pelatihan Tekno Ekonomi Budidaya, Pengolahan & Industri Hilir Kelapa Sawit',
    programType: 'Pelatihan Profesional',
    categories: ['Manajemen', 'Teknis Perkebunan', 'Akademik'],
    targetParticipants: 'Manajemen perkebunan, analis kredit/risiko perbankan perkebunan, staf pembiayaan, akademisi, dan pengambil keputusan bisnis',
    description:
      'Pelatihan khusus yang menghubungkan pemahaman teknis budidaya/pengolahan dengan kelayakan bisnis, analisis ekonomi makro-mikro, serta mitigasi risiko investasi perkebunan kelapa sawit.',
    activitiesAndMaterials:
      'Prospek usaha perkebunan dan pengolahan sawit skala makro dan mikro, identifikasi risiko dan antisipasi risiko usaha, faktor kunci sukses operasional, serta penilaian kelayakan teknis dan ekonomi rencana bisnis (feasibility).',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Berdasarkan jadwal pelatihan PPKS / permintaan korporat',
    frequency: 'Periodik / khusus',
    deliveryMethod: 'Kelas analitis bersama peneliti ahli PPKS, studi kasus kelayakan bisnis, dan diskusi risiko',
    objectives:
      'Membekali peserta agar mampu mengevaluasi kelayakan teknis dan ekonomi suatu rencana bisnis perkebunan/pengolahan serta mengantisipasi risikonya.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2025',
    sourceUrl: 'https://iopri.co.id/page/pelatihan',
    sourceLabel: 'PPKS (IOPRI) — Katalog Program Pelatihan Tekno Ekonomi',
    notes: 'Sangat berguna sebagai benchmark pelatihan lanjutan untuk level Asisten Kepala, Manajer Kebun, dan tim perencanaan korporat.',
  },

  // ================= 10. POLITEKNIK KAMPAR =================
  {
    id: 'pkm-01',
    institutionId: 'poltek-kampar',
    institution: 'Politeknik Kampar (POLKAM)',
    program: 'SEPORA 2 (Studi Pengenalan Orientasi Raya Mahasiswa — Wawasan Sawit & K3)',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['K3', 'Disiplin', 'Teknis Perkebunan', 'Soft Skills', 'Mental'],
    targetParticipants: 'Mahasiswa baru Politeknik Kampar (Bangkinang, Riau)',
    description:
      'Kegiatan orientasi raya mahasiswa baru yang membekali peserta dengan wawasan industri kelapa sawit, etika profesional, kedisiplinan, dan pengetahuan dasar Keselamatan dan Kesehatan Kerja (K3).',
    activitiesAndMaterials:
      'Pemaparan wawasan industri kelapa sawit hulu-hilir oleh narasumber berkompeten, pembekalan standar Keselamatan dan Kesehatan Kerja (K3), etika profesi, wawasan kebhinekaan, dan kesiapan menghadapi dunia pendidikan vokasi dan industri.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Dilaksanakan pada masa orientasi mahasiswa baru di lingkungan Kampus Politeknik Kampar',
    frequency: 'Tahunan (1 kali bagi mahasiswa baru)',
    deliveryMethod: 'Seminar/pembekalan klasikal menghadirkan narasumber praktisi dan sesi orientasi kampus',
    objectives:
      'Membentuk mahasiswa vokasi sawit yang beretika, disiplin, sadar keselamatan kerja (K3), dan memiliki wawasan dasar industri sejak semester awal.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2024',
    sourceUrl: 'https://demo-website.poltek-kampar.ac.id/detail-artikel/071224-dari-wawasan-sawit-hingga-k3-sepora-2-bekali-mahasiswa-politeknik-kampar-dengan-pengetahuan-dan-keterampilan',
    sourceLabel: 'Politeknik Kampar — Berita SEPORA 2 (Wawasan Sawit hingga K3)',
    notes: 'Keunggulan khusus: memasukkan materi K3 sejak hari orientasi awal. Catatan sumber: artikel berada pada portal demo-website resmi kampus dengan format tanggal sistem 07/12/24 pada URL.',
  },
  {
    id: 'pkm-02',
    institutionId: 'poltek-kampar',
    institution: 'Politeknik Kampar (POLKAM)',
    program: 'Magang Industri Kelapa Sawit & Seminar Magang',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Praktik Lapangan', 'Teknis Perkebunan', 'Akademik', 'Soft Skills'],
    targetParticipants: 'Mahasiswa D2/D3/D4 Politeknik Kampar (termasuk penerima Beasiswa SDM Sawit BPDPKS)',
    description:
      'Program magang industri wajib yang didukung kerja sama MoU kampus dengan perusahaan perkebunan dan PKS mitra, diakhiri dengan Seminar Magang sebagai evaluasi akademik.',
    activitiesAndMaterials:
      'Praktikum awal di laboratorium dan pabrik mini pengolahan kelapa sawit kampus, dilanjutkan penempatan magang industri di perusahaan mitra perkebunan/PKS, serta presentasi hasil pada Seminar Magang.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Dijadwalkan pada kalender akademik (umumnya awal semester genap) dilanjutkan Seminar Magang',
    frequency: 'Wajib per angkatan (kurikulum vokasi)',
    deliveryMethod: 'Praktik pabrik mini kampus + magang industri nyata + seminar evaluasi',
    objectives:
      'Memastikan lulusan menguasai operasional teknis perkebunan dan pengolahan sawit dari hulu ke hilir sesuai kebutuhan perusahaan.',
    evaluation: 'Seminar Magang dan penilaian pembimbing lapangan (bobot nilai rinci tidak ditemukan pada sumber)',
    year: '2024',
    sourceUrl: 'https://www.elaeis.co/berita/baca/mahasiswa-kesulitan-cari-tempat-magang-begini-tanggapan-politeknik-kampar',
    sourceLabel: 'Elaeis.co — Skema Penempatan Magang Industri Politeknik Kampar',
    notes: 'Keterbatasan data: durasi bulan magang dan panduan teknis penilaian belum ditemukan dalam bentuk PDF publik yang dapat diakses langsung.',
  },

  // ================= 11. ITP2I PELALAWAN =================
  {
    id: 'itp-01',
    institutionId: 'itp2i',
    institution: 'Institut Teknologi Perkebunan Pelalawan Indonesia (ITP2I)',
    program: 'PKKMB & Pembinaan Mental-Fisik Mahasiswa Baru (Model Pengasuhan Non-Perploncoan)',
    programType: 'Orientasi & Pembinaan Dasar',
    categories: ['Mental', 'Fisik', 'Disiplin', 'Akademik'],
    targetParticipants: '137 mahasiswa baru ITP2I tahun 2024 (termasuk penerima Beasiswa SDMPKS BPDPKS dari berbagai provinsi)',
    description:
      'Pengenalan Kehidupan Kampus bagi Mahasiswa Baru selama 7 hari yang menggabungkan latihan mental, fisik, dan disiplin dengan pendekatan pengasuhan humanis tanpa perploncoan/bullying.',
    activitiesAndMaterials:
      'Pembukaan oleh Rektor dan Pemkab Pelalawan, latihan pembinaan mental dan fisik, penanaman kedisiplinan tanpa perploncoan, bimbingan oleh senior sebagai pengasuh, serta pengenalan sistem perkuliahan berbasis teknologi perkebunan.',
    duration: '7 hari (8–14 Agustus 2024)',
    schedule: '8–14 Agustus 2024 di Kampus ITP2I Kabupaten Pelalawan, Riau',
    frequency: 'Tahunan (1 kali bagi mahasiswa baru)',
    deliveryMethod: 'Orientasi tatap muka, latihan fisik-mental lapangan, dan pendampingan pengasuhan (mentoring senior)',
    objectives:
      'Membentuk mental dan fisik mahasiswa baru yang tangguh dan disiplin dalam suasana pembinaan yang beradab, aman, dan suportif.',
    evaluation: 'Tidak ditemukan pada sumber',
    year: '2024',
    sourceUrl: 'https://riaubernas.com/news/detail/13313/dilatih-mental-dan-fisik-itp2i-gelar-pkkmb-bagi-para-mahasiswa-baru',
    sourceLabel: 'RiauBernas — Dilatih Mental dan Fisik, ITP2I Gelar PKKMB 137 Mahasiswa Baru (2024)',
    notes: 'Menonjolkan prinsip penting bagi perusahaan modern: disiplin fisik-mental ketat tetap bisa dijalankan dengan budaya pengasuhan anti-perploncoan.',
  },
  {
    id: 'itp-02',
    institutionId: 'itp2i',
    institution: 'Institut Teknologi Perkebunan Pelalawan Indonesia (ITP2I)',
    program: 'Praktikum Pilot Plant Pengolahan Sawit & Kerja Praktik (KP) Technopark Pelalawan',
    programType: 'Pendidikan Reguler & Praktik',
    categories: ['Praktik Lapangan', 'Teknis Perkebunan', 'Akademik'],
    targetParticipants: 'Mahasiswa S1 Agroteknologi, S1 Teknik Industri, dan S1 Teknologi Pasca Panen ITP2I',
    description:
      'Pembelajaran praktik terapan yang memanfaatkan lahan percobaan serta fasilitas pilot plant pengolahan minyak goreng kelapa sawit di Kawasan Technopark Pelalawan (Kampus II) yang dilanjutkan dengan Kerja Praktik di industri.',
    activitiesAndMaterials:
      'Praktikum laboratorium dan lahan percobaan, praktik proses pengolahan pasca panen di pilot plant minyak goreng sawit Technopark Pelalawan, serta Kerja Praktik (KP) pengamatan dan pengumpulan data di industri perkebunan/manufaktur.',
    duration: 'Tidak ditemukan pada sumber',
    schedule: 'Terintegrasi pada semester praktikum dan Kerja Praktik kurikulum S1',
    frequency: 'Rutin per semester / program wajib Kerja Praktik',
    deliveryMethod: 'Praktikum pilot plant & lahan percobaan + Kerja Praktik langsung di industri',
    objectives:
      'Membekali lulusan dengan keterampilan teknologi perkebunan dan pasca panen sawit dari skala laboratorium/pilot plant hingga realitas pabrik.',
    evaluation: 'Laporan Kerja Praktik dan evaluasi praktikum (rubrik rinci tidak dipublikasikan terbuka pada laman profil)',
    year: '2024',
    sourceUrl: 'https://itp2i-yap.ac.id/tentang-itp2i/',
    sourceLabel: 'ITP2I Resmi — Profil Institusi, Prodi & Fasilitas Pilot Plant Technopark',
    notes: 'Keterbatasan data: dokumen silabus lengkap dan durasi pasti Kerja Praktik belum tersedia terbuka di website utama kampus.',
  },
];

export const TARUNA_DAILY_SCHEDULE: TarunaDailySlot[] = [
  {
    id: 'td-01',
    timeRange: '04.30 – 04.40',
    durationLabel: '10 menit',
    activity: 'Bangun Pagi',
    category: 'Disiplin',
    details: 'Seluruh siswa bangun serentak sesuai jadwal resmi "Mata Kegiatan Rutin Terjadwal — Fondasi Disiplin Harian" untuk persiapan diri di asrama.',
    dayVariation: 'Hari Libur pukul 05.30 WIB.',
    palmOilAdaptation: 'Sangat relevan dengan jam bangun operasional perkebunan kelapa sawit agar calon asisten terbiasa memulai aktivitas sebelum fajar.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-02',
    timeRange: '04.40 – 05.15',
    durationLabel: '35 menit',
    activity: 'Ibadah Pagi',
    category: 'Mental',
    details: 'Pelaksanaan ibadah pagi secara tertib dan serentak sesuai agama dan keyakinan masing-masing siswa sebelum olahraga.',
    dayVariation: 'Dilaksanakan setiap hari; pada hari libur mengikuti penyesuaian jam bangun pukul 05.30 WIB.',
    palmOilAdaptation: 'Membangun landasan integritas moral, ketenangan mental, dan karakter beretika bagi calon pemimpin lapangan.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-03',
    timeRange: '05.15 – 06.15',
    durationLabel: '60 menit',
    activity: 'Olahraga Pagi',
    category: 'Fisik',
    details: 'Pembinaan kebugaran jasmani rutin setiap pagi selama 60 menit untuk menjaga stamina, ketahanan fisik, dan kesiapan aktivitas harian.',
    dayVariation: 'Dilaksanakan rutin setiap pagi sebelum makan pagi.',
    palmOilAdaptation: 'Ideal diadaptasi menjadi sesi kebugaran fisik 45–60 menit (lari/peregangan/stamina) untuk peserta MT/Calon Asisten Kebun agar kuat berjalan di ancak panen.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-04',
    timeRange: '06.15 – 06.45',
    durationLabel: '30 menit',
    activity: 'Makan Pagi',
    category: 'Disiplin',
    details: 'Sarapan bersama secara tertib dengan manajemen waktu terukur 30 menit sekaligus kesiapan seragam dinas harian sebelum apel.',
    dayVariation: 'Tepat selesai menjelang Apel Pagi pukul 06.45 WIB.',
    palmOilAdaptation: 'Membangun disiplin ketepatan waktu, kerapian APD (sepatu boots, helm, rompi), dan kebersamaan lintas peserta di mess pelatihan.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-05',
    timeRange: '06.45 – 07.00',
    durationLabel: '15 menit',
    activity: 'Apel Pagi',
    category: 'Leadership',
    details: 'Apel pagi harian untuk pengecekan kehadiran, pemeriksaan kerapian barisan, penegakan disiplin PBB, dan arahan kegiatan hari berjalan.',
    dayVariation: 'Rutin dilaksanakan setiap hari efektif sebelum dimulainya KBM klasikal.',
    palmOilAdaptation: 'Langsung mencerminkan tradisi "Morning Muster / Apel Pagi Afdeling" di perkebunan sawit — peserta MT bergiliran memimpin briefing & pembagian kerja.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-06',
    timeRange: '07.00 – 10.00',
    durationLabel: '3 jam',
    activity: 'Belajar (KBM) Klasikal — Sesi Pagi',
    category: 'Akademik',
    details: 'Pembelajaran akademik klasikal terstruktur yang mencakup kurikulum nasional dan Kurikulum Khusus (Kenusantaraan, Bela Negara, Kepemimpinan, Aeronautika).',
    dayVariation: 'Berlanjut hingga jeda ritual kebangsaan tepat pukul 10.00 WIB.',
    palmOilAdaptation: 'Di akademi perusahaan sawit: blok inti praktik lapangan kebun/pabrik pagi (saat cuaca optimal) atau sesi teori agronomi & pengolahan.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-07',
    timeRange: '10.00 WIB',
    durationLabel: 'Durasi menit tidak dirinci pada sumber',
    activity: 'Menyanyikan Lagu Indonesia Raya & Mengucapkan Pancasila',
    category: 'Bela Negara',
    details: 'Ritual harian kebangsaan yang dijadwalkan tepat pukul 10.00 WIB untuk menanamkan rasa nasionalisme dan nilai Pancasila dalam aktivitas sehari-hari.',
    dayVariation: 'Dilaksanakan rutin pada hari belajar efektif tepat pukul 10.00 WIB.',
    palmOilAdaptation: 'Dapat diadaptasi menjadi ritual singkat safety & integrity pledge (ikrar K3 & nilai inti perusahaan) secara konsisten di tengah/awal operasional.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-08',
    timeRange: '10.00 – 13.45',
    durationLabel: '±3 jam 45 menit (termasuk jeda KBM)',
    activity: 'Belajar (KBM) Klasikal — Sesi Lanjutan',
    category: 'Akademik',
    details: 'Kelanjutan pembelajaran klasikal setelah ritual pukul 10.00 WIB hingga memasuki waktu apel siang.',
    dayVariation: 'Pada Hari Jumat selesai lebih awal karena Apel Siang dimulai pukul 11.15 WIB.',
    palmOilAdaptation: 'Di perusahaan sawit: sesi analisis data lapangan (laporan panen, BJR, OER, losses) atau diskusi studi kasus operasional kebun/PKS.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-09',
    timeRange: '13.45 – 14.00',
    durationLabel: '15 menit',
    activity: 'Apel Siang',
    category: 'Disiplin',
    details: 'Apel penutup sesi pembelajaran klasikal untuk pengecekan barisan, ketertiban perpindahan kegiatan, dan pengumuman harian.',
    dayVariation: 'Hari Jumat dilaksanakan pukul 11.15 WIB.',
    palmOilAdaptation: 'Melatih disiplin pelaporan progres kerja tengah hari dan serah-terima instruksi operasional lapangan.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-10',
    timeRange: '14.00 – 15.00',
    durationLabel: '60 menit',
    activity: 'Makan Siang',
    category: 'Disiplin',
    details: 'Makan siang bersama secara tertib di lingkungan asrama sebelum memasuki blok kegiatan sore.',
    dayVariation: 'Hari Jumat menyesuaikan jadwal setelah Apel Siang pukul 11.15 WIB dan ibadah Jumat.',
    palmOilAdaptation: 'Melatih manajemen waktu istirahat terukur di mess/unit pelatihan perkebunan dan pabrik.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-11',
    timeRange: '15.00 – 18.30',
    durationLabel: '3 jam 30 menit (blok gabungan)',
    activity: 'Kegiatan Terprogram / Belajar Sore / Ekstrakurikuler',
    category: 'Teamwork',
    details: 'Blok pengembangan diri sore mencakup Kegiatan Terprogram Wajib (Pramuka, Bela Diri Kls X, Pidato & Diskusi Kls X, Praktikum IPA/Komputer) dan Pilihan (Olahraga, Seni, Keterampilan, Peleton) serta belajar sore.',
    dayVariation: 'Rincian menit antar sub-aktivitas sore (termasuk ibadah Ashar/Maghrib dan mandi sore) tidak dipecah per menit pada laman resmi.',
    palmOilAdaptation: 'Adaptasi menjadi sesi mentoring kepemimpinan, public speaking, simulasi penanganan konflik pekerja/mandor, olahraga kolektif, atau 5R lingkungan mess.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-12',
    timeRange: '18.30 – 19.00',
    durationLabel: '30 menit',
    activity: 'Makan Malam',
    category: 'Disiplin',
    details: 'Makan malam bersama secara tertib dengan jeda 30 menit tepat sebelum masuk jadwal belajar malam.',
    dayVariation: 'Dilaksanakan rutin setiap hari pukul 18.30 WIB.',
    palmOilAdaptation: 'Menjaga keteraturan pola nutrisi dan kebersamaan angkatan peserta MT di mess pelatihan.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-13',
    timeRange: '19.00 – 21.00',
    durationLabel: '2 jam',
    activity: 'Belajar Malam',
    category: 'Akademik',
    details: 'Sesi belajar mandiri terstruktur selama 2 jam penuh untuk pendalaman materi, penyelesaian tugas akademik, dan persiapan KBM hari berikutnya.',
    dayVariation: 'Berakhir tepat pada jadwal Apel Malam pukul 21.00 WIB.',
    palmOilAdaptation: 'Sangat tepat diadaptasi menjadi blok penyusunan logbook/laporan harian afdeling (BJR, ancak, pemupukan, losses PKS) dan persiapan rencana kerja esok hari.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-14',
    timeRange: '21.00 – 22.00',
    durationLabel: '60 menit hingga jam istirahat',
    activity: 'Apel Malam & Persiapan Istirahat',
    category: 'Mental',
    details: 'Apel malam untuk pengecekan akhir personel asrama, evaluasi ketertiban harian, dan persiapan menjelang waktu istirahat malam.',
    dayVariation: 'Malam Libur tidak ada apel malam.',
    palmOilAdaptation: 'Diadaptasi menjadi debriefing malam singkat bersama mentor/Estate Manager untuk evaluasi capaian harian dan kesiapan besok pagi.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
  {
    id: 'td-15',
    timeRange: '22.00 – 04.30',
    durationLabel: '6 jam 30 menit istirahat',
    activity: 'Istirahat Malam',
    category: 'Disiplin',
    details: 'Jam wajib istirahat malam mulai pukul 22.00 WIB untuk pemulihan fisik dan mental agar siap bangun kembali pukul 04.30 WIB.',
    dayVariation: 'Malam Libur pukul 22.30 WIB.',
    palmOilAdaptation: 'Kritis bagi keselamatan kerja (fatigue management) agar peserta pelatihan lapangan memiliki pemulihan tidur cukup sebelum turun kebun dini hari.',
    sourceUrl: 'https://smatncimahi.sch.id/kurikulum/',
  },
];

export const INSIGHT_BLOCKS: InsightBlock[] = [
  {
    id: 'ins-common',
    number: '01',
    dimension: 'Kegiatan Paling Umum Dilakukan',
    headline: 'Tiga pilar universal muncul hampir di seluruh institusi sawit: Orientasi Karakter, Praktik Lapangan/Kebun, dan Magang Industri',
    summary:
      'Dari 11 institusi yang diteliti, hampir seluruh kampus vokasi dan perguruan tinggi sawit menjalankan pola berurutan: orientasi awal bernuansa disiplin/mental (PKKMB/POSBUN/MABIDAMA/SEPORA/Bintalfisdisbun), praktik lapangan di kebun pendidikan/pabrik mini, dan magang langsung di perusahaan perkebunan mitra.',
    keyFindings: [
      '10 dari 11 institusi menyelenggarakan praktik lapangan langsung atau magang/on-the-job training sebagai tulang punggung pembentukan kompetensi.',
      '7 institusi secara eksplisit mengintegrasikan pembinaan mental, fisik, dan disiplin (termasuk pelibatan unsur TNI di AKPY-STIPER, ITSI, Poltek CWE, Polbangtan Medan, dan SMA Taruna Nusantara).',
      'Kemitraan industri (link and match) menjadi standar wajib penempatan kerja bagi Poltek CWE (100+ mitra), INSTIPER (79 mitra di 18 provinsi), AKPY-STIPER, ITSI, dan Politeknik LPP.',
    ],
    evidenceInstitutions: ['INSTIPER Yogyakarta', 'AKPY-STIPER', 'Politeknik CWE', 'ITSI', 'Polbangtan Medan', 'Politeknik LPP'],
  },
  {
    id: 'ins-unique',
    number: '02',
    dimension: 'Kegiatan Unik pada Institusi Tertentu',
    headline: 'Enam diferensiator kuat yang hanya ditemukan pada institusi rujukan spesifik',
    summary:
      'Beberapa institusi memiliki program khas yang tidak dimiliki secara luas oleh institusi lain namun sangat bernilai tinggi untuk diadaptasi sebagai keunggulan kompetitif akademi perusahaan.',
    keyFindings: [
      'SMA Taruna Nusantara: Napak Tilas RPS kolosal (3 hari, Etape I 9 km di medan terjal Gunung Kidul) serta jadwal asrama resmi 04.30–22.00 yang mengintegrasikan ritual menyanyikan Lagu Indonesia Raya & Pancasila tepat pukul 10.00 WIB serta apel 3 kali sehari (pagi, siang, malam).',
      'AKPY-STIPER: Pembinaan Bintalfisdis dua tahap terpisah — Sesi I di Denhanud 474 Kopasgat saat awal masuk dan Sesi II khusus menjelang keberangkatan magang.',
      'PT LPP Agro Nusantara: Penjenjangan Plantation Leadership Development Program (PLDP II & III) berdurasi 12–14 hari tatap muka + journey assignment bagi kader pimpinan korporat.',
      'Politeknik Kampar: Integrasi materi Keselamatan & Kesehatan Kerja (K3) sejak kegiatan orientasi mahasiswa baru (SEPORA 2).',
      'ITP2I Pelalawan: Pembinaan mental-fisik 7 hari yang secara eksplisit menerapkan model pengasuhan anti-perploncoan.',
      'PPKS (IOPRI) & BPDP: Pelatihan Tekno Ekonomi kelayakan bisnis oleh peneliti S2/S3 (PPKS) serta pelatihan akselerasi sertifikasi keberlanjutan ISPO (BPDP).',
    ],
    evidenceInstitutions: ['SMA Taruna Nusantara', 'AKPY-STIPER', 'LPP Agro Nusantara', 'Politeknik Kampar', 'ITP2I', 'PPKS', 'BPDP'],
  },
  {
    id: 'ins-longest',
    number: '03',
    dimension: 'Kegiatan dengan Durasi Paling Panjang',
    headline: 'Imersi panjang (3–6 bulan) terbukti menjadi standar pembentukan karakter mendalam dan kesiapan operasional lapangan',
    summary:
      'Berdasarkan data aktual yang mencantumkan durasi secara eksplisit pada sumber resmi, program berdurasi panjang terbagi menjadi dua tipe: pembinaan karakter intensif (asrama) dan imersi kerja industri (magang).',
    keyFindings: [
      'INSTIPER Yogyakarta — Magang Industri Kurikulum Berdampak: 4–6 bulan penuh di 79 mitra industri lintas 18 provinsi (durasi magang terverifikasi terpanjang).',
      'SMA Taruna Nusantara — Rutinitas Asrama (3 tahun / 17,5 jam per hari) dan PDK Kelas X: 3 bulan penuh pembinaan disiplin dan kepemimpinan intensif.',
      'INSTIPER Yogyakarta — Praktik Lapangan (PL) Wajib: total 8 minggu (1 minggu pembekalan + 7 minggu pelaksanaan lapangan).',
      'PT LPP Agro Nusantara — PLDP II & III: 12–14 hari tatap muka intensif (durasi terpanjang yang terverifikasi untuk kategori pelatihan kepemimpinan profesional karyawan).',
    ],
    evidenceInstitutions: ['INSTIPER Yogyakarta', 'SMA Taruna Nusantara', 'PT LPP Agro Nusantara'],
  },
  {
    id: 'ins-physical-mental',
    number: '04',
    dimension: 'Kegiatan Pembinaan Fisik dan Mental',
    headline: 'Pembinaan fisik-mental efektif memadukan struktur kedisiplinan militer dengan tujuan budaya kerja kebun yang humanis',
    summary:
      'Industri kelapa sawit beroperasi di medan terpencil, jam kerja pagi, dan kondisi fisik menantang sehingga pembinaan fisik-mental menjadi fondasi penting — namun tren terbaru menekankan kedisiplinan terukur tanpa perploncoan.',
    keyFindings: [
      'Kolaborasi satuan TNI digunakan secara luas dan kredibel: AKPY-STIPER (Denhanud 474 Kopasgat), ITSI (TNI + HRD Perkebunan), Poltek CWE (Latsar TNI AD), dan SMA Taruna Nusantara (Rindam IV Diponegoro untuk RPS).',
      'Polbangtan Medan dan SMA Taruna Nusantara menanamkan fisik-mental melalui kebiasaan harian berasrama (bangun pagi, ibadah, senam pagi, apel malam) bukan hanya kegiatan sesaat.',
      'ITP2I menunjukkan bahwa latihan mental dan fisik selama 7 hari dapat dirancang tegas dan terstruktur dengan pendekatan pengasuhan tanpa perploncoan.',
    ],
    evidenceInstitutions: ['SMA Taruna Nusantara', 'AKPY-STIPER', 'ITSI', 'Polbangtan Medan', 'Politeknik CWE', 'ITP2I'],
  },
  {
    id: 'ins-theory-practice',
    number: '05',
    dimension: 'Kegiatan yang Menggabungkan Teori dan Praktik',
    headline: 'Proporsi praktik lapangan dominan (70–90%) ditambah supervisi langsung dan asesmen kompetensi menjadi standar emas',
    summary:
      'Institusi unggulan tidak memisahkan teori dan praktik secara kaku, melainkan menyusun eskalasi bertahap dari simulasi kampus (KP2/TEFA/Pabrik Mini) menuju penempatan industri nyata.',
    keyFindings: [
      'Politeknik CWE menerapkan rasio 90% pelatihan praktis turun lapang pada Estate Management Training dan Mill Management Training.',
      'AKPY-STIPER memadukan ±5 bulan teori kelas dengan Learning Factory (learning by doing di KP2 Ungaran) lalu magang di perusahaan mitra.',
      'INSTIPER menyusun eskalasi 3 lapis: Praktik Lapangan (1 minggu teori + 7 minggu praktik) -> Pembekalan 2 hari -> Magang Industri 4–6 bulan.',
      'Polbangtan Medan menggunakan Teaching Factory (TEFA) berstandar DUDI serta pembekalan "Become to Outcome" yang menggabungkan materi hulu-hilir dengan simulasi dan outbound.',
    ],
    evidenceInstitutions: ['Politeknik CWE', 'AKPY-STIPER', 'INSTIPER Yogyakarta', 'Polbangtan Medan', 'Politeknik Kampar'],
  },
  {
    id: 'ins-adaptation',
    number: '06',
    dimension: 'Program Berpotensi Diadaptasi Perusahaan Kelapa Sawit',
    headline: 'Enam format teruji yang paling siap diadopsi ke dalam Corporate Academy / Program MT Perkebunan',
    summary:
      'Perusahaan kelapa sawit dapat menggabungkan kekuatan unik dari kampus vokasi, lembaga pelatihan profesional, dan SMA Taruna Nusantara tanpa harus membangun kurikulum dari nol.',
    keyFindings: [
      'Pola Jadwal Harian Asrama Taruna Nusantara (04.30–22.00) -> Diadaptasi untuk disiplin mess pelatihan MT/Calon Asisten (olahraga pagi, morning muster/apel pagi, blok lapangan, evaluasi malam, batas tidur 22.00).',
      'Model Bintalfisdis + HRD Mindset (AKPY-STIPER & ITSI) -> 7–14 hari pembinaan fisik-mental bersama instruktur disiplin + sesi nilai perusahaan & etos kerja HRD.',
      'Estate & Mill Management Training 90% Praktis (Poltek CWE) + Modul Teknis PPKS -> Pelatihan teknis lapangan terpisah antara jalur Asisten Kebun dan Asisten Pabrik.',
      'Pembekalan Pra-Penempatan 2 Hari (INSTIPER & Polbangtan Medan) -> Materi K3/BPJS, etika kepemimpinan mandor, simulasi lapangan, dan outbound teamwork.',
      'Sertifikasi Kompetensi BNSP Skema Asisten Kebun/PKS (LSP Politeknik LPP & Poltek CWE) -> Menjadi gerbang kelulusan objektif (exit gate) program MT.',
      'Penjenjangan PLDP II/III (LPP Agro Nusantara) + Modul ISPO (BPDP) -> Jalur pengembangan lanjutan Asisten menuju Asisten Kepala dan Manajer Kebun.',
    ],
    evidenceInstitutions: ['SMA Taruna Nusantara', 'AKPY-STIPER', 'ITSI', 'Politeknik CWE', 'Politeknik LPP', 'LPP Agro Nusantara', 'BPDP'],
  },
  {
    id: 'ins-student-vs-pro',
    number: '07',
    dimension: 'Perbedaan Pembinaan Mahasiswa/Taruna vs Pelatihan Profesional/Karyawan',
    headline: 'Mahasiswa/Taruna fokus pada pembentukan karakter dasar & imersi panjang; Karyawan fokus pada kepemimpinan strategis, efisiensi biaya & sertifikasi singkat',
    summary:
      'Desain program perusahaan harus membedakan secara tegas antara peserta fresh graduate/MT (yang membutuhkan pola pembinaan mendekati taruna/vokasi) dengan staf berpengalaman/Asisten eksisting (yang membutuhkan format pelatihan profesional padat).',
    keyFindings: [
      'Durasi & Ritme: Pembinaan taruna/mahasiswa berdurasi panjang (PDK 3 bulan, PKL 7 minggu, Magang 4–6 bulan) dan bersifat berasrama penuh; pelatihan profesional berdurasi singkat-padat (2–6 hari teknis di BPDP/PPKS atau 12–14 hari tatap muka hybrid di PLDP LPP Agro).',
      'Fokus Kompetensi: Taruna/mahasiswa menekankan fisik, disiplin dasar, ketaatan SOP, adaptasi medan terpencil, dan keterampilan eksekusi lapangan (mandor/krani/calon asisten); pelatihan profesional menekankan manajemen afdeling, analisis tekno-ekonomi, optimasi losses, kepemimpinan strategis, dan kepatuhan ISPO.',
      'Metode Evaluasi: Mahasiswa dievaluasi melalui laporan magang, seminar, dan uji BNSP awal; karyawan profesional dievaluasi melalui studi kasus bisnis, journey assignment proyek efisiensi unit, dan kinerja KPI operasional.',
    ],
    evidenceInstitutions: ['SMA Taruna Nusantara', 'AKPY-STIPER', 'INSTIPER Yogyakarta', 'LPP Agro Nusantara', 'PPKS', 'BPDP'],
  },
  {
    id: 'ins-recommendation',
    number: '08',
    dimension: 'Rekomendasi Program Pembinaan Perusahaan Kelapa Sawit',
    headline: 'Arsitektur 4 Fase "Plantation Future Leader & Assistant Academy" berbasis benchmark terverifikasi',
    summary:
      'Rekomendasi integratif untuk perusahaan perkebunan kelapa sawit dalam merancang program Management Trainee (MT) / Calon Asisten Kebun & Pabrik serta penyegaran karyawan operasional.',
    keyFindings: [
      'Fase 1 — Pembentukan Karakter, Fisik & Disiplin (2–4 Minggu, Asrama Penuh): Mengadopsi ritme harian Taruna Nusantara (05.00 olahraga, apel pagi, batas istirahat 22.00) + Bintalfisdis humanis ala AKPY-STIPER/ITSI/ITP2I + kesadaran K3 sejak hari pertama ala Politeknik Kampar.',
      'Fase 2 — Penguasaan Teknis Hulu/Hilir & ISPO (4–6 Minggu, 80–90% Praktik): Pemisahan jalur Estate vs Mill ala Poltek CWE, metode Learning by Doing ala AKPY-STIPER/TEFA Polbangtan, materi agronomi/tekno-ekonomi PPKS, serta kepatuhan keberlanjutan ISPO ala BPDP.',
      'Fase 3 — Imersi Operasional Lapangan / On-the-Job Training (3–6 Bulan): Mengadopsi durasi magang INSTIPER (4–6 bulan) dengan supervisi mentor lapangan ala Politeknik LPP, pembekalan pra-penempatan 2 hari (etika, K3/BPJS, outbound), serta logbook & debriefing malam.',
      'Fase 4 — Sertifikasi Kompetensi & Penjenjangan Kepemimpinan (Berkelanjutan): Uji kelulusan berbasis standar BNSP Skema Asisten Kebun/PKS (LSP Poltek LPP/CWE) sebagai syarat pengangkatan, diikuti program PLDP II/III ala LPP Agro Nusantara untuk jenjang Asisten Kepala dan Manajer.',
    ],
    evidenceInstitutions: ['Seluruh 11 Institusi Benchmark'],
  },
];

export const CORPORATE_BLUEPRINT: CorporateProgramPhase[] = [
  {
    phase: 'Fase 1',
    title: 'Pembentukan Karakter, Fisik, Disiplin & Budaya K3',
    benchmarkSource: 'SMA Taruna Nusantara (Ritme Asrama & Apel), AKPY-STIPER & ITSI (Bintalfisdis + HRD), ITP2I (Pengasuhan Anti-Perploncoan), Poltek Kampar (K3 Awal)',
    recommendedDuration: '2 – 4 Minggu (Asrama Penuh)',
    coreActivities:
      'Rutinitas harian terstruktur (05.00 olahraga pagi, safety pledge 5 menit, apel pagi bergiliran, kurve/5R, batas tidur 22.00), latihan disiplin lapangan/PBB tanpa perploncoan, outbound teamwork, dan dasar K3 kebun/pabrik.',
    targetOutcome:
      'Ketahanan fisik lapangan, disiplin jam kerja dini hari, jiwa korsa angkatan, dan kepatuhan K3 otomatis.',
  },
  {
    phase: 'Fase 2',
    title: 'Penguasaan Teknis Operasional (Jalur Estate vs Mill) & ISPO',
    benchmarkSource: 'Poltek CWE (Estate & Mill Training 90% Praktis), AKPY-STIPER (Learning Factory), Polbangtan Medan (TEFA), PPKS (Agronomi/Tekno-Ekonomi), BPDP (ISPO/GAP)',
    recommendedDuration: '4 – 6 Minggu (80–90% Praktik Kebun/PKS)',
    coreActivities:
      'Jalur Estate: pembibitan, pemeliharaan TBM/TM, pemupukan, panen TBS, transportasi, GAP & ISPO. Jalur Mill: proses pengolahan PKS, troubleshooting, efisiensi OER/KER, manajemen losses & limbah.',
    targetOutcome:
      'Penguasaan SOP teknis lapangan secara hands-on dan pemahaman standar keberlanjutan ISPO.',
  },
  {
    phase: 'Fase 3',
    title: 'Imersi Lapangan / On-the-Job Training & Pembekalan Pra-Penempatan',
    benchmarkSource: 'INSTIPER (Pembekalan 2 Hari + Magang 4–6 Bulan), Polbangtan Medan (Become to Outcome), AKPY-STIPER (Bintalfisdis Sesi II), Poltek LPP (Supervisi Lapangan)',
    recommendedDuration: '3 – 6 Bulan (Rotasi Afdeling / Stasiun PKS)',
    coreActivities:
      'Pembekalan 2 hari (etika, supervisi mandor, K3/BPJS, adaptasi), penempatan langsung di afdeling/stasiun PKS dengan proyek perbaikan nyata, logbook & evaluasi malam bersama Estate/Mill Manager.',
    targetOutcome:
      'Kesiapan memimpin tenaga kerja lapangan, ketangguhan mental di kebun terpencil, dan bukti kontribusi kinerja.',
  },
  {
    phase: 'Fase 4',
    title: 'Sertifikasi Kompetensi (Exit Gate) & Penjenjangan Kepemimpinan',
    benchmarkSource: 'LSP Politeknik LPP & Poltek CWE (Uji Kompetensi BNSP), PT LPP Agro Nusantara (PLDP II & III), PPKS (Tekno Ekonomi)',
    recommendedDuration: 'Uji Sertifikasi + 12–14 Hari/Jenjang (Berkelanjutan)',
    coreActivities:
      'Uji kompetensi BNSP Skema Asisten Kebun/Pengolahan PKS sebagai syarat kelulusan MT; dilanjutkan program penjenjangan manajerial (PLDP II/III), analisis tekno-ekonomi, dan journey assignment untuk kandidat Asisten Kepala/Manajer.',
    targetOutcome:
      'Standar kompetensi terverifikasi nasional dan jalur suksesi pemimpin perkebunan jangka panjang.',
  },
];
