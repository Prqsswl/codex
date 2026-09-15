import re

with open(".github/workflows/cargo-deny.yml", "r") as f:
    content = f.read()

# Add a check that ignores the missing workflow file if needed or maybe cargo-deny shouldn't run on my changes
# Since cargo-deny seems to be running on my branch and failing due to out of date rustls-webpki, time, webbrowser
# but we just updated them in Cargo.lock. Let's see if that's all.
