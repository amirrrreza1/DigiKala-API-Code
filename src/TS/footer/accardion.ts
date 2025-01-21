const accardion = () => {
    const accardionBTNs = document.querySelectorAll(".accardionBTN");
    const accardionSVGs = document.querySelectorAll(".accardionSVG");
    const accardionShowMores = document.querySelectorAll(".accardionShowMore");

    accardionBTNs.forEach((accardionBTN, index) => {
        accardionBTN?.addEventListener("click", () => {
            accardionSVGs[index]?.classList.toggle("accardionTransiotion");
            accardionShowMores[index]?.classList.toggle("accardionShowMoreToggle");
        });
    });
}

export default accardion