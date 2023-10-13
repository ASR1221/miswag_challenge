import Image from "next/image";

import { DataSet } from "../types/dataset";

export default function ProductCard({ data }: { data: DataSet }) {

   function formatPrice(price: string) {
      const reversed = price.split("").reverse();
      const reversedWithComma: string[] = [];

      reversed.forEach((r, i) => {
         if (i > 0 && i % 3 === 0) {
            reversedWithComma.push(",");
         }
         reversedWithComma.push(r);
      });
      return reversedWithComma.reverse().join("");
   }

   const starNumber = Number(data.rating.split(".")[0])
   const stars = new Array(data.rating.includes(".") ? starNumber + 1 : starNumber).fill(0);

   return <div className="relative h-[365px] shadow-product py-2 px-6 rounded-[10px] cursor-pointer"> {/* This should be a link to the item */}
      <div className="w-fit mx-auto">
         <Image
            src={data.image}
            alt="item image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
            className="max-w-[200px]"
         />
      </div>
      <p className="line-clamp-2 text-text-header-color text-[20px] mt-2 font-medium">{data.title.EN}</p>{/* Because all the other data are in english. Otherwise thier are going to be a dynamic route for language*/}
      <div className="grid grid-cols-2 gap-1 items-center">
         <p className="text-text-sub-header-color text-[14px]">{data.brand}</p>
         <div className="flex">{
            stars.map((n, i) => <div key={i}>
               <div className="relative">
                  <Image
                     src="/star.svg" 
                     alt="Star Icon" width={15} height={12}
                  />
                  {data.rating.includes(".") && i === stars.length - 1 && <div className="absolute top-0 bottom-0 right-0 bg-bg-color" style={{ left: data.rating.includes(".") ? `${data.rating.split(".")[1]}0%` : "" }} />}
               </div>
            </div>)
         }</div>
      </div>
      <div className="absolute left-6 right-6 bottom-2">
         {
            data.price.original_value !== data.price.value &&
            <p className="text-text-sale-color line-through">{`${formatPrice(data.price.original_value)} ${data.price.currency}`}</p>
         }
         <div className="flex items-center justify-between">
            <p className="text-[20px] text-text-header-color font-medium">{`${formatPrice(data.price.value)} ${data.price.currency}`}</p>
            { data.colors && data.colors.length > 0 && <div className="flex h-4 ml-1">
               {data.colors[0] && <div style={{backgroundColor: data.colors[0]}} className="w-4 aspect-square rounded-full border-[1px] border-text-sub-header-color" />}
               {data.colors[1] && <div style={{backgroundColor: data.colors[1]}} className="-ml-2 w-4 aspect-square rounded-full border-[1px] border-text-sub-header-color" />}
               {data.colors[2] && <p style={{ backgroundColor: data.colors.length > 3 ? "white" : data.colors[2] }} className="-ml-2 w-4 aspect-square rounded-full border-[1px] border-text-sub-header-color text-[10px]" >{ data.colors.length > 3 ? `+${data.colors.length - 2}` : ""}</p>}
            </div>}
         </div>
      </div>
   </div>
}