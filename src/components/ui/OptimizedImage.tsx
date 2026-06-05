import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends ImageProps {
  wrapperClassName?: string;
}

export default function OptimizedImage({
  className,
  wrapperClassName,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-slate-900 rounded-lg", wrapperClassName)}>
      <Image
        className={cn("transition-all duration-500 ease-in-out", className)}
        alt={alt}
        {...props}
      />
    </div>
  );
}
