function generateItem() {
    const manufacturer = document.getElementById("manufacturer").value;
    const gauge = document.getElementById("gauge").value;
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const jamb_depth = document.getElementById("jamb_depth").value;
    const handing = document.getElementById("handing").value;
    const layout = document.getElementById("layout").value;

    const itemNumber = `${manufacturer}-${gauge}G-${width}${height}-${jamb_depth}JD-${handing}-${layout}`;
    console.log("Generated Item Number:", itemNumber);
    document.getElementById("itemNumberConfig").innerText = itemNumber;

    return itemNumber;
}

export { generateItem };