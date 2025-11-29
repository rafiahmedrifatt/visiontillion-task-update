/**
 * Task 01: Email List Cleaner
 */
function cleanEmailList(rawEmails) {
  const normalized = rawEmails
    .filter(e => typeof e === "string")
    .map(e => e.toLowerCase())
    .filter(e => {
      if (!e.includes("@")) return false;
      const at = e.indexOf("@");
      const domain = e.slice(at + 1);
      return domain.includes(".");
    });
  return [...new Set(normalized)].sort((a, b) => a.localeCompare(b));
}
