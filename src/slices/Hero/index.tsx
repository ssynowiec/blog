import { Content } from "@prismicio/client";
import {PrismicText, SliceComponentProps} from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";
import {RichText} from "@/components/RichText";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
      <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
        <PrismicNextImage field={slice.primary.image} sizes="100vw"/>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl">
            <PrismicText field={slice.primary.title}/>
          </h1>
          <RichText field={slice.primary.description}/>
        </div>
      </section>
  );
};

export default Hero;
