function firstWord(s) {
  // Trim any leading or trailing whitespace
  s = s.trim();
  
  // Find the index of the first space
  const firstSpaceIndex = s.indexOf(' ');

  if (firstSpaceIndex === -1) {
    return s;
  }

  return s.substring(0, firstSpaceIndex);
}

const s = prompt("Enter String:");
alert(firstWord(s));
