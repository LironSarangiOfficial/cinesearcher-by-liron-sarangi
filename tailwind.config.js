module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        input :{
          border: {
            gray: "#dddddd"
          }
        },
        button : {
          font : {
            blue: "#4a90e2"
          }
        },
        main: {
          primary: "#f5f5f5",
        },
        history: {
          item:{
            inactive: "#E4E4F8",
            active: "#2f62ff",
          }
        },
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      color: ["active"],
    },
  },
  plugins: [],
}
