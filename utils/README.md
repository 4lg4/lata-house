# UTILS scripts

## batch rename file
Used for batching renaming files after copying to the final folder

> arguments
```
-path    // full folde path
-preset  // string const with preset name (DJI_MIC)
-regex   // this argument takes overrides -preset if created
```

> hot to use
```bash
node utils/batch-rename-file.js -path="/Volumes/wd_elem_5t/audio/paula" -preset=DJI_MIC
```