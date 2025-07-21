'use client';

import Cropper from 'react-easy-crop';
import { useState, useRef, useCallback } from 'react';
import { getCroppedImageFile, readFileAsDataURL } from '@/lib/cropHelpers';

export default function ImageCropperInput({
  name,
  title,
  aspect = 1,
  maxWidth = 800,
  maxHeight = 800,
}: {
  name: string;
  title: string;
  aspect?: number;
  maxWidth?: number;
  maxHeight?: number;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [croppedFile, setCroppedFile] = useState<File | null>(null);

  const handleFile = async (file: File) => {
    const imageDataUrl = await readFileAsDataURL(file);
    setImageSrc(imageDataUrl);
    setFileName(file.name);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await handleFile(e.target.files[0]);
    }
  };

  const handleCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = async () => {
    if (!imageSrc || !croppedAreaPixels || !fileName) return;
  
    const file = await getCroppedImageFile(
      imageSrc,
      croppedAreaPixels,
      fileName,
      maxWidth,
      maxHeight
    );
    setCroppedFile(file);
  
    // Set file ke input file hidden agar bisa disubmit
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    if (hiddenInputRef.current) {
      hiddenInputRef.current.files = dataTransfer.files;
    }
  
    // ✅ Sembunyikan cropper setelah crop
    setImageSrc(null);
  };
  

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <label className="font-semibold">{title}:</label>

      <div
        className="border border-dashed border-slate-500 p-6 text-center rounded-md bg-black/20 cursor-pointer"
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {fileName ? (
          <p>{fileName}</p>
        ) : (
          <p>Drag & Drop gambar di sini atau klik untuk pilih</p>
        )}
        <input
          type="file"
          accept="image/*"
          hidden
          ref={inputRef}
          onChange={handleInputChange}
        />
      </div>

      {imageSrc && (
        <div className="relative w-full h-64">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={handleCropComplete}
          />
        </div>
      )}

      {imageSrc && (
        <button
          type="button"
          onClick={handleCrop}
          className="bg-purple-500 text-white rounded-md py-2 hover:bg-purple-400"
        >
          Crop Gambar
        </button>
      )}
      {croppedFile && (
        <div className="mt-4">
          <p className="text-sm text-green-500">Crop berhasil! Preview:</p>
          <img
            src={URL.createObjectURL(croppedFile)}
            alt="Cropped Preview"
            className="mt-2 rounded-md max-h-48 object-contain border"
          />
        </div>
      )}

      {/* input hidden agar tetap bisa dikirim via form */}
      <input ref={hiddenInputRef} type="file" name={name} hidden />
    </div>
  );
}