import router from "@/router";

const keys = {
  masuk: {
    elektronik: [
      "tanggal_terima",
      "id_nadine",
      "tanggal_surat",
      "nomor_surat",
      "nama_pengirim",
      "perihal",
      "nama_wp",
      "disposisi",
      "keterangan",
      "file",
    ],
    fisik: [
      "tanggal_terima",
      "tanggal_surat",
      "nomor_surat",
      "nama_pengirim",
      "perihal",
      "nama_wp",
      "disposisi",
      "keterangan",
      "file",
    ],
  },
  keluar: {
    "alat-keterangan": [
      "nomor_surat",
      "tanggal_surat",
      "nama_wp",
      "npwp",
      "jenis_dokumen",
      "nilai_data",
      "nama_ar",
      "keterangan",
      "file",
    ],
    "berita-acara": [
      "nomor_surat",
      "tanggal_ba",
      "nama_wp",
      "npwp",
      "nama_ar",
      "keterangan",
      "file",
    ],
    "laporan-penelitian": [
      "nomor_surat",
      "tanggal_penelitian",
      "nama_wp",
      "npwp",
      "perihal",
      "nama_ar",
      "keterangan",
      "file",
    ],
    "laporan-pengurangan-pph": [
      "nomor_surat",
      "tanggal_surat",
      "nama_wp",
      "npwp",
      "perihal",
      "nama_ar",
      "keterangan",
      "file",
    ],
  },
};

export default function getSuratKeys(): any {
  const [first, second] = router.currentRoute.path.split("/").slice(-2);
  return keys[first][second];
}
