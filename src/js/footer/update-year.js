export default function updateYear() {
    const copyrightYear = document.getElementById("year");

    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
};