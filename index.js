const scanButton = document.getElementById("scan-button");
const writeButton = document.getElementById("write-button");

scanButton.addEventListener("click", async () => {
  console.log("User clicked scan button");
  alert("User clicked scan button");

  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    console.log("> Scan started");
    alert("> Scan started");

    ndef.addEventListener("readingerror", () => {
      console.log("Argh! Cannot read data from the NFC tag. Try another one?");
      alert("Argh! Cannot read data from the NFC tag. Try another one?");
    });

    ndef.addEventListener("reading", ({ message, serialNumber }) => {
      console.log(`> Serial Number: ${serialNumber}`);
      alert(`> Serial Number: ${serialNumber}`);
      console.log(`> Records: (${message.records.length})`);
      alert(`> Records: (${message.records.length})`);
    });
  } catch (error) {
    console.log("Argh! " + error);
    alert("Argh! " + error);
  }
});

writeButton.addEventListener("click", async () => {
  console.log("User clicked write button");
  alert("User clicked write button");

  try {
    const ndef = new NDEFReader();
    await ndef.write("Hello world!");
    console.log("> Message written");
    alert("> Message written");
  } catch (error) {
    console.log("Argh! " + error);
    alert("Argh! " + error);
  }
});
