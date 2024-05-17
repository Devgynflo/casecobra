"use client";

import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

interface ConfigurePageProps {}

const ConfigurePage: NextPage<ConfigurePageProps> = ({}) => {
  const router = useRouter();
  const { toast } = useToast();

  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isPending, startTransition] = useTransition();

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      //console.log("🚀 ~ data:", data);
      const configId = data.serverData.configId;
      startTransition(() => {
        router.push(`/configure/design?id=${configId}`);
      });
    },
    onUploadProgress(p) {
      setUploadProgress(p);
    },
  });

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;
    setIsDragOver(false);
    toast({
      title: `${file.file.type} is not supported.`,
      description: "Please choose a PNG,JPG or JPEG image instead",
      variant: "destructive",
    });
  };
  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, {
      configId: undefined,
    });

    setIsDragOver(false);
  };

  return (
    <div
      className={cn(
        "relative my-16 flex h-full w-full flex-1 flex-col items-center justify-center rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10",
        isDragOver && "bg-blue-900/10 ring-blue-900/25",
      )}
    >
      <div className="relative flex w-full flex-1 flex-col items-center justify-center">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => {
            setIsDragOver(true);
          }}
          onDragLeave={() => {
            setIsDragOver(false);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="flex h-full w-full flex-1 flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />

              {isDragOver ? (
                <MousePointerSquareDashed className="mb-2 size-6 text-zinc-500" />
              ) : isUploading || isPending ? (
                <Loader2 className="mb-2 size-6 animate-spin text-zinc-500" />
              ) : (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image className="mb-2 size-8 text-zinc-500" />
              )}
              <div className="mb-2 flex flex-col justify-center text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>Téléchargement...</p>
                    <Progress
                      className="mt-2 h-2 w-40 bg-gray-300"
                      value={uploadProgress}
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>Redirection, patientez...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold">
                      Déposer un fichier à télécharger
                    </span>
                    à télécharger
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">
                      Cliquez pour télécharger
                    </span>{" "}
                    ou glisser-déposer
                  </p>
                )}
              </div>
              {!isPending && (
                <>
                  <p className="text-xs text-zinc-500">PNG, JPG,JPEG</p>
                  <p className="mt-2 text-xs text-red-500">Inférieur à 4MB</p>
                </>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default ConfigurePage;
