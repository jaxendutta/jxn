// src/styles/fonts.ts
import {
    Major_Mono_Display,
    Google_Sans_Flex,
    Google_Sans_Code,
    Libre_Baskerville,
    Baskervville_SC,
    Playfair_Display,
} from "next/font/google";
import localFont from "next/font/local";

export const mignova = localFont({
    src: '../../public/fonts/Mignova.ttf',
    variable: '--font-mignova',
    display: 'swap',
});

export const csDevious = localFont({
    src: '../../public/fonts/CSDevious/csdevious-regular.otf',
    variable: '--font-cs-devious',
    display: 'swap',
});

export const csDeviousItalic = localFont({
    src: '../../public/fonts/CSDevious/csdevious-italic.otf',
    variable: '--font-cs-devious-italic',
    display: 'swap',
});

export const csDeviousReverseItalic = localFont({
    src: '../../public/fonts/CSDevious/csdevious-reverseitalic.otf',
    variable: '--font-cs-devious-reverse-italic',
    display: 'swap',
});

export const csDeviousStippled = localFont({
    src: '../../public/fonts/CSDeviousStippled_demo.otf',
    variable: '--font-cs-devious-stippled',
    display: 'swap',
});

export const majorMono = Major_Mono_Display({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const googleSansFlex = Google_Sans_Flex({
    subsets: ["latin"],
    style: ['normal'],
    display: "swap",
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-google-sans-flex',
    fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
});

export const googleSansCode = Google_Sans_Code({
    subsets: ["latin"],
    style: ['normal'],
    display: "swap",
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-google-sans-code',
    fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
});

export const baskerville = Libre_Baskerville({
    subsets: ["latin"],
    style: ['normal', 'italic'],
    display: "swap",
    weight: ['400', '500', '600', '700'],
});

export const baskervilleSC = Baskervville_SC({
    subsets: ["latin"],
    style: ['normal'],
    display: "swap",
    weight: ['400', '500', '600', '700'],
});

export const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    style: ['normal', 'italic'],
    display: "swap",
    weight: ['400', '500', '600', '700'],
});

export const headingFont = majorMono.className;
export const displayFont = majorMono.className;
export const codeFont = googleSansCode.className;
export const sansFont = googleSansFlex.className;
export const serifFont = playfairDisplay.className;
export const serifSCFont = baskervilleSC.className;
export const csDeviousStippledFont = csDeviousStippled.className;
export const csDeviousFont = csDevious.className;
export const csDeviousItalicFont = csDeviousItalic.className;
export const csDeviousReverseItalicFont = csDeviousReverseItalic.className;
export const mignovaFont = mignova.className;

export const FALLBACK_GLYPHS: string[] = ["◌", "◍", "◎", "●", "◉", "⊙", "⌾", "⍟"];

export const CAPITAL_GLYPH_SETS: Record<string, string[]> = {
    A: ["Λ", "Δ", "Α", "∀", "⋀", "⌂", "ᚨ", "⍋"],
    B: ["ß", "฿", "β", "♭", "Ƀ", "ᛒ", "⊛", "⍰"],
    C: ["Ͼ", "Ͻ", "⋐", "∁", "ℂ", "ᚲ", "⍀", "◌"],
    D: ["Δ", "Ð", "∇", "⊡", "◈", "⌖", "ᛞ", "⎔"],
    E: ["Σ", "Ξ", "∑", "∃", "⋂", "⌘", "ᛖ", "⍬"],
    F: ["Ϝ", "Ŧ", "Ғ", "∫", "℉", "ᚠ", "⟊", "⍻"],
    G: ["ɢ", "ᚷ", "Ǥ", "⊃", "⌇", "⌓", "⍺", "⟆"],
    H: ["Η", "♓︎", "ᚺ", "⫶", "⋋", "⌗", "⍜", "⍿"],
    I: ["Ⅰ", "∣", "ɪ", "ᛁ", "⌶", "⟂", "⍳", "⎜"],
    J: ["ʝ", "ɟ", "ϳ", "⌡", "⎩", "ꓤ", "𐌹", "⟙"],
    K: ["Κ", "Ҝ", "ϰ", "⟟", "⌗", "ᛕ", "⍢", "⟊"],
    L: ["ᛚ", "⅃", "˥", "⊥", "⌞", "⟋", "⍀", "⟘"],
    M: ["Μ", "ℳ", "⩔", "⌂", "ᛖ", "⎔", "⍙", "⟡"],
    N: ["Π", "∩", "⋂", "∐", "⌘", "ᚾ", "⍬", "⎍"],
    O: ["Θ", "Φ", "⊙", "◉", "⌾", "ᛟ", "⍟", "◎"],
    P: ["Ρ", "Ƥ", "⍴", "℗", "ᚹ", "⎕", "⌭", "⟊"],
    Q: ["φ", "գ", "Ⴓ", "⍳", "◌", "ᛩ", "⍥", "⧖"],
    R: ["Я", "Ʀ", "ʁ", "ℜ", "ᚱ", "⍴", "⍶", "⎔"],
    S: ["§", "Ϟ", "ꜱ", "∫", "⟋", "ᛋ", "⍉", "⍢"],
    T: ["⊤", "Ŧ", "Τ", "†", "ᛏ", "⟂", "⍉", "⎊"],
    U: ["∪", "ʊ", "υ", "⋃", "ᚢ", "⌣", "⍱", "⍵"],
    V: ["∨", "⋁", "Ѵ", "√", "ᚡ", "⍀", "⟟", "⧈"],
    W: ["Ш", "Ѡ", "ɯ", "⩗", "ᚹ", "⍵", "⟆", "⧊"],
    X: ["Ж", "Χ", "Ж", "⊗", "✕", "⌖", "᛭", "⍼"],
    Y: ["Υ", "Ұ", "γ", "¥", "⅄", "ꝡ", "ᚣ", "⍦"],
    Z: ["Ƶ", "Ζ", "⋊", "⌯", "ᛎ", "⍉", "⟆", "⧉"],
};

export const LOWERCASE_GLYPH_SETS: Record<string, string[]> = {
    a: ["α", "ą", "ɑ", "∂", "ꞵ", "⍺", "ᚨ", "⌀"],
    b: ["β", "ƀ", "ϐ", "♭", "⌬", "Ƀ", "ᛒ", "⍭"],
    c: ["ς", "ç", "ɕ", "∁", "⋐", "ℂ", "ᚲ", "⍀"],
    d: ["ժ", "ḓ", "ɗ", "∂", "⟃", "ᚦ", "⍲", "⎔"],
    e: ["ε", "ə", "ɛ", "∃", "ϵ", "ℯ", "ᚱ", "⋿"],
    f: ["ƒ", "ғ", "ʄ", "∫", "ϝ", "ᚠ", "⟊", "⍻"],
    g: ["ɡ", "ɢ", "ց", "⊣", "ᚷ", "⌇", "⌓", "⍺"],
    h: ["һ", "ḥ", "հ", "♓︎", "ᚺ", "⫶", "⋋", "⍜"],
    i: ["ɩ", "ı", "ι", "∣", "ᛁ", "⌶", "⟂", "⍳"],
    j: ["ʝ", "ɟ", "ϳ", "⌡", "⎩", "ꓤ", "𐌹", "⟙"],
    k: ["κ", "ĸ", "ƙ", "⟟", "ᚴ", "⌗", "⍢", "⟊"],
    l: ["ⅼ", "ŀ", "ł", "∣", "ᛚ", "⌞", "⟋", "⍀"],
    m: ["ɱ", "ṃ", "ᵯ", "⌂", "ᛖ", "⎔", "⍙", "⟡"],
    n: ["η", "ñ", "ŋ", "∩", "⋂", "ℵ", "ᚾ", "⌁"],
    o: ["ο", "ɵ", "ø", "⊙", "◉", "⌾", "ᛟ", "⍟"],
    p: ["ρ", "ƥ", "ᵽ", "♇", "⍴", "ᚹ", "⎕", "⌭"],
    q: ["գ", "ɋ", "ʠ", "ϙ", "⍳", "ᛩ", "⍥", "⧖"],
    r: ["ɼ", "ɽ", "ř", "ℜ", "ᚱ", "⍴", "⍶", "⎔"],
    s: ["ѕ", "ş", "ʂ", "§", "ᛋ", "⍉", "⍢", "⟋"],
    t: ["τ", "ŧ", "ƭ", "†", "⊤", "⌶", "ᛏ", "⍊"],
    u: ["υ", "ü", "ų", "∪", "⋃", "ꞹ", "ᚢ", "⌣"],
    v: ["ν", "ṽ", "ʋ", "∨", "ᚡ", "⍀", "⟟", "⧈"],
    w: ["ω", "ŵ", "ẇ", "⩗", "ᚹ", "⍵", "⟆", "⧊"],
    x: ["×", "χ", "ж", "⊗", "✕", "⌖", "᛭", "⍼"],
    y: ["γ", "ɏ", "ʎ", "¥", "⅄", "ꝡ", "ᚣ", "⍦"],
    z: ["ʐ", "ž", "ʒ", "⋊", "ᛎ", "⍉", "⟆", "⧉"],
};

export const NUMBER_GLYPH_SETS: Record<string, string[]> = {
    "0": ["○", "◌", "◎", "●", "◉", "⊙", "⌾", "⍟"],
    "1": ["¹", "𝟙", "Ⅰ", "∣", "ᛁ", "⌶", "⟂", "⍳"],
    "2": ["²", "𝟚", "Ⅱ", "∶", "ᛔ", "⌭", "⎔", "⍥"],
    "3": ["³", "𝟛", "Ⅲ", "≡", "ᛩ", "⌬", "⍣", "⧖"],
    "4": ["⁴", "𝟜", "Ⅳ", "⊣", "ᛃ", "⌗", "⟟", "⧈"],
    "5": ["⁵", "𝟝", "Ⅴ", "⊥", "ᚠ", "⍊", "⍵", "⧊"],
    "6": ["⁶", "𝟞", "Ⅵ", "⊤", "ᛟ", "⎊", "⍟", "⧉"],
    "7": ["⁷", "𝟟", "Ⅶ", "⟂", "ᛋ", "⌖", "⍢", "⧙"],
    "8": ["⁸", "𝟠", "Ⅷ", "∞", "᛭", "⌾", "⍬", "⧗"],
    "9": ["⁹", "𝟡", "Ⅸ", "⧿", "ᛞ", "⍟", "⟡", "⧛"],
};

export const CYBERSIGIL_GLYPH_MAP: Record<string, string[]> = {
    ...CAPITAL_GLYPH_SETS,
    ...LOWERCASE_GLYPH_SETS,
    ...NUMBER_GLYPH_SETS,
    ".": ["·", "•", "◦", "⊙", "◉", "⌾", "⊛", "⍟"],
};

export function getGlyphs(char: string): string[] {
    return CYBERSIGIL_GLYPH_MAP[char] ?? FALLBACK_GLYPHS;
}
