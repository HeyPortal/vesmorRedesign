import {Button, buttonVariants } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { Slot } from "@radix-ui/react-slot";

interface ButtonOutlineProps {
    // children: React.ReactNode
    text: string;
    link: string;
}

export function ButtonOutline(props: ButtonOutlineProps) {
  return (
    <Link className={buttonVariants({ variant: "outline" })} to={"/hi"}>Click here</Link>
    // <Button variant="outline">Outline</Button>
  )

}
