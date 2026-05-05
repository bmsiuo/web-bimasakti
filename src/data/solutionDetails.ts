import {
  CreditCard, Server, Wallet, QrCode, Layers, Monitor, ArrowLeftRight,
  Zap, Shield, BarChart3, Globe, Settings, Clock, Users, Building2,
  CheckCircle, Smartphone, Database, Lock, TrendingUp, RefreshCw,
  FileText, Cpu, Network, Landmark, ShoppingCart, Briefcase, Banknote,
  type LucideIcon,
} from "lucide-react";

export interface SolutionDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  headline: string;
  headlineEn: string;
  subtitle: string;
  subtitleEn: string;
  ctaLabel: string;
  ctaLabelEn: string;
  highlights: { icon: LucideIcon; title: string; titleEn: string }[];
  overview: string;
  overviewEn: string;
  overviewPoints: { label: string; labelEn: string }[];
  benefits: { icon: LucideIcon; title: string; titleEn: string; desc: string; descEn: string }[];
  capabilities: { icon: LucideIcon; title: string; titleEn: string; desc: string; descEn: string }[];
  steps: { title: string; titleEn: string; desc: string; descEn: string }[];
  useCases: { icon: LucideIcon; label: string; labelEn: string }[];
  whyUs: { title: string; titleEn: string; desc: string; descEn: string }[];
}

export const solutionDetails: SolutionDetail[] = [
  {
    slug: "payment-gateway",
    icon: CreditCard,
    title: "Payment Gateway",
    headline: "Infrastruktur Penerimaan Pembayaran Digital yang Aman & Scalable",
    headlineEn: "Secure & Scalable Digital Payment Acceptance Infrastructure",
    subtitle: "Infrastruktur penerimaan pembayaran digital yang aman, scalable, dan siap mendukung pertumbuhan bisnis.",
    subtitleEn: "Secure, scalable digital payment infrastructure ready to support business growth.",
    ctaLabel: "Hubungi Kami",
    ctaLabelEn: "Contact Us",
    highlights: [
      { icon: Zap, title: "Single Integration", titleEn: "Single Integration" },
      { icon: TrendingUp, title: "Scalable Infrastructure", titleEn: "Scalable Infrastructure" },
      { icon: BarChart3, title: "Real-time Monitoring", titleEn: "Real-time Monitoring" },
      { icon: Shield, title: "Sistem Transaksi Aman", titleEn: "Secure Transaction System" },
    ],
    overview: "Payment Gateway Bimasakti menyediakan infrastruktur penerimaan pembayaran yang memungkinkan bisnis menerima berbagai metode pembayaran digital melalui satu integrasi yang terpusat. Dirancang untuk mendukung skala enterprise dengan keamanan dan keandalan tinggi.",
    overviewEn: "Bimasakti Payment Gateway provides payment acceptance infrastructure enabling businesses to accept various digital payment methods through a single centralized integration. Designed to support enterprise scale with high security and reliability.",
    overviewPoints: [
      { label: "Mendukung berbagai metode pembayaran", labelEn: "Supports multiple payment methods" },
      { label: "Integrasi terpusat & cepat", labelEn: "Centralized & fast integration" },
      { label: "Settlement otomatis", labelEn: "Automated settlement" },
      { label: "Dashboard monitoring real-time", labelEn: "Real-time monitoring dashboard" },
    ],
    benefits: [
      { icon: Settings, title: "Integrasi Mudah", titleEn: "Easy Integration", desc: "Satu koneksi API untuk semua metode pembayaran digital.", descEn: "Single API connection for all digital payment methods." },
      { icon: TrendingUp, title: "Skalabilitas Tinggi", titleEn: "High Scalability", desc: "Infrastruktur yang tumbuh bersama bisnis Anda.", descEn: "Infrastructure that grows with your business." },
      { icon: Shield, title: "Keamanan Enterprise", titleEn: "Enterprise Security", desc: "Standar keamanan tinggi untuk setiap transaksi.", descEn: "High security standards for every transaction." },
      { icon: BarChart3, title: "Kontrol Penuh", titleEn: "Full Control", desc: "Monitoring dan pelaporan transaksi secara real-time.", descEn: "Real-time transaction monitoring and reporting." },
    ],
    capabilities: [
      { icon: Cpu, title: "API & Host-to-Host", titleEn: "API & Host-to-Host", desc: "Integrasi fleksibel melalui REST API atau koneksi H2H.", descEn: "Flexible integration via REST API or H2H connection." },
      { icon: BarChart3, title: "Real-time Monitoring", titleEn: "Real-time Monitoring", desc: "Pantau transaksi dan performa secara langsung.", descEn: "Monitor transactions and performance in real time." },
      { icon: Banknote, title: "Centralized Settlement", titleEn: "Centralized Settlement", desc: "Rekonsiliasi dan settlement terpusat.", descEn: "Centralized reconciliation and settlement." },
      { icon: Lock, title: "Secure Processing", titleEn: "Secure Processing", desc: "Proses transaksi dengan enkripsi end-to-end.", descEn: "Transaction processing with end-to-end encryption." },
    ],
    steps: [
      { title: "Integrasi API", titleEn: "API Integration", desc: "Hubungkan sistem Anda melalui API gateway kami.", descEn: "Connect your system through our API gateway." },
      { title: "Konfigurasi", titleEn: "Configuration", desc: "Atur metode pembayaran dan parameter bisnis.", descEn: "Set up payment methods and business parameters." },
      { title: "Testing", titleEn: "Testing", desc: "Uji transaksi di environment sandbox.", descEn: "Test transactions in sandbox environment." },
      { title: "Go Live", titleEn: "Go Live", desc: "Aktifkan di production dengan monitoring penuh.", descEn: "Activate in production with full monitoring." },
    ],
    useCases: [
      { icon: ShoppingCart, label: "E-commerce", labelEn: "E-commerce" },
      { icon: Globe, label: "Platform Digital", labelEn: "Digital Platforms" },
      { icon: Briefcase, label: "Travel & Hospitality", labelEn: "Travel & Hospitality" },
      { icon: Building2, label: "Enterprise Billing", labelEn: "Enterprise Billing" },
    ],
    whyUs: [
      { title: "Infrastruktur Terbukti", titleEn: "Proven Infrastructure", desc: "Telah memproses jutaan transaksi untuk berbagai enterprise.", descEn: "Has processed millions of transactions for various enterprises." },
      { title: "Tim Teknis Berpengalaman", titleEn: "Experienced Technical Team", desc: "Dukungan integrasi dari tim yang memahami ekosistem pembayaran.", descEn: "Integration support from a team that understands the payment ecosystem." },
      { title: "SLA & Uptime Tinggi", titleEn: "High SLA & Uptime", desc: "Komitmen ketersediaan sistem dengan standar enterprise.", descEn: "System availability commitment with enterprise standards." },
    ],
  },
  {
    slug: "biller-aggregator",
    icon: Server,
    title: "Biller Aggregator",
    headline: "Satu Koneksi untuk Berbagai Layanan Pembayaran Tagihan & Produk Digital",
    headlineEn: "One Connection for Multiple Bill Payment & Digital Product Services",
    subtitle: "Satu koneksi untuk berbagai layanan pembayaran tagihan dan produk digital.",
    subtitleEn: "One connection for various bill payment services and digital products.",
    ctaLabel: "Hubungi Kami",
    ctaLabelEn: "Contact Us",
    highlights: [
      { icon: Globe, title: "Multi-Biller Integration", titleEn: "Multi-Biller Integration" },
      { icon: Zap, title: "Implementasi Cepat", titleEn: "Fast Implementation" },
      { icon: Banknote, title: "Settlement Terpusat", titleEn: "Centralized Settlement" },
      { icon: TrendingUp, title: "Ekspansi Layanan Scalable", titleEn: "Scalable Service Expansion" },
    ],
    overview: "Biller Aggregator memungkinkan partner mengakses berbagai layanan pembayaran seperti pulsa, paket data, listrik, PDAM, e-money dan produk digital lainnya melalui satu integrasi API. Solusi ini mempercepat go-to-market dan menyederhanakan operasional.",
    overviewEn: "Biller Aggregator enables partners to access various payment services like credits, data packages, electricity, water, e-money and other digital products through a single API integration. This solution accelerates go-to-market and simplifies operations.",
    overviewPoints: [
      { label: "Akses ratusan biller & produk digital", labelEn: "Access hundreds of billers & digital products" },
      { label: "Satu API untuk semua layanan", labelEn: "One API for all services" },
      { label: "Rekonsiliasi otomatis", labelEn: "Automated reconciliation" },
      { label: "Arsitektur fleksibel", labelEn: "Flexible architecture" },
    ],
    benefits: [
      { icon: Zap, title: "Go-to-Market Cepat", titleEn: "Fast Go-to-Market", desc: "Tidak perlu integrasi satu-per-satu ke setiap biller.", descEn: "No need to integrate one-by-one to each biller." },
      { icon: Settings, title: "Operasional Efisien", titleEn: "Efficient Operations", desc: "Settlement dan rekonsiliasi terpusat.", descEn: "Centralized settlement and reconciliation." },
      { icon: TrendingUp, title: "Skalabilitas", titleEn: "Scalability", desc: "Tambah layanan baru tanpa perubahan infrastruktur.", descEn: "Add new services without infrastructure changes." },
      { icon: Shield, title: "Keandalan Tinggi", titleEn: "High Reliability", desc: "Sistem processing real-time dengan uptime tinggi.", descEn: "Real-time processing system with high uptime." },
    ],
    capabilities: [
      { icon: Network, title: "Multi-Biller API", titleEn: "Multi-Biller API", desc: "Integrasi ke ratusan biller melalui satu endpoint.", descEn: "Integrate to hundreds of billers through one endpoint." },
      { icon: Zap, title: "Real-time Processing", titleEn: "Real-time Processing", desc: "Pemrosesan transaksi secara real-time.", descEn: "Real-time transaction processing." },
      { icon: FileText, title: "Sistem Rekonsiliasi", titleEn: "Reconciliation System", desc: "Rekonsiliasi otomatis untuk semua transaksi.", descEn: "Automated reconciliation for all transactions." },
      { icon: Cpu, title: "Arsitektur Fleksibel", titleEn: "Flexible Architecture", desc: "Mudah dikustomisasi sesuai kebutuhan bisnis.", descEn: "Easy to customize to business needs." },
    ],
    steps: [
      { title: "Registrasi Partner", titleEn: "Partner Registration", desc: "Daftar dan dapatkan akses API.", descEn: "Register and get API access." },
      { title: "Pilih Layanan", titleEn: "Select Services", desc: "Pilih biller dan produk yang dibutuhkan.", descEn: "Choose billers and products needed." },
      { title: "Integrasi API", titleEn: "API Integration", desc: "Hubungkan melalui satu API terpusat.", descEn: "Connect through a single centralized API." },
      { title: "Mulai Transaksi", titleEn: "Start Transacting", desc: "Proses transaksi dan monitor hasilnya.", descEn: "Process transactions and monitor results." },
    ],
    useCases: [
      { icon: ShoppingCart, label: "Digital Marketplace", labelEn: "Digital Marketplace" },
      { icon: Smartphone, label: "Aplikasi Fintech", labelEn: "Fintech Apps" },
      { icon: Server, label: "Server Pulsa", labelEn: "Credit Server" },
      { icon: Globe, label: "Super Apps", labelEn: "Super Apps" },
    ],
    whyUs: [
      { title: "Jaringan Biller Terluas", titleEn: "Widest Biller Network", desc: "Akses ke ratusan biller dan produk digital.", descEn: "Access to hundreds of billers and digital products." },
      { title: "Dukungan Teknis 24/7", titleEn: "24/7 Technical Support", desc: "Tim support siap membantu kapan saja.", descEn: "Support team ready to help anytime." },
      { title: "Infrastruktur Andal", titleEn: "Reliable Infrastructure", desc: "Uptime tinggi dengan sistem redundansi.", descEn: "High uptime with redundancy systems." },
    ],
  },
  {
    slug: "disbursement",
    icon: Wallet,
    title: "Disbursement",
    headline: "Solusi Pengiriman Dana Otomatis untuk Kebutuhan Operasional Bisnis",
    headlineEn: "Automated Fund Disbursement for Business Operational Needs",
    subtitle: "Solusi pengiriman dana otomatis untuk berbagai kebutuhan operasional bisnis.",
    subtitleEn: "Automated fund disbursement solution for various business operational needs.",
    ctaLabel: "Hubungi Kami",
    ctaLabelEn: "Contact Us",
    highlights: [
      { icon: RefreshCw, title: "Payout Otomatis", titleEn: "Automated Payout" },
      { icon: Users, title: "Bulk Transfer", titleEn: "Bulk Transfer" },
      { icon: Settings, title: "Integrasi Fleksibel", titleEn: "Flexible Integration" },
      { icon: BarChart3, title: "Real-time Monitoring", titleEn: "Real-time Monitoring" },
    ],
    overview: "Layanan Disbursement memungkinkan perusahaan melakukan pengiriman dana otomatis ke berbagai rekening bank dengan proses cepat dan aman. Ideal untuk payroll, pembayaran merchant, insentif, dan refund.",
    overviewEn: "Disbursement service enables companies to automatically send funds to various bank accounts quickly and securely. Ideal for payroll, merchant payments, incentives, and refunds.",
    overviewPoints: [
      { label: "Transfer ke semua bank di Indonesia", labelEn: "Transfer to all banks in Indonesia" },
      { label: "Proses batch & real-time", labelEn: "Batch & real-time processing" },
      { label: "Dashboard monitoring", labelEn: "Monitoring dashboard" },
      { label: "Pelaporan otomatis", labelEn: "Automated reporting" },
    ],
    benefits: [
      { icon: Zap, title: "Proses Cepat", titleEn: "Fast Processing", desc: "Pengiriman dana dalam hitungan detik.", descEn: "Fund transfer in seconds." },
      { icon: Users, title: "Bulk Transfer", titleEn: "Bulk Transfer", desc: "Kirim ke ribuan rekening dalam satu batch.", descEn: "Send to thousands of accounts in one batch." },
      { icon: Shield, title: "Keamanan Terjamin", titleEn: "Guaranteed Security", desc: "Enkripsi dan validasi di setiap transaksi.", descEn: "Encryption and validation in every transaction." },
      { icon: BarChart3, title: "Transparansi", titleEn: "Transparency", desc: "Status transaksi real-time dan pelaporan lengkap.", descEn: "Real-time transaction status and complete reporting." },
    ],
    capabilities: [
      { icon: Banknote, title: "Interbank Transfer", titleEn: "Interbank Transfer", desc: "Transfer ke semua bank dan e-wallet.", descEn: "Transfer to all banks and e-wallets." },
      { icon: Database, title: "Bulk Processing", titleEn: "Bulk Processing", desc: "Proses ribuan transaksi secara bersamaan.", descEn: "Process thousands of transactions simultaneously." },
      { icon: BarChart3, title: "Monitoring Dashboard", titleEn: "Monitoring Dashboard", desc: "Pantau status setiap pengiriman dana.", descEn: "Monitor the status of each fund transfer." },
      { icon: FileText, title: "Automated Reporting", titleEn: "Automated Reporting", desc: "Laporan otomatis harian, mingguan, dan bulanan.", descEn: "Automated daily, weekly, and monthly reports." },
    ],
    steps: [
      { title: "Upload Data", titleEn: "Upload Data", desc: "Siapkan data penerima dan jumlah transfer.", descEn: "Prepare recipient data and transfer amounts." },
      { title: "Validasi", titleEn: "Validation", desc: "Sistem memvalidasi rekening tujuan.", descEn: "System validates destination accounts." },
      { title: "Proses Transfer", titleEn: "Process Transfer", desc: "Dana dikirim secara otomatis.", descEn: "Funds are sent automatically." },
      { title: "Konfirmasi", titleEn: "Confirmation", desc: "Laporan status dikirim secara real-time.", descEn: "Status reports sent in real-time." },
    ],
    useCases: [
      { icon: Users, label: "Payroll", labelEn: "Payroll" },
      { icon: ShoppingCart, label: "Merchant Payout", labelEn: "Merchant Payout" },
      { icon: Banknote, label: "Insentif & Cashback", labelEn: "Incentives & Cashback" },
      { icon: RefreshCw, label: "Refund", labelEn: "Refund" },
    ],
    whyUs: [
      { title: "Koneksi Bank Terlengkap", titleEn: "Most Complete Bank Connections", desc: "Terhubung ke semua bank dan e-wallet di Indonesia.", descEn: "Connected to all banks and e-wallets in Indonesia." },
      { title: "Proses Cepat & Andal", titleEn: "Fast & Reliable Processing", desc: "SLA kecepatan transfer terbaik di industri.", descEn: "Best transfer speed SLA in the industry." },
      { title: "Keamanan Berlapis", titleEn: "Layered Security", desc: "Standar keamanan enterprise-grade.", descEn: "Enterprise-grade security standards." },
    ],
  },
  {
    slug: "qris-hub",
    icon: QrCode,
    title: "QRIS Hub",
    headline: "Mempercepat Konektivitas ke Ekosistem Pembayaran QRIS Nasional",
    headlineEn: "Accelerating Connectivity to the National QRIS Payment Ecosystem",
    subtitle: "Mempercepat konektivitas ke ekosistem pembayaran QRIS nasional.",
    subtitleEn: "Accelerating connectivity to the national QRIS payment ecosystem.",
    ctaLabel: "Hubungi Kami",
    ctaLabelEn: "Contact Us",
    highlights: [
      { icon: Zap, title: "Implementasi QRIS Cepat", titleEn: "Fast QRIS Implementation" },
      { icon: TrendingUp, title: "Infrastruktur Scalable", titleEn: "Scalable Infrastructure" },
      { icon: BarChart3, title: "Monitoring Terpusat", titleEn: "Centralized Monitoring" },
      { icon: Shield, title: "Compliance Terjamin", titleEn: "Guaranteed Compliance" },
    ],
    overview: "QRIS Hub menyediakan infrastruktur untuk menghubungkan institusi keuangan dan platform digital ke sistem QRIS dengan implementasi yang lebih efisien. Memungkinkan bank, BPR, dan fintech untuk bergabung ke ekosistem QRIS tanpa membangun infrastruktur sendiri.",
    overviewEn: "QRIS Hub provides infrastructure to connect financial institutions and digital platforms to the QRIS system with more efficient implementation. Enables banks, BPR, and fintech to join the QRIS ecosystem without building their own infrastructure.",
    overviewPoints: [
      { label: "Koneksi langsung ke sistem QRIS BI", labelEn: "Direct connection to BI QRIS system" },
      { label: "Settlement & rekonsiliasi otomatis", labelEn: "Automated settlement & reconciliation" },
      { label: "Monitoring transaksi real-time", labelEn: "Real-time transaction monitoring" },
      { label: "Compliant dengan regulasi BI", labelEn: "Compliant with BI regulations" },
    ],
    benefits: [
      { icon: Clock, title: "Time-to-Market Cepat", titleEn: "Fast Time-to-Market", desc: "Implementasi QRIS dalam waktu singkat.", descEn: "QRIS implementation in a short time." },
      { icon: Settings, title: "Efisiensi Operasional", titleEn: "Operational Efficiency", desc: "Tanpa perlu membangun infrastruktur QRIS sendiri.", descEn: "No need to build your own QRIS infrastructure." },
      { icon: Shield, title: "Regulatory Compliance", titleEn: "Regulatory Compliance", desc: "Sesuai dengan standar dan regulasi Bank Indonesia.", descEn: "Compliant with Bank Indonesia standards." },
      { icon: TrendingUp, title: "Skalabilitas", titleEn: "Scalability", desc: "Infrastruktur yang siap mendukung pertumbuhan transaksi.", descEn: "Infrastructure ready to support transaction growth." },
    ],
    capabilities: [
      { icon: Network, title: "QRIS Routing", titleEn: "QRIS Routing", desc: "Routing transaksi QRIS secara otomatis.", descEn: "Automatic QRIS transaction routing." },
      { icon: BarChart3, title: "Real-time Monitoring", titleEn: "Real-time Monitoring", desc: "Pantau performa dan transaksi secara langsung.", descEn: "Monitor performance and transactions in real time." },
      { icon: Banknote, title: "Settlement Management", titleEn: "Settlement Management", desc: "Manajemen settlement terpusat.", descEn: "Centralized settlement management." },
      { icon: Cpu, title: "Flexible Integration", titleEn: "Flexible Integration", desc: "Integrasi mudah dengan sistem existing.", descEn: "Easy integration with existing systems." },
    ],
    steps: [
      { title: "Onboarding", titleEn: "Onboarding", desc: "Registrasi dan konfigurasi awal.", descEn: "Registration and initial configuration." },
      { title: "Integrasi Sistem", titleEn: "System Integration", desc: "Koneksi ke infrastruktur QRIS Hub.", descEn: "Connection to QRIS Hub infrastructure." },
      { title: "Sertifikasi", titleEn: "Certification", desc: "Testing dan sertifikasi QRIS.", descEn: "QRIS testing and certification." },
      { title: "Go Live", titleEn: "Go Live", desc: "Mulai menerima pembayaran QRIS.", descEn: "Start accepting QRIS payments." },
    ],
    useCases: [
      { icon: Landmark, label: "Bank & BPR", labelEn: "Banks & BPR" },
      { icon: Smartphone, label: "Fintech", labelEn: "Fintech" },
      { icon: ShoppingCart, label: "Merchant Aggregator", labelEn: "Merchant Aggregator" },
      { icon: Building2, label: "Institusi Keuangan", labelEn: "Financial Institutions" },
    ],
    whyUs: [
      { title: "Partner Resmi QRIS", titleEn: "Official QRIS Partner", desc: "Terdaftar sebagai penyelenggara infrastruktur QRIS.", descEn: "Registered as QRIS infrastructure provider." },
      { title: "Pengalaman Integrasi", titleEn: "Integration Experience", desc: "Telah mengintegrasikan puluhan institusi keuangan.", descEn: "Has integrated dozens of financial institutions." },
      { title: "Dukungan End-to-End", titleEn: "End-to-End Support", desc: "Dari onboarding hingga go-live dan monitoring.", descEn: "From onboarding to go-live and monitoring." },
    ],
  },
  {
    slug: "xas",
    icon: Layers,
    title: "Xperience Apps Solution (XAS)",
    headline: "Mempercepat Pengembangan Fitur Digital pada Aplikasi",
    headlineEn: "Accelerating Digital Feature Development in Applications",
    subtitle: "Mempercepat pengembangan fitur digital pada aplikasi.",
    subtitleEn: "Accelerating digital feature development in applications.",
    ctaLabel: "Hubungi Kami",
    ctaLabelEn: "Contact Us",
    highlights: [
      { icon: Zap, title: "Faster Time-to-Market", titleEn: "Faster Time-to-Market" },
      { icon: Settings, title: "Reduced Dev Effort", titleEn: "Reduced Dev Effort" },
      { icon: Layers, title: "Integrasi Modular", titleEn: "Modular Integration" },
      { icon: TrendingUp, title: "Arsitektur Scalable", titleEn: "Scalable Architecture" },
    ],
    overview: "XAS memungkinkan partner menambahkan berbagai layanan digital seperti pembayaran tagihan dan produk digital tanpa harus membangun sistem dari awal. Cocok untuk mobile banking, aplikasi pemerintah, dan super apps yang ingin memperkaya fitur.",
    overviewEn: "XAS enables partners to add various digital services like bill payments and digital products without building systems from scratch. Suitable for mobile banking, government apps, and super apps wanting to enrich features.",
    overviewPoints: [
      { label: "Plug-and-play digital services", labelEn: "Plug-and-play digital services" },
      { label: "Tidak perlu develop dari nol", labelEn: "No need to develop from scratch" },
      { label: "Modular & customizable", labelEn: "Modular & customizable" },
      { label: "Scalable untuk pertumbuhan", labelEn: "Scalable for growth" },
    ],
    benefits: [
      { icon: Zap, title: "Time-to-Market", titleEn: "Time-to-Market", desc: "Luncurkan fitur baru dalam waktu singkat.", descEn: "Launch new features in a short time." },
      { icon: Banknote, title: "Hemat Biaya Pengembangan", titleEn: "Save Development Cost", desc: "Kurangi biaya dan effort pengembangan internal.", descEn: "Reduce internal development cost and effort." },
      { icon: Layers, title: "Modular", titleEn: "Modular", desc: "Pilih dan aktifkan layanan sesuai kebutuhan.", descEn: "Choose and activate services as needed." },
      { icon: TrendingUp, title: "Skalabilitas", titleEn: "Scalability", desc: "Infrastruktur yang siap tumbuh bersama bisnis.", descEn: "Infrastructure ready to grow with your business." },
    ],
    capabilities: [
      { icon: Cpu, title: "API Integration", titleEn: "API Integration", desc: "Integrasi cepat melalui API yang well-documented.", descEn: "Fast integration through well-documented APIs." },
      { icon: Layers, title: "Modular Services", titleEn: "Modular Services", desc: "Layanan yang bisa dipilih dan dikombinasikan.", descEn: "Services that can be selected and combined." },
      { icon: TrendingUp, title: "Scalable Architecture", titleEn: "Scalable Architecture", desc: "Arsitektur yang mendukung pertumbuhan volume.", descEn: "Architecture that supports volume growth." },
      { icon: Shield, title: "Secure Framework", titleEn: "Secure Framework", desc: "Framework dengan standar keamanan enterprise.", descEn: "Framework with enterprise security standards." },
    ],
    steps: [
      { title: "Konsultasi", titleEn: "Consultation", desc: "Diskusi kebutuhan fitur dan layanan.", descEn: "Discuss feature and service requirements." },
      { title: "Pilih Modul", titleEn: "Select Modules", desc: "Pilih layanan digital yang dibutuhkan.", descEn: "Choose the digital services needed." },
      { title: "Integrasi", titleEn: "Integration", desc: "Tim kami membantu proses integrasi.", descEn: "Our team assists the integration process." },
      { title: "Aktivasi", titleEn: "Activation", desc: "Fitur siap digunakan oleh end user.", descEn: "Features ready to be used by end users." },
    ],
    useCases: [
      { icon: Smartphone, label: "Mobile Banking", labelEn: "Mobile Banking" },
      { icon: Building2, label: "Aplikasi Pemerintah", labelEn: "Government Apps" },
      { icon: Globe, label: "Super Apps", labelEn: "Super Apps" },
      { icon: Briefcase, label: "Corporate Apps", labelEn: "Corporate Apps" },
    ],
    whyUs: [
      { title: "Ekosistem Layanan Lengkap", titleEn: "Complete Service Ecosystem", desc: "Ratusan layanan digital siap diintegrasikan.", descEn: "Hundreds of digital services ready to integrate." },
      { title: "Pengalaman Enterprise", titleEn: "Enterprise Experience", desc: "Telah dipercaya oleh institusi besar.", descEn: "Trusted by large institutions." },
      { title: "Dukungan Integrasi Penuh", titleEn: "Full Integration Support", desc: "Tim teknis siap mendampingi dari awal hingga go-live.", descEn: "Technical team ready to support from start to go-live." },
    ],
  },
  {
    slug: "mini-atm",
    icon: Monitor,
    title: "Mini ATM",
    headline: "Memperluas Akses Layanan Transaksi Melalui Perangkat Digital",
    headlineEn: "Expanding Transaction Service Access Through Digital Devices",
    subtitle: "Memperluas akses layanan transaksi melalui perangkat digital.",
    subtitleEn: "Expanding access to transaction services through digital devices.",
    ctaLabel: "Hubungi Kami",
    ctaLabelEn: "Contact Us",
    highlights: [
      { icon: Globe, title: "Distribusi Layanan Luas", titleEn: "Wide Service Distribution" },
      { icon: Users, title: "Model Keagenan", titleEn: "Agent-based Model" },
      { icon: Cpu, title: "Backend Terpusat", titleEn: "Centralized Backend" },
      { icon: Shield, title: "Transaksi Aman", titleEn: "Secure Transactions" },
    ],
    overview: "Mini ATM memungkinkan berbagai layanan keuangan seperti cek saldo, transfer dana, dan pembayaran tagihan diakses melalui jaringan agen. Solusi ini mendukung inklusi keuangan dengan memperluas jangkauan layanan perbankan ke area yang belum terlayani.",
    overviewEn: "Mini ATM enables various financial services like balance checks, fund transfers, and bill payments to be accessed through an agent network. This solution supports financial inclusion by extending banking services to underserved areas.",
    overviewPoints: [
      { label: "Layanan perbankan melalui agen", labelEn: "Banking services through agents" },
      { label: "Jangkauan ke area terpencil", labelEn: "Reach to remote areas" },
      { label: "Transaksi real-time", labelEn: "Real-time transactions" },
      { label: "Mendukung inklusi keuangan", labelEn: "Supports financial inclusion" },
    ],
    benefits: [
      { icon: Globe, title: "Jangkauan Luas", titleEn: "Wide Reach", desc: "Perluas layanan ke area yang tidak terjangkau ATM.", descEn: "Extend services to areas not reached by ATMs." },
      { icon: Banknote, title: "Biaya Efisien", titleEn: "Cost Efficient", desc: "Biaya operasional lebih rendah dari ATM konvensional.", descEn: "Lower operational costs than conventional ATMs." },
      { icon: Users, title: "Ekosistem Agen", titleEn: "Agent Ecosystem", desc: "Manfaatkan jaringan agen yang sudah ada.", descEn: "Leverage existing agent networks." },
      { icon: Shield, title: "Keamanan", titleEn: "Security", desc: "Transaksi aman dengan autentikasi berlapis.", descEn: "Secure transactions with multi-layer authentication." },
    ],
    capabilities: [
      { icon: BarChart3, title: "Cek Saldo", titleEn: "Balance Inquiry", desc: "Cek saldo rekening secara real-time.", descEn: "Check account balance in real-time." },
      { icon: Banknote, title: "Transfer Dana", titleEn: "Fund Transfer", desc: "Transfer antar bank melalui perangkat agen.", descEn: "Interbank transfer through agent devices." },
      { icon: FileText, title: "PPOB Services", titleEn: "PPOB Services", desc: "Pembayaran tagihan rutin.", descEn: "Routine bill payments." },
      { icon: Zap, title: "Real-time Processing", titleEn: "Real-time Processing", desc: "Pemrosesan transaksi secara instan.", descEn: "Instant transaction processing." },
    ],
    steps: [
      { title: "Registrasi Agen", titleEn: "Agent Registration", desc: "Daftarkan agen ke dalam jaringan.", descEn: "Register agents into the network." },
      { title: "Setup Perangkat", titleEn: "Device Setup", desc: "Konfigurasi perangkat Mini ATM.", descEn: "Configure Mini ATM devices." },
      { title: "Pelatihan", titleEn: "Training", desc: "Training operasional untuk agen.", descEn: "Operational training for agents." },
      { title: "Mulai Layanan", titleEn: "Start Service", desc: "Agen siap melayani transaksi.", descEn: "Agents ready to serve transactions." },
    ],
    useCases: [
      { icon: Landmark, label: "Bank Agents", labelEn: "Bank Agents" },
      { icon: Building2, label: "BPR", labelEn: "BPR" },
      { icon: ShoppingCart, label: "Jaringan Retail", labelEn: "Retail Networks" },
      { icon: Globe, label: "Area Pedesaan", labelEn: "Rural Areas" },
    ],
    whyUs: [
      { title: "Jaringan Agen Terbesar", titleEn: "Largest Agent Network", desc: "Ratusan ribu agen tersebar di seluruh Indonesia.", descEn: "Hundreds of thousands of agents across Indonesia." },
      { title: "Teknologi Teruji", titleEn: "Proven Technology", desc: "Platform yang telah memproses jutaan transaksi.", descEn: "Platform that has processed millions of transactions." },
      { title: "Dukungan Operasional", titleEn: "Operational Support", desc: "Tim support yang siap membantu agen.", descEn: "Support team ready to assist agents." },
    ],
  },
  {
    slug: "remittance",
    icon: ArrowLeftRight,
    title: "Remittance",
    headline: "Solusi Pengiriman Dana yang Aman dan Terintegrasi",
    headlineEn: "Secure and Integrated Fund Transfer Solution",
    subtitle: "Solusi pengiriman dana yang aman dan terintegrasi.",
    subtitleEn: "Secure and integrated fund transfer solution.",
    ctaLabel: "Hubungi Kami",
    ctaLabelEn: "Contact Us",
    highlights: [
      { icon: Zap, title: "Transfer Cepat", titleEn: "Fast Transfer" },
      { icon: Shield, title: "Infrastruktur Aman", titleEn: "Secure Infrastructure" },
      { icon: TrendingUp, title: "Sistem Scalable", titleEn: "Scalable System" },
      { icon: BarChart3, title: "Monitoring Transparan", titleEn: "Transparent Monitoring" },
    ],
    overview: "Remittance menyediakan sistem pengiriman dana yang memungkinkan transfer antar wilayah dengan monitoring transaksi yang transparan. Dirancang untuk mendukung transfer domestik melalui berbagai channel distribusi.",
    overviewEn: "Remittance provides a fund transfer system enabling inter-regional transfers with transparent transaction monitoring. Designed to support domestic transfers through various distribution channels.",
    overviewPoints: [
      { label: "Transfer domestik antar wilayah", labelEn: "Domestic inter-regional transfers" },
      { label: "Monitoring transparan", labelEn: "Transparent monitoring" },
      { label: "Multi-channel distribusi", labelEn: "Multi-channel distribution" },
      { label: "Rekonsiliasi otomatis", labelEn: "Automated reconciliation" },
    ],
    benefits: [
      { icon: Zap, title: "Kecepatan", titleEn: "Speed", desc: "Transfer dana dalam hitungan menit.", descEn: "Fund transfer in minutes." },
      { icon: Shield, title: "Keamanan", titleEn: "Security", desc: "Infrastruktur aman dengan enkripsi end-to-end.", descEn: "Secure infrastructure with end-to-end encryption." },
      { icon: Globe, title: "Jangkauan Luas", titleEn: "Wide Reach", desc: "Kirim ke berbagai wilayah di Indonesia.", descEn: "Send to various regions in Indonesia." },
      { icon: BarChart3, title: "Transparansi", titleEn: "Transparency", desc: "Tracking dan monitoring transaksi real-time.", descEn: "Real-time transaction tracking and monitoring." },
    ],
    capabilities: [
      { icon: Network, title: "Integrated Transfer", titleEn: "Integrated Transfer", desc: "Sistem transfer terintegrasi antar wilayah.", descEn: "Integrated inter-regional transfer system." },
      { icon: BarChart3, title: "Real-time Monitoring", titleEn: "Real-time Monitoring", desc: "Pantau status transfer secara langsung.", descEn: "Monitor transfer status in real time." },
      { icon: FileText, title: "Reconciliation", titleEn: "Reconciliation", desc: "Rekonsiliasi otomatis untuk semua transaksi.", descEn: "Automated reconciliation for all transactions." },
      { icon: Shield, title: "Secure System", titleEn: "Secure System", desc: "Keamanan berlapis untuk setiap transaksi.", descEn: "Multi-layered security for every transaction." },
    ],
    steps: [
      { title: "Inisiasi Transfer", titleEn: "Initiate Transfer", desc: "Pengirim menginput data penerima.", descEn: "Sender inputs recipient data." },
      { title: "Verifikasi", titleEn: "Verification", desc: "Sistem memvalidasi data transaksi.", descEn: "System validates transaction data." },
      { title: "Proses Pengiriman", titleEn: "Process Transfer", desc: "Dana diproses melalui sistem terintegrasi.", descEn: "Funds processed through integrated system." },
      { title: "Konfirmasi", titleEn: "Confirmation", desc: "Penerima mendapat notifikasi dan dana.", descEn: "Recipient receives notification and funds." },
    ],
    useCases: [
      { icon: Banknote, label: "Remitansi Domestik", labelEn: "Domestic Remittance" },
      { icon: Building2, label: "Transfer Institusional", labelEn: "Institutional Transfers" },
      { icon: Users, label: "Agen Transfer", labelEn: "Transfer Agents" },
      { icon: Globe, label: "Multi-channel", labelEn: "Multi-channel" },
    ],
    whyUs: [
      { title: "Jaringan Distribusi Luas", titleEn: "Wide Distribution Network", desc: "Terhubung ke jaringan agen dan mitra di seluruh Indonesia.", descEn: "Connected to agent and partner networks across Indonesia." },
      { title: "Infrastruktur Andal", titleEn: "Reliable Infrastructure", desc: "Sistem dengan uptime tinggi dan proses cepat.", descEn: "System with high uptime and fast processing." },
      { title: "Dukungan Regulasi", titleEn: "Regulatory Support", desc: "Sesuai dengan regulasi transfer dana yang berlaku.", descEn: "Compliant with applicable fund transfer regulations." },
    ],
  },
];

export function getSolutionBySlug(slug: string): SolutionDetail | undefined {
  return solutionDetails.find((s) => s.slug === slug);
}

export function getRelatedSolutions(currentSlug: string): SolutionDetail[] {
  return solutionDetails.filter((s) => s.slug !== currentSlug).slice(0, 3);
}
