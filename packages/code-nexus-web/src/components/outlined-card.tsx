import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  heading: string;
  href?: string;
}

export default function OutlinedCard(props: CardProps) {
  return (
    <LinkBox className="flex flex-col border border-solid rounded-md px-8 py-6 hover:border-white focus-within:border-white transition min-w-card w-32% min-h-card md:min-w-card-md">
      <h3 className=" font-bold mb-3 text-lg">
        <LinkOverlay target="_blank" href={props.href}>{props.heading}</LinkOverlay>
      </h3>
      <div className="text-sm">{props.children}</div>
    </LinkBox>
  );
}
