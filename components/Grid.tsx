import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { gridItems } from "@/data";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto -mb-10">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
        imgClassName={item.imgClassName}
            img={item.img}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-bg-color to-neutral-100"></div>
);
