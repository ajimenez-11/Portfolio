# CV

Source of `public/Antonio_Jimenez_CV.pdf`. Edit `cv.html`, then regenerate the PDF:

```bash
google-chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/Antonio_Jimenez_CV.pdf "file://$PWD/cv/cv.html"
```
