import { useState } from "react";
import { Image, Input } from "@nextui-org/react";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e: { target: { files: string | any[]; }; }) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage(undefined);
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center pt-14">
        <Input
          accept="image/*"
          type="file"
          onChange={() => imageChange}
        />

        {selectedImage && (
          <div className="my-14 flex flex-col">
            <Image
              src={URL.createObjectURL(selectedImage)}
              className="max-w-full max-h-80"
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} className="cursor-pointer p-4 bg-red-500 text-white border-none">
              Remove This Image
            </button>
          </div>
        )}
      </div>
    </>
  );
};


export default UploadImage;