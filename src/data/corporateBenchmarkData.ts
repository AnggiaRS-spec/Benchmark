import {
  CorporateCompanyProfile,
  CorporateInsightItem,
  CorporateScheduleEntry,
  CorporateTrainingProgram,
  RecommendedCorporatePhase,
} from '../types/corporateBenchmark';

export const CORPORATE_COMPANIES: CorporateCompanyProfile[] = [
  {
    id: 'smart-gar',
    rank: 1,
    name: 'PT Sinar Mas Agro Resources and Technology Tbk (SMART / GAR)',
    shortName: 'PT SMART Tbk / GAR',
    tickerOrGroup: 'IDX: SMAR · Induk: Golden Agri-Resources (SGX: E5H)',
    plantedAreaLabel: '±136.000–137.000 ha (PT SMART Tbk) / >532.000 ha (Grup GAR)',
    rankingBasis:
      'Grup perkebunan kelapa sawit dengan areal tertanam terbesar di Indonesia (Grup GAR >532 ribu ha inti & plasma; entitas publik PT SMART Tbk ±136–137 ribu ha) berdasarkan Laporan Tahunan & Keberlanjutan 2024.',
    dataYear: '2024',
    trainingCenter: 'Sinar Mas Agribusiness Learning / SMART Training Facilities',
    operationalRegions: 'Sumatera, Kalimantan, dan Papua',
    avgTrainingHoursNote:
      'Jam pelatihan dicatat per kategori jabatan (staf, manajemen menengah, manajemen senior) dalam AR & SR PT SMART Tbk 2024.',
    sourceCompleteness: 'Lengkap',
    officialWebsite: 'https://www.smart-tbk.com/bekerja-bersama-kami/',
    annualReportUrl: 'https://www.smart-tbk.com/wp-content/uploads/2025/04/AR-SR-PT-SMART-Tbk-2024.pdf',
  },
  {
    id: 'astra-agro',
    rank: 2,
    name: 'PT Astra Agro Lestari Tbk (AALI)',
    shortName: 'Astra Agro Lestari',
    tickerOrGroup: 'IDX: AALI · Grup Astra',
    plantedAreaLabel: '±284.800–290.900 ha (inti & plasma)',
    rankingBasis:
      'Salah satu emiten perkebunan kelapa sawit hulu murni terbesar di Bursa Efek Indonesia berdasarkan luas areal tertanam (±284,8–290,9 ribu ha) dan kapitalisasi sektor perkebunan (AR & SR 2024–2025).',
    dataYear: '2024–2025',
    trainingCenter: 'Astra Agro Academy (AAA) & Astra Management Development Institute (AMDI)',
    operationalRegions: 'Sumatera, Kalimantan, dan Sulawesi',
    avgTrainingHoursNote:
      'Rata-rata 9,62 jam pelatihan/karyawan pada 2024 (11,91 jam di 2023; 9,92 jam di 2022) per Sustainability Report AALI 2024–2025.',
    sourceCompleteness: 'Lengkap',
    officialWebsite: 'https://www.astra-agro.co.id/id/planter-development-program/',
    annualReportUrl: 'https://www.astra-agro.co.id/wp-content/uploads/2026/03/Sustainability-Report-AAL-2025-1.pdf',
  },
  {
    id: 'first-resources',
    rank: 3,
    name: 'First Resources Limited (First Resources Group Indonesia)',
    shortName: 'First Resources',
    tickerOrGroup: 'SGX: EB5 · Operasional Indonesia (PT Ciliandra Perkasa dkk.)',
    plantedAreaLabel: '178.854 ha inti (>200.000 ha termasuk plasma)',
    rankingBasis:
      'Produsen CPO papan atas Indonesia (178.854 ha tertanam inti — 158.931 ha mature & 19.923 ha immature per AR/SR 2024) dengan dokumentasi portal kurikulum pelatihan publik paling terbuka dan rinci (FR Academy).',
    dataYear: '2024–2026',
    trainingCenter: 'First Resources Academy (FR Academy — Kampar, Riau) & LMS Internal',
    operationalRegions: 'Riau, Kalimantan Barat, dan Kalimantan Timur',
    avgTrainingHoursNote:
      'SR 2024: Manajemen Menengah 15,8 jam (2023: 13,1 jam); Staf & Pekerja 10,8 jam (2023: 7,6 jam); Manajemen Senior 0,4 jam.',
    sourceCompleteness: 'Sangat Lengkap',
    officialWebsite: 'https://academy.first-resources.com/',
    annualReportUrl: 'https://www.first-resources.com/wp-content/uploads/2025/04/First-Resources-Limited-Sustainability-Report-2024.pdf',
  },
  {
    id: 'bumitama-agri',
    rank: 4,
    name: 'Bumitama Agri Ltd (PT Bumitama Gunajaya Agro / BGA Group)',
    shortName: 'Bumitama Agri (BGA)',
    tickerOrGroup: 'SGX: P8Z · Operasional Indonesia (~33.000 karyawan)',
    plantedAreaLabel: '187.021 ha (124.000 ha inti + 63.000 ha plasma; 96,2% mature)',
    rankingBasis:
      'Grup perkebunan kelapa sawit terkemuka di Indonesia dengan total areal tertanam 187.021 ha, kapasitas olah mendekati 7 juta ton TBS/tahun, dan ~33.000 tenaga kerja per Sustainability Report 2024.',
    dataYear: '2024–2025',
    trainingCenter: 'Bumitama Corporate University (BCU), Pundu Learning Academy (PNLA), & Kendawangan Learning Centre (KNLC)',
    operationalRegions: 'Kalimantan Tengah, Kalimantan Barat, dan Riau',
    avgTrainingHoursNote:
      'SR 2024: Rata-rata 8,7 jam/karyawan (pria 9,4 jam; wanita 6,2 jam) dibanding target internal 13 jam/karyawan.',
    sourceCompleteness: 'Lengkap',
    officialWebsite: 'https://bumitama-agri.com/sustainability/workforce/',
    annualReportUrl: 'https://bumitama-agri.com/wp-content/uploads/2025/04/Bumitama-Agri-Ltd_SR2024-1.pdf',
  },
  {
    id: 'triputra-agro',
    rank: 5,
    name: 'PT Triputra Agro Persada Tbk (TAPG)',
    shortName: 'Triputra Agro Persada',
    tickerOrGroup: 'IDX: TAPG · Triputra Group (TREC)',
    plantedAreaLabel: '±160.000–162.000 ha (inti, plasma, & entitas asosiasi)',
    rankingBasis:
      'Emiten perkebunan kelapa sawit papan atas BEI dengan produktivitas TBS/CPO tinggi di atas lahan ±160–162 ribu ha di Jambi, Kalimantan Tengah, dan Kalimantan Timur (Laporan Tahunan & Keberlanjutan 2024–2025).',
    dataYear: '2024–2026',
    trainingCenter: 'Triputra Excellence Center (TREC) & Training Dojo Site',
    operationalRegions: 'Jambi (Sumatera), Kalimantan Tengah, dan Kalimantan Timur',
    avgTrainingHoursNote:
      'Pelatihan karyawan (Insan TAPGreen) dan sertifikasi profesional dilaporkan dalam Laporan Tahunan & Keberlanjutan 2023–2025 di IDX.',
    sourceCompleteness: 'Cukup Lengkap',
    officialWebsite: 'https://triputra-group.com/ruang-untuk-tumbuh/gradual-leadership-development-program/',
    annualReportUrl: 'https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202504/33db7e6326_41ad71e48e.pdf',
  },
];

export const CORPORATE_PROGRAMS: CorporateTrainingProgram[] = [
  // =========================================================================
  // 1. FIRST RESOURCES LIMITED (FR ACADEMY) — 6 PROGRAM TERVERIFIKASI
  // =========================================================================
  {
    id: 'fr-fat',
    companyId: 'first-resources',
    companyName: 'First Resources Limited (First Resources Group Indonesia)',
    companyShortName: 'First Resources',
    programName: 'Field Assistant Training (FAT)',
    programType: 'Management Trainee / Calon Asisten',
    targetParticipants:
      'Fresh graduate S1/D4 Pertanian, Perkebunan, Kehutanan, atau Teknik Pertanian (calon Asisten Afdeling/Kebun)',
    objective:
      'Menyiapkan calon asisten afdeling dengan keterampilan teknis budidaya kelapa sawit, manajerial & leadership, serta membentuk pola pikir, perilaku, dan sikap mental Planter sesuai budaya First Resources.',
    duration: '6 bulan reguler (terjadwal & berkesinambungan) + ikatan dinas 2 tahun',
    scheduleSummary:
      'Terbagi dalam tahapan In-Class Training di FR Academy (Kampar, Riau), Pra-OJT transisi, dan OJT kebun dengan komposisi belajar 70% experiential, 20% social/mentoring, 10% formal learning. Jadwal jam per hari tidak dipublikasikan terbuka.',
    stages:
      '1) Seleksi (Psikotes & Wawancara) → 2) In-Class Training di FR Academy → 3) Pra-OJT (pengenalan unit lapangan) → 4) On-the-Job Training (OJT) di Estate → 5) Evaluasi kelulusan & penempatan Asisten Afdeling',
    activities:
      'Pembelajaran kelas kompetensi umum/teknis/pendukung, transisi pra-OJT, pengawasan operasional kebun langsung (panen, pemupukan, perawatan gulma, konservasi tanah/air), mentoring lapangan, dan penyusunan laporan operasional.',
    materials:
      '1) Materi Kompetensi Umum (budaya First Resources & dasar korporasi); 2) Materi Kompetensi Teknis Perkebunan (agronomi sawit, pemupukan, panen, pengendalian gulma, konservasi tanah/air, administrasi kebun); 3) Materi Kompetensi Pendukung (managerial, leadership, K3, sustainability).',
    categories: [
      'Mental & Disiplin',
      'Leadership',
      'Teamwork',
      'Teknis Kebun',
      'Praktik Lapangan',
      'Sustainability',
      'K3',
      'Manajerial & Administrasi',
    ],
    physicalActivities:
      'Aktivitas fisik lapangan harian di kebun (Estate) selama fase Pra-OJT dan OJT; tidak ditemukan detail pelatihan militer/PBB eksplisit pada halaman resmi program.',
    mentalDisciplineActivities:
      'Pembentukan pola pikir, perilaku, dan sikap mental sebagai Planter sesuai budaya First Resources melalui program reguler berasrama/mess FR Academy.',
    leadershipActivities:
      'Pembekalan keterampilan managerial & leadership untuk memimpin tenaga kerja/mandor di afdeling kebun.',
    teamworkActivities:
      'Social learning (20% porsi metode belajar) berupa kerja tim operasional, diskusi studi kasus, dan kolaborasi lintas unit.',
    estateTechnicalActivities:
      'Pengelolaan tanaman kelapa sawit (TBM/TM), pemupukan, pengendalian gulma, kriteria & supervisi panen, konservasi tanah/air, serta SOP agronomi.',
    fieldPracticeActivities:
      '70% experiential learning melalui Pra-OJT dan OJT langsung di unit perkebunan (Estate) wilayah Riau, Kalimantan Barat, atau Kalimantan Timur.',
    millPracticeActivities: 'Tidak menjadi fokus utama (khusus jalur MAT).',
    socialCommunityActivities:
      'Keterlibatan dalam sosialisasi & pendampingan praktik budidaya bagi petani plasma/swadaya di sekitar operasional (dilaporkan di SR 2024).',
    sustainabilityActivities:
      'Kepatuhan SOP konservasi tanah/air, kebijakan tanpa bakar (zero burning), serta standar sertifikasi ISPO/RSPO/ISCC.',
    k3Activities:
      'Penerapan K3 perkebunan, penggunaan APD, serta partisipasi apel keselamatan kerja pagi (daily morning meetings).',
    rotationDetails:
      'Transisi dari FR Academy Kampar (Riau) ke fase Pra-OJT lalu OJT di afdeling operasional (Sumatera/Kalimantan).',
    mentoringDetails:
      'Pendampingan terstruktur dalam bentuk mentoring oleh trainer/praktisi internal sebagai bagian dari 20% social learning.',
    learningMethods:
      'Kerangka 70:20:10 resmi: 70% Experiential Learning (OJT & praktik lapangan), 20% Social Learning (mentoring & coaching), 10% Formal Learning (kelas di FR Academy & e-learning LMS).',
    evaluation:
      'Evaluasi pemahaman materi kelas, penilaian kinerja & troubleshooting lapangan selama OJT, laporan operasional, dan evaluasi kelulusan sebelum pengangkatan Asisten.',
    targetCompetencies:
      'Siap menjabat Asisten Afdeling/Kebun dengan penguasaan teknis agronomi, supervisi tim lapangan, administrasi kebun, dan mentalitas Planter.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2026',
    sourceUrl: 'https://academy.first-resources.com/program/fat',
    sourceLabel: 'First Resources Academy — Portal Resmi Program FAT',
    additionalSources: [
      {
        label: 'CDC Universitas Sriwijaya — Campus Hiring FR Group (FAT & MAT, Okt 2026)',
        url: 'https://alumni.unsri.ac.id/newsdetail/campus-hiring-first-resources-group-at-universitas-sriwijaya-buka-lowongan-management-trainee-fat-mat',
        year: '2026',
      },
      {
        label: 'First Resources Limited — Sustainability Report 2024 (PDF)',
        url: 'https://www.first-resources.com/wp-content/uploads/2025/04/First-Resources-Limited-Sustainability-Report-2024.pdf',
        year: '2024',
      },
    ],
    notes:
      'Sumber primer portal resmi FR Academy diverifikasi langsung (HTTP 200). Durasi 6 bulan, metode 70:20:10, dan struktur kurikulum terverifikasi penuh; jadwal per jam tidak dipublikasikan.',
  },
  {
    id: 'fr-mat',
    companyId: 'first-resources',
    companyName: 'First Resources Limited (First Resources Group Indonesia)',
    companyShortName: 'First Resources',
    programName: 'Mill Assistant Training (MAT)',
    programType: 'Management Trainee / Calon Asisten',
    targetParticipants:
      'Fresh graduate S1/D4 Teknik Mesin, Teknik Elektro, Teknik Kimia, Teknik Industri, atau Teknologi Pengolahan Hasil Perkebunan (calon Asisten PKS)',
    objective:
      'Menyiapkan calon asisten pabrik kelapa sawit (PKS) dengan pengetahuan teknis pengolahan, manajerial & leadership, serta sikap mental sebagai Engineer sesuai budaya First Resources.',
    duration: '6 bulan reguler + ikatan dinas 2 tahun',
    scheduleSummary:
      'Berjalan reguler 6 bulan dengan komposisi resmi 70% experiential learning (OJT PKS), 20% social learning (mentoring), dan 10% formal learning (kelas FR Academy). Jadwal jam harian tidak dipublikasikan terbuka.',
    stages:
      '1) Seleksi rekrutmen → 2) In-Class Training (Kompetensi Umum, Teknis PKS, Pendukung) → 3) Pra-OJT pengenalan stasiun pabrik → 4) OJT di Pabrik Kelapa Sawit (PKS) + mentoring → 5) Evaluasi & penempatan Asisten Pabrik',
    activities:
      'Pembelajaran teori proses pabrik di kelas, pengenalan & praktik operasi seluruh stasiun PKS, pengawasan efisiensi rendemen (OER) dan penekanan oil losses, troubleshooting mesin, serta preventive maintenance.',
    materials:
      '1) Materi Kompetensi Umum; 2) Materi Kompetensi Teknis PKS (pengolahan TBS menjadi CPO & Kernel, stasiun sterilisasi/rebusan, thresher, press, klarifikasi, boiler, turbin, pengendalian oil losses, preventive maintenance); 3) Materi Kompetensi Pendukung (leadership, K3 tekanan tinggi).',
    categories: [
      'Mental & Disiplin',
      'Leadership',
      'Teamwork',
      'Teknis Pabrik',
      'Praktik Lapangan',
      'K3',
      'Manajerial & Administrasi',
    ],
    physicalActivities:
      'Aktivitas operasional & inspeksi mesin di lantai pabrik kelapa sawit bersuhu/bertekanan tinggi selama fase OJT.',
    mentalDisciplineActivities:
      'Pembentukan pola pikir, perilaku, dan sikap mental sebagai Engineer yang disiplin prosedur keselamatan dan target mutu pabrik.',
    leadershipActivities:
      'Keterampilan managerial & leadership untuk memimpin operator stasiun dan tim pemeliharaan mekanikal/elektrikal PKS.',
    teamworkActivities:
      'Kolaborasi shift operasional PKS, koordinasi tim proses dan maintenance melalui kerangka 20% social learning.',
    estateTechnicalActivities: 'Pengenalan kualitas TBS masuk dari kebun (grading buah) sebagai bahan baku PKS.',
    fieldPracticeActivities: 'Praktik kerja lapangan langsung di unit Pabrik Kelapa Sawit (PKS) operasional.',
    millPracticeActivities:
      'Praktik penuh di stasiun penerimaan TBS, rebusan (sterilizer), thresher, kempa (press), klarifikasi CPO, kernel recovery, boiler, dan turbin.',
    socialCommunityActivities: 'Tidak menjadi fokus utama pada sumber program MAT.',
    sustainabilityActivities:
      'Pengendalian efisiensi proses pengolahan serta kepatuhan standar lingkungan pabrik (pengelolaan limbah & mutu CPO).',
    k3Activities:
      'Standar keselamatan kerja ketat untuk pengoperasian mesin bertekanan tinggi (bejana uap boiler), APD pabrik, dan tanggap darurat.',
    rotationDetails:
      'Rotasi pembelajaran lintas stasiun pengolahan dan maintenance di PKS selama masa Pra-OJT dan OJT.',
    mentoringDetails:
      'Pendampingan langsung (mentoring) oleh Engineer senior / Mill Manager di unit operasional PKS.',
    learningMethods:
      'Metode 70:20:10 resmi FR Academy (70% experiential learning, 20% social learning/mentoring, 10% formal learning) + LMS.',
    evaluation:
      'Ujian penguasaan teknis proses & mesin PKS, evaluasi praktik troubleshooting/OJT oleh mentor, serta kelulusan penempatan Asisten PKS.',
    targetCompetencies:
      'Kompetensi operasional PKS, optimasi OER, pengendalian oil losses, kepatuhan K3 boiler/mesin, dan kepemimpinan shift pabrik.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2026',
    sourceUrl: 'https://academy.first-resources.com/program/mat',
    sourceLabel: 'First Resources Academy — Portal Resmi Program MAT',
    additionalSources: [
      {
        label: 'First Resources Limited — Sustainability Report 2024 (PDF)',
        url: 'https://www.first-resources.com/wp-content/uploads/2025/04/First-Resources-Limited-Sustainability-Report-2024.pdf',
        year: '2024',
      },
    ],
    notes:
      'Sumber resmi FR Academy diverifikasi langsung (HTTP 200). Durasi 6 bulan, 3 kelompok kurikulum, dan rasio belajar 70:20:10 terdokumentasi eksplisit.',
  },
  {
    id: 'fr-tat-aat-dmt',
    companyId: 'first-resources',
    companyName: 'First Resources Limited (First Resources Group Indonesia)',
    companyShortName: 'First Resources',
    programName: 'Traction (TAT), Administration (AAT) & Downstream Trainee (DMT)',
    programType: 'Management Trainee / Calon Asisten',
    targetParticipants:
      'Fresh graduate Teknik Mesin/Alat Berat (TAT), Akuntansi/Manajemen/Administrasi (AAT — calon KASI), dan Teknik Kimia/Industri (DMT — calon Supervisor Downstream/Refinery)',
    objective:
      'Menyiapkan calon asisten traksi & bengkel (TAT), calon Kepala Administrasi Kebun/KASI (AAT), dan calon supervisor kilang rafinasi/oleokimia hilir (DMT) dengan kompetensi teknis, manajerial, dan budaya First Resources.',
    duration: '6 bulan reguler untuk masing-masing jalur (TAT, AAT, DMT)',
    scheduleSummary:
      'Setiap jalur berlangsung 6 bulan reguler terjadwal dengan skema 70:20:10 (experiential, social/mentoring, formal learning). Jadwal jam rinci harian tidak tersedia di publik.',
    stages:
      '1) Pembelajaran formal kompetensi umum, teknis & pendukung di FR Academy → 2) Praktik & mentoring di unit Traksi/Administrasi Kebun/Kilang Downstream → 3) Evaluasi kelulusan & penempatan',
    activities:
      'TAT: manajemen armada angkut, alat berat & bengkel unit. AAT: pembukuan, akuntansi, logistik & tata kelola administrasi kebun. DMT: operasional kilang rafinasi, fraksinasi & oleokimia hilir.',
    materials:
      'Tiga pilar kurikulum standar FR Academy pada tiap jalur: 1) Kompetensi Umum; 2) Kompetensi Teknis Spesialis (traksi/bengkel, administrasi/keuangan unit, atau teknologi rafinasi/fraksinasi); 3) Kompetensi Pendukung (leadership & sikap mental).',
    categories: [
      'Mental & Disiplin',
      'Leadership',
      'Teamwork',
      'Teknis Pabrik',
      'Praktik Lapangan',
      'Manajerial & Administrasi',
    ],
    physicalActivities: 'Aktivitas bengkel/lapangan unit (TAT) dan lantai kilang rafinasi (DMT); tidak ada catatan latihan fisik militer.',
    mentalDisciplineActivities:
      'Pembentukan sikap mental Engineer (TAT & DMT) dan Planter/Administrator (AAT) sesuai tata nilai First Resources.',
    leadershipActivities:
      'Keterampilan managerial & leadership untuk memimpin mekanik bengkel (TAT), staf administrasi/gudang (AAT), atau operator refinery (DMT).',
    teamworkActivities:
      'Kerja tim lintas fungsi logistik-kebun-pabrik melalui 20% social learning dan mentoring.',
    estateTechnicalActivities: 'AAT & TAT berinteraksi erat dengan operasional kebun (transportasi TBS, jalan kebun, administrasi panen/upah).',
    fieldPracticeActivities: '70% experiential learning di unit traksi/bengkel, kantor administrasi kebun, atau fasilitas downstream.',
    millPracticeActivities: 'Jalur DMT melaksanakan praktik operasional di unit hilir (refinery, fraksinasi, dan oleokimia).',
    socialCommunityActivities: 'Tidak ditemukan pada sumber.',
    sustainabilityActivities: 'Kepatuhan tata kelola administrasi dan dokumentasi rantai pasok (khususnya AAT & DMT).',
    k3Activities: 'Kepatuhan K3 bengkel/alat berat (TAT), K3 kilang/bahan kimia (DMT), serta kepatuhan standar keselamatan kerja unit.',
    rotationDetails: 'Penugasan bertahap di unit spesialisasi masing-masing selama masa 6 bulan.',
    mentoringDetails: 'Pendampingan dalam bentuk mentoring sepanjang 6 bulan program.',
    learningMethods: 'Kerangka 70:20:10 (70% experiential learning, 20% social learning, 10% formal learning) + E-Learning FR Academy.',
    evaluation: 'Evaluasi teknis, manajerial, dan perilaku oleh mentor & tim FR Academy sebagai syarat penempatan.',
    targetCompetencies:
      'Kesiapan menjabat Asisten Traksi, Kepala Administrasi Kebun (KASI), atau Supervisor Downstream.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2026',
    sourceUrl: 'https://academy.first-resources.com/program/tat',
    sourceLabel: 'First Resources Academy — Program TAT (lihat tautan AAT & DMT)',
    additionalSources: [
      {
        label: 'First Resources Academy — Administration Assistant Training (AAT)',
        url: 'https://academy.first-resources.com/program/aat',
        year: '2026',
      },
      {
        label: 'First Resources Academy — Downstream Trainee (DMT)',
        url: 'https://academy.first-resources.com/program/dmt',
        year: '2026',
      },
    ],
    notes:
      'Ketiga halaman program resmi (TAT, AAT, DMT) dibuka dan diverifikasi langsung (HTTP 200). Durasi 6 bulan & metode 70:20:10 konsisten di seluruh jalur.',
  },
  {
    id: 'fr-leadership',
    companyId: 'first-resources',
    companyName: 'First Resources Limited (First Resources Group Indonesia)',
    companyShortName: 'First Resources',
    programName: 'Managerial & Leadership Development (FR Academy)',
    programType: 'Leadership Development',
    targetParticipants:
      'Seluruh level hierarki manajemen operasional perkebunan (Asisten, Supervisor lini pertama, hingga Manajemen Menengah)',
    objective:
      'Membangun karakter kepemimpinan proaktif berintegritas, kemampuan memimpin tim multikultural, coaching bawahan, serta pemecahan masalah berbasis data operasional.',
    duration: 'Tidak ditemukan durasi total eksplisit pada sumber (berjalan berkelanjutan; rata-rata pelatihan Middle Management 15,8 jam/tahun pada 2024)',
    scheduleSummary:
      'Program berkelanjutan per modul; jadwal jam spesifik per sesi tidak dipublikasikan terbuka.',
    stages:
      'Pelaksanaan modular 5 kurikulum inti kepemimpinan disertai aplikasi coaching & pemecahan masalah operasional di unit kerja',
    activities:
      'Lokakarya kepemimpinan proaktif, simulasi coaching lapangan, studi kasus Problem Solving & Decision Making (PSDM) krisis operasional, presentasi kinerja, dan manajemen resolusi konflik.',
    materials:
      '5 modul resmi terverifikasi: 1) Fondasi kepemimpinan proaktif & The 7 Habits of Highly Effective People; 2) Leader as Coach & teknik supervisi lapangan; 3) Problem Solving & Decision Making (PSDM) berbasis data operasional; 4) High Impact Communication & presentasi laporan kinerja; 5) Budaya continuous improvement & manajemen resolusi konflik tim.',
    categories: ['Leadership', 'Teamwork', 'Mental & Disiplin', 'Manajerial & Administrasi'],
    physicalActivities: 'Tidak ditemukan pada sumber.',
    mentalDisciplineActivities:
      'Pembentukan karakter berintegritas, pengendalian emosi di bawah tekanan target operasional, dan pola pikir proaktif.',
    leadershipActivities:
      'The 7 Habits of Highly Effective People, Leader as Coach, PSDM berbasis data, dan penyelarasan target afdeling/pabrik dengan visi korporasi.',
    teamworkActivities:
      'Memimpin tim multikultural, manajemen resolusi konflik tim, dan high impact communication.',
    estateTechnicalActivities: 'Integrasi data operasional afdeling dalam studi kasus PSDM.',
    fieldPracticeActivities: 'Penerapan teknik supervisi lapangan yang memberdayakan dan coaching langsung kepada bawahan.',
    millPracticeActivities: 'Integrasi data kinerja pabrik dalam latihan pengambilan keputusan (PSDM).',
    socialCommunityActivities: 'Tidak ditemukan pada sumber.',
    sustainabilityActivities: 'Penyelarasan target unit dengan visi keberlanjutan jangka panjang perusahaan.',
    k3Activities: 'Kepemimpinan keselamatan dan pengambilan keputusan krisis lapangan.',
    rotationDetails: 'Tidak ditemukan pada sumber.',
    mentoringDetails: 'Melatih para pemimpin berperan sebagai Coach & Mentor (Leader as Coach) untuk melipatgandakan kinerja tim.',
    learningMethods: 'Pelatihan kelas/lokakarya modular, studi kasus operasional berbasis data, simulasi presentasi & coaching, serta LMS.',
    evaluation:
      'Evaluasi implementasi PSDM, presentasi laporan kinerja, dan capaian target unit operasional (detail bobot penilaian tidak dipublikasikan).',
    targetCompetencies:
      'Kepemimpinan proaktif berorientasi hasil (results-oriented), kecakapan coaching, PSDM krisis lapangan, dan resolusi konflik.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2026',
    sourceUrl: 'https://academy.first-resources.com/program/managerial-leadership',
    sourceLabel: 'First Resources Academy — Managerial & Leadership Development',
    additionalSources: [
      {
        label: 'FR Academy — Artikel: Dari Asisten Menjadi Pemimpin',
        url: 'https://academy.first-resources.com/artikel/dari-asisten-menjadi-pemimpin-seni-mengelola-diri-tim-dan-pekerjaan-1794902468',
        year: '2026',
      },
    ],
    notes:
      'Seluruh 5 judul modul kurikulum diverifikasi langsung dari portal resmi FR Academy. Durasi jam per modul tidak dicantumkan secara publik.',
  },
  {
    id: 'fr-teknikal-estate-mill',
    companyId: 'first-resources',
    companyName: 'First Resources Limited (First Resources Group Indonesia)',
    companyShortName: 'First Resources',
    programName: 'Program Upskilling Teknikal Estate & Teknikal Mill (Operator & Mandor)',
    programType: 'Technical & Operator Training',
    targetParticipants:
      'Praktisi aktif operasional: Mandor lapangan, harvesting checkers, Asisten Estate, operator stasiun PKS, dan tim maintenance pabrik',
    objective:
      'Mempertajam kapabilitas penyelesaian masalah teknis kebun dan pabrik untuk mendongkrak produktivitas tonase TBS/ha, memaksimalkan rendemen minyak (OER), menekan oil losses, serta mencegah downtime mesin.',
    duration: 'Berkelanjutan / refresher berkala (rata-rata pelatihan Staff & Workers 10,8 jam/karyawan pada 2024; 7,6 jam di 2023)',
    scheduleSummary:
      'Dilaksanakan sebagai kursus penyegaran (refresher) terjadwal di FR Academy/unit; jadwal rinci harian per batch tidak dipublikasikan.',
    stages:
      '1) Refreshment materi teknis kultur budidaya / operasional stasiun PKS → 2) Praktik kalibrasi/overhaul & audit losses lapangan → 3) Pendampingan operasional',
    activities:
      'Estate: supervisi mutu panen, kalibrasi takaran pemupukan 4T, penanganan Ganoderma & ulat pemakan daun, kepemimpinan mandor. Mill: optimasi sterilisasi/thresher/press, water treatment & kerak boiler, perawatan pompa/mechanical seal, overhaul ringan, audit oil losses CPO & mutu Kernel.',
    materials:
      'Teknikal Estate (4 modul resmi): 1) Standar mutu kerja panen & buah sawit prima; 2) Pemupukan presisi 4T & kalibrasi; 3) Pengendalian HPT (Ganoderma & ulat); 4) Kepemimpinan mandor, instruksi kerja & APD. Teknikal Mill (4 modul resmi): 1) Sterilisasi, thresher & press; 2) Water treatment plant & pencegahan kerak boiler; 3) Pompa industri, sludge pump & mechanical seal; 4) Audit oil losses CPO & mutu Kernel. SR 2024 juga mencatat pelatihan PIMS & TPM.',
    categories: ['Teknis Kebun', 'Teknis Pabrik', 'Praktik Lapangan', 'Leadership', 'K3'],
    physicalActivities: 'Praktik lapangan kebun (panen, pemupukan) dan overhaul ringan mesin pabrik.',
    mentalDisciplineActivities: 'Disiplin penerapan preventive maintenance, kepatuhan APD, dan standar mutu kerja harian.',
    leadershipActivities: 'Modul khusus kepemimpinan mandor dan komunikasi instruksi kerja di lapangan.',
    teamworkActivities: 'Koordinasi mandor–asisten (estate) dan operator–mekanik (mill).',
    estateTechnicalActivities:
      'Standar panen, pemupukan 4T berbasis data laboratorium, penanganan TBM, pengendalian Ganoderma/HPT, serta Plantation Information Management System (PIMS).',
    fieldPracticeActivities: 'Praktik supervisi panen, kalibrasi pupuk, dan pemeriksaan hama di blok kebun.',
    millPracticeActivities:
      'Operasional & optimasi sterilisasi, thresher, press, water treatment, pencegahan kerak boiler, mechanical seal, Total Productive Maintenance (TPM), serta audit oil losses.',
    socialCommunityActivities: 'Tidak ditemukan pada modul internal (petani plasma dicakup program kemitraan terpisah).',
    sustainabilityActivities: 'Efisiensi pemupukan anorganik 4T dan budidaya kelapa sawit berkelanjutan.',
    k3Activities: 'Kepatuhan APD lapangan dan keselamatan pengoperasian bejana uap boiler bertekanan tinggi.',
    rotationDetails: 'Tidak ditemukan pada sumber.',
    mentoringDetails: 'Estate mentoring & supervisi lapangan oleh asisten/manajer (dilaporkan di SR 2024).',
    learningMethods: 'Pelatihan teknikal kelas, praktik kalibrasi/overhaul langsung, estate mentoring, dan refresher PIMS/TPM.',
    evaluation:
      'Audit penekanan oil losses, penurunan downtime mesin, kepatuhan mutu panen, dan evaluasi kompetensi operator.',
    targetCompetencies:
      'Peningkatan produktivitas TBS/ha, efisiensi pupuk 4T, keandalan boiler/mesin, serta penekanan oil losses CPO.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2026',
    sourceUrl: 'https://academy.first-resources.com/program/teknikal-estate',
    sourceLabel: 'First Resources Academy — Teknikal Estate & Teknikal Mill',
    additionalSources: [
      {
        label: 'First Resources Academy — Teknikal Mill',
        url: 'https://academy.first-resources.com/program/teknikal-mill',
        year: '2026',
      },
      {
        label: 'FR Academy — Artikel Keandalan Boiler & Keselamatan Kerja',
        url: 'https://academy.first-resources.com/artikel/menjaga-jantung-pabrik-tetap-berdetak-membangun-keandalan-boiler-melalui-kompetensi-dan-keselamatan-kerja-1794902195',
        year: '2026',
      },
    ],
    notes:
      'Keempat modul Teknikal Estate dan keempat modul Teknikal Mill diverifikasi langsung dari portal FR Academy, dikuatkan data jam pelatihan SR 2024.',
  },
  {
    id: 'fr-k3-sustainability',
    companyId: 'first-resources',
    companyName: 'First Resources Limited (First Resources Group Indonesia)',
    companyShortName: 'First Resources',
    programName: 'Administrasi, K3 & Sustainability (Karhutla, First Aid, ISPO/RSPO & Daily OHS)',
    programType: 'K3 & Sustainability Training',
    targetParticipants:
      'Regu pemadam kebakaran kebun, perwakilan OHS/P2K3 unit, personel P3K afdeling/pabrik, staf administrasi gudang, dan seluruh pekerja operasional',
    objective:
      'Memastikan kepatuhan regulasi lingkungan, kesiapsiagaan darurat Karhutla, keselamatan kerja (zero fatalities), sertifikasi personel P3K/Ahli K3, serta ketertelusuran audit ISPO & RSPO.',
    duration: 'Rutin harian (daily morning OHS briefing) + pelatihan sertifikasi & simulasi darurat berkala tahunan',
    scheduleSummary:
      'Pengarahan K3 terintegrasi pada apel pagi harian (daily morning meetings) di seluruh unit; pelatihan modul Karhutla, P3K, dan sertifikasi Ahli K3 dilaksanakan berkala.',
    stages:
      '1) Edukasi K3 harian saat apel pagi → 2) Pelatihan kelas & simulasi alat Damkar/P3K → 3) Uji tanggap darurat (emergency response drills) → 4) Audit kepatuhan ISPO/RSPO & evaluasi kecelakaan',
    activities:
      'Daily morning OHS meetings, simulasi tanggap darurat & pemadaman Karhutla, pemeliharaan peralatan Damkar, pelatihan & sertifikasi P3K (First Aid) serta Ahli K3, pelatihan HCV/HCS & HAM, serta tata kelola pembukuan logistik gudang.',
    materials:
      '5 modul resmi FR Academy: 1) Landasan hukum & sanksi penanggulangan Karhutla; 2) Pengenalan & pemeliharaan peralatan Damkar perkebunan; 3) K3 First Aid & tanggap darurat medis lapangan; 4) Tata kelola administrasi unit & logistik gudang; 5) Kepatuhan audit sertifikasi ISPO, RSPO & ketertelusuran TBS. SR 2024 menambahkan HCV–HCS & Human Rights Due Diligence.',
    categories: ['K3', 'Sustainability', 'Fisik', 'Praktik Lapangan', 'Sosial / Community', 'Manajerial & Administrasi'],
    physicalActivities: 'Simulasi fisik lapangan pemadaman kebakaran (fire-fighting drills) dan latihan regu tanggap darurat (ERT).',
    mentalDisciplineActivities: 'Kedisiplinan respons cepat tanggap darurat, kepatuhan APD, dan pelaporan/evaluasi setiap kecelakaan kerja.',
    leadershipActivities: 'Peran Komite K3 (Health & Safety Committees) bersama perwakilan manajemen dan serikat pekerja.',
    teamworkActivities: 'Kerja sama regu pemadam kebakaran (Damkar kebun) dan Emergency Response Team (ERT) siaga.',
    estateTechnicalActivities: 'Ketertelusuran (traceability) TBS dan identifikasi bahaya operasional di blok kebun.',
    fieldPracticeActivities: 'Simulasi pemadaman api lapangan, praktik P3K medis lapangan, dan penilaian HCV/HCS.',
    millPracticeActivities: 'Kesiapsiagaan P3K dan pengawasan bahaya operasional di unit pabrik kelapa sawit.',
    socialCommunityActivities:
      'Pelatihan pengendalian kebakaran & kesadaran HCV/HCS melibatkan masyarakat desa sekitar operasional (dilaporkan di SR 2024).',
    sustainabilityActivities:
      'Kepatuhan audit ISPO, RSPO, ISCC, kebijakan Zero Burning, HCV–HCS, serta ketertelusuran TBS.',
    k3Activities:
      'Sistem Manajemen K3 (SMK3), HIRADC (hazard identification & risk assessment), daily morning OHS meetings, sertifikasi Ahli K3 & P3K, penyediaan APD dalam PKB, dan emergency response drills.',
    rotationDetails: 'Tidak berlaku (berbasis penugasan unit & regu ERT/P2K3).',
    mentoringDetails: 'Edukasi dan pembinaan berkelanjutan oleh Health & Safety Committees serta tim medis di setiap area operasional.',
    learningMethods: 'Briefing harian (daily morning meetings), kelas regulasi & audit, praktik peralatan Damkar & P3K, serta simulasi darurat.',
    evaluation:
      'Audit kepatuhan sertifikasi ISPO/RSPO, sertifikasi personel P3K & Ahli K3, pencatatan & investigasi seluruh kecelakaan kerja, serta evaluasi waktu respons regu Damkar.',
    targetCompetencies:
      'Personel P3K bersertifikat di tiap afdeling/pabrik, kesiapsiagaan regu Karhutla, akurasi logistik gudang, dan lulus audit ISPO/RSPO.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2026',
    sourceUrl: 'https://academy.first-resources.com/program/administrasi-k3',
    sourceLabel: 'First Resources Academy — Administrasi, K3 & Sustainability',
    additionalSources: [
      {
        label: 'First Resources Limited — Occupational Health & Safety Policy & Practices',
        url: 'https://www.first-resources.com/sustainability/employee-relations/occupational-health-safety/',
        year: '2025',
      },
      {
        label: 'First Resources Limited — Sustainability Report 2024 (PDF)',
        url: 'https://www.first-resources.com/wp-content/uploads/2025/04/First-Resources-Limited-Sustainability-Report-2024.pdf',
        year: '2024',
      },
    ],
    notes:
      'Diverifikasi langsung dari portal FR Academy dan laman resmi OHS First Resources. Konfirmasi eksplisit daily morning OHS meetings dan 5 modul kurikulum.',
  },

  // =========================================================================
  // 2. PT ASTRA AGRO LESTARI TBK (AALI) — 3 PROGRAM UTAMA
  // =========================================================================
  {
    id: 'aal-pdp',
    companyId: 'astra-agro',
    companyName: 'PT Astra Agro Lestari Tbk (AALI)',
    companyShortName: 'Astra Agro Lestari',
    programName: 'Planter Development Program (PDP — Tanaman, Teknik, Pabrik, Admin, Sustainability)',
    programType: 'Management Trainee / Calon Asisten',
    targetParticipants:
      'Fresh graduate minimal D4/S1 bidang Pertanian/Kehutanan/Biologi (PDP-TAN), Teknik Sipil/Mesin/Alat Berat (PDP-TEK), Teknik Pabrik (PDP-PAB), Administrasi (PDP-ADM), dan Sustainability/Comdev',
    objective:
      'Membentuk dan menyiapkan calon Asisten baru serta pemimpin masa depan di site ("the true leader") melalui pembinaan mental-disiplin, teori bisnis/teknis, dan praktik operasional bertahap.',
    duration: '±6 bulan keseluruhan (mencakup ~18 hari Bintalsik di Rindam, In-Class Head Office, dan OJT site)',
    scheduleSummary:
      'Tahap 1: Latihan Dasar Kepemimpinan / Bintalsik di Rindam (±18 hari); Tahap 2: In-Class Training di Head Office (beberapa hari); Tahap 3: OJT bertingkat di site (As a Worker → As a Supervisor) hingga total 6 bulan. Jadwal per jam harian tidak dipublikasikan pada situs resmi.',
    stages:
      '1) Seleksi (Administrasi/Esai, Psikotes, Wawancara HR & User, MCU) → 2) Latihan Dasar Kepemimpinan / Bintalsik di Rindam (~18 hari) → 3) In-Class Training di Head Office → 4) OJT di Site tahap As a Worker → 5) OJT tahap As a Supervisor + Improvement Project → 6) Evaluasi akhir & pengangkatan Asisten',
    activities:
      'Bintalsik/kesamaptaan disiplin bersama instansi militer (Rindam), pembekalan kelas nilai Catur Dharma & proses bisnis sawit hulu-hilir, praktik operasional langsung di site Sumatera/Kalimantan/Sulawesi mulai level pekerja hingga supervisor, serta pengerjaan improvement project.',
    materials:
      'Budaya perusahaan & filosofi Catur Dharma Astra, proses bisnis kelapa sawit hulu-hilir, teori teknis sesuai jalur (Manajemen Tanaman, Pengoperasian PKS, Teknik Sipil/Mesin/Alat Berat, Administrasi, Sustainability & Comdev), K3L, kepemimpinan, komunikasi, etika kerja, dan problem solving.',
    categories: [
      'Fisik',
      'Mental & Disiplin',
      'Leadership',
      'Teamwork',
      'Teknis Kebun',
      'Teknis Pabrik',
      'Praktik Lapangan',
      'Sosial / Community',
      'Sustainability',
      'K3',
      'Manajerial & Administrasi',
    ],
    physicalActivities:
      'Latihan Dasar Kepemimpinan / pembinaan fisik dan ketahanan mental (Bintalsik) di fasilitas militer Rindam (seperti Rindam Jaya) selama ±18 hari, ditambah praktik fisik As a Worker di kebun/pabrik.',
    mentalDisciplineActivities:
      'Bintalsik di Rindam membangun kedisiplinan tinggi, ketahanan mental, jiwa korsa, dan kesiapan bekerja di wilayah perkebunan terpencil.',
    leadershipActivities:
      'Latihan dasar kepemimpinan, transisi peran dari As a Worker menjadi As a Supervisor di lapangan, serta proyek perbaikan (improvement project).',
    teamworkActivities:
      'Pembentukan jiwa korsa saat Bintalsik dan kolaborasi lintas fungsi departemen di site perkebunan.',
    estateTechnicalActivities:
      'Jalur PDP-TAN mempelajari agronomi, agroteknologi, hama penyakit tanaman, ilmu tanah, dan manajemen operasional kebun.',
    fieldPracticeActivities:
      'OJT langsung di site operasional Sumatera, Kalimantan, atau Sulawesi secara bertahap mulai level pekerja operasional (As a Worker) hingga pengawas (As a Supervisor).',
    millPracticeActivities:
      'Jalur PDP-PAB & PDP-TEK menjalani praktik langsung pengelolaan Pabrik Kelapa Sawit (PKS), infrastruktur, dan alat berat/mesin.',
    socialCommunityActivities:
      'Jalur khusus PDP Sustainability & Community Development mendalami relasi sosial masyarakat sekitar perkebunan.',
    sustainabilityActivities:
      'Kepatuhan standar sawit berkelanjutan, pengelolaan lingkungan, dan jalur spesialisasi PDP Sustainability.',
    k3Activities:
      'K3L (Kesehatan, Keselamatan Kerja, dan Lingkungan) menjadi pilar wajib seluruh jalur PDP termasuk kesadaran hukum & kepatuhan prosedur lapangan.',
    rotationDetails:
      'Rotasi penugasan lintas fungsi/departemen dan eskalasi tanggung jawab bertingkat (As a Worker → As a Supervisor) di unit site.',
    mentoringDetails:
      'Pembimbingan langsung oleh manajemen lapangan / praktisi operasional site selama fase OJT dan penyusunan improvement project.',
    learningMethods:
      'Kombinasi pelatihan fisik-disiplin (Rindam), In-Class Training (Head Office), On-the-Job Training bertingkat (site), penugasan improvement project, dan evaluasi berkala.',
    evaluation:
      'Evaluasi berkala (mingguan/bulanan) selama masa program mencakup aspek teknikal, manajerial, problem solving, kepatuhan K3L, dan presentasi improvement project sebagai syarat pengangkatan Asisten definitif.',
    targetCompetencies:
      'Asisten operasional/Kepala Bagian masa depan yang menguasai teknis operasional dari level dasar, tangguh mental-fisik, disiplin K3L, dan mampu memimpin tim lapangan.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2025',
    sourceUrl: 'https://www.astra-agro.co.id/id/planter-development-program/',
    sourceLabel: 'PT Astra Agro Lestari Tbk — Laman Resmi Planter Development Program (PDP)',
    additionalSources: [
      {
        label: 'PT Astra Agro Lestari Tbk — Sustainability Report 2025 (PDF)',
        url: 'https://www.astra-agro.co.id/wp-content/uploads/2026/03/Sustainability-Report-AAL-2025-1.pdf',
        year: '2025',
      },
    ],
    notes:
      'Laman resmi PDP AALI diverifikasi langsung (HTTP 200) mengonfirmasi tujuan, jalur PDP-TAN/TEK/PAB/ADM/Sustainability, kualifikasi D4/S1, dan penempatan Sumatera/Kalimantan/Sulawesi. Rincian durasi ~18 hari Rindam & pola As a Worker→Supervisor berasal dari dokumen pelaksanaan PDP; jadwal jam harian tidak dipublikasikan terbuka.',
  },
  {
    id: 'aal-aaa-leadership',
    companyId: 'astra-agro',
    companyName: 'PT Astra Agro Lestari Tbk (AALI)',
    companyShortName: 'Astra Agro Lestari',
    programName: 'Astra Agro Academy (AAA) & Program Kepemimpinan Berjenjang Astra (ABMP, AFLP, AMMP)',
    programType: 'Leadership Development',
    targetParticipants:
      'Karyawan operasional, supervisor lini pertama, hingga manajemen menengah dan calon pimpinan unit PT Astra Agro Lestari Tbk',
    objective:
      'Meningkatkan kompetensi teknis dan kepemimpinan jangka panjang karyawan secara terstruktur sesuai Individual Development Plan (IDP) dan People Roadmap Grup Astra.',
    duration: 'Berkelanjutan sepanjang jenjang karier (rata-rata jam pelatihan karyawan AALI: 9,62 jam pada 2024; 11,91 jam pada 2023; 9,92 jam pada 2022)',
    scheduleSummary:
      'Dijadwalkan per tahun sesuai Individual Development Plan (IDP) dan kalender pelatihan AAA/AMDI; jadwal rinci per hari tidak dipublikasikan.',
    stages:
      'Jenjang berurutan: 1) Astra Basic Management Program (ABMP) → 2) Astra First-line Management Program (AFLP) → 3) Astra Middle Management Program (AMMP) + Astra Attachment Program & pelatihan Diversity & Inclusion (D&I)',
    activities:
      'Pelatihan manajemen berjenjang (ABMP, AFLP, AMMP), standardisasi & sertifikasi teknis internal/eksternal melalui Astra Agro Academy, Astra Attachment Program (penugasan lintas unit/Grup Astra), serta pelatihan Diversity & Inclusion.',
    materials:
      'Manajemen dasar & lini pertama (ABMP/AFLP), manajemen menengah (AMMP), kompetensi teknis perkebunan/pabrik, sertifikasi profesi, serta Diversity & Inclusion (D&I).',
    categories: ['Leadership', 'Manajerial & Administrasi', 'Teamwork', 'Teknis Kebun', 'Teknis Pabrik'],
    physicalActivities: 'Tidak ditemukan pada sumber.',
    mentalDisciplineActivities: 'Penyelarasan karakter kepemimpinan dengan nilai Catur Dharma Astra dan etika kerja.',
    leadershipActivities:
      'Program kepemimpinan berjenjang resmi Grup Astra: ABMP, AFLP, AMMP, serta pelatihan Diversity & Inclusion bagi para pemimpin.',
    teamworkActivities: 'Kolaborasi lintas divisi/perusahaan melalui Astra Attachment Program dan kerja tim inklusif.',
    estateTechnicalActivities: 'Standardisasi dan sertifikasi teknis operasional kebun di bawah Astra Agro Academy (AAA).',
    fieldPracticeActivities: 'Penerapan IDP dan proyek penugasan lintas unit (Astra Attachment Program).',
    millPracticeActivities: 'Standardisasi kompetensi dan sertifikasi operator/staf pabrik melalui AAA.',
    socialCommunityActivities: 'Pelatihan Diversity & Inclusion (D&I) untuk lingkungan kerja inklusif.',
    sustainabilityActivities: 'Penyelarasan dengan Astra Agro Sustainability Aspirations (People Roadmap).',
    k3Activities: 'Integrasi standar kepatuhan K3L dalam seluruh kurikulum kompetensi AAA.',
    rotationDetails: 'Astra Attachment Program menyediakan penugasan/rotasi pembelajaran di ekosistem Grup Astra.',
    mentoringDetails: 'Berbasis Individual Development Plan (IDP) dengan pendampingan atasan dan fasilitator AAA/AMDI.',
    learningMethods: 'Pelatihan kelas terstruktur (AAA & AMDI), sertifikasi internal/eksternal, attachment/penugasan proyek, dan IDP.',
    evaluation:
      'Pengukuran realisasi jam pelatihan per karyawan (GRI), evaluasi pencapaian IDP, dan ujian sertifikasi internal/eksternal.',
    targetCompetencies:
      'Kesiapan suksesi kepemimpinan dari supervisor lini pertama hingga manajemen menengah serta kompetensi teknis tersertifikasi.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2025',
    sourceUrl: 'https://www.astra-agro.co.id/wp-content/uploads/2026/03/Sustainability-Report-AAL-2025-1.pdf',
    sourceLabel: 'PT Astra Agro Lestari Tbk — Sustainability Report 2025 (PDF)',
    additionalSources: [
      {
        label: 'PT Astra International Tbk — Astra Sustainability Report 2024 (ABMP, AFLP, AMMP)',
        url: 'https://r2.astra.co.id/Astra%20Sustainability%20Report%202024.pdf',
        year: '2024',
      },
    ],
    notes:
      'Data jam pelatihan 2022–2024 dan nama program berjenjang (ABMP, AFLP, AMMP, AAA, IDP) terverifikasi dari laporan keberlanjutan resmi. Silabus rinci per sesi tidak dipublikasikan terbuka.',
  },
  {
    id: 'aal-k3-ogr',
    companyId: 'astra-agro',
    companyName: 'PT Astra Agro Lestari Tbk (AALI)',
    companyShortName: 'Astra Agro Lestari',
    programName: 'Pelatihan K3L, Behavior-Based Safety & Operational Golden Rules (OGR)',
    programType: 'K3 & Sustainability Training',
    targetParticipants:
      'Seluruh karyawan operasional kebun (tanaman), teknik, pabrik, pelabuhan, administrasi, dan Tim Inspektur OGR',
    objective:
      'Menciptakan lingkungan kerja yang aman dan berkelanjutan, menekan perilaku/kondisi tidak aman, serta mencapai target zero fatal accident di seluruh area operasional.',
    duration: 'Berkelanjutan rutin tahunan (inspeksi, kampanye K3, dan pelatihan periodik)',
    scheduleSummary:
      'Dilaksanakan rutin melalui kampanye keselamatan kerja, inspeksi lapangan Tim Inspektur OGR, dan pelatihan SMK3; jadwal sesi harian spesifik tidak dirinci dalam laporan publik.',
    stages:
      '1) Edukasi & sosialisasi Operational Golden Rules (OGR) → 2) Pelatihan K3L & Behavior-Based Safety → 3) Pengawasan & inspeksi lapangan oleh Tim Inspektur OGR → 4) Evaluasi & perbaikan kondisi tidak aman',
    activities:
      'Pelatihan K3L berbasis risiko, kampanye keselamatan kerja (safety campaign), penerapan Behavior-Based Safety, serta audit/inspeksi kepatuhan OGR lintas fungsi (tanaman, teknik, pabrik, pelabuhan, administrasi).',
    materials:
      'Pemenuhan peraturan perundangan SMK3, manajemen risiko keselamatan, pencegahan kecelakaan & penyakit akibat kerja, Behavior-Based Safety, Operational Golden Rules (OGR), efisiensi energi, dan produksi bersih.',
    categories: ['K3', 'Sustainability', 'Mental & Disiplin', 'Praktik Lapangan'],
    physicalActivities: 'Inspeksi lapangan dan kepatuhan keselamatan operasional di kebun, pabrik, dan pelabuhan.',
    mentalDisciplineActivities:
      'Penegakan disiplin kepatuhan Operational Golden Rules (OGR) dan perubahan perilaku keselamatan (Behavior-Based Safety).',
    leadershipActivities: 'Peran Tim Inspektur OGR dan pimpinan unit dalam menegakkan budaya keselamatan kerja.',
    teamworkActivities: 'Koordinasi lintas departemen (tanaman, teknik, pabrik, pelabuhan, administrasi) dalam pencegahan kecelakaan.',
    estateTechnicalActivities: 'Penerapan OGR pada pekerjaan kebun (panen, pemupukan, transportasi TBS).',
    fieldPracticeActivities: 'Inspeksi langsung identifikasi unsafe behaviors dan unsafe conditions di seluruh site.',
    millPracticeActivities: 'Penerapan standar keselamatan kerja dan produksi bersih di fasilitas pabrik dan pelabuhan.',
    socialCommunityActivities: 'Tidak ditemukan pada sumber.',
    sustainabilityActivities: 'Aspek LK3 mencakup efisiensi energi, produksi bersih, dan pencegahan pencemaran lingkungan.',
    k3Activities:
      'SMK3, Behavior-Based Safety, Operational Golden Rules (OGR), Tim Inspektur OGR, dan pencegahan kecelakaan fatal.',
    rotationDetails: 'Tidak berlaku.',
    mentoringDetails: 'Pembinaan perilaku aman secara langsung di lapangan oleh Tim Inspektur OGR.',
    learningMethods: 'Pelatihan kelas K3, safety campaign, observasi perilaku (Behavior-Based Safety), dan audit/inspeksi OGR.',
    evaluation:
      'Pemantauan kinerja kecelakaan fatal (target zero fatal accident), temuan unsafe behavior/condition oleh Inspektur OGR, dan audit SMK3.',
    targetCompetencies:
      'Kesadaran & kepatuhan tinggi terhadap keselamatan kerja, kemampuan identifikasi risiko, dan pencapaian zero fatal accident.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2025',
    sourceUrl: 'https://www.astra-agro.co.id/id/kesehatan-keselamatan-kerja/',
    sourceLabel: 'PT Astra Agro Lestari Tbk — Laman Resmi Kesehatan & Keselamatan Kerja (LK3)',
    additionalSources: [
      {
        label: 'PT Astra Agro Lestari Tbk — Berita Acara Public Expose 2024 (OGR & K3)',
        url: 'https://www.astra-agro.co.id/wp-content/uploads/2025/03/Berita-Acara-Pelaksanaan-Public-Expose-2024.pdf',
        year: '2025',
      },
    ],
    notes:
      'Terverifikasi dari laman resmi K3L Astra Agro, Sustainability Report 2024–2025, dan dokumen Public Expose. Rincian durasi jam khusus pelatihan OGR per sesi tidak dipublikasikan.',
  },

  // =========================================================================
  // 3. PT SMART TBK / GOLDEN AGRI-RESOURCES (GAR) — 4 PROGRAM UTAMA
  // =========================================================================
  {
    id: 'smart-bmdp-agro',
    companyId: 'smart-gar',
    companyName: 'PT Sinar Mas Agro Resources and Technology Tbk (SMART / GAR)',
    companyShortName: 'PT SMART Tbk / GAR',
    programName: 'Basic Management Development Programme (BMDP) Agronomy',
    programType: 'Management Trainee / Calon Asisten',
    targetParticipants:
      'Fresh graduate S1/D4 Pertanian (Agronomi, Ilmu Tanah, Teknologi Pertanian) atau Kehutanan, IPK min. 2,85, usia maks. 26 tahun, diutamakan aktif organisasi (BEM, MENWA, dsb.)',
    objective:
      'Mempersiapkan calon pemimpin masa depan (Asisten Kebun) di sektor kelapa sawit dengan keterampilan manajemen yang kuat dan praktik terbaik agronomi industri.',
    duration: '10 bulan pelatihan di area perkebunan + ikatan kontrak/dinas 2 tahun',
    scheduleSummary:
      'Berlangsung 10 bulan penuh di area perkebunan perusahaan (kombinasi In-Class Training dan On-the-Job Training). Rincian jadwal per minggu/jam tidak dipublikasikan terbuka.',
    stages:
      '1) Seleksi (Administrasi, Psikotes, Wawancara HR & User, MCU) → 2) In-Class Training (budaya Sinar Mas, dasar bisnis sawit & teknis agronomi) → 3) On-the-Job Training (OJT) lapangan di perkebunan → 4) Evaluasi & penempatan operasional (Sumatera, Kalimantan, Papua)',
    activities:
      'Pembekalan teori agronomi & manajemen perkebunan, praktik langsung budidaya & pengelolaan tanaman kelapa sawit di area perkebunan, penugasan proyek, serta pembimbingan mentor lapangan.',
    materials:
      'Nilai-nilai perusahaan Sinar Mas, proses bisnis kelapa sawit hulu-hilir (seed-to-shelf), praktik terbaik agronomi sawit, pengelolaan tanaman, administrasi perkebunan, kepemimpinan, analisis, kerja sama tim, dan problem solving.',
    categories: [
      'Leadership',
      'Teamwork',
      'Teknis Kebun',
      'Praktik Lapangan',
      'Mental & Disiplin',
      'Manajerial & Administrasi',
    ],
    physicalActivities: 'Kerja lapangan harian di area perkebunan Sumatera/Kalimantan/Papua selama 10 bulan masa pelatihan.',
    mentalDisciplineActivities:
      'Seleksi mengutamakan pengalaman organisasi/kedisiplinan (BEM, MENWA); pembentukan integritas dan ketangguhan lapangan selama 10 bulan.',
    leadershipActivities: 'Pengembangan kepemimpinan operasional perkebunan dan manajemen tim kerja lapangan.',
    teamworkActivities: 'Penekanan kemampuan kerja sama tim di lingkungan operasional perkebunan terpadu.',
    estateTechnicalActivities: 'Praktik terbaik budidaya kelapa sawit, manajemen tanaman, pemeliharaan, panen, dan administrasi kebun.',
    fieldPracticeActivities: 'Pelatihan dan OJT dilaksanakan langsung di area perkebunan perusahaan (Sumatera, Kalimantan, Papua).',
    millPracticeActivities: 'Pengenalan rantai nilai seed-to-shelf (fokus teknis pabrik berada pada jalur BMDP Manufacturing/Engineering).',
    socialCommunityActivities: 'Tidak dirinci pada pengumuman program.',
    sustainabilityActivities: 'Penyelarasan praktik agronomi dengan kerangka keberlanjutan Collective for Impact PT SMART Tbk.',
    k3Activities: 'Penerapan standar K3 operasional perkebunan harian.',
    rotationDetails: 'Penempatan & praktik langsung di area perkebunan lintas wilayah Sumatera, Kalimantan, atau Papua.',
    mentoringDetails: 'Pembimbingan oleh praktisi dan pelatih perkebunan berpengalaman selama fase OJT.',
    learningMethods: 'In-Class Training (ICT), On-the-Job Training (OJT) lapangan, penugasan proyek, dan mentoring.',
    evaluation: 'Evaluasi berkala atas pemahaman teknis, analisis, kepemimpinan, dan kinerja OJT sebelum pengangkatan.',
    targetCompetencies:
      'Calon pemimpin/Asisten Agronomi dengan integritas, kemampuan analisis kuat, penguasaan teknis kebun, dan kepemimpinan tim.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2025',
    sourceUrl:
      'https://fp.usu.ac.id/id/lowongan-pekerjaan-fakultas/rekrutmen-basic-management-development-programme-bmdp-agronomy-oleh-pt-sinar-mas-agro-resources-and-technology-tbk-pt-smart-tbk-agribusiness-and-food',
    sourceLabel: 'Fakultas Pertanian USU — Rekrutmen Resmi BMDP Agronomy PT SMART Tbk (Jan 2025)',
    additionalSources: [
      {
        label: 'ITSI Medan — Portal Rekrutmen PT SMART Tbk (BMDP)',
        url: 'https://itsi.ac.id/index.php/pt-smart-tbk/',
        year: '2025',
      },
      {
        label: 'PT SMART Tbk — Bekerja Bersama Kami',
        url: 'https://www.smart-tbk.com/bekerja-bersama-kami/',
        year: '2025',
      },
    ],
    notes:
      'Pengumuman resmi di Fakultas Pertanian USU (7 Jan 2025) diverifikasi langsung (HTTP 200): mengonfirmasi durasi 10 bulan di area perkebunan, ikatan dinas 2 tahun, dan kualifikasi. Pembagian bulan ICT vs OJT khusus BMDP Agronomy tidak dirinci pada pengumuman tersebut.',
  },
  {
    id: 'smart-bmdp-mfg',
    companyId: 'smart-gar',
    companyName: 'PT Sinar Mas Agro Resources and Technology Tbk (SMART / GAR)',
    companyShortName: 'PT SMART Tbk / GAR',
    programName: 'Basic Management Development Programme (BMDP) Manufacturing / Engineering',
    programType: 'Management Trainee / Calon Asisten',
    targetParticipants:
      'Fresh graduate S1/D4 Teknik Mesin, Teknik Elektro, Teknik Kimia, Teknik Industri, atau Teknologi Pengolahan Hasil Pertanian (TPHP)',
    objective:
      'Menyiapkan calon pemimpin/asisten teknis pabrik dan manufaktur kelapa sawit yang menguasai operasi mesin, boiler, efisiensi CPO/kernel, serta kepemimpinan tim pabrik.',
    duration: '6 bulan total (3,5 bulan In-Class Training + 2,5 bulan On-the-Job Training)',
    scheduleSummary:
      'Rincian per bulan terverifikasi: Bulan 1–3,5 (3,5 bulan) In-Class Training / Foundation; Bulan 3,5–6 (2,5 bulan) On-the-Job Training (OJT) di pabrik/unit operasional. Jadwal per jam harian tidak dipublikasikan.',
    stages:
      '1) Seleksi rekrutmen → 2) In-Class Training / Foundation (3,5 bulan) → 3) On-the-Job Training / OJT di PKS/unit manufaktur (2,5 bulan) + proyek & mentoring → 4) Evaluasi & penempatan',
    activities:
      'Pembelajaran kelas budaya perusahaan & proses seed-to-shelf, pelatihan teknis pemeliharaan mesin, pemantauan boiler, pengelolaan TBS, analisis kerugian (losses) CPO & kernel, praktik langsung OJT di pabrik, serta proyek nyata di bawah bimbingan mentor.',
    materials:
      'Corporate values Sinar Mas, proses bisnis sawit seed-to-shelf, pemeliharaan mesin pabrik, operasional boiler, pengelolaan TBS, analisis oil losses CPO & kernel, leadership, kemampuan analitis, dan strategi pemecahan masalah.',
    categories: ['Leadership', 'Teamwork', 'Teknis Pabrik', 'Praktik Lapangan', 'K3', 'Manajerial & Administrasi'],
    physicalActivities: 'Aktivitas teknis dan inspeksi lapangan di unit pabrik pengolahan selama 2,5 bulan OJT.',
    mentalDisciplineActivities: 'Disiplin SOP operasional pabrik, ketelitian analisis losses, dan kepatuhan standar keselamatan boiler/mesin.',
    leadershipActivities: 'Pengembangan kepemimpinan teknis, komunikasi operasional, dan pengelolaan tim kerja pabrik.',
    teamworkActivities: 'Kolaborasi antarbagian produksi, utilitas boiler, dan maintenance.',
    estateTechnicalActivities: 'Pemahaman rantai pasok hulu (kualitas TBS) dalam perspektif seed-to-shelf.',
    fieldPracticeActivities: '2,5 bulan On-the-Job Training (OJT) langsung di fasilitas operasional perusahaan.',
    millPracticeActivities:
      'Fokus penuh pada pemeliharaan mesin, pemantauan boiler, proses pengolahan TBS, dan analisis losses CPO & kernel.',
    socialCommunityActivities: 'Tidak ditemukan pada sumber.',
    sustainabilityActivities: 'Efisiensi pengolahan dan komitmen produksi minyak sawit berkelanjutan Sinar Mas Agribusiness.',
    k3Activities: 'Keselamatan operasional boiler, peralatan pabrik, dan kepatuhan APD.',
    rotationDetails: 'Transisi terstruktur dari pusat pelatihan kelas (3,5 bulan) menuju penugasan OJT di fasilitas pabrik/operasional (2,5 bulan).',
    mentoringDetails: 'Penugasan proyek nyata di bawah bimbingan mentor/pelatih berpengalaman.',
    learningMethods: 'In-Class Training (3,5 bulan), On-the-Job Training di pabrik (2,5 bulan), studi kasus/proyek nyata, dan mentoring.',
    evaluation: 'Evaluasi pemahaman teori kelas, capaian proyek OJT, dan kinerja operasional di bawah penilaian mentor.',
    targetCompetencies:
      'Penguasaan teknis pabrik/engineering, pengendalian kerugian CPO & kernel, serta kesiapan peran asisten manufaktur/mill.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Informasi Sebagian',
    year: '2024–2025',
    sourceUrl: 'https://www.smart-tbk.com/bekerja-bersama-kami/',
    sourceLabel: 'PT SMART Tbk — Bekerja Bersama Kami (rujukan pendamping kanal karier Prosple/ITSI)',
    additionalSources: [
      {
        label: 'PT SMART Tbk — Laporan Tahunan & Keberlanjutan 2024 (PDF)',
        url: 'https://www.smart-tbk.com/wp-content/uploads/2025/04/AR-SR-PT-SMART-Tbk-2024.pdf',
        year: '2024',
      },
    ],
    notes:
      'Berlabel "Informasi Sebagian" karena proporsi rinci 3,5 bulan kelas + 2,5 bulan OJT dan detail teknis boiler/losses berasal dari publikasi rekrutmen mitra (Prosple/dokumen rekrutmen BMDP), sementara portal resmi smart-tbk.com memuat gambaran umum jalur karier.',
  },
  {
    id: 'smart-hrmdp',
    companyId: 'smart-gar',
    companyName: 'PT Sinar Mas Agro Resources and Technology Tbk (SMART / GAR)',
    companyShortName: 'PT SMART Tbk / GAR',
    programName: 'Human Resources Management Development Programme (HRMDP)',
    programType: 'Management Trainee / Calon Asisten',
    targetParticipants:
      'Fresh graduate atau pengalaman maks. 2 tahun, S1 semua jurusan (IPK min. 3,00), usia maks. 26 tahun, TOEFL iBT 90 / PBT 500 / IELTS 6.0 / TOEIC 600',
    objective:
      'Mengembangkan lulusan sarjana terbaik menjadi calon pemimpin fungsi Human Resources di industri agribisnis kelapa sawit melalui kelas, mentoring top coaches, dan proyek strategis HR.',
    duration: '1 tahun (12 bulan) keseluruhan',
    scheduleSummary:
      'Terdiri dari 4 tahapan berurutan selama 1 tahun (Foundation → General Knowledge & Soft Skill → Technical Knowledge & Business Acumen → Deliverables di COE HR). Durasi rinci per tahap dalam bulan tidak dirinci pada laman resmi.',
    stages:
      '1) Tahap 1 – Foundation → 2) Tahap 2 – General Knowledge & Soft Skill → 3) Tahap 3 – Technical Knowledge & Business Acumen → 4) Tahap 4 – Deliverables (penempatan & proyek di Center of Expertise HR)',
    activities:
      'Pembelajaran kelas dan luar kelas, pengenalan industri sawit & budaya Sinar Mas, pelatihan efektivitas pribadi & kepemimpinan, rotasi/pengenalan berbagai fungsi divisi HR, mentoring bersama top coaches & praktisi HR, serta eksekusi proyek nyata di Center of Expertise (COE) HR.',
    materials:
      'Fondasi, budaya & nilai perusahaan Sinar Mas; industri kelapa sawit & proses bisnis Sinar Mas Agribusiness and Food; efektivitas pribadi, kepemimpinan & manajemen SDM; pemahaman proses menyeluruh berbagai fungsi HR & ketajaman bisnis (business acumen).',
    categories: ['Leadership', 'Teamwork', 'Manajerial & Administrasi', 'Praktik Lapangan'],
    physicalActivities: 'Tidak ditemukan pada sumber (fokus manajemen SDM korporat & operasional).',
    mentalDisciplineActivities: 'Pembentukan performa kerja optimal, etos kerja, dan penghayatan budaya Sinar Mas.',
    leadershipActivities: 'Modul kepemimpinan, personal effectiveness, dan perumusan strategi bisnis berbasis SDM.',
    teamworkActivities: 'Kolaborasi lintas fungsi divisi HR dan keterlibatan langsung dalam tim proyek Center of Expertise (COE).',
    estateTechnicalActivities: 'Pengayaan pengetahuan menyeluruh mengenai industri kelapa sawit dan proses operasional Sinar Mas Agribusiness.',
    fieldPracticeActivities: 'Pembelajaran di luar kelas dan penugasan langsung mengerjakan proyek nyata di salah satu fungsi COE HR.',
    millPracticeActivities: 'Pengenalan proses bisnis terintegrasi hulu-hilir perusahaan.',
    socialCommunityActivities: 'Pemahaman kontribusi industri sawit terhadap penghidupan >40 juta jiwa masyarakat Indonesia.',
    sustainabilityActivities: 'Komitmen produksi minyak sawit berkelanjutan sebagai konteks strategi SDM perusahaan.',
    k3Activities: 'Tidak dirinci secara spesifik pada laman HRMDP.',
    rotationDetails: 'Pengenalan ke berbagai fungsi dalam divisi HR sebelum ditempatkan pada satu posisi fungsi COE HR di Tahap 4.',
    mentoringDetails: 'Program mentoring eksplisit di bawah bimbingan para top coaches dan praktisi HR senior berpengalaman.',
    learningMethods:
      'Pembelajaran di dalam & luar kelas, mentoring bersama top coaches, pengenalan lintas fungsi HR, dan project-based learning di COE HR.',
    evaluation:
      'Penilaian deliverables proyek nyata dan penerapan ide pada posisi penugasan COE HR di Tahap 4.',
    targetCompetencies:
      'Penguasaan menyeluruh proses HR, kepemimpinan, business acumen industri sawit, dan kemampuan merancang strategi SDM.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2025',
    sourceUrl: 'https://www.smart-tbk.com/human-resources-management-development-programme/',
    sourceLabel: 'PT SMART Tbk — Laman Resmi HRMDP (4 Tahap & Durasi 1 Tahun)',
    notes:
      'Laman resmi PT SMART Tbk dibuka dan diverifikasi langsung (HTTP 200): durasi 1 tahun, nama 4 tahap resmi, metode mentoring top coaches, dan syarat kualifikasi terverifikasi 100%.',
  },
  {
    id: 'smart-k3-cert',
    companyId: 'smart-gar',
    companyName: 'PT Sinar Mas Agro Resources and Technology Tbk (SMART / GAR)',
    companyShortName: 'PT SMART Tbk / GAR',
    programName: 'Pelatihan K3, Sertifikasi Operasional & Pengarahan Keselamatan Lapangan (OHS)',
    programType: 'K3 & Sustainability Training',
    targetParticipants:
      'Pekerja kebun & PKS, OHS Officer, kontraktor, operator boiler & alat berat, teknisi listrik, auditor SMK3, serta dokter/paramedis perusahaan',
    objective:
      'Menjadikan keselamatan kerja sebagai prioritas harian, mengubah perilaku kerja (behavioral safety), memitigasi risiko kecelakaan, dan memastikan kepatuhan sertifikasi K3 di kebun, pabrik, serta kantor.',
    duration: 'Berkelanjutan tahunan (sertifikasi periodik & pengarahan keselamatan rutin harian di lapangan)',
    scheduleSummary:
      'Pengarahan keselamatan (safety briefing APD & mitigasi risiko) dilakukan rutin di kebun dan PKS; pelatihan sertifikasi Ahli K3, CSMS, Investigasi Kecelakaan, dan operator dilaksanakan berkala setiap tahun.',
    stages:
      '1) Penetapan kebijakan K3 & identifikasi celah risiko unit → 2) Pengarahan keselamatan lapangan & pelatihan teknis APD → 3) Pelatihan & sertifikasi spesialisasi (Ahli K3, CSMS, Investigasi Kecelakaan, Boiler/Alat Berat, Hiperkes) → 4) Pengawasan & evaluasi kepatuhan rutin',
    activities:
      'Pengarahan keselamatan kerja langsung di kebun & PKS, identifikasi celah keselamatan bersama pimpinan unit & tim keberlanjutan, pelatihan Investigasi Kecelakaan, pelatihan Ahli K3, pelatihan Contractor Safety Management System (CSMS), serta sertifikasi operator boiler, alat berat, kelistrikan, auditor SMK3, dan Hiperkes.',
    materials:
      'Kesadaran risiko & transformasi perilaku keselamatan (behavioral safety), penggunaan Alat Pelindung Diri (APD), investigasi kecelakaan (Accident Investigation), Ahli K3 (OHS Expert), CSMS, pengoperasian aman boiler/alat berat/listrik, serta kesehatan kerja (Hiperkes).',
    categories: ['K3', 'Sustainability', 'Teknis Pabrik', 'Teknis Kebun', 'Praktik Lapangan'],
    physicalActivities: 'Inspeksi lapangan langsung di kebun dan pabrik serta praktik aman pengoperasian peralatan/APD.',
    mentalDisciplineActivities: 'Mengubah pola pikir dan perilaku kerja agar proaktif mencegah kecelakaan sebelum terjadi.',
    leadershipActivities: 'Kolaborasi OHS Officer dengan pimpinan unit dan tim keberlanjutan untuk menegakkan standar keselamatan.',
    teamworkActivities: 'Keterlibatan bersama pekerja, kontraktor (CSMS), pimpinan unit, dan tim keberlanjutan.',
    estateTechnicalActivities: 'Pengawasan keselamatan kerja langsung pada aktivitas operasional perkebunan.',
    fieldPracticeActivities: 'Pengarahan APD dan peninjauan risiko langsung di area kebun dan PKS.',
    millPracticeActivities: 'Sertifikasi operator boiler, tenaga listrik, dan pengawasan keselamatan lingkungan berisiko tinggi di PKS.',
    socialCommunityActivities: 'Keselamatan dan kesehatan tenaga kerja dalam kerangka keberlanjutan Collective for Impact.',
    sustainabilityActivities: 'Integrasi K3, HAM, dan praktik ketenagakerjaan dalam kerangka Collective for Impact (AR & SR 2024–2025).',
    k3Activities:
      'Accident Investigation Training, Ahli K3, CSMS Training, sertifikasi auditor SMK3, operator boiler/alat berat/listrik, Hiperkes, serta safety briefing harian.',
    rotationDetails: 'Tidak berlaku.',
    mentoringDetails: 'Pendampingan & rekomendasi perbaikan teknis keselamatan langsung oleh OHS Officer berpengalaman di setiap unit.',
    learningMethods: 'Pengarahan lapangan (safety briefing), pelatihan teknis & investigasi, program sertifikasi formal, dan evaluasi/inspeksi unit.',
    evaluation:
      'Audit kepatuhan SMK3, uji sertifikasi kompetensi resmi (Ahli K3, operator, Hiperkes), dan evaluasi risiko/kecelakaan unit.',
    targetCompetencies:
      'Tenaga kerja sadar risiko & disiplin APD, operator/ahli K3 tersertifikasi, serta kepatuhan keselamatan kontraktor (CSMS).',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2025',
    sourceUrl:
      'https://www.smart-tbk.com/temui-ahli-k3-kami-yang-mengedepankan-keselamatan-kerja-dalam-operasi-kelapa-sawit/',
    sourceLabel: 'PT SMART Tbk — Profil & Praktik Pelatihan K3 Lapangan (Apr 2025)',
    additionalSources: [
      {
        label: 'PT SMART Tbk — Annual & Sustainability Report 2024 (PDF)',
        url: 'https://www.smart-tbk.com/wp-content/uploads/2025/04/AR-SR-PT-SMART-Tbk-2024.pdf',
        year: '2024',
      },
      {
        label: 'PT SMART Tbk — Laporan Keberlanjutan 2025 (PDF)',
        url: 'https://www.smart-tbk.com/wp-content/uploads/2026/05/Memperkuat-Upaya-Berkelanjuntan-.pdf',
        year: '2025',
      },
    ],
    notes:
      'Diverifikasi langsung dari artikel resmi PT SMART Tbk (28 Apr 2025) dan AR/SR 2024–2025. Jenis pelatihan & sertifikasi K3 terdokumentasi eksplisit; durasi jam per kursus tidak dirinci.',
  },

  // =========================================================================
  // 4. BUMITAMA AGRI LTD (PT BUMITAMA GUNAJAYA AGRO / BGA) — 3 PROGRAM UTAMA
  // =========================================================================
  {
    id: 'bga-bdp',
    companyId: 'bumitama-agri',
    companyName: 'Bumitama Agri Ltd (PT Bumitama Gunajaya Agro / BGA Group)',
    companyShortName: 'Bumitama Agri (BGA)',
    programName: 'Basic Development Program (BDP — Agronomy, Engineering/Mill, Administration & Traksi)',
    programType: 'Management Trainee / Calon Asisten',
    targetParticipants:
      'Fresh graduate S1/D4 bidang Pertanian/Agronomi, Teknik Mesin/Elektro/Industri/Sipil, serta Akuntansi/Manajemen/Administrasi (calon Asisten Kebun, Pabrik, Traksi, dan Administrasi)',
    objective:
      'Mempersiapkan lulusan baru menjadi calon asisten dan pemimpin operasional masa depan di perkebunan dan pabrik kelapa sawit Bumitama dengan penguasaan kompetensi teknis, manajerial, dan SOP.',
    duration: '6 bulan keseluruhan (3 bulan In-Class Training + 3 bulan On-the-Job Training)',
    scheduleSummary:
      'Pembagian fase bulanan: Bulan 1–3 (3 bulan) Pendidikan In-Class di Training Center (Pundu Learning Academy / Kendawangan Learning Centre); Bulan 4–6 (3 bulan) On-the-Job Training (OJT) di unit operasional kebun/pabrik. Jadwal jam harian tidak dipublikasikan terbuka.',
    stages:
      '1) Seleksi (Campus Hiring / Rekrutmen) → 2) Pendidikan In-Class & pembinaan disiplin di Training Center (3 bulan) → 3) On-the-Job Training / OJT di unit kebun/PKS/kantor operasional (3 bulan) → 4) Evaluasi & penempatan operasional (Kalimantan Tengah, Kalimantan Barat, Riau)',
    activities:
      'Pelatihan kelas kompetensi teknis & manajerial di PNLA/KNLC, penguatan nilai perusahaan & SOP, praktik operasional langsung harian di kebun/PKS/traksi selama OJT, pemecahan masalah lapangan, dan adaptasi lingkungan site.',
    materials:
      'Identitas & nilai perusahaan Bumitama, SOP & Best Management Practices (BMP) kelapa sawit, kompetensi teknis sesuai jalur (Agronomi, Pabrik/Mill, Teknik/Traksi, Administrasi), serta kompetensi manajerial dasar.',
    categories: [
      'Mental & Disiplin',
      'Leadership',
      'Teamwork',
      'Teknis Kebun',
      'Teknis Pabrik',
      'Praktik Lapangan',
      'Manajerial & Administrasi',
    ],
    physicalActivities:
      'Aktivitas kerja lapangan di area perkebunan Kalimantan Tengah/Barat selama fase OJT; fasilitas pelatihan PNLA juga menyelenggarakan bina fisik/kesamaptaan (lihat program PNLA terpisah).',
    mentalDisciplineActivities:
      'Pembinaan kedisiplinan terhadap SOP operasional, etos kerja, dan kesiapan penempatan di wilayah operasional Kalimantan/Riau.',
    leadershipActivities: 'Pembekalan managerial competency untuk mempersiapkan peran asisten/pemimpin unit lapangan.',
    teamworkActivities: 'Kolaborasi antarpeserta di pusat pelatihan berasrama (PNLA/KNLC) dan tim kerja operasional site.',
    estateTechnicalActivities: 'Modul agronomi kelapa sawit, best management practices (BMP), dan operasional harian kebun (jalur Agronomy Assistant).',
    fieldPracticeActivities: '3 bulan On-the-Job Training (OJT) langsung di unit operasional kebun/pabrik Kalimantan Tengah atau Kalimantan Barat.',
    millPracticeActivities: 'Modul operasional pabrik kelapa sawit (mill) dan teknik/traksi bagi jalur Engineering Assistant.',
    socialCommunityActivities: 'Tidak dirinci pada sumber program BDP.',
    sustainabilityActivities: 'Penerapan Best Management Practices (BMP) dan kepatuhan standar operasional berkelanjutan Bumitama.',
    k3Activities: 'Integrasi SOP keselamatan kerja dan standar operasional unit selama kelas & OJT.',
    rotationDetails: 'Perpindahan dari Training Center (PNLA/KNLC) selama 3 bulan menuju unit operasional lapangan/pabrik selama 3 bulan.',
    mentoringDetails: 'Bimbingan operasional oleh praktisi/manajemen unit selama masa OJT di site.',
    learningMethods: 'Pendidikan In-Class terpusat (3 bulan) di Learning Academy + On-the-Job Training (3 bulan) di unit operasional.',
    evaluation:
      'Evaluasi pemahaman teknis & manajerial selama In-Class serta penilaian kinerja praktik lapangan (OJT) sebagai syarat penempatan Asisten.',
    targetCompetencies:
      'Penguasaan teknis agronomi/mill/traksi/administrasi, disiplin SOP, pemecahan masalah lapangan, dan kesiapan menjabat Asisten.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2025',
    sourceUrl: 'https://fp.usu.ac.id/id/pengumuman/recruitment-management-trainee-basic-development-program-pt-bga',
    sourceLabel: 'Fakultas Pertanian USU — Rekrutmen Resmi MT Basic Development Program (BDP) PT BGA',
    additionalSources: [
      {
        label: 'Career Universitas Brawijaya — Bumitama Goes to Campus (BDP 6 Bulan)',
        url: 'https://career.ub.ac.id/event/bumitama-goes-to-campus-universitas-brawijaya/',
        year: '2024',
      },
      {
        label: 'Bumitama Agri Ltd — Sustainability Report 2024 (BCU & PNLA, PDF)',
        url: 'https://bumitama-agri.com/wp-content/uploads/2025/04/Bumitama-Agri-Ltd_SR2024-1.pdf',
        year: '2024',
      },
    ],
    notes:
      'Durasi 6 bulan dan jalur BDP terverifikasi melalui pengumuman resmi kampus (USU & UB) serta didukung dokumen BCU/PNLA pada SR 2024. Rincian pembagian 3 bulan kelas + 3 bulan OJT terdokumentasi dari bahan kurikulum BDP; jadwal per minggu tidak dipublikasikan terbuka.',
  },
  {
    id: 'bga-bcu-pnla',
    companyId: 'bumitama-agri',
    companyName: 'Bumitama Agri Ltd (PT Bumitama Gunajaya Agro / BGA Group)',
    companyShortName: 'Bumitama Agri (BGA)',
    programName: 'Bumitama Corporate University (BCU) & Capability Building / Bina Fisik di Pundu Learning Academy (PNLA)',
    programType: 'Pembinaan Fisik, Mental & Karakter',
    targetParticipants:
      'Karyawan lintas jenjang organisasi (kurikulum BCU) serta pimpinan/koordinator/tenaga pendidik ekosistem regional Bumitama (dokumentasi Capability Building di PNLA)',
    objective:
      'Menyelenggarakan kurikulum pelatihan berkelanjutan (agronomi, mill, administrasi, nilai perusahaan, kepemimpinan) serta membangun ketahanan fisik, kedisiplinan, dan karakter kepemimpinan di pusat pelatihan PNLA.',
    duration: 'BCU: Berkelanjutan tahunan (rata-rata 8,7 jam/karyawan pada 2024; target 13 jam) · Capability Building PNLA: 4 hari (28 Juli–1 Agustus 2025)',
    scheduleSummary:
      'BCU berjalan rutin sepanjang tahun (pria rata-rata 9,4 jam; wanita 6,2 jam pada 2024). Kegiatan Capability Building di PNLA terdokumentasi eksplisit selama 4 hari (28 Juli–1 Agustus 2025), namun jam per sesi tidak dirinci.',
    stages:
      'BCU: Kurikulum kompetensi & kepemimpinan berjenjang + kemitraan pendidikan lanjutan (INSTIPER, IPB, UPH). Capability Building PNLA: 1) Bina Fisik & Kesamaptaan bersama Kodim → 2) Pelatihan karakter kepemimpinan & manajerial → 3) Kolaborasi lintas region',
    activities:
      'BCU: penyampaian modul khusus agronomi, mill, administrasi, SOP, nilai perusahaan, dan kepemimpinan. PNLA Capability Building: sesi Bina Fisik/kesamaptaan dikawal langsung tim Kodim Kotawaringin Timur (TNI), pelatihan kepemimpinan & manajerial, serta kolaborasi antarregion.',
    materials:
      'Bina Fisik (kesehatan, ketahanan fisik, kedisiplinan bersama Kodim/TNI), karakter kepemimpinan & manajerial, nilai perusahaan, Best Management Practices, dan standar operasional prosedur (SOP).',
    categories: [
      'Fisik',
      'Mental & Disiplin',
      'Leadership',
      'Teamwork',
      'Manajerial & Administrasi',
    ],
    physicalActivities:
      'Sesi Bina Fisik & kesamaptaan di Pundu Learning Academy (PNLA) yang dikawal langsung oleh instruktur dari Kodim Kotawaringin Timur (TNI).',
    mentalDisciplineActivities:
      'Pembentukan kedisiplinan, daya tahan fisik-mental, dan karakter kepemimpinan melalui gemblengan bersama unsur Kodim/TNI.',
    leadershipActivities:
      'Pengembangan kompetensi kepemimpinan dan manajerial lintas level di BCU serta pelatihan karakter kepemimpinan di PNLA.',
    teamworkActivities:
      'Kolaborasi dinamis antarpeserta lintas region yang dikumpulkan di pusat pelatihan terpadu PNLA.',
    estateTechnicalActivities: 'BCU menyediakan modul agronomi dan BMP terpisah bagi staf kebun.',
    fieldPracticeActivities: 'Latihan fisik lapangan di area PNLA (Region 3 Pundu, Kotawaringin Timur, Kalimantan Tengah).',
    millPracticeActivities: 'BCU menyediakan modul operasional mill terpisah bagi staf pabrik.',
    socialCommunityActivities:
      'Ekosistem Yayasan Bumitama memperkuat SDM pendidikan di wilayah perkebunan; dibedakan tegas dari program beasiswa pendidikan formal BCU (INSTIPER/IPB/UPH).',
    sustainabilityActivities: 'Penyelarasan modul BCU dengan prinsip tata kelola dan keberlanjutan Bumitama.',
    k3Activities: 'Kesehatan & kebugaran fisik peserta sebagai penunjang keselamatan kerja.',
    rotationDetails: 'Mengumpulkan perwakilan dari berbagai region operasional ke satu pusat pelatihan (PNLA).',
    mentoringDetails: 'Pendampingan oleh pimpinan Yayasan/BCU dan fasilitator internal.',
    learningMethods: 'Pelatihan fisik lapangan bersama TNI/Kodim, lokakarya kelas kepemimpinan & manajerial, serta sistem Corporate University (BCU).',
    evaluation:
      'Pemantauan realisasi rata-rata jam pelatihan per karyawan (SR 2024: 8,7 jam vs target 13 jam) dan evaluasi partisipasi kegiatan PNLA.',
    targetCompetencies:
      'Ketahanan fisik, kedisiplinan, kekompakan lintas region, karakter kepemimpinan, dan penguasaan nilai/SOP Bumitama.',
    implementationStatus: 'Terdokumentasi Dilaksanakan',
    verificationStatus: 'Terverifikasi',
    year: '2024–2025',
    sourceUrl:
      'https://yayasanbumitama.org/yayasan-bumitama-gelar-capability-building-di-pnla-tingkatkan-kepemimpinan-dan-karakter-kepemimpinan/',
    sourceLabel: 'Yayasan Bumitama — Dokumentasi Capability Building & Bina Fisik bersama Kodim di PNLA (Jul 2025)',
    additionalSources: [
      {
        label: 'Bumitama Agri Ltd — Sustainability Report 2024 (BCU & Training Hours, PDF)',
        url: 'https://bumitama-agri.com/wp-content/uploads/2025/04/Bumitama-Agri-Ltd_SR2024-1.pdf',
        year: '2024',
      },
    ],
    notes:
      'Catatan validitas penting: dokumentasi Bina Fisik 4 hari (28 Jul–1 Agu 2025) bersama Kodim di PNLA merupakan kegiatan nyata yang dilaksanakan di fasilitas PNLA milik Bumitama untuk ekosistem Yayasan Bumitama, sedangkan program beasiswa S1/S2/S3 BCU (INSTIPER/IPB/UPH) dipisahkan sebagai pendidikan formal dan tidak dicampur sebagai training harian.',
  },
  {
    id: 'bga-ohs',
    companyId: 'bumitama-agri',
    companyName: 'Bumitama Agri Ltd (PT Bumitama Gunajaya Agro / BGA Group)',
    companyShortName: 'Bumitama Agri (BGA)',
    programName: 'Program Pelatihan & Sosialisasi K3 "Triple Zero Targets" & Sertifikasi Operator',
    programType: 'K3 & Sustainability Training',
    targetParticipants:
      'Seluruh ~33.000 pekerja operasional, operator bersertifikat, anggota Komite K3 (P2K3), dan manajemen unit',
    objective:
      'Mencapai target "Triple Zero Targets" (nihil kecelakaan fatal serta penurunan tingkat frekuensi dan keparahan kecelakaan) melalui pelatihan teknis keselamatan, sertifikasi operator, dan pelaporan insiden digital.',
    duration: 'Rutin bulanan (rapat & sosialisasi Komite K3 bulanan) dan pelatihan sertifikasi berkala tahunan',
    scheduleSummary:
      'Terintegrasi dalam pertemuan bulanan Komite K3 (monthly OHS Committee meetings) serta pelatihan sertifikasi operator dan sosialisasi berkala; jadwal jam per sesi tidak dirinci.',
    stages:
      '1) Identifikasi & analisis risiko bahaya unit → 2) Pelatihan & sertifikasi wajib operator, P3K, MSDS & pemadam kebakaran → 3) Rapat & sosialisasi P2K3 bulanan → 4) Pelaporan kecelakaan via aplikasi smartphone & audit internal',
    activities:
      'Pelatihan lisensi wajib operator, pelatihan Pertolongan Pertama pada Kecelakaan (P3K / First Aid), pemahaman Material Safety Data Sheets (MSDS), pengoperasian alat pemadam kebakaran, analisis risiko bahaya, rapat P2K3 bulanan, serta pelaporan kecelakaan melalui aplikasi smartphone.',
    materials:
      'Triple Zero Targets, standar lisensi operator, First Aid (P3K), penanganan bahan kimia/MSDS, pengoperasian peralatan pemadam kebakaran (fire-fighting), analisis risiko bahaya (hazard risk analysis), dan standar HAM/ketenagakerjaan.',
    categories: ['K3', 'Sustainability', 'Teknis Pabrik', 'Teknis Kebun', 'Praktik Lapangan'],
    physicalActivities: 'Praktik pengoperasian alat pemadam kebakaran dan simulasi penanganan P3K.',
    mentalDisciplineActivities: 'Budaya transparansi pelaporan kecelakaan (via smartphone app) dan disiplin keselamatan kerja.',
    leadershipActivities: 'Kepemimpinan unit dalam Komite K3 (OHS Committee) bulanan.',
    teamworkActivities: 'Kolaborasi Komite K3, operator, dan tim audit jaminan internal.',
    estateTechnicalActivities: 'Penanganan bahan kimia/pestisida kebun sesuai MSDS dan keselamatan kerja lapangan.',
    fieldPracticeActivities: 'Praktik pemadaman api, P3K, dan identifikasi bahaya langsung di area kerja.',
    millPracticeActivities: 'Sertifikasi lisensi wajib operator mesin/peralatan pabrik.',
    socialCommunityActivities: 'Kepatuhan hak-hak tenaga kerja dan kondisi kerja layak bagi ~33.000 pekerja.',
    sustainabilityActivities: 'Metrik K3 dan ketenagakerjaan diaudit internal dalam kerangka Sustainability Report 2024.',
    k3Activities:
      'Triple Zero Targets, lisensi operator, First Aid, MSDS, fire-fighting equipment, hazard risk analysis, monthly OHS Committee meetings, dan aplikasi pelaporan insiden smartphone.',
    rotationDetails: 'Tidak berlaku.',
    mentoringDetails: 'Sosialisasi dan pendampingan berkelanjutan oleh Komite K3 unit.',
    learningMethods: 'Pelatihan sertifikasi operator, praktik alat pemadam & P3K, sosialisasi bulanan P2K3, dan pelaporan digital.',
    evaluation:
      'Pelacakan angka kecelakaan fatal, accident frequency & severity rates, kepatuhan lisensi operator, dan audit assurance internal.',
    targetCompetencies:
      'Operator berlisensi sah, pekerja mampu menangani P3K/MSDS/APAR, serta pencapaian Triple Zero Targets.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2024–2025',
    sourceUrl: 'https://bumitama-agri.com/sustainability/workforce/',
    sourceLabel: 'Bumitama Agri Ltd — Workforce & Health and Safety (Laman Resmi)',
    additionalSources: [
      {
        label: 'Bumitama Agri Ltd — Sustainability Report 2024 (OHS Training & Triple Zero, PDF)',
        url: 'https://bumitama-agri.com/wp-content/uploads/2025/04/Bumitama-Agri-Ltd_SR2024-1.pdf',
        year: '2024',
      },
    ],
    notes:
      'Diverifikasi langsung dari laman resmi Workforce Bumitama (HTTP 200) dan SR 2024. Rincian topik pelatihan (lisensi operator, P3K, MSDS, APAR, hazard analysis) dan frekuensi rapat P2K3 bulanan tercatat eksplisit.',
  },

  // =========================================================================
  // 5. PT TRIPUTRA AGRO PERSADA TBK (TAPG) — 3 PROGRAM UTAMA
  // =========================================================================
  {
    id: 'tap-tmtp',
    companyId: 'triputra-agro',
    companyName: 'PT Triputra Agro Persada Tbk (TAPG)',
    companyShortName: 'Triputra Agro Persada',
    programName: 'Triputra Management Trainee Program (TMTP — Agronomy, Mill, Sustainability, Infra, CSR)',
    programType: 'Management Trainee / Calon Asisten',
    targetParticipants:
      'Fresh graduate atau pengalaman maks. 2 tahun, D3/S1 IPK min. 3,00 berbagai jurusan (Agronomi, Teknik Mesin/Elektro/Konversi Energi, Teknik Lingkungan/K3, Sipil/Otomotif, Hukum/Sosial)',
    objective:
      'Mencetak future leaders internal yang menghidupi nilai Triputra DNA, memahami proses bisnis agribisnis end-to-end, kuat dalam eksekusi lapangan (Genba), dan berwawasan sosial.',
    duration: 'Ikatan dinas 2 tahun 6 bulan (durasi rinci fase pelatihan per bulan/minggu tidak dicantumkan eksplisit pada publikasi terbuka)',
    scheduleSummary:
      'Tiga pilar tahapan terverifikasi: In-Class Training (Head Office) → On-the-Job Training / Genba (site Sumatera/Kalimantan) → Social Project & Improvement Project. Jadwal detail per hari/minggu/bulan tidak tersedia di dokumen publik.',
    stages:
      '1) Seleksi (Administrasi, Psikotes termasuk tes numerik & Pauli/Kraepelin, Wawancara HC & User, MCU) → 2) In-Class Training (leadership mindset & strategi bisnis) → 3) On-the-Job Training / Genba di site (kebun/pabrik/workshop) → 4) Social Project & Continuous Improvement → 5) Evaluasi & penempatan struktural',
    activities:
      'Pembelajaran kelas kepemimpinan & proses bisnis korporat, terjun langsung ke operasional lapangan (Genba) untuk menerapkan metodologi perbaikan (continuous improvement), serta pelaksanaan Social Project di bidang pendidikan, kesehatan, infrastruktur, dan pemberdayaan masyarakat sekitar site.',
    materials:
      'Triputra DNA & corporate strategy, leadership mindset, proses bisnis agribisnis end-to-end, metodologi improvement, serta materi teknis sesuai stream: Agronomi (tanaman, tanah, pemetaan/geodesi, HPT), Sustainability (K3, pengelolaan limbah, fire safety, regulasi lingkungan), Mill & Utility (pengolahan sawit, mesin pabrik, kelistrikan, energi), Infrastructure & Workshop, serta CSR/Comdev.',
    categories: [
      'Leadership',
      'Teamwork',
      'Teknis Kebun',
      'Teknis Pabrik',
      'Praktik Lapangan',
      'Sosial / Community',
      'Sustainability',
      'K3',
      'Manajerial & Administrasi',
    ],
    physicalActivities: 'Aktivitas kerja lapangan (Genba) di area site perkebunan/pabrik Kalimantan atau Sumatera; tidak ditemukan bukti pelatihan militer/PBB.',
    mentalDisciplineActivities: 'Penghayatan Triputra DNA, disiplin eksekusi improvement, dan kesiapan penempatan site serta ikatan dinas 2,5 tahun.',
    leadershipActivities: 'Pembentukan leadership mindset sejak tahap kelas hingga kepemimpinan proyek lapangan & sosial.',
    teamworkActivities: 'Kolaborasi tim dalam proyek perbaikan operasional dan proyek pemberdayaan masyarakat (Social Project).',
    estateTechnicalActivities: 'Stream Agronomi: budidaya kelapa sawit, ilmu tanah, pemetaan (geodesi/geomatika), pemeliharaan, panen, dan pengendalian HPT.',
    fieldPracticeActivities: 'On-the-Job Training / Genba langsung di site perkebunan Jambi, Kalimantan Tengah, atau Kalimantan Timur.',
    millPracticeActivities: 'Stream Mill & Utility: pengolahan sawit, mesin pabrik, kelistrikan arus kuat, dan konversi energi.',
    socialCommunityActivities:
      'Tahap wajib Social Project pada bidang pendidikan, kesehatan, infrastruktur, atau pemberdayaan masyarakat sekitar site, ditambah stream khusus CSR & Comdev.',
    sustainabilityActivities:
      'Stream khusus MT Sustainability mencakup pengelolaan limbah, fire safety, regulasi lingkungan, dan praktik ESG TAPG.',
    k3Activities: 'Penerapan K3 dan fire safety (penanggulangan kebakaran lahan) terutama pada stream Sustainability dan operasional site.',
    rotationDetails: 'Transisi dari Head Office (In-Class) ke penempatan operasional lapangan (Genba) di site Sumatera/Kalimantan.',
    mentoringDetails: 'Pembelajaran praktik terbaik (best practices) langsung dari mentor/praktisi senior di lapangan.',
    learningMethods: 'In-Class Training, On-the-Job Training (Genba), Continuous Improvement Project, Social Project, dan mentoring.',
    evaluation:
      'Ujian pemahaman materi kelas, penilaian laporan & dampak proyek (improvement & social project), serta penilaian sikap kerja & kedisiplinan di lapangan.',
    targetCompetencies:
      'Pemimpin lini pertama (Asisten Lapangan/Teknik/Sustainability) yang kuat dalam eksekusi Genba, improvement, dan kontribusi sosial.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Informasi Sebagian',
    year: '2025–2026',
    sourceUrl: 'https://tip.iti.ac.id/lowongan-management-trainee-program-pt-triputra-agro-persada-tbk-tmtp-2026/',
    sourceLabel: 'TIP ITI — Rekrutmen Resmi TMTP PT Triputra Agro Persada Tbk (2026)',
    additionalSources: [
      {
        label: 'Triputra Group — Laman Resmi Leadership Development Programs (TMTP)',
        url: 'https://triputra-group.com/ruang-untuk-tumbuh/gradual-leadership-development-program/',
        year: '2025',
      },
    ],
    notes:
      'Berlabel "Informasi Sebagian": eksistensi program, jalur bidang, tahapan (In-Class, Genba/OJT, Social Project), dan ikatan dinas 2 tahun 6 bulan terverifikasi (HTTP 200), namun durasi spesifik tiap fase pelatihan (minggu/bulan) tidak diungkapkan pada dokumen publik.',
  },
  {
    id: 'tap-gldp',
    companyId: 'triputra-agro',
    companyName: 'PT Triputra Agro Persada Tbk (TAPG)',
    companyShortName: 'Triputra Agro Persada',
    programName: 'Gradual Leadership Development Program (TSDP, TMDP, TGMDP & TEP — Triputra Group / TREC)',
    programType: 'Leadership Development',
    targetParticipants:
      'Berjenjang mulai calon Supervisor/Supervisor (TSDP), calon Manager/Manager (TMDP), calon GM/General Manager (TGMDP), hingga Executive (TEP)',
    objective:
      'Membangun kesiapan dan kapasitas kepemimpinan secara berjenjang di ekosistem Triputra Group (termasuk TAPG) dengan penguatan Triputra DNA, eksekusi rencana kerja, continuous improvement, dan berpikir holistik.',
    duration: 'Tidak ditemukan durasi rinci per jenjang pada sumber resmi (berjalan berjenjang sesuai tingkat jabatan)',
    scheduleSummary:
      'Tidak tersedia jadwal detail per hari/minggu/bulan pada laman resmi Triputra Group.',
    stages:
      '4 jenjang pasca-TMTP: 1) TSDP (Supervisory) → 2) TMDP (Manager) → 3) TGMDP (General Manager) → 4) TEP (Executive)',
    activities:
      'Pembekalan kepemimpinan berjenjang, sharing bersama Subject Matter Expert (SME) internal & eksternal, forum diskusi antarpeserta, coaching & mentoring, serta penugasan project strategis.',
    materials:
      'Eksekusi rencana kerja, disiplin continuous improvement, penghayatan Triputra DNA, kompetensi manajerial bisnis, cara berpikir sistematik & holistik, serta kepemimpinan kolaboratif.',
    categories: ['Leadership', 'Teamwork', 'Manajerial & Administrasi'],
    physicalActivities: 'Tidak ditemukan pada sumber.',
    mentalDisciplineActivities: 'Penghayatan nilai-nilai Triputra DNA dan disiplin mengembangkan continuous improvement.',
    leadershipActivities:
      'Pengembangan kepemimpinan terstruktur penuh 4 jenjang (TSDP, TMDP, TGMDP, TEP) dari level supervisor hingga eksekutif.',
    teamworkActivities: 'Forum diskusi antarpeserta program dan kepemimpinan kolaboratif lintas unit bisnis Triputra.',
    estateTechnicalActivities: 'Konteks penerapan pada unit bisnis agribisnis TAPG.',
    fieldPracticeActivities: 'Eksekusi proyek peningkatan performa bisnis pada unit kerja masing-masing.',
    millPracticeActivities: 'Konteks penerapan pada operasional pabrik dan manufaktur grup.',
    socialCommunityActivities: 'Selaras dengan nilai kontribusi bangsa Triputra Group.',
    sustainabilityActivities: 'Pengembangan bisnis Triputra Group yang berkelanjutan.',
    k3Activities: 'Tidak dirinci pada halaman program.',
    rotationDetails: 'Forum diskusi dan kolaborasi lintas unit dalam ekosistem Triputra Group.',
    mentoringDetails: 'Eksplisit menggunakan metode coaching & mentoring serta sharing SME internal/eksternal.',
    learningMethods: 'Sharing SME internal & eksternal, forum diskusi, coaching & mentoring, serta penugasan project.',
    evaluation: 'Evaluasi capaian project dan peningkatan performa bisnis (instrumen penilaian rinci tidak dipublikasikan).',
    targetCompetencies:
      'Pemimpin operasional hingga eksekutif yang kuat dalam eksekusi, berpikir sistematik-holistik, dan unggul dalam improvement.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Terverifikasi',
    year: '2025',
    sourceUrl: 'https://triputra-group.com/ruang-untuk-tumbuh/gradual-leadership-development-program/',
    sourceLabel: 'Triputra Group — Laman Resmi Gradual Leadership Development Program (Mar 2025)',
    notes:
      'Laman resmi Triputra Group dibuka dan diverifikasi langsung (HTTP 200). Nama 4 jenjang, sasaran, dan metode (sharing SME, coaching, mentoring, project) terverifikasi; durasi dan jadwal per jenjang tidak dipublikasikan.',
  },
  {
    id: 'tap-dojo-k3',
    companyId: 'triputra-agro',
    companyName: 'PT Triputra Agro Persada Tbk (TAPG)',
    companyShortName: 'Triputra Agro Persada',
    programName: 'Training Dojo Pemanen & Pelatihan Operasional K3 / Sertifikasi Insan TAPGreen',
    programType: 'Technical & Operator Training',
    targetParticipants:
      'Pemanen baru dan eksisting di kebun (Training Dojo), karyawan operasional (Insan TAPGreen), serta petani plasma/swadaya (program terpisah P2KS)',
    objective:
      'Memastikan pekerja panen dan operasional bekerja sesuai standar kualitas buah, target kuantitas, dan prosedur keselamatan kerja (K3), serta meningkatkan kompetensi profesional melalui sertifikasi.',
    duration: 'Berkelanjutan rutin operasional (durasi jam per sesi Training Dojo tidak dirinci pada ringkasan laporan publik)',
    scheduleSummary:
      'Dilaksanakan rutin bagi pemanen baru (saat onboarding operasional) dan penyegaran bagi pemanen eksisting; jadwal per jam tidak dipublikasikan terbuka.',
    stages:
      '1) Induksi standar kerja & K3 panen → 2) Praktik teknik panen terstandar di Training Dojo → 3) Evaluasi kesesuaian standar kualitas, kuantitas & K3 sebelum/selama penugasan kebun',
    activities:
      'Simulasi & praktik teknik pemanenan kelapa sawit di fasilitas Training Dojo, pelatihan K3 operasional kebun & pabrik, serta pelatihan profesional dan sertifikasi Insan TAPGreen (Catatan: P2KS ditujukan bagi petani mitra/swadaya).',
    materials:
      'Standar kualitas & kuantitas panen TBS, teknik kerja aman & K3 operasional, kepatuhan prosedur kebun/PKS, serta kompetensi teknis/sertifikasi profesional.',
    categories: ['Teknis Kebun', 'Praktik Lapangan', 'K3', 'Sustainability'],
    physicalActivities: 'Praktik fisik teknik pemanenan kelapa sawit secara langsung di arena Training Dojo.',
    mentalDisciplineActivities: 'Disiplin kerja sesuai standar mutu panen dan prosedur keselamatan kerja.',
    leadershipActivities: 'Pengawasan kepatuhan standar oleh mandor/asisten operasional.',
    teamworkActivities: 'Koordinasi operasional panen dan pengangkutan di afdeling.',
    estateTechnicalActivities: 'Standardisasi teknik panen TBS (kualitas kematangan, kuantitas, dan efisiensi kerja) melalui Training Dojo.',
    fieldPracticeActivities: 'Praktik langsung di fasilitas Training Dojo kebun sebelum dan selama bekerja di blok panen.',
    millPracticeActivities: 'Kepatuhan K3 di unit pabrik pengolahan kelapa sawit TAPG.',
    socialCommunityActivities:
      'Program Pelatihan Petani Kelapa Sawit (P2KS) ditujukan bagi petani plasma/swadaya (dibedakan secara jelas dari pelatihan karyawan internal).',
    sustainabilityActivities: 'Pilar ESG & praktik operasional perkebunan berkelanjutan dalam Laporan Keberlanjutan 2023–2025.',
    k3Activities: 'Penerapan K3 sebagai bagian integral Training Dojo pemanen dan prosedur keselamatan unit kebun/PKS.',
    rotationDetails: 'Tidak berlaku.',
    mentoringDetails: 'Pendampingan instruktur lapangan Training Dojo dan mandor panen.',
    learningMethods: 'Praktik langsung terstandar (Dojo hands-on training), induksi K3, dan pelatihan sertifikasi profesional.',
    evaluation: 'Penilaian kesesuaian standar kualitas panen, kuantitas, kepatuhan K3, serta sertifikasi kompetensi.',
    targetCompetencies:
      'Pemanen terampil sesuai standar kualitas/kuantitas dan nihil kecelakaan kerja, serta karyawan tersertifikasi.',
    implementationStatus: 'Dilaksanakan Rutin',
    verificationStatus: 'Informasi Sebagian',
    year: '2024–2025',
    sourceUrl: 'https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202504/33db7e6326_41ad71e48e.pdf',
    sourceLabel: 'PT Triputra Agro Persada Tbk — Laporan Tahunan & Keberlanjutan 2024 (IDX)',
    additionalSources: [
      {
        label: 'PT Triputra Agro Persada Tbk — Laporan Tahunan & Keberlanjutan 2025 (IDX, Mar 2026)',
        url: 'https://www.idx.co.id/StaticData/NewsAndAnnouncement/ANNOUNCEMENTSTOCK/From_EREP/202603/3b894de892_67e7373d55.pdf',
        year: '2026',
      },
    ],
    notes:
      'Berlabel "Informasi Sebagian": keberadaan Training Dojo pemanen, pelatihan K3, dan sertifikasi Insan TAPGreen terkonfirmasi dari keterbukaan laporan TAPG di IDX, tetapi silabus detail dan jumlah jam per sesi Dojo tidak dipublikasikan terbuka.',
  },
];

export const CORPORATE_SCHEDULES: CorporateScheduleEntry[] = [
  // First Resources
  {
    id: 'sch-fr-ohs-daily',
    companyId: 'first-resources',
    companyName: 'First Resources Limited',
    programId: 'fr-k3-sustainability',
    programName: 'Administrasi, K3 & Sustainability (Daily OHS)',
    periodLabel: 'Setiap Hari Kerja (Apel Pagi)',
    granularity: 'Harian',
    timeRange: 'Sesi Apel Pagi (jam spesifik tidak dirinci di sumber)',
    sessionDuration: 'Tidak dirinci pada sumber',
    activity: 'Pengarahan Kesehatan & Keselamatan Kerja (Daily Morning OHS Meetings)',
    material: 'Topik keselamatan kerja, identifikasi bahaya harian, dan kepatuhan APD',
    method: 'Briefing lisan & sosialisasi langsung',
    location: 'Kebun (Estate) & Pabrik (PKS)',
    sourceUrl: 'https://www.first-resources.com/sustainability/employee-relations/occupational-health-safety/',
    sourceLabel: 'First Resources — Occupational Health & Safety',
  },
  {
    id: 'sch-fr-fat-1',
    companyId: 'first-resources',
    companyName: 'First Resources Limited',
    programId: 'fr-fat',
    programName: 'Field Assistant Training (FAT)',
    periodLabel: 'Tahap 1 (Bagian dari 6 Bulan · 10% Formal Learning)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: '10% porsi metode belajar formal dari total 6 bulan',
    activity: 'In-Class Training (Pembekalan Kelas & LMS)',
    material: 'Kompetensi Umum (budaya FR), Kompetensi Teknis Perkebunan, Kompetensi Pendukung (leadership, K3, sustainability)',
    method: 'Formal learning (kelas tatap muka & E-Learning LMS)',
    location: 'Kelas (FR Academy, Kampar, Riau)',
    sourceUrl: 'https://academy.first-resources.com/program/fat',
    sourceLabel: 'FR Academy — Program FAT',
  },
  {
    id: 'sch-fr-fat-2',
    companyId: 'first-resources',
    companyName: 'First Resources Limited',
    programId: 'fr-fat',
    programName: 'Field Assistant Training (FAT)',
    periodLabel: 'Tahap 2 (Transisi dalam 6 Bulan)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: 'Tidak dirinci pada sumber',
    activity: 'Pra-OJT (Pengenalan Unit Lapangan)',
    material: 'Orientasi operasional afdeling, SOP lapangan, dan kesiapan praktik',
    method: 'Observasi & transisi lapangan terbimbing',
    location: 'Kebun (Estate)',
    sourceUrl: 'https://academy.first-resources.com/program/fat',
    sourceLabel: 'FR Academy — Program FAT',
  },
  {
    id: 'sch-fr-fat-3',
    companyId: 'first-resources',
    companyName: 'First Resources Limited',
    programId: 'fr-fat',
    programName: 'Field Assistant Training (FAT)',
    periodLabel: 'Tahap 3 (Mayoritas dari 6 Bulan · 70% Experiential + 20% Social)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: '70% experiential + 20% mentoring dari total 6 bulan',
    activity: 'On-the-Job Training (OJT) & Mentoring Lapangan',
    material: 'Pengawasan panen, pemupukan, pengendalian gulma, administrasi kebun, troubleshooting & kepemimpinan lapangan',
    method: 'Experiential learning (70%) & Social learning / Mentoring (20%)',
    location: 'Kebun (Estate Sumatera & Kalimantan)',
    sourceUrl: 'https://academy.first-resources.com/program/fat',
    sourceLabel: 'FR Academy — Program FAT',
  },
  {
    id: 'sch-fr-mat-1',
    companyId: 'first-resources',
    companyName: 'First Resources Limited',
    programId: 'fr-mat',
    programName: 'Mill Assistant Training (MAT)',
    periodLabel: 'Total 6 Bulan Reguler (Skema 70:20:10)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: '6 bulan (10% formal, 20% mentoring, 70% experiential)',
    activity: 'In-Class FR Academy → Pra-OJT → OJT Stasiun Pabrik Kelapa Sawit',
    material: 'Proses TBS ke CPO/Kernel, stasiun sterilisasi, thresher, press, klarifikasi, boiler, turbin, penekanan oil losses & preventive maintenance',
    method: 'Formal learning, Mentoring Engineer & OJT lapangan pabrik',
    location: 'Kelas (FR Academy) & Pabrik (PKS)',
    sourceUrl: 'https://academy.first-resources.com/program/mat',
    sourceLabel: 'FR Academy — Program MAT',
  },

  // PT Astra Agro Lestari Tbk
  {
    id: 'sch-aal-pdp-1',
    companyId: 'astra-agro',
    companyName: 'PT Astra Agro Lestari Tbk (AALI)',
    programId: 'aal-pdp',
    programName: 'Planter Development Program (PDP)',
    periodLabel: 'Bulan 1 (Fase Pembinaan Dasar · ±18 Hari)',
    granularity: 'Event (Harian)',
    timeRange: 'Tidak dirinci per jam pada sumber publik',
    sessionDuration: '±18 hari',
    activity: 'Latihan Dasar Kepemimpinan / Bintalsik (Kesamaptaan)',
    material: 'Kedisiplinan, ketahanan fisik & mental, jiwa korsa, dan kepemimpinan dasar',
    method: 'Pelatihan fisik, disiplin & mental bersama instansi militer (Rindam)',
    location: 'Fasilitas Militer (Rindam, mis. Rindam Jaya)',
    sourceUrl: 'https://www.astra-agro.co.id/id/planter-development-program/',
    sourceLabel: 'Astra Agro Lestari — PDP (rincian 18 hari dari dokumen pelaksanaan PDP)',
  },
  {
    id: 'sch-aal-pdp-2',
    companyId: 'astra-agro',
    companyName: 'PT Astra Agro Lestari Tbk (AALI)',
    programId: 'aal-pdp',
    programName: 'Planter Development Program (PDP)',
    periodLabel: 'Bulan 1–2 (Pasca Bintalsik)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: 'Beberapa hari (angka hari pasti tidak dipublikasikan)',
    activity: 'In-Class Training (Induksi Korporasi & Dasar Teknis)',
    material: 'Company knowledge, budaya & Catur Dharma Astra, proses bisnis sawit hulu-hilir, basic technical requirement & K3L',
    method: 'Pelatihan kelas tatap muka',
    location: 'Kelas (Head Office Astra Agro Lestari)',
    sourceUrl: 'https://www.astra-agro.co.id/id/planter-development-program/',
    sourceLabel: 'Astra Agro Lestari — PDP',
  },
  {
    id: 'sch-aal-pdp-3',
    companyId: 'astra-agro',
    companyName: 'PT Astra Agro Lestari Tbk (AALI)',
    programId: 'aal-pdp',
    programName: 'Planter Development Program (PDP)',
    periodLabel: 'Bulan 2–6 (Sisa Masa dari Total 6 Bulan)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Mengikuti jam operasional site (jam rinci tidak dipublikasikan)',
    sessionDuration: '±5 bulan (bertahap As a Worker → As a Supervisor)',
    activity: 'On-the-Job Training (OJT) Bertingkat & Improvement Project',
    material: 'Praktik operasional dasar (As a Worker), pengawasan & manajemen lini pertama (As a Supervisor), kepatuhan K3L, dan proyek perbaikan',
    method: 'OJT lapangan, penugasan proyek, mentoring & evaluasi berkala',
    location: 'Kebun / Pabrik / Site (Sumatera, Kalimantan, Sulawesi)',
    sourceUrl: 'https://www.astra-agro.co.id/id/planter-development-program/',
    sourceLabel: 'Astra Agro Lestari — PDP',
  },

  // PT SMART Tbk / GAR
  {
    id: 'sch-smart-mfg-1',
    companyId: 'smart-gar',
    companyName: 'PT SMART Tbk (Sinar Mas Agribusiness / GAR)',
    programId: 'smart-bmdp-mfg',
    programName: 'BMDP Manufacturing / Engineering',
    periodLabel: 'Bulan 1 s.d. Bulan 3,5 (3,5 Bulan)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: '3,5 bulan',
    activity: 'In-Class Training (ICT) / Foundation',
    material: 'Corporate values Sinar Mas, industri sawit seed-to-shelf, teori teknis mesin/boiler/TBS/losses CPO-kernel, leadership & problem solving',
    method: 'Pelatihan kelas (In-Class Training)',
    location: 'Kelas (Training Center / Head Office)',
    sourceUrl: 'https://www.smart-tbk.com/bekerja-bersama-kami/',
    sourceLabel: 'PT SMART Tbk (rincian 3,5 bln ICT dari publikasi rekrutmen BMDP)',
  },
  {
    id: 'sch-smart-mfg-2',
    companyId: 'smart-gar',
    companyName: 'PT SMART Tbk (Sinar Mas Agribusiness / GAR)',
    programId: 'smart-bmdp-mfg',
    programName: 'BMDP Manufacturing / Engineering',
    periodLabel: 'Bulan 3,5 s.d. Bulan 6 (2,5 Bulan)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: '2,5 bulan',
    activity: 'On-the-Job Training (OJT) & Penugasan Proyek',
    material: 'Praktik pemeliharaan mesin, pemantauan boiler, pengelolaan TBS, dan analisis oil losses di fasilitas operasional',
    method: 'OJT lapangan pabrik, proyek nyata & mentoring',
    location: 'Pabrik (PKS / Fasilitas Manufaktur)',
    sourceUrl: 'https://www.smart-tbk.com/bekerja-bersama-kami/',
    sourceLabel: 'PT SMART Tbk (rincian 2,5 bln OJT dari publikasi rekrutmen BMDP)',
  },
  {
    id: 'sch-smart-agro',
    companyId: 'smart-gar',
    companyName: 'PT SMART Tbk (Sinar Mas Agribusiness / GAR)',
    programId: 'smart-bmdp-agro',
    programName: 'BMDP Agronomy',
    periodLabel: 'Bulan 1 s.d. Bulan 10 (Total 10 Bulan)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: '10 bulan (rincian proporsi kelas vs OJT tidak dipublikasikan terbuka)',
    activity: 'Pelatihan Intensif Agronomi & Manajemen Perkebunan',
    material: 'Manajemen perkebunan kelapa sawit, praktik agronomi terbaik, analisis operasional, dan kepemimpinan kebun',
    method: 'In-Class Training & OJT perkebunan',
    location: 'Kebun (Sumatera, Kalimantan, Papua)',
    sourceUrl:
      'https://fp.usu.ac.id/id/lowongan-pekerjaan-fakultas/rekrutmen-basic-management-development-programme-bmdp-agronomy-oleh-pt-sinar-mas-agro-resources-and-technology-tbk-pt-smart-tbk-agribusiness-and-food',
    sourceLabel: 'FP USU — Pengumuman Resmi BMDP Agronomy PT SMART Tbk (Jan 2025)',
  },
  {
    id: 'sch-smart-hrmdp',
    companyId: 'smart-gar',
    companyName: 'PT SMART Tbk (Sinar Mas Agribusiness / GAR)',
    programId: 'smart-hrmdp',
    programName: 'Human Resources Management Development Programme (HRMDP)',
    periodLabel: 'Tahun 1 (Total 12 Bulan · 4 Tahap Berurutan)',
    granularity: 'Tahapan (Durasi Tidak Dirinci)',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: 'Total 1 tahun (durasi tiap tahap 1–4 tidak dirinci di laman resmi)',
    activity: 'Tahap 1 Foundation → Tahap 2 General Knowledge & Soft Skill → Tahap 3 Technical Knowledge & Business Acumen → Tahap 4 Deliverables',
    material: 'Budaya Sinar Mas & bisnis sawit, personal effectiveness & leadership, proses menyeluruh divisi HR, serta proyek di Center of Expertise (COE) HR',
    method: 'Pembelajaran kelas & luar kelas, mentoring top coaches, dan proyek COE HR',
    location: 'Kelas & Kantor/Unit HR (COE)',
    sourceUrl: 'https://www.smart-tbk.com/human-resources-management-development-programme/',
    sourceLabel: 'PT SMART Tbk — Laman Resmi HRMDP',
  },

  // Bumitama Agri Ltd (BGA)
  {
    id: 'sch-bga-bdp-1',
    companyId: 'bumitama-agri',
    companyName: 'Bumitama Agri Ltd (BGA Group)',
    programId: 'bga-bdp',
    programName: 'Basic Development Program (BDP)',
    periodLabel: 'Bulan 1 s.d. Bulan 3 (3 Bulan Pertama)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: '3 bulan',
    activity: 'Pendidikan In-Class Terpusat',
    material: 'Kompetensi teknis (Agronomi / Mill / Traksi / Administrasi), kompetensi manajerial dasar, SOP, dan nilai perusahaan Bumitama',
    method: 'In-Class Training di pusat pelatihan perusahaan',
    location: 'Kelas (Pundu Learning Academy / Kendawangan Learning Centre)',
    sourceUrl: 'https://fp.usu.ac.id/id/pengumuman/recruitment-management-trainee-basic-development-program-pt-bga',
    sourceLabel: 'FP USU & Dokumentasi Kurikulum BDP PT BGA',
  },
  {
    id: 'sch-bga-bdp-2',
    companyId: 'bumitama-agri',
    companyName: 'Bumitama Agri Ltd (BGA Group)',
    programId: 'bga-bdp',
    programName: 'Basic Development Program (BDP)',
    periodLabel: 'Bulan 4 s.d. Bulan 6 (3 Bulan Berikutnya)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: '3 bulan',
    activity: 'On-the-Job Training (OJT) Operasional',
    material: 'Praktik operasional harian kebun/pabrik/traksi/administrasi, problem solving lapangan, dan adaptasi site',
    method: 'OJT lapangan & pendampingan manajemen unit',
    location: 'Kebun / Pabrik (Kalimantan Tengah & Kalimantan Barat)',
    sourceUrl: 'https://fp.usu.ac.id/id/pengumuman/recruitment-management-trainee-basic-development-program-pt-bga',
    sourceLabel: 'FP USU & Dokumentasi Kurikulum BDP PT BGA',
  },
  {
    id: 'sch-bga-pnla-4d',
    companyId: 'bumitama-agri',
    companyName: 'Bumitama Agri Ltd (BGA Group)',
    programId: 'bga-bcu-pnla',
    programName: 'Capability Building & Bina Fisik di PNLA (Ekosistem Yayasan Bumitama)',
    periodLabel: '28 Juli 2025 s.d. 1 Agustus 2025 (4 Hari)',
    granularity: 'Event (Harian)',
    timeRange: 'Tidak dirinci per jam pada sumber',
    sessionDuration: '4 hari kegiatan intensif',
    activity: 'Bina Fisik & Kesamaptaan bersama Kodim + Pelatihan Kepemimpinan & Manajerial',
    material: 'Kesehatan & ketahanan fisik, kedisiplinan, karakter kepemimpinan, manajerial, dan kolaborasi lintas region',
    method: 'Latihan fisik lapangan (dikawal Kodim Kotawaringin Timur) & lokakarya kelas',
    location: 'Pundu Learning Academy (PNLA), Kotawaringin Timur, Kalteng',
    sourceUrl:
      'https://yayasanbumitama.org/yayasan-bumitama-gelar-capability-building-di-pnla-tingkatkan-kepemimpinan-dan-karakter-kepemimpinan/',
    sourceLabel: 'Yayasan Bumitama — Dokumentasi PNLA (Jul 2025)',
  },
  {
    id: 'sch-bga-ohs-monthly',
    companyId: 'bumitama-agri',
    companyName: 'Bumitama Agri Ltd (BGA Group)',
    programId: 'bga-ohs',
    programName: 'Program K3 "Triple Zero Targets"',
    periodLabel: 'Rutin Setiap Bulan (Monthly OHS Committee)',
    granularity: 'Bulanan / Fase',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: 'Rutin bulanan',
    activity: 'Rapat & Sosialisasi Komite K3 (OHS Committee Meetings)',
    material: 'Evaluasi kecelakaan & risiko bahaya, kepatuhan lisensi operator, P3K, MSDS, dan kesiapan alat pemadam kebakaran',
    method: 'Rapat evaluasi P2K3, sosialisasi unit & audit kepatuhan',
    location: 'Kebun & Pabrik (Unit Operasional BGA)',
    sourceUrl: 'https://bumitama-agri.com/wp-content/uploads/2025/04/Bumitama-Agri-Ltd_SR2024-1.pdf',
    sourceLabel: 'Bumitama Agri Ltd — Sustainability Report 2024',
  },

  // PT Triputra Agro Persada Tbk (TAPG)
  {
    id: 'sch-tap-tmtp',
    companyId: 'triputra-agro',
    companyName: 'PT Triputra Agro Persada Tbk (TAPG)',
    programId: 'tap-tmtp',
    programName: 'Triputra Management Trainee Program (TMTP)',
    periodLabel: '3 Tahapan Berurutan (Durasi Per Fase Tidak Tersedia di Sumber Publik)',
    granularity: 'Tahapan (Durasi Tidak Dirinci)',
    timeRange: 'Tidak dirinci pada sumber',
    sessionDuration: 'Tidak dirinci (ikatan dinas total 2 tahun 6 bulan)',
    activity: 'Tahap 1: In-Class Training → Tahap 2: OJT / Genba Lapangan → Tahap 3: Social Project & Improvement',
    material: 'Leadership mindset & strategi bisnis (kelas), praktik operasional & continuous improvement (Genba site), serta pemberdayaan masyarakat (Social Project)',
    method: 'Classroom learning, OJT/Genba lapangan, mentoring, dan project-based learning',
    location: 'Kelas (Head Office) & Kebun/Pabrik/Masyarakat (Sumatera & Kalimantan)',
    sourceUrl: 'https://tip.iti.ac.id/lowongan-management-trainee-program-pt-triputra-agro-persada-tbk-tmtp-2026/',
    sourceLabel: 'TIP ITI & Triputra Group — TMTP (2025–2026)',
  },
];

export const CORPORATE_INSIGHTS: CorporateInsightItem[] = [
  {
    id: 'ci-01',
    number: '01',
    dimension: 'Kegiatan Paling Umum Dilakukan Perusahaan',
    headline: 'Tiga pilar universal: In-Class Induksi, OJT Site (Kebun/Pabrik), dan Pelatihan K3 Wajib',
    summary:
      'Seluruh 5 perusahaan sawit besar Indonesia menerapkan pola inti yang konsisten: jalur Management Trainee / Calon Asisten berbasis kombinasi In-Class + OJT lapangan, program pelatihan K3 & sertifikasi operator wajib, serta kurikulum kepemimpinan berjenjang.',
    evidencePoints: [
      '100% perusahaan (5/5) menjalankan jalur khusus calon asisten/MT (FAT/MAT, PDP, BMDP, BDP, TMTP) dengan pemisahan spesialisasi Kebun (Agronomi), Pabrik (Mill/Engineering), dan Administrasi/Fungsi Pendukung.',
      '100% perusahaan (5/5) mewajibkan pelatihan & sertifikasi K3 operasional (Ahli K3, P3K, pemadam kebakaran/Karhutla, boiler/alat berat) disertai pengarahan rutin (apel pagi harian atau rapat P2K3 bulanan).',
      '100% perusahaan (5/5) mengoperasikan lembaga pembelajaran internal (FR Academy, Astra Agro Academy, Bumitama Corporate University/PNLA, TREC, Sinar Mas Agribusiness Learning).',
    ],
    referencedCompanies: ['First Resources', 'Astra Agro Lestari', 'PT SMART Tbk / GAR', 'Bumitama Agri', 'Triputra Agro Persada'],
  },
  {
    id: 'ci-02',
    number: '02',
    dimension: 'Perbedaan Program Antarperusahaan',
    headline: 'Diferensiasi mencolok pada pembinaan semi-militer, integrasi proyek sosial, dan keterbukaan metode belajar',
    summary:
      'Meskipun tujuan akhirnya serupa (mencetak Asisten Afdeling/PKS siap pakai), masing-masing grup menonjolkan ciri khas budaya dan desain kurikulum yang berbeda tajam.',
    evidencePoints: [
      'Astra Agro Lestari menonjol pada eskalasi peran bertingkat "As a Worker → As a Supervisor" plus pembinaan Bintalsik ±18 hari di Rindam serta sistem inspeksi K3 Operational Golden Rules (OGR).',
      'First Resources paling sistematis dalam keterbukaan kurikulum & metode belajar resmi 70:20:10 melalui portal publik FR Academy, mencakup 5 jalur MT (FAT, MAT, TAT, AAT, DMT) dan modul teknis spesifik (pemupukan 4T, Ganoderma, audit oil losses).',
      'PT SMART Tbk / GAR membedakan durasi MT secara tajam antarjalur: 6 bulan (Manufacturing/Engineering), 10 bulan (BMDP Agronomy), hingga 12 bulan (HRMDP 4 tahap dengan top coaches).',
      'Bumitama Agri mengandalkan pusat pelatihan fisik regional di jantung operasional Kalimantan (Pundu Learning Academy & Kendawangan Learning Centre) dengan pembagian seimbang 3 bulan kelas + 3 bulan OJT.',
      'Triputra Agro Persada (TAPG) menonjolkan konsep Genba lapangan, wajib Social Project kemasyarakatan pada TMTP, serta fasilitas Training Dojo khusus standardisasi pemanen.',
    ],
    referencedCompanies: ['First Resources', 'Astra Agro Lestari', 'PT SMART Tbk / GAR', 'Bumitama Agri', 'Triputra Agro Persada'],
  },
  {
    id: 'ci-03',
    number: '03',
    dimension: 'Program dengan Durasi Terpanjang',
    headline: 'HRMDP PT SMART Tbk (12 bulan) & BMDP Agronomy PT SMART Tbk (10 bulan) tercatat terpanjang',
    summary:
      'Mayoritas program MT/Calon Asisten perkebunan sawit di Indonesia berdurasi standar 6 bulan (FAT/MAT/TAT/AAT/DMT First Resources, PDP Astra Agro, BDP Bumitama, BMDP Manufacturing SMART), sementara PT SMART Tbk menetapkan durasi lebih panjang pada jalur Agronomy dan HR.',
    evidencePoints: [
      'Terpanjang (12 bulan): Human Resources Management Development Programme (HRMDP) PT SMART Tbk dengan 4 fase berurutan hingga penugasan deliverables di Center of Expertise (COE).',
      'Terpanjang di jalur operasional kebun (10 bulan): BMDP Agronomy PT SMART Tbk di area perkebunan Sumatera/Kalimantan/Papua (+ ikatan dinas 2 tahun).',
      'Standar industri (6 bulan): PDP Astra Agro Lestari, FAT/MAT/TAT/AAT/DMT First Resources, BDP Bumitama Agri, dan BMDP Manufacturing PT SMART Tbk. Ikatan dinas berkisar 2 tahun (SMART, FR) hingga 2 tahun 6 bulan (TMTP TAPG).',
    ],
    referencedCompanies: ['PT SMART Tbk / GAR', 'First Resources', 'Astra Agro Lestari', 'Bumitama Agri', 'Triputra Agro Persada'],
  },
  {
    id: 'ci-04',
    number: '04',
    dimension: 'Program Paling Detail dan Lengkap Sumbernya',
    headline: 'Portal Resmi First Resources Academy (academy.first-resources.com) paling transparan & rinci',
    summary:
      'Dari seluruh perusahaan kelapa sawit besar yang ditelusuri, First Resources menyediakan dokumentasi publik paling mendalam melalui situs resmi FR Academy + Sustainability Report 2024 (lengkap dengan data jam pelatihan per jenjang jabatan).',
    evidencePoints: [
      'FR Academy mempublikasikan halaman resmi terpisah untuk FAT, MAT, TAT, AAT, DMT, Managerial & Leadership (5 modul eksplisit), Teknikal Estate (4 modul), Teknikal Mill (4 modul), serta Administrasi/K3/Sustainability (5 modul), lengkap dengan metode belajar 70:20:10.',
      'Di posisi kedua, PT SMART Tbk (laman resmi HRMDP 4 tahap, profil K3 lapangan, pengumuman BMDP Agronomy 10 bulan di USU, AR/SR 2024) dan Astra Agro Lestari (laman resmi PDP 5 jalur, K3L/OGR, SR 2024–2025 dengan tren jam pelatihan 2022–2024).',
      'Keterbatasan umum lintas semua 5 perusahaan: tidak ada satu pun perusahaan yang mempublikasikan jadwal operasional pelatihan per jam (05.00–21.00) secara terbuka di dokumen publiknya; granularitas terbaik yang tersedia adalah level harian apel K3, event 4–18 hari, dan fase bulanan.',
    ],
    referencedCompanies: ['First Resources', 'PT SMART Tbk / GAR', 'Astra Agro Lestari', 'Bumitama Agri'],
  },
  {
    id: 'ci-05',
    number: '05',
    dimension: 'Kegiatan Fisik dan Pembinaan Karakter yang Ditemukan',
    headline: 'Kolaborasi TNI/Rindam/Kodim terverifikasi pada Astra Agro (Bintalsik ~18 hari) dan fasilitas PNLA Bumitama',
    summary:
      'Pembinaan fisik, mental, dan disiplin menjadi pembeda penting di industri perkebunan karena tuntutan kerja lapangan mulai dini hari dan penempatan di lokasi terpencil.',
    evidencePoints: [
      'PT Astra Agro Lestari Tbk menyelenggarakan Latihan Dasar Kepemimpinan / Bintalsik di Rindam (seperti Rindam Jaya) selama ±18 hari di awal PDP untuk membentuk disiplin, ketahanan mental-fisik, dan jiwa korsa.',
      'Bumitama Agri / Yayasan Bumitama mendokumentasikan secara eksplisit sesi Bina Fisik & kesamaptaan yang dikawal langsung oleh Kodim Kotawaringin Timur (TNI) dalam program Capability Building 4 hari (28 Jul–1 Agu 2025) di Pundu Learning Academy (PNLA).',
      'First Resources menekankan pembentukan sikap mental "Planter" (FAT/AAT) dan "Engineer" (MAT/TAT/DMT) melalui ekosistem berasrama (Mess FR Academy) serta latihan fisik tanggap darurat Damkar/Karhutla.',
      'PT SMART Tbk menyeleksi kesiapan mental-organisasi sejak rekrutmen (mengutamakan pengalaman BEM/MENWA pada BMDP Agronomy), sedangkan TAPG mengandalkan ketangguhan lapangan Genba dan Training Dojo.',
    ],
    referencedCompanies: ['Astra Agro Lestari', 'Bumitama Agri', 'First Resources', 'PT SMART Tbk / GAR', 'Triputra Agro Persada'],
  },
  {
    id: 'ci-06',
    number: '06',
    dimension: 'Kegiatan Leadership dan Teamwork',
    headline: 'Kepemimpinan berjenjang (Supervisory → Executive) dipadukan dengan Coaching, PSDM, dan proyek tim',
    summary:
      'Perusahaan sawit besar tidak berhenti di pelatihan MT; seluruhnya membangun tangga kepemimpinan formal karena keahlian teknis kebun/pabrik tidak otomatis menjadikan seseorang pemimpin lapangan yang efektif.',
    evidencePoints: [
      'Triputra Group / TAPG memiliki arsitektur 5 tingkat eksplisit: TMTP → TSDP (Supervisory) → TMDP (Manager) → TGMDP (GM) → TEP (Executive) berbasis SME sharing, coaching, mentoring, dan proyek.',
      'Astra Agro Lestari menerapkan jenjang Grup Astra: ABMP (Basic) → AFLP (First-line) → AMMP (Middle) + Astra Attachment Program & pelatihan Diversity & Inclusion (D&I).',
      'First Resources Academy merinci 5 modul inti: The 7 Habits of Highly Effective People, Leader as Coach, Problem Solving & Decision Making (PSDM) berbasis data, High Impact Communication, dan manajemen resolusi konflik tim multikultural.',
      'Teamwork dilatih secara nyata melalui social learning (20% FR), regu Damkar/ERT lintas fungsi, proyek sosial tim (TMTP TAPG), dan kolaborasi lintas region di PNLA Bumitama.',
    ],
    referencedCompanies: ['Triputra Agro Persada', 'Astra Agro Lestari', 'First Resources', 'Bumitama Agri', 'PT SMART Tbk / GAR'],
  },
  {
    id: 'ci-07',
    number: '07',
    dimension: 'Pola Training Kelas vs Praktik',
    headline: 'Tiga model rasio yang ditemukan: 70:20:10 (FR), 50:50 (Bumitama), dan 58:42 (SMART Manufacturing)',
    summary:
      'Data terverifikasi menunjukkan bahwa meskipun semua perusahaan menggabungkan kelas dan OJT, bobot waktunya berbeda sesuai kompleksitas teknis dan ketersediaan pusat pelatihan.',
    evidencePoints: [
      'Model Experiential Dominan (First Resources): 10% Formal Learning (kelas/LMS) : 20% Social Learning (mentoring) : 70% Experiential Learning (Pra-OJT & OJT lapangan/pabrik) selama 6 bulan.',
      'Model Bertingkat Lapangan (Astra Agro PDP): ±18 hari Bintalsik + beberapa hari In-Class Head Office + mayoritas sisa masa (±5 bulan) OJT lapangan bertahap dari As a Worker hingga As a Supervisor.',
      'Model Seimbang 50:50 (Bumitama BDP): 3 bulan In-Class intensif di PNLA/KNLC + 3 bulan OJT penuh di unit operasional Kalimantan.',
      'Model Fondasi Teknis Kuat (PT SMART BMDP Manufacturing): 3,5 bulan (≈58%) In-Class Training + 2,5 bulan (≈42%) OJT pabrik/unit operasional.',
    ],
    referencedCompanies: ['First Resources', 'Astra Agro Lestari', 'Bumitama Agri', 'PT SMART Tbk / GAR'],
  },
  {
    id: 'ci-08',
    number: '08',
    dimension: 'Pola Rotasi Kebun dan Pabrik',
    headline: 'Rotasi berbasis eskalasi peran (Worker→Supervisor), lintas stasiun PKS, dan lintas wilayah operasional',
    summary:
      'Perusahaan sawit jarang memutar satu trainee menjadi ahli kebun sekaligus ahli pabrik sekaligus (jalur spesialisasi dipisah sejak rekrutmen), namun menerapkan rotasi mendalam di dalam rumpun fungsinya dan pengenalan hulu-hilir.',
    evidencePoints: [
      'Pemisahan jalur sejak awal: Kebun/Agronomi (FAT, PDP-TAN, BMDP Agro, BDP Agro, TMTP Agro) terpisah dari Pabrik/Mill (MAT, PDP-PAB, BMDP Mfg, BDP Eng, TMTP Mill) agar kedalaman teknis tercapai dalam 6–10 bulan.',
      'Rotasi peran vertikal di Astra Agro PDP: peserta wajib merasakan pekerjaan level bawah (As a Worker) sebelum naik ke pengawasan (As a Supervisor) di site Sumatera, Kalimantan, atau Sulawesi.',
      'Rotasi lintas stasiun & fungsi: MAT First Resources dan BMDP Manufacturing SMART memutar peserta di seluruh stasiun PKS (sterilizer, thresher, press, klarifikasi, boiler, turbin); HRMDP SMART mengenalkan seluruh fungsi HR sebelum spesialisasi di COE HR.',
      'Ekosistem transisi Pra-OJT di First Resources menjembatani teori di FR Academy Kampar (Riau) sebelum penempatan OJT penuh di regional Sumatera/Kalimantan.',
    ],
    referencedCompanies: ['Astra Agro Lestari', 'First Resources', 'PT SMART Tbk / GAR', 'Bumitama Agri', 'Triputra Agro Persada'],
  },
  {
    id: 'ci-09',
    number: '09',
    dimension: 'Kegiatan yang Berpotensi Diadaptasi',
    headline: 'Enam praktik unggulan terverifikasi dengan dampak operasional tertinggi untuk diadopsi langsung',
    summary:
      'Berdasarkan bukti implementasi nyata di 5 perusahaan terkemuka, enam mekanisme berikut memberikan kombinasi terbaik antara ketangguhan karakter, keunggulan teknis, dan keselamatan kerja.',
    evidencePoints: [
      '1) Bintalsik 14–18 hari bersama Rindam/Kodim (benchmark Astra Agro & PNLA Bumitama) untuk membangun disiplin apel dini hari dan ketahanan mental di site remote.',
      '2) Kerangka belajar 70:20:10 dengan tahap transisi Pra-OJT (benchmark First Resources Academy) agar peserta tidak mengalami culture shock saat terjun ke afdeling/PKS.',
      '3) Skema OJT bertingkat "As a Worker → As a Supervisor" (benchmark Astra Agro PDP) agar calon asisten benar-benar memahami bobot kerja pemanen/operator sebelum memimpin mereka.',
      '4) Training Dojo khusus pemanen & operator (benchmark TAPG) serta modul teknis terukur seperti Pemupukan Presisi 4T, Ganoderma, dan Audit Oil Losses (benchmark FR Academy).',
      '5) Sistem K3 terintegrasi: Daily Morning OHS Briefing (FR) + Tim Inspektur Operational Golden Rules (AALI) + Pelaporan Insiden Smartphone & Triple Zero Targets (Bumitama) + CSMS Kontraktor (SMART).',
      '6) Social Project pemberdayaan desa sekitar kebun (benchmark TMTP TAPG) untuk membangun kecerdasan sosial asisten menghadapi dinamika masyarakat lokal.',
    ],
    referencedCompanies: ['First Resources', 'Astra Agro Lestari', 'Bumitama Agri', 'PT SMART Tbk / GAR', 'Triputra Agro Persada'],
  },
  {
    id: 'ci-10',
    number: '10',
    dimension: 'Rekomendasi Program Pembinaan Perusahaan Kelapa Sawit',
    headline: 'Arsitektur Program Pembinaan 6–9 Bulan Terintegrasi ("Sawit Future Planter & Mill Engineer Academy")',
    summary:
      'Menggabungkan praktik terbaik terverifikasi dari 5 grup sawit terbesar Indonesia menjadi satu cetak biru modular 5 fase yang siap diterapkan departemen HRD / Learning Center perusahaan kelapa sawit.',
    evidencePoints: [
      'Gunakan durasi total 6 bulan untuk jalur Pabrik/Traksi/Admin dan 6–9 bulan untuk jalur Agronomi Kebun (menyesuaikan siklus musiman pemeliharaan & panen).',
      'Terapkan porsi belajar mendekati 70% praktik lapangan terstruktur (Pra-OJT + Worker + Acting Supervisor), 20% mentoring/coaching aktif (Leader as Coach), dan 10% kelas/LMS intensif.',
      'Tetapkan gerbang evaluasi objektif pada tiap fase: uji kesamaptaan & disiplin, ujian teori SOP/K3, buku log praktik As a Worker, audit penurunan oil losses / mutu panen, serta sidang panel Improvement & Social Project.',
      'Lengkapi dengan tangga pasca-MT yang jelas: Supervisory (Tahun 1–2) → Manager (Tahun 3–5) → General Manager (adaptasi model ABMP/AFLP/AMMP & TSDP/TMDP/TGMDP) serta target minimal 12–16 jam pelatihan/karyawan/tahun (melampaui realisasi industri 8,7–15,8 jam pada 2024).',
    ],
    referencedCompanies: ['First Resources', 'Astra Agro Lestari', 'PT SMART Tbk / GAR', 'Bumitama Agri', 'Triputra Agro Persada'],
  },
];

export const RECOMMENDED_CORPORATE_PHASES: RecommendedCorporatePhase[] = [
  {
    phase: 'Fase 1',
    title: 'Pembinaan Fisik, Mental & Disiplin (Bintalsik / Kesamaptaan)',
    duration: '2 minggu (14–18 hari)',
    benchmarkCompanies: 'PT Astra Agro Lestari Tbk (Rindam ~18 hari) & PNLA Bumitama (Kodim)',
    activitiesAndMaterials:
      'Apel pagi disiplin, PBB, pembinaan kebugaran fisik, ketahanan mental, jiwa korsa, etika kerja site remote, dan induksi nilai perusahaan.',
    deliveryAndEvaluation:
      'Pelatihan berasrama bersama instruktur TNI/Rindam/Kodim; evaluasi kedisiplinan, kehadiran, kerja tim, dan ketahanan fisik.',
  },
  {
    phase: 'Fase 2',
    title: 'In-Class Foundation, Teknis Spesialis & K3L/Sustainability',
    duration: '6–8 minggu (1,5–2 bulan)',
    benchmarkCompanies: 'FR Academy (Kompetensi Umum/Teknis/Pendukung), PT SMART (ICT), Bumitama (PNLA)',
    activitiesAndMaterials:
      'Proses bisnis sawit seed-to-shelf, SOP teknis jalur (Agronomi 4T/HPT/Panen atau PKS Sterilisasi/Boiler/Oil Losses), SMK3/OGR/Karhutla/First Aid, ISPO/RSPO, serta modul The 7 Habits & PSDM.',
    deliveryAndEvaluation:
      'Kelas tatap muka & LMS e-learning, studi kasus data operasional, ujian teori komprehensif (passing grade ≥75) & simulasi P3K/Damkar.',
  },
  {
    phase: 'Fase 3',
    title: 'Pra-OJT & OJT Tahap 1: "As a Worker" (Genba & Training Dojo)',
    duration: '6–8 minggu (1,5–2 bulan)',
    benchmarkCompanies: 'PT Astra Agro Lestari (As a Worker), First Resources (Pra-OJT), TAPG (Training Dojo & Genba)',
    activitiesAndMaterials:
      'Terjun langsung mempraktikkan pekerjaan inti level operator/pemanen (panen TBS, pemupukan, perawatan gulma, atau operasi tiap stasiun PKS & bengkel), apel K3 pagi harian (daily OHS briefing).',
    deliveryAndEvaluation:
      'Buku log kerja harian, uji keterampilan teknis Dojo/stasiun, observasi kepatuhan APD/OGR oleh mentor lapangan.',
  },
  {
    phase: 'Fase 4',
    title: 'OJT Tahap 2: "Acting Supervisor", Rotasi & Improvement / Social Project',
    duration: '10–12 minggu (2,5–3 bulan)',
    benchmarkCompanies: 'Astra Agro (As a Supervisor), First Resources (70:20:10), TAPG (Social Project), SMART (Deliverables)',
    activitiesAndMaterials:
      'Memimpin apel pagi & supervisi mandor/operator, rotasi lintas afdeling atau lintas stasiun PKS, mengerjakan 1 Improvement Project terukur (mutu panen / efisiensi pupuk / tekan oil losses) dan 1 Social Project kemasyarakatan.',
    deliveryAndEvaluation:
      'Coaching & mentoring mingguan (Leader as Coach), penilaian KPI operasional unit, dan sidang panel manajemen untuk proyek perbaikan & sosial.',
  },
  {
    phase: 'Fase 5',
    title: 'Pengangkatan Definitif & Tangga Kepemimpinan Berkelanjutan',
    duration: 'Berkelanjutan (Target ≥12–16 jam/tahun)',
    benchmarkCompanies: 'Astra Agro (ABMP/AFLP/AMMP), Triputra (TSDP/TMDP/TGMDP/TEP), Bumitama (BCU)',
    activitiesAndMaterials:
      'Penetapan Individual Development Plan (IDP), penyegaran teknis tahunan (PIMS, TPM, Boiler, Pemupukan 4T), sertifikasi Ahli K3/operator, dan jenjang kepemimpinan Supervisory → Manager → GM.',
    deliveryAndEvaluation:
      'Evaluasi kinerja tahunan berbasis KPI & kompetensi, audit sertifikasi K3/ISPO, serta pencapaian jam pelatihan per level jabatan.',
  },
];
