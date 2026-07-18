## 2024-05-24 - Screen Reader Support for Countdown Overlays
**Learning:** For UI countdown timers that redirect users, dynamically updating the DOM alone does not ensure screen readers announce the ticks. Placing an `aria-live` region and syncing the timer string allows non-visual users to be aware of imminent page redirects.
**Action:** Always include a visually hidden `aria-live` element when a countdown occurs. Update its content in tandem with the visual timer, keeping pluralization correct.
