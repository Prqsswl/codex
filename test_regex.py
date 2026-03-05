import re

output = """Total output lines: 4420


token token
token token
token token
token token
token token
token token
to…15367 tokens truncated…n
token token
token token
token token
token token
token token
token token
"""

regex = r"(?s)^Total output lines: \d+\n+(token token \n){5,}.*…\d+ tokens truncated….*(token token \n){5,}$"

if re.match(regex, output):
    print("Matched!")
else:
    print("Did not match.")
