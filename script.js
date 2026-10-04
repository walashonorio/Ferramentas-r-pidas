from pathlib import Path

out = Path("/mnt/data/script.js")
out.write_text("""function calcPercent() {
  const percent = parseFloat(document.getElementById("percent").value);
  const base = parseFloat(document.getElementById("base").value);
  const result = document.getElementById("result");

  if (Number.isNaN(percent) || Number.isNaN(base)) {
    result.textContent = "Resultado: preencha os dois campos.";
    return;
  }

  const value = (percent / 100) * base;
  result.textContent = `Resultado: ${value}`;
}
""", encoding="utf-8")
print(out)
