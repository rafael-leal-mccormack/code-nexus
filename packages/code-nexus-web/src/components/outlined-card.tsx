import { Link } from "@chakra-ui/next-js";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  heading: string;
}

export default function OutlinedCard(props: CardProps) {
  return (
    <LinkBox className="flex flex-col border border-solid rounded-md px-8 py-6 hover:border-white focus-within:border-white transition min-w-card w-32% min-h-card md:min-w-card-md">
      <h3>
        <LinkOverlay href="#">{props.heading}</LinkOverlay>
      </h3>
      <div>{props.children}</div>
    </LinkBox>
  );
}
