import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  heading: string;
  href?: string;
}

export default function OutlinedCard(props: CardProps) {
  return (
    <LinkBox className="flex flex-col bg-gray-800 bg-opacity-50 border border-gray-700 hover:border-blue-500 focus-within:border-blue-500 transition rounded-lg p-6 max-w-sm min-h-[200px] transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="font-bold mb-3 text-xl text-white">
        <LinkOverlay target={props.href ? "_blank" : undefined} href={props.href || "#"}>
          {props.heading}
        </LinkOverlay>
      </h3>
      <div className="text-gray-300 text-sm">{props.children}</div>
    </LinkBox>
  );
}
