# Caesars Cipher


One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

The object is to write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. We shall not transform any non-alphabetic character (i.e. spaces, punctuation), but pass them on.

As an example rot13("SERR CVMMN!") should decode to the string FREE PIZZA!