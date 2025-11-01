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

## ⚠️ CRITICAL: Image Compression

### Why Compress?
30+ MB images are **way too large** for web use! They will cause:
- Very slow page loading (30+ seconds on mobile!)
- High data usage for visitors
- Poor user experience
- Lower search engine rankings

### Target Size
- **Goal**: 200-500 KB per image (about 100x smaller than 30 MB)
- **Total**: Both images together should be under 1 MB ideally

### How to Compress (Free Tools)

1. **TinyPNG** (https://tinypng.com) - **RECOMMENDED**
   - Drag and drop your images
   - Automatic compression
   - No quality loss visible
   - Easy to use

2. **Squoosh** (https://squoosh.app) - Google's tool
   - More control over compression
   - See before/after comparison
   - Adjust quality settings manually

3. **ImageOptim** - Desktop app (Mac only)
   - Drag and drop files
   - Automatic optimization

4. **GIMP** - Free image editor
   - Open image → Export As → Set quality to 75-85%

### Recommended Settings
- **Quality**: 75-85% (invisible quality loss, huge size reduction)
- **Max dimensions**: 1920x1080px or 2560x1440px (if you have high-res originals)
- **Format**: JPG (best compression for photos)
- **File size**: Aim for 200-500 KB per image

## How to Add Your Images

1. **Compress your images** first (see above)
   
2. **Rename and place images**:
   - Rename your compressed wedding image to `wedding-bg.jpg`
   - Rename your compressed reception image to `reception-bg.jpg`
   - Place both files in this folder: `public/images/`

3. **Verify file sizes**:
   - Both images should total under 1 MB
   - Check by right-clicking files → Properties

4. **Update CSS** (already done - just verify in `public/styles.css`):
   
   Wedding section should have:
   ```css
   background: linear-gradient(...), url('images/wedding-bg.jpg');
   ```
   
   Reception section should have:
   ```css
   background: linear-gradient(...), url('images/reception-bg.jpg');
   ```

5. **Test locally**:
   - Run `npm run dev` to start local server
   - Verify images load quickly
   - Check mobile responsiveness

## Notes

- The overlay gradient (darkening effect) helps make white text readable over images
- You can adjust the gradient opacity in CSS if text is too hard/easy to read
- Images will automatically scale and crop to fit the container
- Compressed images will load 50-100x faster than uncompressed ones!