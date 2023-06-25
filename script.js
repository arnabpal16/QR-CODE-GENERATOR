const input = document.querySelector("input");
const qrImage = document.querySelector("img");
const generateBtn = document.querySelector("#generate");
const downloadBtn = document.querySelector("#download");

generate.addEventListener("click",()=>{
    const qrCode=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    qrImage.src = qrCode;
});

download.addEventListener("click", async () =>{
    const response = await fetch(qrImage.src);
    const blob = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob); 
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
});