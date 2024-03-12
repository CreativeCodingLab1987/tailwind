import plugin from "tailwindcss/plugin";

export default plugin(function ({addUtilities}) {
    const gradient = {
        ".custom-gradient": {
            backgroundImage: "linear-gradient(102deg, #204D60 0%, #1C3641 22.88%, #182124 56.55%)"
        },
        ".custom-gradient-two": {
            backgroundImage: "linear-gradient(45deg, #ffa078, #ff7f50)"
        }
    }

    addUtilities (gradient)
})