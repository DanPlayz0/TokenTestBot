const id = Buffer.from(process.argv[2].split(".")[0], "base64");

if (id === "mfa") throw "Using user tokens in the API is against ToS.";

console.log("User ID:", id);
