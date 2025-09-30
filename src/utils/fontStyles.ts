import { FontStyle } from '../types/FontStyle';

// Unicode transformation functions
const toBold = (text: string): string => {
  const boldMap: { [key: string]: string } = {
    'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉',
    'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓',
    'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
    'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣',
    'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭',
    'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳'
  };
  return text.split('').map(char => boldMap[char] || char).join('');
};

const toItalic = (text: string): string => {
  const italicMap: { [key: string]: string } = {
    'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽',
    'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇',
    'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍',
    'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗',
    'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡',
    'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧'
  };
  return text.split('').map(char => italicMap[char] || char).join('');
};

const toBoldItalic = (text: string): string => {
  const boldItalicMap: { [key: string]: string } = {
    'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱',
    'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻',
    'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁',
    'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋',
    'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕',
    'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛'
  };
  return text.split('').map(char => boldItalicMap[char] || char).join('');
};

const toScript = (text: string): string => {
  const scriptMap: { [key: string]: string } = {
    'A': '𝒜', 'B': '𝒷', 'C': '𝒸', 'D': '𝒹', 'E': '𝑒', 'F': '𝒻', 'G': '𝑔', 'H': '𝒽', 'I': '𝒾', 'J': '𝒿',
    'K': '𝓀', 'L': '𝓁', 'M': '𝓂', 'N': '𝓃', 'O': '𝓄', 'P': '𝓅', 'Q': '𝓆', 'R': '𝓇', 'S': '𝓈', 'T': '𝓉',
    'U': '𝓊', 'V': '𝓋', 'W': '𝓌', 'X': '𝓍', 'Y': '𝓎', 'Z': '𝓏',
    'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
    'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝓄', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
    'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
  };
  return text.split('').map(char => scriptMap[char] || char).join('');
};

const toBoldScript = (text: string): string => {
  const boldScriptMap: { [key: string]: string } = {
    'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙',
    'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣',
    'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
    'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳',
    'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽',
    'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃'
  };
  return text.split('').map(char => boldScriptMap[char] || char).join('');
};

const toFraktur = (text: string): string => {
  const frakturMap: { [key: string]: string } = {
    'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍',
    'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗',
    'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ',
    'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧',
    'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱',
    'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷'
  };
  return text.split('').map(char => frakturMap[char] || char).join('');
};

const toDoubleStruck = (text: string): string => {
  const doubleStruckMap: { [key: string]: string } = {
    'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
    'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
    'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
    'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
    'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
    'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫'
  };
  return text.split('').map(char => doubleStruckMap[char] || char).join('');
};

const toMonospace = (text: string): string => {
  const monospaceMap: { [key: string]: string } = {
    'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹',
    'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃',
    'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
    'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓',
    'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝',
    'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣'
  };
  return text.split('').map(char => monospaceMap[char] || char).join('');
};

const toSansSerifBold = (text: string): string => {
  const sansSerifBoldMap: { [key: string]: string } = {
    'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝',
    'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧',
    'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
    'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷',
    'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁',
    'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇'
  };
  return text.split('').map(char => sansSerifBoldMap[char] || char).join('');
};

const toSmallCaps = (text: string): string => {
  const smallCapsMap: { [key: string]: string } = {
    'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ',
    'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 'ѕ', 'T': 'ᴛ',
    'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'х', 'Y': 'ʏ', 'Z': 'ᴢ',
    'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ',
    'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 'ѕ', 't': 'ᴛ',
    'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'х', 'y': 'ʏ', 'z': 'ᴢ'
  };
  return text.split('').map(char => smallCapsMap[char] || char).join('');
};

const toUpscript = (text: string): string => {
  const upscriptMap: { [key: string]: string } = {
    'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ',
    'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ',
    'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ',
    'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
    'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'q', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ',
    'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ'
  };
  return text.split('').map(char => upscriptMap[char] || char).join('');
};

const toSubscript = (text: string): string => {
  const subscriptMap: { [key: string]: string } = {
    'A': 'ₐ', 'B': 'ᵦ', 'C': 'ᶜ', 'D': 'ᵈ', 'E': 'ₑ', 'F': 'ᶠ', 'G': 'ᵍ', 'H': 'ₕ', 'I': 'ᵢ', 'J': 'ⱼ',
    'K': 'ₖ', 'L': 'ₗ', 'M': 'ₘ', 'N': 'ₙ', 'O': 'ₒ', 'P': 'ₚ', 'Q': 'Q', 'R': 'ᵣ', 'S': 'ₛ', 'T': 'ₜ',
    'U': 'ᵤ', 'V': 'ᵥ', 'W': 'w', 'X': 'ₓ', 'Y': 'Y', 'Z': 'Z',
    'a': 'ₐ', 'b': 'ᵦ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ₑ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
    'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'q': 'q', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ',
    'u': 'ᵤ', 'v': 'ᵥ', 'w': 'w', 'x': 'ₓ', 'y': 'y', 'z': 'z'
  };
  return text.split('').map(char => subscriptMap[char] || char).join('');
};

const toCircled = (text: string): string => {
  const circledMap: { [key: string]: string } = {
    'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ',
    'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ',
    'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
    'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
    'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
    'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ'
  };
  return text.split('').map(char => circledMap[char] || char).join('');
};

const toSquared = (text: string): string => {
  const squaredMap: { [key: string]: string } = {
    'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹',
    'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃',
    'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉',
    'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴', 'f': '🅵', 'g': '🅶', 'h': '🅷', 'i': '🅸', 'j': '🅹',
    'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽', 'o': '🅾', 'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃',
    'u': '🆄', 'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 'z': '🆉'
  };
  return text.split('').map(char => squaredMap[char] || char).join('');
};

const toNegativeCircled = (text: string): string => {
  const negativeCircledMap: { [key: string]: string } = {
    'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 'F': '🅕', 'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙',
    'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞', 'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣',
    'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨', 'Z': '🅩',
    'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔', 'f': '🅕', 'g': '🅖', 'h': '🅗', 'i': '🅘', 'j': '🅙',
    'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝', 'o': '🅞', 'p': '🅟', 'q': '🅠', 'r': '🅡', 's': '🅢', 't': '🅣',
    'u': '🅤', 'v': '🅥', 'w': '🅦', 'x': '🅧', 'y': '🅨', 'z': '🅩'
  };
  return text.split('').map(char => negativeCircledMap[char] || char).join('');
};

// Special decorative functions
const toWideText = (text: string): string => {
  return text.split('').join('　');
};

const toUpsideDown = (text: string): string => {
  const upsideDownMap: { [key: string]: string } = {
    'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖴ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ',
    'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'S', 'T': '┴',
    'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
    'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
    'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z'
  };
  return text.split('').map(char => upsideDownMap[char] || char).reverse().join('');
};

const addSpacing = (text: string, spacing: string): string => {
  return text.split('').join(spacing);
};

export const fontStyles: FontStyle[] = [
  // Bold Unicode variations
  { name: 'Mathematical Bold', category: 'Bold', transform: toBold },
  { name: 'Sans-Serif Bold', category: 'Bold', transform: toSansSerifBold },
  { name: 'Bold Fraktur', category: 'Bold', transform: (text) => toBoldScript(text), fontWeight: 'bold' },
  
  // Italic variations
  { name: 'Mathematical Italic', category: 'Italic', transform: toItalic },
  { name: 'Bold Italic', category: 'Italic', transform: toBoldItalic },
  
  // Script variations
  { name: 'Script', category: 'Script', transform: toScript },
  { name: 'Bold Script', category: 'Script', transform: toBoldScript },
  
  // Decorative variations
  { name: 'Fraktur', category: 'Decorative', transform: toFraktur },
  { name: 'Double-Struck', category: 'Decorative', transform: toDoubleStruck },
  { name: 'Monospace', category: 'Monospace', transform: toMonospace },
  
  // Special styles
  { name: 'Small Caps', category: 'Creative', transform: toSmallCaps },
  { name: 'Superscript', category: 'Creative', transform: toUpscript },
  { name: 'Subscript', category: 'Creative', transform: toSubscript },
  { name: 'Circled', category: 'Decorative', transform: toCircled },
  { name: 'Squared', category: 'Decorative', transform: toSquared },
  { name: 'Negative Circled', category: 'Decorative', transform: toNegativeCircled },
  
  // Spacing and effects
  { name: 'Wide Text', category: 'Creative', transform: toWideText },
  { name: 'Upside Down', category: 'Creative', transform: toUpsideDown },
  { name: 'Spaced Out', category: 'Creative', transform: (text) => addSpacing(text, ' ') },
  { name: 'Dotted Spacing', category: 'Creative', transform: (text) => addSpacing(text, '·') },
  { name: 'Star Spacing', category: 'Creative', transform: (text) => addSpacing(text, '★') },
  
  // CSS-based font styles
  { name: 'Ultra Bold', category: 'Bold', transform: (text) => text, fontWeight: '900' },
  { name: 'Heavy Weight', category: 'Bold', transform: (text) => text, fontWeight: '800' },
  { name: 'Bold Serif', category: 'Bold', transform: (text) => text, fontFamily: 'serif', fontWeight: 'bold' },
  { name: 'Bold Sans-Serif', category: 'Bold', transform: (text) => text, fontFamily: 'sans-serif', fontWeight: 'bold' },
  { name: 'Bold Italic Serif', category: 'Bold', transform: (text) => text, fontFamily: 'serif', fontWeight: 'bold', fontStyle: 'italic' },
  
  { name: 'Elegant Italic', category: 'Italic', transform: (text) => text, fontStyle: 'italic', fontFamily: 'serif' },
  { name: 'Modern Italic', category: 'Italic', transform: (text) => text, fontStyle: 'italic', fontFamily: 'sans-serif' },
  { name: 'Light Italic', category: 'Italic', transform: (text) => text, fontStyle: 'italic', fontWeight: '300' },
  
  { name: 'Code Style', category: 'Monospace', transform: (text) => text, fontFamily: 'monospace' },
  { name: 'Terminal', category: 'Monospace', transform: (text) => text, fontFamily: 'Courier New, monospace', color: '#00ff00' },
  { name: 'Bold Code', category: 'Monospace', transform: (text) => text, fontFamily: 'monospace', fontWeight: 'bold' },
  
  // Text effects with CSS
  { name: 'Shadow Bold', category: 'Bold', transform: (text) => text, fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' },
  { name: 'Glowing Text', category: 'Creative', transform: (text) => text, textShadow: '0 0 10px #ff6b6b, 0 0 20px #ff6b6b, 0 0 30px #ff6b6b' },
  { name: 'Neon Blue', category: 'Creative', transform: (text) => text, color: '#00ffff', textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
  { name: 'Fire Text', category: 'Creative', transform: (text) => text, color: '#ff4500', textShadow: '0 0 5px #ff4500, 0 0 10px #ff6500, 0 0 15px #ff8500' },
  { name: 'Ice Text', category: 'Creative', transform: (text) => text, color: '#87ceeb', textShadow: '0 0 5px #87ceeb, 0 0 10px #b0e0e6, 0 0 15px #e0f6ff' },
  
  { name: 'Underlined Bold', category: 'Bold', transform: (text) => text, fontWeight: 'bold', textDecoration: 'underline' },
  { name: 'Strike Through', category: 'Decorative', transform: (text) => text, textDecoration: 'line-through' },
  { name: 'Overline', category: 'Decorative', transform: (text) => text, textDecoration: 'overline' },
  
  // Gradient text effects
  { name: 'Purple Gradient', category: 'Creative', transform: (text) => text, background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)' },
  { name: 'Ocean Gradient', category: 'Creative', transform: (text) => text, background: 'linear-gradient(45deg, #2196F3 0%, #21CBF3 100%)' },
  { name: 'Sunset Gradient', category: 'Creative', transform: (text) => text, background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)' },
  { name: 'Forest Gradient', category: 'Creative', transform: (text) => text, background: 'linear-gradient(45deg, #56ab2f 0%, #a8e6cf 100%)' },
  { name: 'Gold Gradient', category: 'Creative', transform: (text) => text, background: 'linear-gradient(45deg, #f7971e 0%, #ffd200 100%)' },
  
  // Size variations
  { name: 'Large Bold', category: 'Bold', transform: (text) => text, fontWeight: 'bold', fontSize: '24px' },
  { name: 'Extra Large', category: 'Bold', transform: (text) => text, fontWeight: 'bold', fontSize: '28px' },
  { name: 'Small Caps Bold', category: 'Bold', transform: (text) => text.toUpperCase(), fontWeight: 'bold', fontSize: '14px' },
  
  // Color variations
  { name: 'Red Bold', category: 'Bold', transform: (text) => text, fontWeight: 'bold', color: '#dc3545' },
  { name: 'Blue Bold', category: 'Bold', transform: (text) => text, fontWeight: 'bold', color: '#007bff' },
  { name: 'Green Bold', category: 'Bold', transform: (text) => text, fontWeight: 'bold', color: '#28a745' },
  { name: 'Purple Bold', category: 'Bold', transform: (text) => text, fontWeight: 'bold', color: '#6f42c1' },
  { name: 'Orange Bold', category: 'Bold', transform: (text) => text, fontWeight: 'bold', color: '#fd7e14' },
  
  // Special Unicode decorations
  { name: 'Dotted Border', category: 'Decorative', transform: (text) => `·•°${text}°•·` },
  { name: 'Star Border', category: 'Decorative', transform: (text) => `★☆${text}☆★` },
  { name: 'Arrow Border', category: 'Decorative', transform: (text) => `→${text}←` },
  { name: 'Diamond Border', category: 'Decorative', transform: (text) => `◆${text}◆` },
  { name: 'Heart Border', category: 'Decorative', transform: (text) => `♡${text}♡` },
  { name: 'Crown Style', category: 'Decorative', transform: (text) => `♔${text}♔` },
  { name: 'Musical Notes', category: 'Decorative', transform: (text) => `♪${text}♪` },
  { name: 'Flower Border', category: 'Decorative', transform: (text) => `❀${text}❀` },
  { name: 'Lightning Style', category: 'Decorative', transform: (text) => `⚡${text}⚡` },
  { name: 'Sparkles', category: 'Decorative', transform: (text) => `✨${text}✨` }
];