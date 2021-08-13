const id = Buffer.from(process.argv[2].split(".")[0], "base64");

console.log("User ID:", id);
