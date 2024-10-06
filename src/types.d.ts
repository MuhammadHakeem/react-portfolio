// Modules

declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  // https://nextjs.org/docs/pages/api-reference/components/image
  // Next.js's Image component data type
  const value: {
    src: string;
    height: number;
    width: number;s
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
  };
  export default value;
}

declare module '*.webm' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}
