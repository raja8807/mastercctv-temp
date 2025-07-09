import { Roboto as MainFont ,Cinzel,Lilita_One as HeadFont} from "next/font/google";
// import { Inder as Be_Vietnam_Pro } from "next/font/google";

const mainFont = MainFont({
  weight: ["100" , "300" , "400" , "500" , "700" , "900"],
  subsets: ["latin"],
});
const headFont = HeadFont({
  weight: ["400"],
  subsets: ["latin"],
});
const cinzel = Cinzel({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  MainFont: mainFont.className,
  HeadFont: headFont.className,
  Cinzel: cinzel.className,
};
export default fonts;
