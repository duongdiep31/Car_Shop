module.exports = {
    purge: [
        './*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}