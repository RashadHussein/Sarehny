import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, X, Image } from 'lucide-react'
import { cn } from '@/lib/utils'

const ImageUpload = ({ value, onChange, className, ...props }) => {
  const [preview, setPreview] = useState(null)

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      onChange(file)

      // Create preview URL
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }, [onChange])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
  })

  const removeImage = () => {
    onChange(null)
    setPreview(null)
  }

  return (
    <div className={cn("w-full", className)}>
      {preview ? (
        <div className="relative">
          <div className="relative w-full h-32 rounded-lg overflow-hidden border border-gray-300">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            {value?.name || 'صورة محددة'}
          </p>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer transition-colors hover:border-gray-400",
            isDragActive && "border-purple-500 bg-purple-50",
            className
          )}
        >
          <input {...getInputProps()} {...props} />
          <div className="flex flex-col items-center space-y-2">
            {isDragActive ? (
              <Upload className="h-8 w-8 text-purple-500" />
            ) : (
              <Image className="h-8 w-8 text-gray-400" />
            )}
            <div className="text-sm">
              {isDragActive ? (
                <p className="text-purple-600">أفلت الصورة هنا...</p>
              ) : (
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium text-purple-600 hover:text-purple-500">
                      اضغط لاختيار صورة
                    </span>{' '}
                    أو اسحب الصورة هنا
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PNG, JPG, WEBP (حد أقصى 5MB)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageUpload