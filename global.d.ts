declare module "*.json" {
  const value: JsonContent;
  export default value;
}

type JsonContent = 
  | LottieAnimationData
  | { [key: string]: any }  // For other JSON structures
  | any[];  // For JSON arrays

interface LottieAnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
  // Add other properties as needed
}
