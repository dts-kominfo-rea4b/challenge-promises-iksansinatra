const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const hasil = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()]);
    const hasilEmosi = hasil.flat().filter((movie) => movie.hasil === emosi);
    return hasilEmosi.length; 
  } catch (err) {
    console.log(err)
  }
};



module.exports = {
  promiseOutput,
};
