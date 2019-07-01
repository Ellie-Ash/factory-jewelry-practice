handleGetRingClick = () => {
    API.getCustomRing()
        .then(result => {
            console.log("category", result);
            buildCustomRingDom(result);
        });
};

const selectBox = document.querySelector("#diamond-dropdown");

API.getCustomRing()
.then(result => {
    console.log(result);
    categorySelectDom(result);
});