# Images Folder

Place your background images here for the wedding website.

## Required Images

### Wedding Background
- **File name**: `wedding-bg.jpg` (or `.png`, `.webp`)
- **Recommended size**: 1920x1080px or larger (will be cropped/scaled as needed)
- **File format**: JPG, PNG, or WebP
- **Location**: This folder (`public/images/wedding-bg.jpg`)

### Reception Background
- **File name**: `reception-bg.jpg` (or `.png`, `.webp`)
- **Recommended size**: 1920x1080px or larger (will be cropped/scaled as needed)
- **File format**: JPG, PNG, or WebP
- **Location**: This folder (`public/images/reception-bg.jpg`)

## How to Add Your Images

1. **Prepare your images**:
   - Optimize images for web (use tools like TinyPNG or Squoosh)
   - Recommended: Use JPG for photos, WebP for better compression
   - Keep file sizes under 500KB for faster loading

2. **Rename and place images**:
   - Rename your wedding image to `wedding-bg.jpg`
   - Rename your reception image to `reception-bg.jpg`
   - Place both files in this folder: `public/images/`

3. **Update CSS** (in `public/styles.css`):
   
   For Wedding section (around line 211-213):
   ```css
   background: linear-gradient(...),
               url('images/wedding-bg.jpg');
   ```
   
   For Reception section (around line 230-232):
   ```css
   background: linear-gradient(...),
               url('images/reception-bg.jpg');
   ```

4. **Test locally**:
   - Run `npm run dev` to start local server
   - Verify images display correctly
   - Check mobile responsiveness

## Notes

- The overlay gradient (darkening effect) helps make white text readable over images
- You can adjust the gradient opacity in CSS if text is too hard/easy to read
- Images will automatically scale and crop to fit the container
- For best mobile performance, consider creating smaller versions for mobile devices
