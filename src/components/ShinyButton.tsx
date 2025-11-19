import ShinyButton from "@/components/ui/shiny-button";
import { Link } from "react-router-dom";

interface ShinyButtonProps {
  fulltext: string;
  shorttext: string;
  link: string;
}

export function ShinyButtonLink(props: ShinyButtonProps) {
  return (
    <a href={props.link} className=''>
      <ShinyButton >
        <span className="full-text">
          {props.fulltext}
        </span>
        <span className="short-text">
          {props.shorttext}
        </span>
      </ShinyButton>
    </a>
  );
}
 