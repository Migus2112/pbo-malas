const AppConfig = (function () {
  let instance;
  let jumlahAkses = 0;

  function init() {
    console.log("Konfigurasi dibuat (hanya sekali)");
    const settings = { tema: "terang", bahasa: "id" };

    return {
      set(key, value) {
        settings[key] = value;
      },
      get(key) {
        return Object.prototype.hasOwnProperty.call(settings, key)
          ? settings[key]
          : "tidak ada";
      },
      getAll() {
        return Object.assign({}, settings);
      },
    };
  }

  return {
    getInstance() {
      jumlahAkses++;
      if (!instance) {
        instance = init();
      }
      return instance;
    },
    getJumlahAkses() {
      return jumlahAkses;
    },
  };
})();

console.log("Sebelum getInstance, jumlah akses:", AppConfig.getJumlahAkses());
const a = AppConfig.getInstance();
const b = AppConfig.getInstance();
console.log("a === b ?", a === b);

a.set("tema", "gelap");
b.set("fontSize", 14);
console.log(b.get("tema"));
console.log(a.get("warna"));

const salinan = a.getAll();
salinan.tema = "diubah-dari-luar";
console.log(a.getAll());
console.log("Jumlah akses:", AppConfig.getJumlahAkses());