const makeAnimObject = () => {
  let obj = {};
  for (let i = 0; i <= 100; i = i + 5) {
    obj[`${i}%`] = {
      clip: `rect(${Math.floor(Math.random() * 100)}px, 9999px, ${Math.floor(
        Math.random() * 100
      )}px, 0)`,
    };
  }
  return obj;
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
        body: ["Roboto", "Arial"],
        hand: ["Petit Formal Script", "sans-serif"],
      },
      backgroundImage: {
        me: "url('/images/me.jpg')",
      },
      keyframes: {
        gradientSwipe: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        animText: {
          "0%": {
            transform: "translateY(20px)",
            opacity: 0,
          },
          "25%, 75%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(-20px)",
            opacity: 0,
          },
        },
        noiseAnim: makeAnimObject(),
      },
      animation: {
        gradientSwipe: "gradientSwipe 3s ease-out infinite alternate",
        noise2sec: "noiseAnim 2s infinite linear alternate-reverse",
        noise3sec: "noiseAnim 3s infinite linear alternate-reverse",
        animText: "animText 3s ease 1s infinite",
      },
    },
  },
  plugins: [],
};
