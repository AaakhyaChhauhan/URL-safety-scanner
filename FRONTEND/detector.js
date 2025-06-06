function checkURL() {
    const url = document.getElementById("urlInput").value;
    let result = "URL seems safe ✅";
  
    // Heuristics
    if (url.length > 75) result = "Warning: Very long URL";
    if (url.includes("@")) result = "Warning: Contains '@' symbol";
    if (/https?:\/\/\d{1,3}/.test(url)) result = "Warning: Uses IP address";
    if (url.includes("-")) result = "Warning: Hyphenated domain (possible scam)";
    if (!url.startsWith("https://")) result = "Warning: Not using HTTPS";
  
    document.getElementById("result").innerText = result;
  }
  