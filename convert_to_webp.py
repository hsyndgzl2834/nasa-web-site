from PIL import Image
import os

# Klasördeki .jpg ve .png dosyalarını .webp formatına dönüştür
input_dir = "images/"
output_dir = "images/"
os.makedirs(output_dir, exist_ok=True)

for file_name in os.listdir(input_dir):
    if file_name.lower().endswith(('.jpg', '.jpeg', '.png')):
        img_path = os.path.join(input_dir, file_name)
        img = Image.open(img_path).convert("RGB")

        webp_name = os.path.splitext(file_name)[0] + ".webp"
        webp_path = os.path.join(output_dir, webp_name)

        img.save(webp_path, "webp", quality=85)
        print(f"{file_name} -> {webp_name} dönüştürüldü.")

