'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from 'react-dropzone';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

interface FilePreview {
  file: Blob
  preview: string
}

interface ImageUploadPlaceHolderProps {
  onImageUpload: (url: string) => void; 
}

export function ImageUploadPlaceHolder({ onImageUpload }: ImageUploadPlaceHolderProps) {
  const [file, setFile] = useState<FilePreview | null>(null)
  const [fileToSend, setFileToSend] = useState<{ path: string } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const onDrop = useCallback(async (acceptFiles: File[]) => {
    try {
      const file = acceptFiles[0]
      setFile({
        file,
        preview: URL.createObjectURL(file),
      })

      const supabase = createClientComponentClient()

      const { data, error } = await supabase.storage
        .from(process.env.NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_FOLDER)
        .upload(
          `${process.env.NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_TO_SEND}/${file.name}`, 
          file
        )

      if (error) {
        console.log("Erro no upload", error)
      } else {
        setFileToSend(data) 
        console.log("Arquivo enviado:", data)
      }
    } catch (error) {
      console.log("onDrop", error)
    }
  }, [])

  useEffect(() => {

    if (file && file.preview) {
      return () => URL.revokeObjectURL(file.preview)
    }
  }, [file])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 3,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg"],
    }
  })

  const handleImage = async () => {
    try {
      if (!fileToSend?.path) {
        console.log("Nenhum arquivo carregado ainda.")
        return
      }

      const supabase = createClientComponentClient()

      const { data, error } = await supabase.storage
        .from(process.env.NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_FOLDER)
        .getPublicUrl(fileToSend.path)

      if (error) {
        console.log("Erro ao obter URL pública", error)
      } else {
        console.log("Public URL:", data.publicUrl)
        onImageUpload(data.publicUrl); 
        setIsModalOpen(false); 
      }
    } catch (error) {
      console.log("handleImage", error)
    }
  }

  return (
    <div className="w-full flex h-[200px] shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        
      
        {file ? (
          <div className="flex w-48 relative">
            <img
              src={file.preview} 
              alt="Imagem do Pet"
              className="w-48 h-48 object-contain rounded-md"
            />
          </div>
        ) : (
          <>
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-10 w-10 text-muted-foreground"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="11" r="1" />
              <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
              <path d="M17 18.5a9 9 0 1 0-10 0" />
            </svg>

            <h3 className="mt-4 text-lg font-semibold">Adicione a foto do Pet</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">
              Você ainda não adicionou nenhuma. Clique abaixo para adicionar.
            </p>
          </>
        )}

       
        <Dialog open={isModalOpen} onOpenChange={(open) => setIsModalOpen(open)}>
          <DialogTrigger asChild>
           
            {!file && (
              <Button size="sm" className="relative" onClick={() => setIsModalOpen(true)}>
                Adicionar Foto
              </Button>
            )}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">Adicionar Foto</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {!file && (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Solte a foto aqui</p>
                  ) : (
                    <p className="flex items-center justify-center bg-blue-100 opacity-70 border border-dashed border-blue-300 p-6 h-36 rounded-md">
                      Arraste ou Clique para escolher a imagem...
                    </p>
                  )}
                </div>
              )}

              <div className="flex flex-col items-center justify-evenly sm:flex-row gap-2">
                {file && (
                  <div className="flex flex-row flex-wrap drop-shadow-md">
                    <div className="flex w-48 relative">
                      <img
                        src={file.preview} 
                        alt="Imagem do Pet"
                        className="w-48 h-48 object-contain rounded-md"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button className="rounded-full" onClick={handleImage}>Upload Imagem</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
