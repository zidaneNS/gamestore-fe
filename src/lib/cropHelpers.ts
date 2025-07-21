export function readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
  }
  
  export function getCroppedImageFile(
    imageSrc: string,
    pixelCrop: any,
    fileName: string,
    maxWidth = 800,
    maxHeight = 800
  ): Promise<File> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
  
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject();
  
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );
  
        canvas.toBlob((blob) => {
          if (!blob) return reject();
          const file = new File([blob], fileName, { type: 'image/png' });
          resolve(file);
        }, 'image/png');
      };
  
      image.onerror = reject;
    });
}  