## FIXME: Replace all dots

https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript

# Instructions: 
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.


# Solution
I put a `\` in front of the period to escape the character since it represents any single character in regexp. Then added the `g` flag after `/\./` since that means global match and finds all matches in the string. 