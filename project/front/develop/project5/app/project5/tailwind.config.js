/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        30:"30px",
        50: "50px",
        72: "72px",
        120: "120px",
        168: "168px",
        172: "172px",
        326: "326px",
        327: "327px",
        375: "375px",
        640: "640px",
        768: "768px",
        1028: "1028px",
        1280: "1280px",
        1536: "1536px",
      },
      height: {
        15: "15px",
        21: "21px",
        30: "30px",
        67: "67px",
        120: "120px",
        172: "172px",
        200: "200px",
      },
      inset: {
        // 9: "9px"
        15: "15px",
        18: "18px",
        19: "19px",
        23: "23px",
        // 6: "24px"
        25: "25px",
        30: "30px",
        37: "37px",
        38: "38px",
        41: "41px",
        43: "43px",
        45: "45px",
        52: "52px",
        71: "71px",
        125: "125px",
        131: "131px",
        132: "132px",
        146: "146px",
        152: "152px",
        162: "162px",
        175: "175px",
        192: "192px",
        210: "210px",
        211: "211px",
        218: "218px",
        223: "223px",
        292: "292px",
        304: "304px",
        375: "375px",
        376: "376px",
        391: "391px",
        415: "415px",
        448: "448px",
        500: "500px",
        560: "560px",
        574: "574px",
        586: "586px",
        587: "587px",
        636: "636px",
        693: "693px",
        732: "732px",
      },
      fontSize: {
        10: ["10px","15px"],
        14: ["14px", "21px"],
        20: ["20px", "30px"],
        24: ["24px","36px"],
      },
      fontFamily: {
        original: ['Post No Bills Jaffna ExtraBold', "sans-serif"],
        nunito: ["nunito", "sans-serif"],
        zenKurenaido: ['Zen Kurenaido', 'sans-serif']
      },
    },
  },
  plugins: [],
}
