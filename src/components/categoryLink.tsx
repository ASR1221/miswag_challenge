import Link from "next/link";

export default function categoryButton({ category, current }: { category: string, current: string }) {

   function fromatTitle(title: string) {
      const titleArr = title.split(" ");
      titleArr.forEach((t, i) => {
         const firstLetter = t.charAt(0)
         const firstLetterCap = firstLetter.toUpperCase()
         const remainingLetters = t.slice(1)
         titleArr[i] = firstLetterCap + remainingLetters
      });

      return titleArr.join(" ");
   }

   return <Link
      href={`/?category=${category}`}
      className={`w-[207px] py-4 rounded-[10px] text-base text-center ${current !== category ? "bg-bg-category-cell text-text-sub-header-color" : "bg-bg-category-cell-active text-text-sub-header-color-active shadow-category"}`}
   >{fromatTitle(category.replaceAll("-", " "))}</Link>
}